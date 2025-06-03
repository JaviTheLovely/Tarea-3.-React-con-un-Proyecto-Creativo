import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Sumadora from './pages/Sumadora';
import Traductor from './pages/Traductor';
import Tabla from './pages/Tabla';
import Experiencia from './pages/Experiencia';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/sumadora">Sumadora</Link>
        <Link to="/traductor">Traductor</Link>
        <Link to="/tabla">Tabla</Link>
        <Link to="/experiencia">Experiencia</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sumadora" element={<Sumadora />} />
        <Route path="/traductor" element={<Traductor />} />
        <Route path="/tabla" element={<Tabla />} />
        <Route path="/experiencia" element={<Experiencia />} />
      </Routes>
    </Router>
  );
}

export default App;

