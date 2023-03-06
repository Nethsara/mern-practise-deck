type TDeck = {
  title: string;
  _id: string;
};

export async function getDecks(): Promise<TDeck[]> {
  const response = await fetch("http://localhost:5000/decks");
  return response.json();
}
