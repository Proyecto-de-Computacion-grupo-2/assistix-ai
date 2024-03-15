import { Col, Container, Row } from "react-bootstrap";
import RankingCard from "./local-card/local-card";

const tablaLocal = {
    'table': [
        {
            'position': 1,
            'name': 'admin',
            'points': 975,
            'value': 100
        },
        {
            'position': 2,
            'name': 'M31-G6-AcMilanesa',
            'points': 956,
            'value': 100
        }, {
            'position': 3,
            'name': 'admin',
            'points': 975,
            'value': 100
        },
        {
            'position': 4,
            'name': 'M31-G6-AcMilanesa',
            'points': 956,
            'value': 100
        },
        {
            'position': 5,
            'name': 'admin',
            'points': 975,
            'value': 100
        },
        {
            'position': 6,
            'name': 'M31-G6-AcMilanesa',
            'points': 956,
            'value': 100
        },
        {
            'position': 7,
            'name': 'admin',
            'points': 975,
            'value': 100
        },
        {
            'position': 8,
            'name': 'M31-G6-AcMilanesa',
            'points': 956,
            'value': 100
        }

    ]
}

export default function LocalLeague() {
    return (
        <Container className="h-100 p-0 d-flex align-items-center flex-column" fluid>
            <Row className="h-auto d-flex justify-content-around border-bottom w-100" fluid>
                <Col sm={1} className="text-center p-0 m-0">
                    Pos
                </Col>
                <Col sm={5} className="text-center p-0 m-0">
                    Usuario
                </Col>
                <Col sm={3} className="text-center p-0 m-0">
                    Puntos
                </Col>
                <Col sm={3} className="text-center p-0 m-0">
                    Valor
                </Col>
                <Container className="flex-grow-1 px-1 scroll-section d-flex flex-column align-items-center" style={{ maxHeight: '20vh' }}>
                    {
                        tablaLocal.table.map((team, index) => {
                            return (
                                <RankingCard team={team} key={index} />
                            )
                        })
                    }
                </Container>
            </Row>

        </Container>
    )
}