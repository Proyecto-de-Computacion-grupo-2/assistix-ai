import { Container } from "react-bootstrap";
import PujadosCard from "./pujados-card/pujados-card";
import '../../../styles/dashboard-page.scss'
import { Link } from "react-router-dom";


export default function BidSection() {

    const pujados = false;

    return (
        <Container className="p-0 m-0 d-flex flex-column" fluid>
            <Container className="py-3 border-bottom m-0" fluid>
                <strong className="text-secondary">Movimientos pendientes</strong>
            </Container>
            {
                pujados ?
                    <Container className="flex-grow-1 px-1 scroll-section" style={{ maxHeight: '78vh' }} fluid>
                        <PujadosCard />
                        <PujadosCard />
                        <PujadosCard />
                        <PujadosCard />
                        <PujadosCard />
                        <PujadosCard />
                        <PujadosCard />
                        <PujadosCard />
                    </Container>
                    :
                    <Container className="flex-grow-1 p-4 scroll-section h-100 d-flex flex-column justify-content-center align-items-center" fluid>
                        <p className="text-secondary">No hay movimiento pendientes</p>
                        <Link to='/market' className="btn btn-outline-secondary">Ir al mercado</Link>
                    </Container>
            }
        </Container>

    )
}