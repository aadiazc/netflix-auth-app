// ❌ NO pongas otro BrowserRouter aquí
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
