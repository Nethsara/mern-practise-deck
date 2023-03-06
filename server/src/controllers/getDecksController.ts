import Deck from "../models/Deck";
import { Request, Response } from "express";

export async function getDecksController(req: Request, res: Response) {
  const decks = await Deck.find();
  console.log(decks);
  res.json(decks);
}
