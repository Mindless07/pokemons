import { useEffect, useState } from "react";
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

  function range(start, end) {
    let result = Array(end - start + 1).fill().map((_, idx) => start + idx)
    console.log(result)
    return result
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
        <div> loading </div>
        :
        <div className="w-4/5">
          <ul>
            { pokemons.results.map(pokemon => {
              return (
                <Pokemon pokemon={pokemon} />
              );
            })}
          </ul>
          {
            [...range(page, page + 3)].map(pageIndex => {
              return (
                <span 
                  onClick={handlePaginationClick(pageIndex)} 
                  key={pageIndex} 
                  className="m-2">
                    { pageIndex }
                </span>
              ) 
            })
          }
        </div>
      }
    </div>
  ) 
}

export default Pokemons