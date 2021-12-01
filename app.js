const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.get('/', (req, res) => {
    res.send("time to do it...or else!");
})

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Finally connected to server on port: ${port}`))