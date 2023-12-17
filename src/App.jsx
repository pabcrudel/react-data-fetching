import { useEffect, useState } from 'react';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

export default function App () {
  const [fact, setFact] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(res => setFact(res.fact));
  }, []);

  return (
    <>
      <header>
        <h1>Hello world</h1>
      </header>

      <main>
        {fact && <p>{fact}</p>}
      </main>
    </>
  );
}
