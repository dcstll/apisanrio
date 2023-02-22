const express = require('express');
const mongoose = require("mongoose")

const PORT = 3005;
const app = express();

const charactersRoutes = require("./routes/charactersRoutes")

//routes
app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

//mongodb connection
mongoose.set("strictQuery", true)
mongoose
  .connect("mongodb+srv://danisanrio:kuromi@apisanrio.hbsyxya.mongodb.net/SanrioCharacters")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error(error));

app.use("/characters", charactersRoutes);

app.listen(PORT, () => {
    console.log("The server is listening to port " + PORT);
});

