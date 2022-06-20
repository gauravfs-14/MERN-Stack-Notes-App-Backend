const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const cors = require("cors");
const mongoose = require("mongoose");

//middlewares
app.use(cors());
app.use(express.json());

//connect to DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }, () => {
  console.log("Connected to DB");
});

//routes
app.use("/api/notes", require("./routes/noteRoutes"));

app.listen(port, () => {
  console.log(`app started at http://localhost:${port}`);
});
