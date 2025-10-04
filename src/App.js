import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Navbar  from "./MyComponents/Navbar";
import  Projects  from "./MyComponents/Projects";
import  Skills  from "./MyComponents/Skills";
import  Education  from "./MyComponents/Education";
import  Experience  from "./MyComponents/Experience";
import  Home from "./MyComponents/Home";
import './App.css';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Experience" element={<Experience />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
