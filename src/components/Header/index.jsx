import  { BsSearch } from "react-icons/bs"
import { useState } from "react"
import Search from "../Search"

export default function Header({ setSearch }) {

    const [isExpanded, setIsExpanded] = useState(false)

    return(
        <div className="w-full bg-black p-4 fixed z-10 top-0 flex justify-between border-b-2 border-b-gray-900 flex-col md:flex-row">
            <div className="flex flex-row justify-between">
                <h1 className="text-3xl text-[#e50914] font-extrabold mb-2 md:mb-0">FinProH8</h1>
                <button onClick={() => setIsExpanded(!isExpanded)} className="block md:hidden text-2xl text-[#e50914] font-extrabold mb-2 md:mb-0"><BsSearch /></button>
            </div>
            <Search 
                isExpanded={isExpanded}
                setIsExpanded={setIsExpanded}
                setSearch={setSearch}
            />
        </div>
    )
}