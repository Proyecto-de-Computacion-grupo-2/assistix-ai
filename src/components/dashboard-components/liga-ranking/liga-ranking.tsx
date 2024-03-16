import { useState } from 'react'
import { Carousel, Container } from 'react-bootstrap'

import './liga-ranking.scss'
import misterLogo from '../../../assets/misterLogo.png'
import LocalLeague from './local-league/local-league'


export default function LigaRanking() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className='bg-white rounded-4'>
            <Carousel.Item style={{ minHeight: '30vh', maxHeight: '30vh' }}>
                <iframe id="sofa-standings-embed-36-52376"
                    src="https://widgets.sofascore.com/es-ES/embed/tournament/36/season/52376/standings/LaLiga?widgetTitle=LaLiga&showCompetitionLogo=true&v=2"
                    style={{ width: '100%', height: '350px' }} />
            </Carousel.Item>
            <Carousel.Item style={{ minHeight: '30vh' }}>
                <Container className='d-flex flex-column justify-content-center align-items-center m-0 p-0'>
                    <LocalLeague />
                </Container>
            </Carousel.Item>
        </Carousel>
    );
}
