// src/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isRegistering
      ? 'http://localhost:8000/api/register/'
      : 'http://localhost:8000/api/login/';

    try {
      const response = await axios.post(url, { username, password });

      if (isRegistering) {
        setMessage('✅ Usuario registrado correctamente.');
        setIsRegistering(false);
        setUsername('');
        setPassword('');
      } else {
        setMessage('✅ Inicio de sesión exitoso.');
        localStorage.setItem('token', response.data.access);
        navigate('/');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const data = error.response.data;
        const firstKey = Object.keys(data)[0];
        setMessage(`❌ ${data[firstKey][0]}`);
      } else {
        setMessage('❌ Error de conexión con el servidor.');
      }
    }
  };

  const toggleMode = () => {
    setIsRegistering((prev) => !prev);
    setMessage('');
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h1 className="cecyflix-logo">CECYFLIX</h1>
        <h2>{isRegistering ? 'Crear cuenta' : 'Iniciar sesión'}</h2>

        {message && <p className="message">{message}</p>}

        <form onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">
            {isRegistering ? 'Registrarse' : 'Ingresar'}
          </button>
        </form>

        <p>
  {isRegistering ? '¿Ya tienes cuenta? ' : '¿No tienes cuenta? '}
  <button
    onClick={toggleMode}
    className="toggle-link"
    style={{
      background: 'none',
      border: 'none',
      padding: 0,
      margin: 0,
      color: '#e50914',
      fontWeight: 'bold',
      textDecoration: 'underline',
      cursor: 'pointer',
      fontSize: 'inherit',
      fontFamily: 'inherit'
    }}
  >
    {isRegistering ? 'Inicia sesión' : 'Regístrate'}
  </button>
</p>

      </div>
    </div>
  );
};

export default Login;
