import  {AiFillStar, AiOutlineRight, AiOutlineLeft} from 'react-icons/ai'
import { useState } from "react"

export default function Carousel({ discover }) {

    const [index, setIndex] = useState(0)

    return(
        <div className="w-11/12 h-56 sm:h-64 xl:h-80 2xl:h-96 mt-2 mb-4 flex overflow-y-hidden">
            <div className="relative w-full h-full flex">
                <img src={`https://image.tmdb.org/t/p/w342${discover[index]?.backdrop_path}`} alt="backdrop" className="w-full rounded-2xl" />
                <div className="absolute w-full h-full flex items-center justify-center backdrop-blur-[3px] bg-black bg-opacity-30 rounded-2xl">
                    <img src={`https://image.tmdb.org/t/p/w342${discover[index]?.poster_path}`} alt="poster" className="h-28 md:h-52 rounded-lg border"/>
                    <div className="w-1/2 ml-5 h-28 md:h-52 overflow-scroll md:overflow-hidden">
                        <div className="text-base md:text-lg font-bold line-clamp-2 pb-2">{discover[index]?.title}</div>
                        <div className="flex items-center text-xs md:text-sm pb-2 mb-2 border-b border-b-[#e50914]"><AiFillStar/>{discover[index]?.vote_average}</div>                        
                        <div className="text-xs md:text-sm mb-2">{discover[index]?.release_date}</div>
                        <p className="text-sm md:text-base line-clamp-4  ">{discover[index]?.overview}</p>
                    </div>
                    <button  className={`hover:bg-black/50 rounded-full p-2 absolute bottom-0 right-1/4 mb-3`} onClick={() => setIndex(index === discover.length -1 ? 0 : index+1)}><AiOutlineRight /></button>
                    <div className="absolute bottom-0 mb-4">{index+1} / {discover.length}</div>
                    <button  className={`hover:bg-black/50 rounded-full p-2 absolute bottom-0 left-1/4 mb-3`} onClick={() => setIndex(index === 0 ? discover.length -1 : index-1)}><AiOutlineLeft /></button>
                </div>
            </div>       
        </div>
    )
}