import HeaderItem from '../headerItem/headerItem'
import { HomeIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import PokeBall from '../../public/favicon.png'

function Header() {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between m-5'>
      <div className='flex justify-start items-center m-3'>
        <HeaderItem Title='HOME' Icon={HomeIcon} Link={'/link'} /> 
      </div>
      <div className='items-center w-20 sm:w-10'>
        <Image layout="intrinsic" src={PokeBall} />
      </div>
    </div>
  )
}

export default Header