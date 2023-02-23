const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config()

const app = express();

const charactersRoutes = require("./src/routes/charactersRoutes")

//routes
app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

//mongodb connection
mongoose.set("strictQuery", true)
mongoose
  .connect(process.env.mongoURL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error(error));

app.use("/characters", charactersRoutes);

app.listen(process.env.port, () => {
    console.log("The server is listening to port 3005");
});

