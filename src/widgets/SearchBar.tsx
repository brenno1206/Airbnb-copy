import { IconSearch } from '@/assets/icons';

const SearchBar = () => {
  return (
    <div className="border-1 border-gray-200 flex items-center rounded-full px-3 py-2 w-full max-w-2xl mx-auto overflow-clip shadow-xl shadow-gray-200 ">
      <input
        className="w-full focus:outline-none px-2"
        type="text"
        placeholder="Digite sua pesquisa"
      />
      <button className="bg-red-500 rounded-full p-2">
        <IconSearch aria-label="Pesquisa" size={32} color="white" />
      </button>
    </div>
  );
};

export default SearchBar;
