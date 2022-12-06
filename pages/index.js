import Head from 'next/head'
import Header from '../src/components/Header'
import Movies from '../src/components/Movies'
import Carousel from '../src/components/Carousel'

export default function Home({ movies, discover }) {
  return (
    <>
      <Head>
        <title>FinProH8</title>
      </Head>

      <Header />
      <div className='flex flex-col items-center text-white mt-24 mb-10'>
      <h1 className='text-2xl md:text-3xl font-bold w-11/12 text-[#e50914]'>Popular in Indonesia</h1>
        <Carousel discover={discover} />
        <h1 className='text-2xl md:text-3xl font-bold w-11/12 text-[#e50914]'>Trending this week</h1>
        <Movies movies={movies} />
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.API_KEY}&page=1`)
  const data = await response.json()
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&region=ID&sort_by=popularity.desc&page=1`)
  const dat = await res.json()

  return {
    props: {
      movies: data.results,
      discover: dat.results
    }
  }
}
