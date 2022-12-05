import Head from 'next/head'
import Header from '../src/components/Header'
import Movies from '../src/components/Movies'

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>FinProH8</title>
      </Head>

      <Header />
      <div className='flex flex-col items-center text-white mt-24 mb-10'>
        <h1 className='text-2xl md:text-3xl font-bold w-11/12'>Trending this week</h1>
        <Movies movies={data.results} />
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.API_KEY}&page=1`)
  const data = await response.json()

  return {
    props: {
      data
    }
  }
}
