import { Accordion, Form } from 'react-bootstrap';
import { ReactElement } from 'react';
import { FigureSoccer, MarketIcon, EmailIcon, BellIcon, MessageIcon, FootballIcon } from '../icons/icons';
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

    const categories: Category[] = [
        {
            eventKey: "0",
            title: "Jugador",
            iconName: "FigureSoccer",
            description: "Notificaciones que recibes cuando un jugador está lesionado.",
            options: [
                { label: "Aplicación", iconName: "BellIcon" },
                { label: "Mensaje", iconName: "MessageIcon" },
                { label: "Correo electrónico", iconName: "EmailIcon" },
            ],
        },
        {
            eventKey: "1",
            title: "Jornada",
            iconName: "FootballIcon",
            description: "Notificaciones que recibes antes de empezar una jornada.",
            options: [
                { label: "Aplicación", iconName: "BellIcon" },
                { label: "Mensaje", iconName: "MessageIcon" },
                { label: "Correo electrónico", iconName: "EmailIcon" },
            ],
        },
        {
            eventKey: "2",
            title: "Mercado",
            iconName: "MarketIcon",
            description: "Notificaciones que recibes cuando un jugador se lanza al mercado.",
            options: [
                { label: "Aplicación", iconName: "BellIcon" },
                { label: "Mensaje", iconName: "MessageIcon" },
                { label: "Correo electrónico", iconName: "EmailIcon" },
            ],
        },
    ];

    return (
        <main className='p-5 mt-4 ms-1 rounded-4 main'>
            <div>
                <h3 className='mb-4'>Configuración de notificaciones</h3>
                <p className='mb-3'>De modo de brindarte una experiencia única como usuario te ofrecemos la siguiente configuración de notificaciones en la aplicación:</p>
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
        </main>
    );
}

export default Settings;
