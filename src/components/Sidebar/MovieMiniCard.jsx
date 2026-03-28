import React from "react";
import { Link } from "react-router";

const MovieMiniCard = (props) => {
  return (
    <div className="rounded-2xl group relative w-full h-24 overflow-hidden">
      <img
        src="/Custom-thumbnail-image.jpg"
        alt={props.title || "Movie Poster"}
        className="absolute top-0 left-0 w-full h-24 object-cover rounded-md"
      />
      <div className="absolute inset-0 rounded-md transition-all duration-200 bg-linear-to-t from-[#162125]/80 via-[#162125]40 to-transparent opacity-0 group-hover:opacity-100" />
      <p className="text-right absolute bottom-2 right-3 text-sm font-semibold transition-opacity duration-200 opacity-0 text-[#162125] dark:text-[#f1f5f9] group-hover:opacity-100 z-10">
        {props.title || "MOVIE"}
      </p>
    </div>
  );
};

export default MovieMiniCard;
