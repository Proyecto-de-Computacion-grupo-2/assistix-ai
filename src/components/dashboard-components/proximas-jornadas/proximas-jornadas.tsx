import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import MatchCard from "./next-round-card";

import matchImg from '../../../assets/futbol-2.jfif'

import './card.scss'

const matches = {
    "matches":
        [
            {
                local: 'Real Sociedad',
                localUrl: 'https://cdn.gomister.com/file/cdn-common/teams/16.png?version=20221205131749',
                visitante: 'Real Madrid',
                visitanteUrl: 'https://cdn.gomister.com/file/cdn-common/teams/3.png?version=20230321174517',
                hora: '20:00'
            },
            {
                local: 'Atletico de Madrid',
                localUrl: 'https://cdn.gomister.com/file/cdn-common/teams/1.png?version=20230321174517',
                visitante: 'Sevilla',
                visitanteUrl: 'https://cdn.gomister.com/file/cdn-common/teams/2.png?version=20230321174517',
                hora: '18:00'
            },
            {
                local: 'Valencia',
                localUrl: 'https://cdn.gomister.com/file/cdn-common/teams/4.png?version=20230321174517',
                visitante: 'Villareal',
                visitanteUrl: 'https://cdn.gomister.com/file/cdn-common/teams/5.png?version=20230321174517',
                hora: '16:00'
            },
            {
                local: 'Real Sociedad',
                localUrl: 'https://cdn.gomister.com/file/cdn-common/teams/16.png?version=20221205131749',
                visitante: 'Real Betis',
                visitanteUrl: 'https://cdn.gomister.com/file/cdn-common/teams/6.png?version=20230321174517',
                hora: '14:00'
            },
            {
                local: 'Getafe',
                localUrl: 'https://cdn.gomister.com/file/cdn-common/teams/7.png?version=20230321174517',
                visitante: 'Granada',
                visitanteUrl: 'https://cdn.gomister.com/file/cdn-common/teams/8.png?version=20230321174517',
                hora: '12:00'
            }
        ]
}


export default function NextGameweek() {
    return (
        <Container className="p-1 bg-white h-100 rounded-4 d-flex flex-column right-custom-margin" fluid>
            <Carousel className="flex-grow-1 h-100 w-100 m-0 p-0" >
                {
                    matches.matches.map((match, index) => {
                        return (
                            <Carousel.Item key={index} className="h-100">
                                <img src={matchImg} width={'100%'} className="rounded-4 h-auto" style={{ maxHeight: '24vh' }} />
                                <MatchCard match={match} />
                                <Carousel.Caption>
                                    <strong className="text-white">Proxima jornada</strong>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </Container>
    )
}