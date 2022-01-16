import { createClient } from 'redis';
import { promisify } from 'util';
import { express } from 'express';
import kue from 'kue';

const port = 1245;
const app = express();

const queue = kue.createQueue();

const client = createClient();
const getAsync = promisify(client.get).bind(client);

async function reserveSeat(number) {
  await client.set('available_seats', number);
}

async function getCurrentAvailableSeats() {
  return await getAsync('available_seats');
}

reserveSeat(50);
let reservationEnabled = true;

app.listen(port, () => console.log('Express server is running !'));

app.get('/avilable_seats', (req, res) => {
  res.send({ numberOfAvailableSeats: await getCurrentAvailableSeats() });
});

app.get('/reserve_seat', (req, res) => {
  if (reservationEnabled) {
    const job = queue.create('reserve_seat').save((err) => {
      if (err) res.send({ status: 'Reservation failed' });
      else res.send({ status: 'Reservation in process' });
    });

    job
      .on('complete', (res) => console.log(`Seat reservation job ${job.id} completed`))
      .on('failed', (err) => console.log(`Seat reservation job ${job.id} failed: ${err}`));
  } else res.send({ status: 'Reservation are blocked' });
});

app.get('/process', (req, res) => {
  res.send({ status: 'Queue processings' });
  queue.process('reserve_seat', async (job, done) => {
    reserveSeat((await getCurrentAvailableSeats()) - 1);
    console.log(await getCurrentAvailableSeats(), reservationEnabled);
    if ((await getCurrentAvailableSeats()) <= 0) {
      reservationEnabled = false;
      return done(new Error('Not enough seats available'));
    }
    done();
  });
});

app.listen(port);
