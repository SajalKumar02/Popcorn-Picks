import React from "react";

const MovieMiniCard = ({ src, title }) => {
  return (
    <div className="relative w-full h-24 rounded-2xl overflow-hidden group border-2 border-[#e5e7eb] dark:border-[#243443]">
      <img
        src={src}
        alt="Movie"
        className="absolute inset-0 w-full h-full object-cover rounded-2xl bg-[#f1f5f9] dark:bg-[#162125] border-2 border-transparent"
        style={{ objectPosition: "center" }}
      />
      <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-[#162125]/80 via-[#162125]/40 to-transparent transition-opacity duration-200 opacity-0 group-hover:opacity-100 pointer-events-none" />
      <p className="absolute bottom-2 right-3 z-10 text-sm font-semibold text-[#162125] dark:text-[#f1f5f9] text-right opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-md bg-white/70 dark:bg-[#243443]/80 px-2 py-1">
        {title || "MOVIE"}
      </p>
    </div>
  );
};

export default MovieMiniCard;
