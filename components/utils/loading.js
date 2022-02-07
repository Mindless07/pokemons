import Image from 'next/image'
import PokeBall from '../../public/favicon.png'

function Loading() {

  return (
    <div className='animate-spin w-80 sm:w-40'>
      <Image alt="loading-logo" src={PokeBall}/>
    </div>
  )
}

export default Loading