
function SearchBar({ input, setInput, search }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="city-search"
        placeholder="Enter City Name.."
        name="query"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={search}
      />
    </div>
  );
}

export default SearchBar;
