const express = require('express');
const connectDB = require('./config/db');
const taskControllers = require("./routes/api/task");
const userControllers = require("./routes/api/user");
const consequenceControllers = require("./routes/api/consequence");


const app = express();

connectDB();


app.use('/tasks', taskControllers);
app.use('/users', userControllers);
app.use('/consequences', consequenceControllers);

app.get('/', (req, res) => res.send("time to Do It...or Else!"));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`server is ready on port: ${port}`))