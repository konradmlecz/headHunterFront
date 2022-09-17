import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './routes/main/Main';
import { Login } from './routes/login/Login';
import Admin from './routes/adminView/AdminView';
import StudentView from './routes/studentView/StudentView';
import HeadHunterViewAvailable from './routes/headHunter/HeadHunterAvailableView';
import { CVView } from './routes/CVView/CVView';
import SettingsView from "./routes/settingsView/SettingsView";
import {SetPassword} from "./routes/setPassword/SetPassword";
import { HeadHunterInterviewView } from "./routes/headHunter/HeadHunterInteviewView"
import {ReminderPassword} from "./routes/ reminderPassword/reminderPassword";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/user/register/:id/:token" element={<SetPassword/>} />
            <Route path="/user/changepassword/:id/:token" element={<SetPassword/>} />
            <Route path="/user/reminderPassword" element={<ReminderPassword/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/student" element={<StudentView />} />
            <Route path="/hr/available" element={<HeadHunterViewAvailable />} />
            <Route path="/hr/interview" element={<HeadHunterInterviewView />} />
            <Route path="/cv" element={<CVView />} />
            <Route path="/settings" element={<SettingsView />} />
        </Routes>
    );
}

export default App;
