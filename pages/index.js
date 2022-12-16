import Head from "next/head";
import { Carousel, Movies, Navbar, Footer } from "../src/components/Molecules";
import { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Button, Header } from "../src/components/Atoms";

export default function Home({ movies, discover }) {
  const [stateMovies, setStateMovies] = useState(movies);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSearch = async () => {
      setStateMovies(null);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${search}&page=${page}`
      );
      const data = await response.json();
      setTotalPages(data.total_pages);
      setStateMovies(data.results);
    };
    search !== "" && fetchSearch();
  }, [search, page]);

  useEffect(() => {
    setPage(1);
  }, [search]);

  return (
    <>
      <Head>
        <title>{search !== "" ? `Search - ${search}` : "Hackflix"}</title>
      </Head>

      <Navbar
        search={search}
        setSearch={setSearch}
        setStateMovies={setStateMovies}
        movies={movies}
      />
      <div className="flex flex-col items-center text-white mt-24 mb-10">
        {search === "" && (
          <>
            <Header title="Popular in Indonesia" />
            <Carousel discover={discover} />
          </>
        )}
        <div className="flex flex-row items-center w-11/12 gap-3 text-2xl md:text-3xl font-bold text-red">
          {search !== "" && (
            <Button
              className="bg-red text-black p-1 rounded-lg"
              onClick={() => {
                setSearch("");
                setStateMovies(movies);
              }}
            >
              <AiOutlineHome color="white" />
            </Button>
          )}
          <Header
            title={
              search ? `Search results for '${search}'` : "Trending this week"
            }
          />
        </div>
        <Movies
          movies={stateMovies}
          search={search}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          loading={loading}
        />
      </div>
      <div className="border-t-2 border-t-gray-900">
        <Footer
          setSearch={setSearch}
          setStateMovies={setStateMovies}
          movies={movies}
        />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=1`
  );
  const data = await response.json();
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&region=ID&sort_by=popularity.desc&page=1`
  );
  const dat = await res.json();

  return {
    props: {
      movies: data.results,
      discover: dat.results,
    },
  };
}
