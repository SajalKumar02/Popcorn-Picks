import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";

import Home from "./pages/Home/Home.jsx";
import Favorites from "./pages/Favourites/Favorites.jsx";
import MovieDetails from "./pages/MovieDetails/MovieDetails.jsx";

import Layout from "./layout/Layout.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="favourites" element={<Favorites />} />
          <Route path="movie/:id" element={<MovieDetails />} />
          <Route
            path="already-watched"
            element={<h1>AlreadyWatchedPage</h1>}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
