import { useCatFact } from './hooks/use-cat-fact';
import { useCatImage } from './hooks/use-cat-image';
import Footer from './components/Footer';

export default function App () {
  const { fact, refreshCatFact } = useCatFact();
  const catImageUrl = useCatImage({ fact });

  return (
    <>
      <header>
        <h1>Hello world</h1>
      </header>

      <main>
        {
          fact && (
            <>
              <button onClick={refreshCatFact}>Get new fact</button>
              <p>{fact}</p>
            </>
          )
        }
        {
          catImageUrl &&
          <img
            src={catImageUrl}
            alt={'Image extracted using the first three words of ' + fact}
            crossOrigin='anonymous'
          />
        }
      </main>

      <Footer repositoryName='react-data-fetching'/>
    </>
  );
}
