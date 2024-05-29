import { Button } from 'react-bootstrap';
import './setting.scss';

const Settings: React.FC = () => {

    const handleLogout = () => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('role');
        localStorage.removeItem('id_user');
        window.location.reload();
    };

    return (
        <main className='p-5 rounded-4 bg-white'>
            <h2>Configuración</h2>
            <p>Actualmente estamos trabajando para mejorar su experenica de personalización del producto. Para evitar conflictos hemos deshabilitado la posibilidad de personalizar notificacions por lo que ahora mismo solo se puede cerrar sesión. Disculpen las molestias y les avisaremos pronto con nueva información.</p>
            <div className="d-grid m-5">
                <Button variant="dark" size="lg" className='rounded-4' onClick={handleLogout}>Cerrar Sessión</Button>
            </div>
        </main>
    );
}

export default Settings;