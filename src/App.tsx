import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Assistant from './pages/assistant.tsx';
import Market from './pages/market.tsx';
import Players from './pages/players.tsx';
import Settings from './pages/settings.tsx';
import PlayerId from "./pages/player-id.tsx";
import Admin from "./pages/admin-page.tsx";
import NewDashboard from "./pages/new-dashboard.tsx";
import PublicPage from "./pages/public-page.tsx";
import LoginPage from "./pages/login-page.tsx";

export default function App() {
    const [role, setRole] = useState(localStorage.getItem('role'));

    useEffect(() => {
        setRole(localStorage.getItem('role'));
    }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={role === 'user' ? <NewDashboard /> : <Navigate to='/login' />} />
                <Route path="/assistant" element={role === 'user' ? <Assistant /> : <Navigate to='/login' />} />
                <Route path="/market" element={role === 'user' ? <Market /> : <Navigate to='/login' />} />
                <Route path="/players" element={role === 'user' ? <Players /> : <Navigate to='/login' />} />
                <Route path="/settings" element={role === 'user' ? <Settings /> : <Navigate to='/login' />} />
                <Route path="/player/:id" element={role === 'user' ? <PlayerId /> : <Navigate to='/login' />} />
                <Route path="/admin" element={role === 'admin' ? <Admin /> : <Navigate to="/login" />} />
                <Route path="/login" element={!role ? <LoginPage /> : (role === 'admin' ? <Navigate to='/admin' /> : <Navigate to='/' />)} />
                <Route path="/public" element={!role ? <PublicPage /> : (role === 'admin' ? <Navigate to='/admin' /> : <Navigate to='/' />)} />
            </Routes>
        </>
    )
}