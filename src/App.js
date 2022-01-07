import './App.css';
import Navbar from './components/Navbar';
import Roadmap from './components/Roadmap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reactverse from './components/Reactverse';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    < Route exact path="/" element={<Roadmap/>} />
    < Route exact path="/reactverse" element={<Reactverse/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
