import {Card, Row,Col, Container,} from 'react-bootstrap'
import './player-card-body.scss'

function PlayerCardBody({name, position, value}) {
    return (
        <Card className='border-black rounded-4' style={{ width: '15rem' }}>
            <Card.Img variant="top" src="https://assets-fantasy.llt-services.com/players/t186/p1678/256x256/p1678_t186_1_001_000.png" />
            <Card.Body>
                <Card.Title className='fw-bold'>{name}</Card.Title>
                <Card.Subtitle>{value} € || {position}</Card.Subtitle>
            </Card.Body>
        </Card>
    );
}


export default function PlayersGrid() {

    const players = [
        {
            name:'Jude Bellingham',
            position: 'MC',
            value: '10.000.00'
        },
        {
            name:'Jude Bellingham',
            position: 'MC',
            value: '10.000.00'
        },
        {
            name:'Jude Bellingham',
            position: 'MC',
            value: '10.000.00'
        },
        {
            name:'Jude Bellingham',
            position: 'MC',
            value: '10.000.00'
        },
        {
            name:'Jude Bellingham',
            position: 'MC',
            value: '10.000.00'
        },
        {
            name:'Jude Bellingham',
            position: 'MC',
            value: '10.000.00'
        },
        {
            name:'Jude Bellingham',
            position: 'MC',
            value: '10.000.00'
        },
        {
            name:'Jude Bellingham',
            position: 'MC',
            value: '10.000.00'
        },
        {
            name:'Jude Bellingham',
            position: 'MC',
            value: '10.000.00'
        },
        {
            name:'Jude Bellingham',
            position: 'MC',
            value: '10.000.00'
        },        {
            name:'Jude Bellingham',
            position: 'MC',
            value: '10.000.00'
        },
        {
            name:'Jude Bellingham',
            position: 'MC',
            value: '10.000.00'
        },
        {
            name:'Jude Bellingham',
            position: 'MC',
            value: '10.000.00'
        }
    ]

    return (
        <Container className='bg-white rounded-4 scrollable-container' fluid>
            <Row className='gap-4 ms-4 me-4'>
                <Container fluid className='mt-5 mb-5'>
                    SEARCH BAR
                </Container>
                {players.map((player, index) => (
                    <Col key={index} className='gap-2'> {/* Provide a unique key */}
                        <PlayerCardBody {...player}/> {/* Spread operator to pass props */}
                    </Col>
                ))}
            </Row>
        </Container>
    );
}