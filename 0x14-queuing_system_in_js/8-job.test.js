import createPushNotificationsJobs from './8-job';
import kue from 'kue';
import { expect } from 'chai';

const queue = kue.createQueue();


before(() => queue.testMode.enter());
afterEach(() => queue.testMode.clear());
after(() => queue.testMode.exit());

it('display error message if jobs is not an array', () => {
  expect(() => createPushNotificationsJobs('string', queue)).to.throw(Error, 'Jobs is not an array');
  expect(() => createPushNotificationsJobs({ data: 'Hello' }, queue)).to.throw(Error, 'Jobs is not an array');
});

it('create 2 jobs without any error', () => {
  const jobs = [
    {
      phoneNumber: '4153518780',
      message: 'This is the code 1234 to verify your account'
    },
    {
      phoneNumber: '4153518781',
      message: 'This is the code 4321 to verify your account'
    }
  ];

  createPushNotificationsJobs(jobs, queue);

  expect(queue.testMode.jobs.length).to.equal(2);
  expect(queue.testMode.jobs[0].type).to.equal('push_notification_code_3');
  expect(queue.testMode.jobs[0].data).to.equal(jobs[0]);

  expect(queue.testMode.jobs[1].type).to.equal('push_notification_code_3');
  expect(queue.testMode.jobs[1].data).to.equal(jobs[1]);
});

