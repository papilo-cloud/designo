import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Company } from "./pages/Company";
import { Contact } from "./pages/Contact";
import { Location } from "./pages/Location";
import './index.css'

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
    </div>
  )
} 

export default App
