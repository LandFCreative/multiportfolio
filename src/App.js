
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    
      <>
<Navbar />
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/about" element={<About />} />
  <Route path="/skills" element={<Skills />} />
  <Route path="/work" element={<Work />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
      </>
  
 
  );
}

export default App;
