import { Routes, Route } from "react-router-dom";
import Assistant from './pages/assistant.tsx';
import Market from './pages/market.tsx';
import Player from './pages/player.tsx';
import Settings from './pages/settings.tsx';
import PlayerId from "./pages/player-id.tsx";
import Admin from "./pages/admin-page.tsx";
import NewDashboard from "./pages/new-dashboard.tsx";
import PublicPage from "./pages/public-page.tsx";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<NewDashboard />} />
                <Route path="/assistant" element={<Assistant />} />
                <Route path="/market" element={<Market />} />
                <Route path="/players" element={<Player />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/player/:id" element={<PlayerId />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/public" element={<PublicPage />} />
            </Routes>
        </>
    )
}


