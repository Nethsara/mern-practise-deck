import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
config();

const PORT = 5000;

import Deck from "./models/Deck";

const app = express();

app.get("/", (req, res) => {
  res.send("Hi");
});

const db = mongoose.connect(process.env.MONGO_URI ?? "").then(() => {
  console.log("Connected!");
  app.listen(PORT, () => {
    console.log(`Started and running on ${PORT}`);
  });
});
