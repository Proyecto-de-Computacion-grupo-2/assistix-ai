import { useState } from 'react'
import { Container, Carousel } from 'react-bootstrap'
import { LeftArrowIcon, RightArrowIcon } from '../../icons/icons'

import './liga-ranking.scss'
import laLigaLogo from '../../../assets/laLigaLogo.jpg'
import misterLogo from '../../../assets/misterLogo.png'
import LocalLeague from './local-league/local-league'


export default function LigaRanking() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className='bg-white rounded-4'>
            <Carousel.Item style={{ minHeight: '30vh' }}>
                <iframe id="sofa-standings-embed-36-52376" src="https://widgets.sofascore.com/es-ES/embed/tournament/36/season/52376/standings/LaLiga?widgetTitle=LaLiga&showCompetitionLogo=true&v=2" style={{width: '100%', height:'350px'}}/>
            </Carousel.Item>
            <Carousel.Item style={{ minHeight: '30vh' }}>
                <div>
                    <img src={misterLogo} width={30} height={30}/>
                    <LocalLeague />
                </div>
            </Carousel.Item>
        </Carousel>
    );
}


/*
export default function LigaRanking() {

    const [laLiga, setLaLiga] = useState([laLigaLogo, misterLogo])
    const [isMister, setIsMister] = useState(false)

    const changeLeague = () => {
        setLaLiga([laLiga[1], laLiga[0]])
        setIsMister(!isMister)
    }

    return (
        <Container className="w-100 bg-white rounded-4 h-100 d-flex flex-column p-0 me-1 mb-1" style={{ minHeight: '30vh' }} fluid>
            <Container className="py-1 border-bottom m-0">
                <strong className="text-secondary">Tabla clasificación</strong>
                <Container className="d-flex justify-content-around align-items-center">
                    <img src={laLiga[1]} width={20} height={20} />
                    <button className='hover-change' onClick={changeLeague}><LeftArrowIcon fill='white' /> </button>
                    <img src={laLiga[0]} width={20} height={20} />
                    <button className='hover-change' onClick={changeLeague}> <RightArrowIcon fill='white' /></button>
                    <img src={laLiga[1]} width={20} height={20} />
                </Container>
            </Container>
            <Container className="flex-grow-1 px-1" style={{ maxHeight: '28vh' }}>
                {
                    isMister ? <LocalLeague /> : <iframe id="sofa-standings-embed-36-52376" src="https://widgets.sofascore.com/es-ES/embed/tournament/36/season/52376/standings/LaLiga?widgetTitle=LaLiga&showCompetitionLogo=true&v=2" style={{ width: '100%', height: '95%', maxWidth: '100%', maxHeight: '100' }} />
                }
            </Container>
        </Container>
    )
}
 */