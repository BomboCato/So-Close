import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import CreateGarden from './pages/CreateGarden';
import './index.css';
import MesJardins from './pages/MesJardins';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/creer-jardin" element={<CreateGarden />} />
        <Route path="/mes-jardins" element={<MesJardins />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
