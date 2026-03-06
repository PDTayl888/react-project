import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import IPProvider from "./context/IPContext";
import FavoritesProvider from "./context/FavoritesContext";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";



function App() {
  return (
    <FavoritesProvider>
      <IPProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </Router>
      </IPProvider>
    </FavoritesProvider>
  );
}

export default App;
