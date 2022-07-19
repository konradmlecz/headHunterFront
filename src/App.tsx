import React from 'react';
import { Routes, Route } from "react-router-dom";
import Main from './routes/main/Main'
import Login from './routes/login/Login'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
