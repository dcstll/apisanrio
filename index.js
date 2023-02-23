const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config()
const cors = require("cors");

const app = express();

const charactersRoutes = require("./src/routes/charactersRoutes")

//routes
app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

const corsOption={
  origin:"*",
  method:["GET", "POST", "PUT", "DELETE"],
  allowedHeaders:["Origin", "X-Requested-With", "Content-Type", "Accept"],
  credentials: true
};

//mongodb connection
mongoose.set("strictQuery", true)
mongoose
  .connect(process.env.mongoURL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error(error));

app.use(cors(corsOption));

app.use("/App", charactersRoutes);

app.listen(process.env.port, () => {
    console.log("The server is listening to port 3005");
});

