import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import HomeView from "./components/home";
import AboutView from "./components/about";
import SearchView from "./components/search";
import MovieView from "./components/movie";

// TMDB API KEY = 5f20273fd7bb65b5bb1dd8450bf11dd1
// EXAMPLE REQUEST = https://api.themoviedb.org/3/movie/550?api_key=5f20273fd7bb65b5bb1dd8450bf11dd1
// TODO: 404 page, no image/backdrop, no results, search button

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=5f20273fd7bb65b5bb1dd8450bf11dd1&query=${searchQuery}`)
      .then(response => response.json())
      .then(data => setSearchResults(data.results))
  }, [searchQuery]);

  return (
    <BrowserRouter>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/search" element={<SearchView keyword={searchQuery} searchResults={searchResults} />} />
        <Route path="/movies/:id" element={<MovieView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;