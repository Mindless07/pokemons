import Link from 'next/link'
import { useRouter } from 'next/router'

function Pokemon({ pokemon }) {

  const router = useRouter()

  const onClick = (event) => {
    event.preventDefault();
    router.push(href);
  }

  return (
    <Link onClick={onClick} href={{ pathname: `/pokemon/${pokemon.name}`}} passHref>
      <div 
        className="flex justify-between border-solid rounded border-2 border-white-500 hover:border-green-700 cursor-pointer
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