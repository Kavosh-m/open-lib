import React from "react";
import placeholder from "../assets/placeholder.jpg";

const BookCard = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-start shadow-xl rounded-xl p-4 space-y-2 bg-gradient-to-br from-cyan-400 to-purple-300 hover:md:scale-[1.05] transition-transform duration-300 ease-in-out hover:shadow-2xl">
      <img
        alt=""
        className="w-5/6 aspect-square object-fill"
        src={
          data?.cover_edition_key
            ? `https://covers.openlibrary.org/b/olid/${data?.cover_edition_key}-M.jpg`
            : placeholder
        }
      />
      <p className="text-center font-bold pb-2 text-xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-900 to-pink-700">
        {data?.title}
      </p>
      <p className="text-center font-bold">
        {data.author_name ? data.author_name[0] : "NA"}
      </p>
      <p className="text-center font-bold">
        {data.publish_year && Math.min(...data.publish_year)}
      </p>
    </div>
  );
};

export default BookCard;
