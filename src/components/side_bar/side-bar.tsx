import home_icon from '../../assets/house.fill.svg';
import chatbot_icon from '../../assets/sparkles.svg';
import mercado_icon from '../../assets/arrow.left.arrow.right.svg';
import player_icon from '../../assets/figure.soccer.svg';
import settings_icon from '../../assets/gearshape.fill.svg';
import assistix_ai_logo from '../../assets/assistix-ai-logo.png';
import integrated_ai_logo from '../../assets/integrated-ai-logo.png';
import './side_bar.scss'


export default function SideBar() {
    return (
        <aside className='row rounded-4' >
            <div className='col-2 ms-4'>
                <div className="d-flex align-items-center ms-1 mb-2 pt-3">
                    <img className='img-fluid w-25 h-25 me-2' src={assistix_ai_logo} alt="ASSISTIX AI Logo"/>
                    <p className='aqua-color-highlight fw-bold'>ASSISTIX AI</p>
                </div>
                <nav className="navbar mt-3">
                    <ul className="navbar-nav">
                        <p className='aqua-color-highlight'>Main</p>
                        <li className='nav-iem'><a className='nav-link align-items-center' href="#"><img
                            className='me-2' src={home_icon} alt="Home icon"/>Home</a></li>
                        <li className='nav-iem'><a className='nav-link align-items-center' href="#"><img
                            className='me-2' src={chatbot_icon} alt="Assistant icon"/> Asistente</a></li>
                        <li className='nav-iem'><a className='nav-link align-items-center' href="#"><img
                            className='me-2' src={mercado_icon} alt="Market icon"/>Mercado</a></li>
                        <li className='nav-iem'><a className='nav-link align-items-center' href="#"><img
                            className='me-2' src={player_icon} alt="Players icon"/>Jugadores</a></li>
                        <li className='nav-iem'><a className='nav-link align-items-center' href="#"><img
                            className='me-2' src={settings_icon} alt="Settings icon"/>Configuración</a></li>
                    </ul>
                </nav>
                <div className="d-flex flex-column justify-content-center text-center align-items-center border rounded-3 know-more-ai mt-4 pt-3">
                    <img className='img-fluid w-60 h-60 me-2' src={integrated_ai_logo} alt="IA Integrada logo"/>
                    <p>IA Integrada</p>
                    <a>Saber más</a>
                </div>
            </div>
        </aside>
    )
}

