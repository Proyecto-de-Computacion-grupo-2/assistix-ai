import home_icon from '../../assets/home-icon.svg';
import chatbot_icon from '../../assets/chatbot-icon.svg';
import mercado_icon from '../../assets/market-icon.svg';
import player_icon from '../../assets/player-icon.svg';
import team_icon from '../../assets/team-icon.svg';
import settings_icon from '../../assets/settings-icon.svg';
import assistix_ai_logo from '../../assets/assistix-ai-logo.png';
import integrated_ai_logo from '../../assets/integrated-ai-logo.png';


import './side_bar.scss'


export default function SideBar() {
    return (
        <aside>
            <div className="fc sidebar-header">
                <img src={assistix_ai_logo} alt="ASSISTIX AI Logo"/>
                <h2>ASSISTIX AI</h2>
            </div>

            <nav className="fc sidebar-nav">
                <ul>
                    <p>Main</p>
                    <li>
                        <a href="#">
                            <img src={home_icon} alt="Home icon"/>
                            Home
                        </a>
                    </li>
                    <li><a href="#"><img src={chatbot_icon} alt="Assistant icon"/> Asistente</a></li>
                    <li><a href="#"><img src={mercado_icon} alt="Market icon"/> Mercado</a></li>
                    <li><a href="#"><img src={player_icon} alt="Players icon"/> Jugadores</a></li>
                    <li><a href="#"><img src={team_icon} alt="Team icon"/> Equipo</a></li>
                    <li><a href="#"><img src={settings_icon} alt="Settings icon"/> Configuración</a></li>
                </ul>
            </nav>

            <div className="know-more-ai">
                <img src={integrated_ai_logo} alt="IA Integrada logo"/>
                <p>IA Integrada</p>
                <a>Saber más</a>
            </div>
        </aside>
    )
}

