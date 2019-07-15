const express = require('express');
// require the file where we connect to our mongo db with help of mongoose
require('./db/mongoose');

// load the user router
const userRouter = require('./routers/user');
// load the task router
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT;

app.use(express.json());
// Register the routers
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => console.log(`Server is up on port ${port}`));
