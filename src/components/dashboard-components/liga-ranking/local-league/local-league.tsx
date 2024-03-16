import {Col, Container, Row} from "react-bootstrap";
import RankingCard from "./local-card/local-card";
import misterLogo from '../../../../assets/misterLogo.png'


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
        ,
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
                <Container className='d-flex text-center mt-4 mb-4 fw-bold'>
                    <img src={misterLogo} width={30} height={30} className='me-2'/>
                    <p>Mister Mundo Deportivo</p>
                </Container>
                <Col sm={5} className="text-center p-0 m-0 fw-bold">
                    # Equipo
                </Col>
                <Col sm={3} className="text-center p-0 m-0 fw-bold">
                    Puntos
                </Col>
                <Col sm={3} className="text-center p-0 m-0 fw-bold">
                    Valor
                </Col>
            </Row>
            <Container className="flex-grow-1 px-1 scroll-section d-flex flex-column align-items-center"
                       style={{maxHeight: '24vh'}}>
                {
                    tablaLocal.table.map((team, index) => {
                        return (
                            <RankingCard team={team} key={index}/>
                        )
                    })
                }
            </Container>
        </Container>
    )
}