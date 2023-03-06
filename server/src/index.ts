import { config } from "dotenv";
config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Deck from "./models/Deck";
import { getDecksController } from "./controllers/getDecksController";
import { createDeckController } from "./controllers/createDeckController";

const PORT = 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.post("/decks", createDeckController);

app.get("/decks", getDecksController);

mongoose.connect(process.env.MONGO_URI ?? "").then(() => {
  console.log("Connected!");
  app.listen(PORT, () => {
    console.log(`Started and running on ${PORT}`);
  });
});
