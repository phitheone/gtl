import "./App.css";

import Home from "./pages/home";
import Rarity from "./pages/rarity";
import Error from "./pages/error";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rarity" element={<Rarity />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
