import React from "react";
import { Link } from "react-router";

const MovieMiniCard = (props) => {
  return (
    <div className="rounded-2xl group relative cursor-pointer w-full h-24">
      <img
        src="/Custom-thumbnail-image.jpg"
        alt={props.title || "Movie Poster"}
        className="absolute top-0 left-0 w-full h-24 object-cover rounded-md"
      />
      <Link
        href={`/movie/${props.id || ""}`}
        className="text-right absolute bottom-2 right-3 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        {props.title || "MOVIE"}
      </Link>
    </div>
  );
};

export default MovieMiniCard;
