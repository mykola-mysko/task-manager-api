const express = require('express');
// require the file where we connect to our mongo db with help of mongoose
require('./db/mongoose');

// load the user router
const userRouter = require('./routers/user');
// load the task router
const taskRouter = require('./routers/task');

const app = express();

app.use(express.json());
// Register the routers
app.use(userRouter);
app.use(taskRouter);

module.exports = app;
