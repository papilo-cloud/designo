import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/Home";
import { Company } from "./pages/Company";
import { Contact } from "./pages/Contact";
import { Location } from "./pages/Location";
import './index.css'
import { Footer } from "./components/footer/Footer";
import { Web } from "./components/design/Web";
import { Graphics } from "./components/design/Graphics";
import { App as Apps } from "./components/design/App";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {

  const location = useLocation()
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <div className="app">
      <Navbar />
      <Routes >
        <Route index path="/" element={<Home /> }  />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
        <Route path="/">
          <Route path="/graphic" element={<Graphics />} />
          <Route path="/web" element={<Web /> } />
          <Route path="/app" element={<Apps />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
} 

export default App
