import './App.css';
import Navbar from "./components/navbar";
import HomeView from "./components/home";
import AboutView from './components/about';
import { Routes, Route, BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;