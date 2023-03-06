import { config } from "dotenv";
config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const PORT = 5000;

import Deck from "./models/Deck";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/decks", async (req, res) => {
  const newDeck = new Deck({
    title: req.body.title,
  });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
});

const db = mongoose.connect(process.env.MONGO_URI ?? "").then(() => {
  console.log("Connected!");
  app.listen(PORT, () => {
    console.log(`Started and running on ${PORT}`);
  });
});
