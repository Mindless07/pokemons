import { useState, useEffect } from 'react'
import Pokemon from '../pokemons/pokemon';
import Loading from '../utils/loading';

function Evolutions({ pokemonId }) {

  const [evolutions, setEvolutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/evolution-chain/${pokemonId}`)
      .then(res => {
        res.json()
          .then(evolutionsData => {
            setEvolutions(evolutionsData.chain.evolves_to)
            setLoading(false)
          })
      })
      .catch(() => {
        setError(true) 
      })
  }, [pokemonId])

  return (
    <div className=' w-4/5'>
    {
      loading ?
      <Loading/>
      :
      <div className='flex flex-col'>
      <span>Evolutions</span>
        {
          evolutions.length
          ?
          evolutions.map(evolution => {
            return (
              <span key={evolution.species}>
                <Pokemon pokemon={ evolution.species } />
              </span>
            )
          })
          :
          null
        } 
      </div>

    }
    </div>
  )
}

export default Evolutions