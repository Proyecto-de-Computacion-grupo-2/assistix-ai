import {Nav, Card, Button} from 'react-bootstrap';
import {FigureSoccer, HomeIcon, ChatBotIcon, SettingsIcon, MarketIcon} from '../icons/icons';
import assistix_ai_logo from '../../assets/assistix-ai-logo.png';
import integrated_ai_logo from '../../assets/integrated-ai-logo.png';
import './side_bar.scss'

export default function SideBar() {
    return (
        <aside className='rounded-4 h-100'>
            <Nav className="flex-column m-0">
                <Nav.Link href='/'>
                    <div className='d-flex align-items-center pt-3'>
                        <img className='img-fluid ms-2 me-2' style={{width: '40px', height: '40px'}} src={assistix_ai_logo} alt="Logo de assistix AI"/>
                        <p className='fw-bold text-sidebar'>ASSISTIX AI</p>
                    </div>
                </Nav.Link>
                <Nav.Link className='text-sidebar'>Main</Nav.Link>
                <Nav.Link href='/' className='mt-3 text-sidebar'><HomeIcon fill='black' className='me-3'/>Home</Nav.Link>
                <Nav.Link href="/assistant" className='mt-3 text-sidebar'><ChatBotIcon fill='black' className='me-3'/>Assistente</Nav.Link>
                <Nav.Link href="/market" className='mt-3 text-sidebar'><MarketIcon fill='black' className='me-3'/>Mercado</Nav.Link>
                <Nav.Link href="/players" className='mt-3 text-sidebar'><FigureSoccer fill='black' className='me-3'/>Jugadores</Nav.Link>
                <Nav.Link href="/settings" className='mt-3 text-sidebar'><SettingsIcon fill='black' className='me-3'/>Configuración</Nav.Link>
            </Nav>
            <Card className='pt-3 mt-5 ms-2 me-2 integrated-ai-color align-items-center text-center rounded-4'>
                <Card.Img variant="top" src={integrated_ai_logo} className='w-50'/>
                <Card.Body>
                    <Card.Title>IA Integrada</Card.Title>
                    <Button variant="dark">Saber más</Button>
                </Card.Body>
            </Card>
        </aside>
    )
}

