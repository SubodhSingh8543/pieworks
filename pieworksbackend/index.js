const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connect } = require("./db");
const { weatherRouter } = require("./routes/weatherdata");
const app = express();

app.use(express.json())
app.use(cors());

app.use("/weatherdata",weatherRouter);

app.listen(process.env.port,async() => {
    try {
        await connect;
        console.log("Connected to db");
    } catch (error) {
        console.log(error);
        console.log("disconnected from db");
    }
})