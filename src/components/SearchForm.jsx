export default function SearchForm({ searchText, setSearchText }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <div className="search-bar flex felx-col items-center m-2 max-w-[400px]">
      <form className="search flex flex-row gap-2" onSubmit={handleSubmit}>
        <label htmlFor="search" className="sr-only">
          검색
        </label>
        <input
          id="search"
          type="text"
          value={searchText}
          onChange={(evt) => {
            setSearchText(evt.target.value);
          }}
          placeholder="검색어를 입력하세요"
          className="border-[1px] border-black rounded-xl w-auto h-9 pl-4"
        />
        <button
          type="submit"
          className="flex flex-row grow-0 items-center border-[1px] border-black rounded-xl pl-3"
        >
          검색
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 10.5H10.5V9L12 9V10.5Z" fill="black" />
            <path d="M10.5 12H9V10.5L10.5 10.5V12Z" fill="black" />
            <path d="M12 22.5H10.5V21H12V22.5Z" fill="black" />
            <path d="M21 10.5H19.5V9L21 9V10.5Z" fill="black" />
            <path d="M22.5 12H21V10.5H22.5V12Z" fill="black" />
            <path d="M24 24H22.5V22.5H24V24Z" fill="black" />
            <path d="M25.5 25.5H24V24H25.5V25.5Z" fill="black" />
            <path d="M27 27H25.5V25.5H27V27Z" fill="black" />
            <path d="M28.5 28.5H27V27H28.5V28.5Z" fill="black" />
            <path d="M10.5 21H9V19.5H10.5V21Z" fill="black" />
            <path d="M21 19.5V21H19.5V22.5H22.5V19.5H21Z" fill="black" />
            <path d="M24 12H22.5V19.5H24V12Z" fill="black" />
            <path d="M12 7.5V9L19.5 9V7.5L12 7.5Z" fill="black" />
            <path d="M7.5 19.5H9V12H7.5L7.5 19.5Z" fill="black" />
            <path d="M12 22.5V24H19.5V22.5H12Z" fill="black" />
          </svg>
        </button>
      </form>
    </div>
  );
}
