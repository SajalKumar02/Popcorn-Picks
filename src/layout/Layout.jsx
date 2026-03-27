// Layout.jsx

// Home Layout
// SideBar Dropdown SearchBar Alerts ProfileDropdown
// TabList MovieCarousal
// Links MovieCarousal
// WatchedMovies PillsContainer
// WatchedMovies MovieCards

import React from "react";
import { Outlet } from "react-router";

import Sidebar from "../components/Sidebar/Sidebar.jsx";

const Layout = () => {
  return (
    <div className="flex flex-row min-h-screen bg-custom-dark text-white">
      <Sidebar />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
