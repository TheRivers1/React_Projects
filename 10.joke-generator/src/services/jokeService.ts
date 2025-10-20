const API_URL: string = "https://official-joke-api.appspot.com/jokes/random";

export async function getRandomJoke() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Erro ao buscar piada");
  }
  return response.json();
}
