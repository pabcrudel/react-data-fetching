import { useEffect, useState } from 'react';

export function useCatFact () {
  const [fact, setFact] = useState();

  useEffect(refreshCatFact, []);

  function refreshCatFact () {
    getCatFact().then(fact => setFact(fact));
  }

  return { fact, refreshCatFact };
}

async function getCatFact () {
  const res = await fetch('https://catfact.ninja/fact');
  const { fact } = await res.json();
  return fact;
}
