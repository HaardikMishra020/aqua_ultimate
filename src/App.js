import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Privacy from "./pages/Privacy"
import Discl from "./pages/Discl";
import ScrollToTop from "./components/ScrollToTop";
import MetaPixel from "./components/MetaPixel";

function App() {
  return (
    <>
    <Router>
    <MetaPixel />
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/disclaimer" element={<Discl />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
