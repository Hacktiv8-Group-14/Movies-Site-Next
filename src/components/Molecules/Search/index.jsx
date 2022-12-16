import { useState } from "react";
import { Button, Input } from "../../Atoms";

export default function Search({ isExpanded, setSearch, setIsExpanded }) {
  const [searchValue, setSearchValue] = useState("");
  return (
    <form
      className={
        isExpanded
          ? "flex w-full md:items-center md:w-96 rounded-lg flex-col md:flex-row"
          : "hidden md:flex w-full md:items-center md:w-96 rounded-lg flex-col md:flex-row"
      }
      onSubmit={(event) => {
        setSearch(searchValue);
        setIsExpanded(false);
        event.preventDefault();
      }}
    >
      <Input
        type="text"
        className="flex-1 rounded-lg md:rounded-none md:rounded-l-lg text-black p-2 border"
        placeholder="Search movies..."
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <Button
        type="submit"
        disabled={searchValue === "" ? true : false}
        className="mt-2 md:mt-0 text-md p-2 cursor-pointer border-red  bg-red disabled:bg-secondary-red rounded-lg sm:rounded-none sm:rounded-r-lg border  disabled:border-[#e50914]/50 disabled:cursor-no-drop text-white transition"
        onClick={(event) => {
          setSearch(searchValue);
          setIsExpanded(false);
          event.preventDefault();
        }}
      >
        Search
      </Button>
    </form>
  );
}
