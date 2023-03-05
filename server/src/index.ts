import express from "express";
import mongoose from "mongoose";

import Deck from "./models/Deck";

const app = express();

mongoose
  .connect(
    "mongodb+srv://nethsara:iUXSMg9upgFdp20Y@cluster0.5rlw5fx.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected!"));

app.get("/", (req, res) => {
  res.send("HI");
});

app.listen(5000, () => {
  console.log("Started and running on 5000");
});
