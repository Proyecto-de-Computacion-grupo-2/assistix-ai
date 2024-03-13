import { LeftArrowIcon, RightArrowIcon } from '../../icons/icons'
import './liga-ranking.scss'

export default function LigaRanking() {
    return (
        <div className="container bg-white h-100 p-1 rounded-4 d-flex flex-column">
            <div className="container d-flex flex-column py-1" style={{ height: 'auto' }}>
                <strong className='text-secondary'>Tabla clasificación</strong>
                <div className="d-flex justify-content-around align-items-center">
                    <p>Mister liga</p>
                    <button className='hover-change'><LeftArrowIcon fill='white' /> </button>
                    <strong className='fs-5'>La liga</strong>
                    <button className='hover-change' > <RightArrowIcon fill='white' /></button>
                    <p>Mister liga</p>
                </div>
            </div>
            <div className="container flex-grow-1 p-1" >
                {/* <iframe id="sofa-standings-embed-36-52376" src="https://widgets.sofascore.com/es-ES/embed/tournament/36/season/52376/standings/LaLiga?widgetTitle=LaLiga&showCompetitionLogo=true&v=2" style={{ width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100' }} /> */}
            </div>

        </div >
    )
}