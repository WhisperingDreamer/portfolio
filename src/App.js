import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar.js";
import Home from './pages/Home.js'
import Projects from './pages/Projects.js';
import Footer from "./components/footer/Footer.js";
import Contacts from "./pages/Contacts.js";
import About from "./pages/about/About.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
