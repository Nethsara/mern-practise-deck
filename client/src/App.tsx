import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");

  function handleCreateDeck(e: React.FormEvent) {
    console.log(title);

    e.preventDefault();
    fetch("http://localhost:5000/decks", {
      method: "POST",
      body: JSON.stringify({
        title,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
  }

  return (
    <div className="App">
      <form onSubmit={handleCreateDeck}>
        <label htmlFor="deckTitle">Deck Title</label>
        <input
          type="text"
          id="deckTitle"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
        <button>Create Deck</button>
      </form>
    </div>
  );
}

export default App;
