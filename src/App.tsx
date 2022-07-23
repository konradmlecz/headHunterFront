import React from 'react';
import { Routes, Route } from "react-router-dom";
import Main from './routes/main/Main'
import Login from './routes/login/Login'
import Admin from './routes/adminView/AdminView'
import User from './routes/userView/UserView'
import HeadHunterView from './routes/headHunter/HeadHunterView';
function App() {
  return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="admin" element={<Admin />} />
        <Route path="user" element={<User/>} />
        <Route path="headhunter" element={<HeadHunterView/>} />
      </Routes>
  );
}

export default App;
