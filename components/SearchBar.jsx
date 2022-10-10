import { useState } from "react";
import Search from "../assets/Search";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleKeyUp = (e) => {
    if (e.key === "Enter" && searchQuery.length > 0) doSearch();
  };

  const doSearch = () => console.log(searchQuery);

  return (
    <div className="flex items-center justify-center w-full pl-6">
      <div
        className="w-5 h-5 relative cursor-pointer group"
        onClick={() => searchQuery.length > 0 && doSearch()}
      >
        <Search className="group-hover:stroke-white stroke-white/25" />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={(e) => handleKeyUp(e)}
        className="w-full outline-none p-5 py-2 bg-transparent placeholder:text-white/25 text-lg text-white font-medium"
        placeholder="Search artists"
      />
    </div>
  );
}
