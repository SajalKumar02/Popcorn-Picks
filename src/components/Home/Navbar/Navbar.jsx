import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-2 dark:bg-[#162125]">
      {/* Category Selector */}
      <div>
        <select className="px-3 py-2 rounded-lg bg-[#3c3f40] dark:bg-[#3c3f40] border border-[#162125]/30 dark:border-[#f1f5f9]/20 text-[#162125] dark:text-[#f1f5f9] focus:outline-none focus:ring-2 focus:ring-[#162125]/50 transition">
          <option>Movies</option>
          <option>Web Series</option>
          <option>Anime</option>
          <option>TV Shows</option>
        </select>
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-8">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-lg bg-[#3c3f40] dark:bg-[#3c3f40] border border-[#162125]/30 dark:border-[#f1f5f9]/20 text-[#162125] dark:text-[#f1f5f9] focus:outline-none focus:ring-2 focus:ring-[#162125]/50 transition"
        />
      </div>

      {/* Theme Switcher */}
      <div>
        <button className="px-4 py-2 rounded-lg font-medium text-[#162125] dark:text-[#f1f5f9] border border-[#162125]/20 dark:border-[#f1f5f9]/10 hover:bg-[#162125]/5 dark:hover:bg-[#f1f5f9]/10 transition bg-[#3c3f40] dark:bg-[#3c3f40]">
          Theme
        </button>
      </div>

      {/* Profile Dropdown */}
      <div className="relative ml-6">
        <details className="group">
          <summary
            className="flex items-center px-4 py-2 rounded-lg border border-[#162125]/20 dark:border-[#f1f5f9]/10 bg-[#3c3f40] dark:bg-[#3c3f40] text-[#162125] dark:text-[#f1f5f9] hover:bg-[#162125]/5 dark:hover:bg-[#f1f5f9]/10 transition cursor-pointer list-none select-none"
            tabIndex={0}
            aria-label="User profile menu"
          >
            <span className="w-8 h-8 rounded-full bg-[#162125]/20 dark:bg-[#f1f5f9]/20 flex items-center justify-center mr-2"></span>
            <span className="font-semibold select-none pointer-events-none">
              Username
            </span>
          </summary>
          <div className="absolute right-0 mt-2 w-48 bg-[#3c3f40] dark:bg-[#3c3f40] rounded-lg shadow-lg border border-[#162125]/10 dark:border-[#f1f5f9]/10 z-10 group-open:block hidden">
            <ul className="py-2">
              <li>
                <button className="block w-full text-left px-4 py-2 text-[#162125] dark:text-[#f1f5f9] hover:bg-[#162125]/10 dark:hover:bg-[#f1f5f9]/5 transition">
                  Already-watched
                </button>
              </li>
              <li>
                <button className="block w-full text-left px-4 py-2 text-[#162125] dark:text-[#f1f5f9] hover:bg-[#162125]/10 dark:hover:bg-[#f1f5f9]/5 transition">
                  Change Password
                </button>
              </li>
              <li>
                <button className="block w-full text-left px-4 py-2 text-[#162125] dark:text-[#f1f5f9] hover:bg-[#162125]/10 dark:hover:bg-[#f1f5f9]/5 transition">
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        </details>
      </div>
    </nav>
  );
};

export default Navbar;
