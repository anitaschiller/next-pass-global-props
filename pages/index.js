import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { usePokemon } from '../context/pokemonData';

export default function Home() {
  const { myPokemon, setMyPokemon } = usePokemon();
  console.log('pokemonIndex', myPokemon);

  return (
    <div>
      <Head>
        <title>My Pokemon App</title>
      </Head>
      <h1>Welcome!</h1>
      <section className="about-me">
        <p>
          Hi I'm Anita and I want to become the best Pokemon trainer in the
          world!
        </p>
      </section>
      <p>
        Go to the{' '}
        <Link href="/caught">
          <a>Caught Page</a>
        </Link>
      </p>
    </div>
  );
}
