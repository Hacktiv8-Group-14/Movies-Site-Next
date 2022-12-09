import Head from 'next/head'
import Header from '../src/components/Header'
import Movies from '../src/components/Movies'
import Carousel from '../src/components/Carousel'
import { useState, useEffect } from 'react';
import { AiOutlineHome } from 'react-icons/ai'

const fetcher = async (url) => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export default function Home({ movies, discover }) {

  const [searchMovies, setSearchMovies] = useState(null)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchSearch = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${search}&page=1`)
      const data = await response.json()
      setSearchMovies(data.results)
    }
    search !== '' && fetchSearch()
  }, [search]);

  return (
    <>
      <Head>
        <title>FinProH8</title>
      </Head>

      <Header 
        setSearch={setSearch}
      />
      <div className='flex flex-col items-center text-white mt-24 mb-10'>
        {!searchMovies && (
          <>
            <h1 className='text-2xl md:text-3xl font-bold w-11/12 text-[#e50914]'>Popular in Indonesia</h1>
            <Carousel discover={discover} />
          </>
        )}
        <div className='flex flex-row items-center w-11/12 gap-3 text-2xl md:text-3xl font-bold text-[#e50914]'>
          {searchMovies && (
            <button className='bg-[#e50914] text-black p-1 rounded-lg' onClick={() => {
              setSearch('')
              setSearchMovies(null)
            }}>
              <AiOutlineHome />
            </button>
          )}
          <h1 className=''>{search ? `Search results for '${search}'` : 'Trending this week'}</h1>
        </div>
        <Movies movies={movies} searchMovies={searchMovies} />
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=1`)
  const data = await response.json()
  const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&region=ID&sort_by=popularity.desc&page=1`)
  const dat = await res.json()

  return {
    props: {
      movies: data.results,
      discover: dat.results
    }
  }
}
