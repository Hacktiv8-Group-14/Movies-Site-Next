import { useState } from "react"

export default function Search({ isExpanded, setSearch, setIsExpanded }) {
    const [searchValue, setSearchValue] = useState('')
    return(
        <form className={isExpanded ? "flex w-full md:items-center md:w-96 rounded-lg flex-col md:flex-row" : "hidden md:flex w-full md:items-center md:w-96 rounded-lg flex-col md:flex-row"} onSubmit={(event) => {
            setSearch(searchValue)
            setIsExpanded(false)
            event.preventDefault()      
        }}>
            <input type="text" className="flex-1 rounded-lg md:rounded-none md:rounded-l-lg text-black p-2 border border-blue-800" placeholder="Search movies..." value={searchValue} onChange={(event) => setSearchValue(event.target.value)} />
            <input type="submit" disabled={searchValue === '' ? true : false} value='Search' className="mt-2 md:mt-0 text-md p-2 cursor-pointer disabled:cursor-default bg-[#e50914] disabled:bg-[#e50914]/50 rounded-lg sm:rounded-none sm:rounded-r-lg border border-[#e50914] disabled:border-[#e50914]/50 text-white transition" />
        </form>
    )
}