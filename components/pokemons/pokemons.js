import { useEffect, useState } from "react";
import Loading from "../utils/loading";
import Pagination from "../utils/pagination";
import Pokemon from './pokemon'

function Pokemons () {
  const [page, setPage] = useState(0)
  const [pokemons, setPokemons] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const handlePaginationClick = (pageIndex) => {
    return () => {
      setPage(pageIndex)
    }
  } 

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page*20}`)
      .then(res => {
        res.json()
          .then(pokemonData => {
            setPokemons(pokemonData)
            setLoading(false)
          })
      })
      .catch(() => {
        setError(true)
      })
  } ,[page])

  return (
    <div className="flex justify-center">
      { loading ? 
        <Loading/>
        :
        <div className="w-4/5">
          <ul>
            { pokemons.results.map(pokemon => {
              return (
                <Pokemon key={pokemon.name} pokemon={pokemon} />
              );
            })}
          </ul>
          <Pagination pageIndex={page} handlePaginationClick={handlePaginationClick} />
        </div>
      }
    </div>
  ) 
}

export default Pokemons