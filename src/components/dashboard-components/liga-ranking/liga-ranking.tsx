import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import './liga-ranking.scss'
import LocalLeague from './local-league/local-league'
import { LeagueUser } from '../../../models/league-user';
import getLeagueRanking from '../../../services/league-service/league-service';
import { LefRow, RightRow } from '../../shared-components/icons/icons';


export default function LeagueRanking() {

    const [ranking, setRanking] = useState<LeagueUser[]>([] as LeagueUser[])
    const [isLocalLeage, setIsLocalLeague] = useState<boolean>(false)
    const [tabla, setTabla] = useState<JSX.Element>(<iframe id="sofa-standings-embed-36-52376"
        src="https://widgets.sofascore.com/es-ES/embed/tournament/36/season/52376/standings/LaLiga?widgetTitle=LaLiga&showCompetitionLogo=true&v=2"
        style={{ width: '100%', minHeight: '59vh' }} />)

    useEffect(() => {
        getLeagueRanking()
            .then(ranking => {
                setRanking(ranking)
            })
            .catch(error => {
                console.error(error)
            })
    })

    const changeTable = (c: boolean) => {
        if (!c) {
            setTabla(<LocalLeague data={ranking} />)
            setIsLocalLeague(true)
        } else {
            setTabla(<iframe id="sofa-standings-embed-36-52376"
                src="https://widgets.sofascore.com/es-ES/embed/tournament/36/season/52376/standings/LaLiga?widgetTitle=LaLiga&showCompetitionLogo=true&v=2"
                style={{ width: '100%', minHeight: '59vh' }} />)
            setIsLocalLeague(false)
        }

    }

    return (
        <Container className='p-0 m-0' style={{ minHeight: '60vh' }}>
            <Row className='p-0 m-0 h-100'>
                <Col sm={1} xs={1} className='d-flex justify-content-center align-items-center p-0'>
                    <LefRow fill='#000' personalizedClass='custom-hover' action={() => changeTable(isLocalLeage)} />
                </Col>
                <Col sm={10} xs={10} className='p-0'>
                    {tabla}
                </Col>
                <Col sm={1} xs={1} className='d-flex justify-content-center align-items-center p-0'>
                    <RightRow fill='#000' personalizedClass='custom-hover' action={() => changeTable(isLocalLeage)} />
                </Col>
            </Row>
        </Container>
    );
}
