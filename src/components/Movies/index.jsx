import  {AiFillStar} from 'react-icons/ai'

export default function Movies({ movies }) {
    return(
        <div className="flex w-11/12 mt-4 justify-center">
            <div className="flex-flex-col items-center">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {movies.map((movie) => (
                        <div key={movie.id} className="relative rounded-lg">
                            <img 
                                className="rounded-lg h-full"
                                src={movie?.poster_path ? `https://image.tmdb.org/t/p/w342${movie?.poster_path}` : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'}
                            />
                            <div className="absolute backdrop-blur-sm bg-[#e50914] bg-opacity-50 p-2 opacity-0 hover:opacity-100 transition ease-in-out duration-150 h-full w-full bottom-0 rounded-lg">
                                <div className="text-sm md:text-base font-bold line-clamp-2 pb-2">{movie?.title}</div>
                                <div className='flex items-center text-xs md:text-sm pb-2 mb-2 border-b'><AiFillStar/> {movie.vote_average}</div>
                                <div className="text-xs md:text-sm mb-2">{movie.release_date}</div>
                                <p className="text-xs md:text-sm line-clamp-2 sm:line-clamp-3 lg:line-clamp-6">{movie?.overview}</p>
                            </div>
                            <div className='w-full md:block absolute top-0 p-2 rounded-b-lg'>
                                <div className="text-sm md:text-base font-bold line-clamp-2 pb-2">{movie?.title}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}