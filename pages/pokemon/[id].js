import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Evolutions from '../../components/evolutions/evolutions'
import Loading from '../../components/utils/loading';

function PokemonDetails () {

  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2${router.asPath}`)
      .then((res) => {
        res.json()  
          .then(pokemonData => {
            setPokemon(pokemonData)
            setLoading(false)
          })
      })
      .catch(() => {
        setError(true) 
      })
  }, [router])

	return (
		<div className="flex flex-col items-center justify-center">
      {
        loading 
        ?
        <Loading />
        :
			<div className="w-4/5">
        <div>
          Name: {pokemon.name}
        </div>
        <div>
          Type: type
        </div>
        <Evolutions pokemonId={pokemon.id} />
      </div>
      }
		</div>
	)
}

export default PokemonDetails
