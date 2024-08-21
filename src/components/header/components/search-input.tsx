import { AiOutlineSearch } from "react-icons/ai";

export function SearchInput() {
  return (
    <label
      htmlFor="search-input"
      className="relative block overflow-hidden border-b border-white bg-transparent pt-3 focus-within:border-gray-600"
    >
      <input
        type="text"
        id="search-input"
        placeholder="buscar"
        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
      />

      <span className="absolute start-0 top-2 flex w-full -translate-y-1/2 items-center justify-between text-xs italic transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
        Buscar
        <AiOutlineSearch />
      </span>
    </label>
  );
}
