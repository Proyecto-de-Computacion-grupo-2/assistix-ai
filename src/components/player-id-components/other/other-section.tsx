import {Col, Container, Row} from "react-bootstrap";
import OtherCard from "./other-card.tsx";

export default function OtherSection(){
    return (
        <Container className="m-0 p-2 h-100" fluid>
          <strong className="text-secondary">Otros</strong>
            <Row className="h-auto d-flex justify-content-around border-bottom w-100 p-0 m-0" fluid>
                <Col sm={2} xs={2} className="text-center p-0 m-0 fw-bold">
                    Tipos
                </Col>
                <Col sm={5} xs={5} className="text-center p-0 m-0 fw-bold">
                    Desde
                </Col>
                <Col sm={5} xs={5} className="text-center p-0 m-0 fw-bold">
                    Hasta
                </Col>
            </Row>
            <Container className="flex-grow-1 px-1 scroll-section" style={{maxHeight:"30vh"}} fluid>
                <OtherCard />
                <OtherCard />
                <OtherCard />
                <OtherCard />
                <OtherCard />
            </Container>
        </Container>
    )
}