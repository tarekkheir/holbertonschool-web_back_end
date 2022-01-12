const kue = require('kue');
const queue = kue.createQueue();

const obj = {
  phoneNumber: '0123456789',
  message: 'Hello',
};

const job = queue.create('push_notification_code', obj).save((err) => {
  if (!err) console.log(`Notification job created: ${job.id}`);
});

job.on('complete', () => {
  console.log('Notification job completed');
});

job.on('failed', () => {
  console.log('Job failed');
});
