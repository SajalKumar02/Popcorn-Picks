import React from "react";
import { Link } from "react-router";

const MovieMiniCard = (props) => {
  return (
    <div
      className="border-2 rounded-md group relative cursor-pointer"
      style={{ height: "100px", width: "100%" }}
    >
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
