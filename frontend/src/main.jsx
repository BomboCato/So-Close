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
      domain="dev-t5o016c65kkqx4c4.us.auth0.com"
      clientId="FmW9rt0YzHd9vThrPLFj9GiQNhHHbqLr"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
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
