import Deck from "../models/Deck";
import { Request, Response } from "express";

export async function createDeckController(req: Request, res: Response) {
  console.log(req.body);

  const newDeck = new Deck({
    title: req.body.params,
  });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
}
