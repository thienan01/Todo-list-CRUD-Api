const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const db = require('./config/db');
const port = 3000;

const app = express();

const todoRoutes = require('./routes/Todo');

db.connect();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/",todoRoutes);

app.listen(port,()=>{
    console.log("Running...");
})