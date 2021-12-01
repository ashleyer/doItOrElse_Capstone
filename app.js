const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.get('/', (req, res) => res.send("time to Do It...or Else!"));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`server is ready on port: ${port}`))