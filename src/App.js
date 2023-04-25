import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import HomeView from "./components/home";
import AboutView from "./components/about";
import SearchView from "./components/search";

function App() {

  {/* set function-based State for entire app */}
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/search" keyword={searchQuery} searchResults={searchResults} element={<SearchView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;