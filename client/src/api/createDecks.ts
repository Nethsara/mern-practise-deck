export async function createdDeck(params: string) {
  const response = await fetch("http://localhost:5000/decks", {
    method: "POST",
    body: JSON.stringify({
      params,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
  return response.json();
}
