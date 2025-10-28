import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Models from "./pages/Models";
import Builds from "./pages/Builds";
import Importing from "./pages/Importing";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <NavBar />
      <main className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/models" element={<Models />} />
          <Route path="/builds" element={<Builds />} />
          <Route path="/importing" element={<Importing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
