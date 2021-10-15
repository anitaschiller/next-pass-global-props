import { usePokemon } from '../context/pokemonData';

const Caught = () => {
  const { myPokemon, setMyPokemon } = usePokemon();
  console.log('pokemonCaught', myPokemon);
  return <h1>My Caught Pokemon</h1>;
};

export default Caught;
