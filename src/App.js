import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

import ScrollToTop from "./components/ScrollToTop";
import MetaPixel from "./components/MetaPixel";

function App() {
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Discl = lazy(() => import("./pages/Discl"));

  return (
    <Router>
      <MetaPixel />
      <ScrollToTop />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/disclaimer" element={<Discl />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
