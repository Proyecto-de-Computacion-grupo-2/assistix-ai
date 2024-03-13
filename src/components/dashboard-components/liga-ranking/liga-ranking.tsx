import { Container } from 'react-bootstrap'
import { LeftArrowIcon, RightArrowIcon } from '../../icons/icons'
import './liga-ranking.scss'

export default function LigaRanking() {
    return (
        <Container className="w-100 bg-white rounded-4 h-100 d-flex flex-column p-0 me-1 mb-1" style={{ minHeight: '30vh' }} fluid>
            <Container className="py-1 border-bottom m-0">
                <strong className="text-secondary">Tabla clasificación</strong>
                <Container className="d-flex justify-content-around align-items-center">
                    <p>Mister liga</p>
                    <button className='hover-change'><LeftArrowIcon fill='white' /> </button>
                    <strong className='fs-5'>La liga</strong>
                    <button className='hover-change' > <RightArrowIcon fill='white' /></button>
                    <p>Mister liga</p>
                </Container>
            </Container>
            <Container className="flex-grow-1 px-1" style={{ maxHeight: '28vh' }}>
                {/* <iframe id="sofa-standings-embed-36-52376" src="https://widgets.sofascore.com/es-ES/embed/tournament/36/season/52376/standings/LaLiga?widgetTitle=LaLiga&showCompetitionLogo=true&v=2" style={{ width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100' }} /> */}
            </Container>
        </Container>
    )
}