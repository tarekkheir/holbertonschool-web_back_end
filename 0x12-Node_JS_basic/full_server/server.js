const express = require('express');
const index = require('./routes/index');

const app = express();
const port = 1245;
const hostname = 'localhost';

app.listen(port, hostname);

app.use('/', index)
app.use('/students', index)
app.use('/students/:major', index)

export default app;
