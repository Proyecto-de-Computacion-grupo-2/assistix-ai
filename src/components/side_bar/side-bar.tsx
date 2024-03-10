import assistix_ai_logo from '../../assets/assistix-ai-logo.png';
import integrated_ai_logo from '../../assets/integrated-ai-logo.png';
import { FigureSoccer, HomeIcon, ChatBotIcon, SettingsIcon, MarketIcon } from '../icons/icons';
import './side_bar.scss'

import { Nav, Card, Button } from 'react-bootstrap';


export default function SideBar() {
    return (
        <aside style={{ height: '100%', backgroundColor: 'white' }} className='rounded-4'>
            <div className='d-flex align-items-center pt-3'>
                <img className='img-fluid ms-2 me-2' style={{ width: '40px', height: '40px' }} src={assistix_ai_logo} alt="Logo de assistix AI"/>
                <p className='fw-bold aqua-color-highlight'>ASSISTIX AI</p>
            </div>
            <Nav defaultActiveKey="/home" className="flex-column mt-5">
                <Nav.Link className='aqua-color-highlight'>Main</Nav.Link>
                <Nav.Link href="/home" className='mt-3 text-sidebar'><HomeIcon fill='black' className='me-3'/>Home</Nav.Link>
                <Nav.Link eventKey="link-1" className='mt-3 text-sidebar'><ChatBotIcon fill='black' className='me-3'/>Assistente</Nav.Link>
                <Nav.Link eventKey="link-2" className='mt-3 text-sidebar'><MarketIcon fill='black' className='me-3'/>Mercado</Nav.Link>
                <Nav.Link eventKey="link-3" className='mt-3 text-sidebar'><FigureSoccer fill='black' className='me-3'/>Jugadores</Nav.Link>
                <Nav.Link eventKey="link-4" className='mt-3 text-sidebar'><SettingsIcon fill='black' className='me-3'/>Configuración</Nav.Link>
            </Nav>
            <Card className='pt-3 mt-5 me-2 integrated-ai-color d-flex align-items-center custom-card-size'>
                <Card.Img variant="top" src={integrated_ai_logo}/>
                <Card.Body>
                    <Card.Title>IA Integrada</Card.Title>
                    <Button variant="dark">Saber más</Button>
                </Card.Body>
            </Card>
        </aside>

        // <aside className='row rounded-4' >
        //     <div className='col-2 ms-4'>
        //         <div className="d-flex align-items-center ms-1 mb-2 pt-3">
        //             <img className='img-fluid w-25 h-25 me-2' src={assistix_ai_logo} alt="ASSISTIX AI Logo" />
        //             <p className='aqua-color-highlight fw-bold'>ASSISTIX AI</p>
        //         </div>
        //         <nav className="navbar mt-3">
        //             <ul className="navbar-nav">
        //                 <p className='aqua-color-highlight'>Main</p>
        //                 <li className='nav-iem'><a className='nav-link align-items-center' href="#"><img
        //                     className='me-2' src={home_icon} alt="Home icon" />Home</a></li>
        //                 <li className='nav-iem'><a className='nav-link align-items-center' href="#"><img
        //                     className='me-2' src={chatbot_icon} alt="Assistant icon" /> Asistente</a></li>
        //                 <li className='nav-iem'><a className='nav-link align-items-center' href="#"><img
        //                     className='me-2' src={mercado_icon} alt="Market icon" />Mercado</a></li>
        //                 <li className='nav-iem'><a className='nav-link align-items-center' href="#"><FigureSoccer fill='black' className='me-2' />Jugadores</a></li>
        //                 <li className='nav-iem'><a className='nav-link align-items-center' href="#"><img
        //                     className='me-2' src={settings_icon} alt="Settings icon" />Configuración</a></li>
        //             </ul>
        //         </nav>
        //         <div className="d-flex flex-column justify-content-center text-center align-items-center border rounded-3 know-more-ai mt-4 pt-3">
        //             <img className='img-fluid w-60 h-60 me-2' src={integrated_ai_logo} alt="IA Integrada logo" />
        //             <p>IA Integrada</p>
        //             <a>Saber más</a>
        //         </div>
        //     </div>
        // </aside>
    )
}

