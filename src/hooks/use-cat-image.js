import { useEffect, useState } from 'react';

export function useCatImage ({ fact }) {
  const [catImageUrl, setCatImageUrl] = useState();

  useEffect(() => {
    if (fact) {
      const threeFirstWords = fact.split(' ', 3).join(' ');

      getCatImageUrl(threeFirstWords).then(url => setCatImageUrl(url));
    }
  }, [fact]);

  return catImageUrl;
}

async function getCatImageUrl (sentence) {
  const res = await fetch(
    'https://cataas.com/cat/says/' +
    sentence +
    '?fontSize=50&fontColor=red'
  );
  return res.url;
}
