import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { Logo, Button } from "../../Atoms";
import Search from "../Search";

export default function Navbar({ search, setSearch, setStateMovies, movies }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full bg-black fixed py-2 px-4 z-10 top-0 flex justify-between border-b-2 border-b-gray-900 flex-col md:flex-row">
      <div className="flex flex-row justify-between items-center ">
        <div className="w-40 items-center">
          <Logo
            onClick={() => {
              setSearch("");
              setStateMovies(movies);
            }}
          />
        </div>
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className="block md:hidden text-2xl text-red font-extrabold mb-2 md:mb-0"
        >
          <BsSearch />
        </Button>
      </div>
      <Search
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        setSearch={setSearch}
      />
    </div>
  );
}
