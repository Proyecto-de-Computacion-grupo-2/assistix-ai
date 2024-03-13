import { Container } from "react-bootstrap";
import PujadosCard from "./pujados-card/pujados-card";

export default function PujadosSection() {

    const pujados = true;

    return (
        <Container className="w-100 bg-white rounded-4 h-100 d-flex flex-column p-0 ms-1 my-1" style={{ minHeight: '30vh' }} fluid>
            <Container className="py-1 border-bottom m-0">
                <strong className="text-secondary">Movimientos pendientes</strong>
            </Container>
            {
                pujados ?
                    <Container className="flex-grow-1 px-1 scroll-section" style={{ maxHeight: '25vh' }}>
                        <PujadosCard />
                        <PujadosCard />
                        <PujadosCard />
                        <PujadosCard />
                        <PujadosCard />
                    </Container>
                    :
                    <Container className="flex-grow-1 px-1 scroll-section h-100 d-flex flex-column justify-content-center align-items-center">
                        <p className="text-secondary">No hay movimiento pendientes</p>
                        <button className="btn btn-outline-secondary">Ir al mercado</button>
                    </Container>
            }
        </Container>
    )
}