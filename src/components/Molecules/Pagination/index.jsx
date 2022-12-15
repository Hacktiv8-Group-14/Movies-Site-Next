import  {AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
export default function Pagination({ page, setPage, totalPages }) {
    return(
        <div className='mt-10 flex items-center justify-center'>
            <button 
                className={`text-[#e50914] text-xl sm:text-2xl ${page === 1 ? 'invisible' : 'visible'}`} 
                onClick={() => {
                    setPage(1)
                    window.scrollTo({ top: 0 });
                }}
            >
                <AiOutlineDoubleLeft />
            </button>
            <button 
                className={`text-[#e50914] text-xl sm:text-2xl ${page === 1 ? 'invisible' : 'visible'}`} 
                onClick={() => {
                    setPage(page-1)
                    window.scrollTo({ top: 0 });
                }}
            >
                <AiOutlineLeft />
            </button>
            <span className={`text-base sm:text-lg w-5 sm:w-7 mx-1 ${page-3 < 1 ? 'invisible' : 'visible'}`}>
                …
            </span>
            <button 
                className={`text-base sm:text-lg w-5 sm:w-7 mx-1 hidden sm:block ${page-2 < 1 ? 'invisible' : 'visible'}`} 
                onClick={() => {
                    setPage(page-2)
                    window.scrollTo({ top: 0 });
                }}
            >
                {page-2}
            </button>
            <button 
                className={`text-base sm:text-lg w-5 sm:w-7 mx-1 ${page-1 < 1 ? 'invisible' : 'visible'}`} 
                onClick={() => {
                    setPage(page-1)
                    window.scrollTo({ top: 0 });
                }}
            >
                {page-1}
            </button>
            <button className='text-base sm:text-lg w-5 sm:w-7 mx-1 bg-[#e50914] rounded-full'>
                {page}
            </button>
            <button 
                className={`text-base sm:text-lg w-5 sm:w-7 mx-1 ${page+1 > totalPages ? 'invisible' : 'visible'}`} 
                onClick={() => {
                    setPage(page+1)
                    window.scrollTo({ top: 0 });
                }}
            >
                {page+1}
            </button>
            <button 
                className={`text-base sm:text-lg w-5 sm:w-7 mx-1 hidden sm:block ${page+2 > totalPages ? 'invisible' : 'visible'}`} 
                onClick={() => {
                    setPage(page+2)
                    window.scrollTo({ top: 0 });
                }}
            >
                {page+2}
            </button>
            <span className={`text-base sm:text-lg w-5 sm:w-7 mx-1 ${page+3 > totalPages ? 'invisible' : 'visible'}`}>
                …
            </span>
            <button 
                className={`text-[#e50914] text-xl sm:text-2xl ${page === totalPages ? 'invisible' : 'visible'}`} 
                onClick={() => {
                    setPage(page+1)
                    window.scrollTo({ top: 0 });
                }}
            >
                <AiOutlineRight />
            </button>
            <button 
                className={`text-[#e50914] text-xl sm:text-2xl ${page === totalPages ? 'invisible' : 'visible'}`} 
                onClick={() => {
                    setPage(totalPages)
                    window.scrollTo({ top: 0 });
                }}
                >
                    <AiOutlineDoubleRight />
                </button>
        </div>
    )
}