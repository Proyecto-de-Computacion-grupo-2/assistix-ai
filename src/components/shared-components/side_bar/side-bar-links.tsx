import {Container} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {ChatBotIcon, FigureSoccer, HomeIcon, MarketIcon, SettingsIcon} from "../icons/icons.tsx";

const navLinks = [
    { path: '/', label: 'Home', Icon: HomeIcon },
    { path: '/assistant', label: 'Asistente', Icon: ChatBotIcon },
    { path: '/market', label: 'Mercado', Icon: MarketIcon },
    { path: '/players', label: 'Jugadores', Icon: FigureSoccer },
    { path: '/settings', label: 'Ajustes', Icon: SettingsIcon },
];

export default function SideBarComponent() {
    return (
        <Container className="m-0 p-0 d-flex flex-column gap-4" fluid>
            {navLinks.map(({ path, label, Icon }) => (
                <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) =>
                        isActive ? 'd-flex flex-row gap-2 my-2 w-100 align-items-center link-offset-2 link-underline link-underline-opacity-0 fs-5 text-black mt-3 mb-3 fw-bold' :
                            'd-flex flex-row gap-2 my-2 w-100 align-items-center link-offset-2 link-underline link-underline-opacity-0 fs-5 text-black mt-3 mb-3'
                    }>
                    <Icon fill='black' className="ms-1"/>
                    {label}
                </NavLink>
            ))}
        </Container>
    );
}