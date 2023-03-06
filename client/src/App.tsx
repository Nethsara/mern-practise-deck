import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./App.css";
import { createdDeck } from "./api/createDecks";
import { getDecks } from "./api/getDeck";

type TDeck = {
  title: string;
  _id: string;
};

function App() {
  const [decks, setDecks] = useState<TDeck[]>([]);
  const [title, setTitle] = useState("");

  async function handleCreateDeck(e: React.FormEvent) {
    e.preventDefault();
    const deck = await createdDeck(title);
    setDecks([...decks, deck]);
    setTitle("");
  }

  useEffect(() => {
    async function getData() {
      const newDeck = await getDecks();
      setDecks(newDeck);
    }
    getData();
  }, []);

  return (
    <div className="container">
      <div className="App">
        <h1>Your Decks</h1>
        <ul className="decks">
          {decks.map((deck) => (
            <li key={deck._id}>
              <Link to={`decks/${deck._id}`}> {deck.title}</Link>
            </li>
          ))}
        </ul>
        <form onSubmit={handleCreateDeck}>
          <label htmlFor="deck-title">Deck Title</label>
          <input
            id="deck-title"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value);
            }}
          />
          <button>Create Deck</button>
        </form>
      </div>
    </div>
  );
}

export default App;
