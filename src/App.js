import './App.css';
import Navbar from "./components/navbar";
import HomeView from "./components/home";
import AboutView from './components/about';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/about" element={<AboutView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
