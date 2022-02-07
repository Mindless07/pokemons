import Link from 'next/link'

function Pokemon({ pokemon }) {

  return (
    <Link href={`/pokemon/${pokemon.url.slice(-2)}`} >
      <div 
        className="flex justify-between border-solid rounded border-2 border-white-500 hover:border-green-700
        m-2 p-2 group"
      >
        <span>
          { pokemon.name }
        </span>
        <span className="opacity-0 text-green-700 group-hover:opacity-100">
          View details
        </span>
      </div>
    </Link>
  )    
}

export default Pokemon