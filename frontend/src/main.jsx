import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import App from './App';
import CreateGarden from './pages/CreateGarden';
import MesJardins from './pages/MesJardins';
import './index.css';
import PrivateRoute from './components/PrivateRoute';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-5aqjsme5s68hvy2a.eu.auth0.com"
      clientId="oEDPz04ubN3ZvuGrzUVTWGMdZLXEXP2W"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "https://gardens-api",
      }}
      cacheLocation="localstorage"
    >
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/creer-jardin" element={
            <PrivateRoute>
              <CreateGarden />
            </PrivateRoute>
          } />
          <Route path="/mes-jardins" element={
            <PrivateRoute>
              <MesJardins />
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </Auth0Provider>
  </React.StrictMode>
);
