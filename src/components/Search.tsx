interface SearchProps {
  search: string;
  setSearch: (search: string) => void;
}

const Search: React.FC<SearchProps> = ({ search, setSearch }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className="flex flex-col items-start bg-white p-4 shadow-md rounded-md">
      <input
        type="text"
        value={search}
        onChange={handleChange}
        className="p-2 text-base rounded border border-gray-300 w-full box-border focus:outline-none focus:ring-2 focus:ring-blue-200"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
