import { HashRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import TuroPath from "./pages/TuroPath.jsx";
import TuroEducate from "./pages/TuroEducate.jsx";
import Algorithms from "./pages/Algorithms.jsx";
import Contact from "./pages/Contact.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/turopath" element={<TuroPath />} />
            <Route path="/turoeducate" element={<TuroEducate />} />
            <Route path="/algorithms" element={<Algorithms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
