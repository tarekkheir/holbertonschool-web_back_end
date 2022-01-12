function createPushNotificationsJobs(jobs, queue) {
  if (!Array.isArray(jobs)) {
    throw Error('Jobs is not an array');
  }

  for (const j in jobs) {
    const job = queue.create('push_notification_code_3', j).save((err) => {
      if (!err) console.log(`Notification job created: ${job.id}`);
    })

    job
      .on('progress', (progress, data) => {
        console.log(`Notification job ${job.id} ${progress}% complete`);
      })
      .on('complete', () => {
        console.log(`Notification job ${job.id} completed`);
      })
      .on('failed', (err) => {
        console.log(`Notification job ${job.id} failed: ${err}`);
      })
  }
}

module.exports = createPushNotificationsJobs;
