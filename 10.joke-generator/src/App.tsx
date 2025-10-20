import { useEffect, useState } from "react";
import { getRandomJoke } from "./services/jokeService";
import "./styles/style.css";

function App() {
  const [joke, setJoke] = useState<{ setup: string; punchline: string } | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchJoke(): Promise<void> {
    setLoading(true);
    setError(null);
    try {
      const data = await getRandomJoke();
      setJoke(data);
    } catch (err) {
      if (err instanceof Error) {
        setError("Failed to get joke from URL" + err.message);
      } else {
        setError(String(err));
      }
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="joke-container">
      <h2>Random Joke Genarator</h2>
      <button onClick={() => fetchJoke()}>Get a random joke</button>
      <hr />
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {joke && !error && !loading && (
        <div>
          <p>
            <strong>Joke: </strong>
            {joke.setup}
          </p>
          <p>
            <strong>Punchline: </strong>
            {joke.punchline}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
