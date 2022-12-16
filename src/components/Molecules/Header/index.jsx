import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { Logo, Button, Search } from "../../Atoms";

export default function Header({ search, setSearch, setStateMovies, movies }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full bg-black p-4 fixed z-10 top-0 flex justify-between border-b-2 border-b-gray-900 flex-col md:flex-row">
      <div className="flex flex-row justify-between">
        <Logo
          onClick={() => {
            setSearch("");
            setStateMovies(movies);
            window.scrollTo({ top: 0 });
          }}
        />
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className="block md:hidden text-2xl text-[#e50914] font-extrabold mb-2 md:mb-0"
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
