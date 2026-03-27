import React from "react";

import MovieMiniCard from "./MovieMiniCard.jsx";
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <aside className="w-64 border-r flex flex-col h-screen p-6 pb-0">
      {/* Title */}
      <div className="mb-10 flex items-center gap-3 transition-transform duration-300 ease-out hover:scale-125 group cursor-pointer">
        <img
          src="/logo-light.svg"
          alt="PopCorn-Picks Logo"
          className="h-15 w-15 transition-transform duration-300 ease-out group-hover:-rotate-10"
        />
        <h2 className="text-xl font-bold tracking-tight">
          PopCorn-Picks
        </h2>
      </div>

      {/* TabLinks - 4 tabs */}
      <nav className="mb-8">
        <ul className="flex flex-col gap-2">
          <li>
            <button
              href="#"
              className="block px-4 py-2 rounded-md font-medium text-sm cursor-pointer"
            >
              Home
            </button>
          </li>
          <li>
            <button
              href="#"
              className="block px-4 py-2 rounded-md font-medium text-sm cursor-pointer"
            >
              Favourites
            </button>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 rounded-md font-medium text-sm cursor-pointer"
            >
              Coming Soon
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 rounded-md font-medium text-sm cursor-pointer"
            >
              Trending
            </a>
          </li>
        </ul>
      </nav>

      {/* Other tabs */}
      <nav className="mb-8">
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              href="#"
              className="text-sm block px-4 py-2 rounded-md cursor-pointer"
            >
              Settings
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-sm block px-4 py-2 rounded-md cursor-pointer"
            >
              Support
            </Link>
          </li>
        </ul>
      </nav>

      {/* Latest Watched */}
      <section className="relative flex flex-col flex-1 min-h-0">
        <h3 className="text-lg font-semibold mb-3 relative z-20 text-[#162125] dark:text-[#f1f5f9]">
          Watched
        </h3>
        <div className="space-y-4 flex-1 overflow-auto min-h-0 relative hide-scrollbar z-20">
          {/* MiniMovieCard - Component */}
          {["Dhurandar", "Dhurandar", "Dhurandar", "Dhurandar"].map(
            (title) => (
              <MovieMiniCard key={title} title={title} />
            ),
          )}
          <div className="flex justify-end mb-10">
            <Link
              to="/already-watched"
              className="underline text-sm text-[#162125] dark:text-[#f1f5f9]"
            >
              More
            </Link>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
