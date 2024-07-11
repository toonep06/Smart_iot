import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import Dashboard from './pages/DashboardPage.jsx';
import './index.css';
import LoginPage from './pages/LoginPage.jsx';
import ProtectedRoute from './pages/ProtectedRoute.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Smart_iot/login" element={<LoginPage />} />
        <Route path="/Smart_iot/home" element={
          <ProtectedRoute>
            <App />
          </ProtectedRoute>
        } />
        <Route path="/Smart_iot/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
