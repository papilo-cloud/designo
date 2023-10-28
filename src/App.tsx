import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/Home";
import { Company } from "./pages/Company";
import { Contact } from "./pages/Contact";
import { Location } from "./pages/Location";
import './index.css'
import { Footer } from "./components/footer/Footer";

function App() {

  return (
    <div className="app">
      <Navbar />
      <Routes >
        <Route path="/" element={<Home /> }  />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
      </Routes>
      <Footer />
    </div>
  )
} 

export default App
