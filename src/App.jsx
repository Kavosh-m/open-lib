import React, { useState } from "react";
import axios from "axios";
import BookCard from "./components/BookCard";

// https://covers.openlibrary.org/b/olid/${cover_edition_key}-L.jpg

const App = () => {
  const [keyword, setKeyword] = useState("");
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSearchInputChange = (e) => {
    setKeyword(e.target.value);
  };

  const onSearchFire = async () => {
    setBooks(false);
    setLoading(true);
    try {
      const { data } = await axios.get(
        `http://openlibrary.org/search.json?title=${keyword}`
      );
      // console.log(data.docs);
      setBooks(data.docs);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="bg-white min-h-screen dark:bg-gray-900/80">
      <div className="flex  w-11/12 mx-auto py-10">
        <input
          className="self-start basis-11/12 p-4 dark:bg-gray-200 bg-gray-400/20 outline-0 rounded-tl-lg rounded-bl-lg"
          placeholder="Type anything..."
          value={keyword}
          onChange={onSearchInputChange}
        />
        <button
          onClick={onSearchFire}
          className="self-end py-4 px-1 basis-1/12 flex items-center justify-center rounded-tr-lg rounded-br-lg dark:bg-cyan-400 bg-cyan-600/70"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-11/12 mx-auto pb-4">
        {books === null ? null : books && !loading ? (
          books.map((book) => <BookCard data={book} key={book._version_} />)
        ) : (
          <p className="text-2xl dark:text-white animate-pulse col-span-4 text-center">
            Searching...
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
