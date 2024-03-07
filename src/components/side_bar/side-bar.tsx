import home_icon from '../../assets/house.fill.svg';
import chatbot_icon from '../../assets/sparkles.svg';
import mercado_icon from '../../assets/arrow.left.arrow.right.svg';
import player_icon from '../../assets/figure.soccer.svg';
import settings_icon from '../../assets/gearshape.fill.svg';
import assistix_ai_logo from '../../assets/assistix-ai-logo.png';
import integrated_ai_logo from '../../assets/integrated-ai-logo.png';




//import './side_bar.scss'


export default function SideBar() {
    return (
        <aside>
            <div className="top-content">
                <div className="fc sidebar-header">
                    <img src={assistix_ai_logo} alt="ASSISTIX AI Logo" />
                    <h2>ASSISTIX AI</h2>
                </div>

                <nav className="fc sidebar-nav">
                    <ul>
                        <p>Main</p>
                        <li><a href="#"><img src={home_icon} alt="Home icon" />Home</a></li>
                        <li><a href="#"><img src={chatbot_icon} alt="Assistant icon" /> Asistente</a></li>
                        <li><a href="#"><img src={mercado_icon} alt="Market icon" /> Mercado</a></li>
                        <li><a href="#"><img src={player_icon} alt="Players icon" /> Jugadores</a></li>
                        <li><a href="#"><img src={settings_icon} alt="Settings icon" /> Configuración</a></li>
                    </ul>
                </nav>
            </div>

            <div className="know-more-ai">
                <img src={integrated_ai_logo} alt="IA Integrada logo" />
                <p>IA Integrada</p>
                <a>Saber más</a>
            </div>
        </aside>
    )
}

