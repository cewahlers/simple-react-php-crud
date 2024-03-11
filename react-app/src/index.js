import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import EditUser from './components/EditUser';
import CreateUser from './components/CreateUser';
import ListUser from './components/ListUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
