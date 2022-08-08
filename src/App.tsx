import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './routes/main/Main';
import { Login } from './routes/login/Login';
import Admin from './routes/adminView/AdminView';
import StudentView from './routes/studentView/StudentView';
import HeadHunterViewAvailable from './routes/headHunter/HeadHunterAvailableView';
import HeadHunterViewInterview from './routes/headHunter/HeadHunterInteviewView';
import { CVView } from './routes/CVView/CVView';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="login" element={<Login />} />
            <Route path="admin" element={<Admin />} />
            <Route path="student" element={<StudentView />} />
            <Route path="hr/available" element={<HeadHunterViewAvailable />} />
            <Route path="hr/interview" element={<HeadHunterViewInterview />} />
            <Route path="cv" element={<CVView />} />
        </Routes>
    );
}

export default App;
