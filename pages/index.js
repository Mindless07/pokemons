import Head from 'next/head'
import Header from '../components/header/header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Pokemons</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header/>
    </div>
  )

}
