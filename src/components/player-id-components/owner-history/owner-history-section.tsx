import {Col, Container, Row} from "react-bootstrap";
import OwnerHistoryCard from "./owner-history-card.tsx";

export default function OwnerHistorySection(){
    return (
        <Container className="m-0 p-2 h-100" fluid>
            <strong className="text-secondary">Historial de Propietarios</strong>
            <Row className="h-auto d-flex justify-content-around border-bottom w-100 p-0 m-0" fluid>
                <Col sm={6} xs={6} className="text-center p-0 m-0 fw-bold">
                    De
                </Col>
                <Col sm={6} xs={6} className="text-center p-0 m-0 fw-bold">
                    Para
                </Col>
            </Row>
            <Container className="flex-grow-1 px-1 scroll-section" style={{maxHeight:"30vh"}} fluid>
                <OwnerHistoryCard />
                <OwnerHistoryCard />
                <OwnerHistoryCard />
                <OwnerHistoryCard />
                <OwnerHistoryCard />
                <OwnerHistoryCard />
            </Container>
        </Container>
    )
}