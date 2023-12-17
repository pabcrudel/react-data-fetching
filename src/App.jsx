import { useEffect, useState } from 'react';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
const catEndpointRandomPhoto = word => 'https://cataas.com/cat/says/' + word +
  '?fontSize=50&fontColor=red';

export default function App () {
  const [fact, setFact] = useState();
  const [catImageUrl, setCatImageUrl] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(res => {
        const { fact } = res;
        setFact(fact);

        const threeFirstWords = fact.split(' ', 3).join(' ');

        fetch(catEndpointRandomPhoto(threeFirstWords))
          .then(res => {
            setCatImageUrl(res.url);
          });
      });
  }, []);

  return (
    <>
      <header>
        <h1>Hello world</h1>
      </header>

      <main>
        {fact && <p>{fact}</p>}
        {
        catImageUrl &&
          <img
            src={catImageUrl}
            alt={'Image extracted using the first three words of ' + fact}
          />
        }
      </main>
    </>
  );
}
