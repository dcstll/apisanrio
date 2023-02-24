const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const charactersRoutes = require("./src/routes/charactersRoutes")

//routes
app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.use(express.json());

const corsOption = {
  origin:"*",
  method:["GET", "POST", "PUT", "DELETE"],
  allowedHeaders:["Origin", "X-Requested-With", "Content-Type", "Accept"],
  credentials: true
};

mongoose.set("strictQuery", false)
mongoose
  .connect(process.env.mongoURL, connectionOptions)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error(error));

app.use(cors(corsOption));

app.use("/App", charactersRoutes);

app.listen(process.env.port, () => {
    console.log("The server is listening to port 3005");
});

