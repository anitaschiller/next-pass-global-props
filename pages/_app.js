import { PokemonProvider } from '../context/pokemonData';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Hier kommen eure Global Styles hin */}
      <PokemonProvider>
        <Component {...pageProps} />
      </PokemonProvider>
    </>
  );
}

export default MyApp;
