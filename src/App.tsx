import {Routes, Route} from "react-router-dom";
import Dashboard from './pages/dashboard/dashboard-page.tsx';
import Assistant from './pages/assistant/assistant.tsx';
import Market from './pages/market/market.tsx';
import Player from './pages/player/player.tsx';
import Settings from './pages/settings/settings.tsx';
import PlayerId from "./pages/player-id/player-id.tsx";
import Admin from "./pages/admin/admin-page.tsx";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/assistant" element={<Assistant/>}/>
                <Route path="/market" element={<Market/>}/>
                <Route path="/players" element={<Player/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/player-id" element={<PlayerId/>}/>
                <Route path="/admin" element={<Admin/>}/>
            </Routes>
        </>
    )
}


