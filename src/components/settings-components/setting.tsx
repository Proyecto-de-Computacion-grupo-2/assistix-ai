import {useNavigate} from "react-router-dom";
import { Accordion, Form, Button } from 'react-bootstrap';
import { ReactElement } from 'react';
import { FigureSoccer, MarketIcon, EmailIcon, BellIcon, MessageIcon, FootballIcon } from '../shared-components/icons/icons';
import './setting.scss';


interface NotificationOptionProps {
    icon: ReactElement;
    label: string;
}

interface NotificationCategoryProps {
    eventKey: string;
    title: string;
    icon: ReactElement;
    description: string; // Add this line
    options: NotificationOptionProps[];
}

interface Option {
    label: string;
    iconName: keyof typeof iconMapping;
}

interface Category {
    eventKey: string;
    title: string;
    iconName: keyof typeof iconMapping;
    description: string;
    options: Option[];
}

const iconMapping: { [key: string]: ReactElement } = {
    FigureSoccer: <FigureSoccer fill='black' className='me-2'/>,
    MarketIcon: <MarketIcon fill='black' className='me-2'/>,
    EmailIcon: <EmailIcon fill='black' className='me-2'/>,
    BellIcon: <BellIcon fill='black' className='me-2'/>,
    MessageIcon: <MessageIcon fill='black' className='me-2'/>,
    FootballIcon: <FootballIcon fill='black' className='me-2'/>,
};


const NotificationOption: React.FC<NotificationOptionProps> = ({ icon, label }) => (
    <div className='d-flex align-items-center justify-content-between mb-2'>
        <div className='d-flex align-items-center'>
            {icon}
            <p>{label}</p>
        </div>
        <Form><Form.Check type="switch" /></Form>
    </div>
);

const NotificationCategory: React.FC<NotificationCategoryProps> = ({eventKey, title, icon, description, options}) => (
    <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>
            {icon}
            {title}
        </Accordion.Header>
        <Accordion.Body>
            <p className='mt-3 mb-4'>{description}</p>
            {options.map((option, index) => (
                <NotificationOption key={index} {...option} />
            ))}
        </Accordion.Body>
    </Accordion.Item>
);

const Settings: React.FC = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('role');
        navigate('/login');
    };

    const categories: Category[] = [
        {
            eventKey: "0",
            title: "Jugador",
            iconName: "FigureSoccer",
            description: "Mantente al tanto del estado físico de tus jugadores. Recibe alertas inmediatas sobre lesiones o cambios en su condición para poder realizar ajustes en tu equipo a tiempo.",
            options: [
                { label: "Aplicación", iconName: "BellIcon" },
                { label: "Mensaje", iconName: "MessageIcon" },
                { label: "Correo electrónico", iconName: "EmailIcon" },
            ],
        },
        {
            eventKey: "1",
            title: "Jugador",
            iconName: "FigureSoccer",
            description: "Mantente al tanto del estado físico de tus jugadores. Recibe alertas inmediatas sobre lesiones o cambios en su condición para poder realizar ajustes en tu equipo a tiempo.",
            options: [
                { label: "Aplicación", iconName: "BellIcon" },
                { label: "Mensaje", iconName: "MessageIcon" },
                { label: "Correo electrónico", iconName: "EmailIcon" },
            ],
        },
        {
            eventKey: "2",
            title: "Jornada",
            iconName: "FootballIcon",
            description: "Prepárate para cada jornada con notificaciones que te informan sobre el inicio de la misma. Asegúrate de tener tu equipo listo para competir y aprovechar cada oportunidad.",
            options: [
                { label: "Aplicación", iconName: "BellIcon" },
                { label: "Mensaje", iconName: "MessageIcon" },
                { label: "Correo electrónico", iconName: "EmailIcon" },
            ],
        },
        {
            eventKey: "3",
            title: "Jornada",
            iconName: "FootballIcon",
            description: "Prepárate para cada jornada con notificaciones que te informan sobre el inicio de la misma. Asegúrate de tener tu equipo listo para competir y aprovechar cada oportunidad.",
            options: [
                { label: "Aplicación", iconName: "BellIcon" },
                { label: "Mensaje", iconName: "MessageIcon" },
                { label: "Correo electrónico", iconName: "EmailIcon" },
            ],
        },
        {
            eventKey: "4",
            title: "Mercado",
            iconName: "MarketIcon",
            description: "Sé el primero en saber cuándo un jugador está disponible en el mercado. Estas notificaciones te permiten actuar rápidamente para hacer las mejores adquisiciones y fortalecer tu equipo.",
            options: [
                { label: "Aplicación", iconName: "BellIcon" },
                { label: "Mensaje", iconName: "MessageIcon" },
                { label: "Correo electrónico", iconName: "EmailIcon" },
            ],
        },
        {
            eventKey: "5",
            title: "Mercado",
            iconName: "MarketIcon",
            description: "Sé el primero en saber cuándo un jugador está disponible en el mercado. Estas notificaciones te permiten actuar rápidamente para hacer las mejores adquisiciones y fortalecer tu equipo.",
            options: [
                { label: "Aplicación", iconName: "BellIcon" },
                { label: "Mensaje", iconName: "MessageIcon" },
                { label: "Correo electrónico", iconName: "EmailIcon" },
            ],
        },
    ];

    return (
        <main className='p-5 rounded-4 bg-white'>
            <div>
                <h3 className='mb-4'>Configuración de notificaciones</h3>
                <p className='mb-3'>De modo de brindarte una experiencia única como usuario te ofrecemos la siguiente
                    configuración de notificaciones en la aplicación:</p>
            </div>
            <Accordion>
                {categories.map((category, index) => (
                    <NotificationCategory
                        key={index}
                        eventKey={category.eventKey}
                        title={category.title}
                        icon={iconMapping[category.iconName]}
                        description={category.description}
                        options={category.options.map(option => ({
                            ...option,
                            icon: iconMapping[option.iconName]
                        }))}
                    />
                ))}
            </Accordion>
            <div className="d-grid m-5">
                <Button variant="dark" size="lg" className='rounded-4' onClick={handleLogout}>
                    Cerrar Sessión
                </Button>
            </div>
        </main>
    );
}

export default Settings;
