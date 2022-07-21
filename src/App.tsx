import React from 'react';
import { Routes, Route } from "react-router-dom";
import Main from './routes/main/Main'
import Login from './routes/login/Login'
import { CVView } from "./routes/CVView/CVView";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="cv" element={<CVView />} />
      </Routes>
    </div>
  );
}

export default App;
