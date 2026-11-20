
function SearchBar({ search, setSearch }) {
  return (
    <div className="search-wrapper">
      <span className="search-icon">⌕</span>

      <input
        type="text"
        placeholder="جستجو بر اساس نام، نام خانوادگی یا ایمیل..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search && (
        <button
          className="clear-search"
          onClick={() => setSearch("")}
        >
          ×
        </button>
      )}
    </div>
  );
}

export default SearchBar;