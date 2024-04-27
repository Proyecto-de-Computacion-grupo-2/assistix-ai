import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import BestPlayerCard from "./player-card";

import bestPlayer from "../../../assets/images/best-player.jfif"

import '../../../styles/dashboard-page.scss'
import { useEffect, useState } from "react";
import { BestPlayer } from "../../../models/player";
import { getBestPlayers } from "../../../services/player-service/players-service";

export default function BestPlayers() {

    const [data, setData] = useState<BestPlayer[]>([] as BestPlayer[])

    useEffect(() => {
        getBestPlayers()
            .then(response => {
                setData(response)
            })
            .catch(error => {
                console.error('Error fetching best players', error)
            })
    }, [])

    return (
        <Container className="p-1 bg-white h-100 rounded-4 d-flex flex-column justify-content-center align-items-center custom-margin left-custom-margin" fluid>
            <Carousel className="flex-grow-1 h-100 w-100 m-0 p-0">
                {
                    data.map((player: BestPlayer, index: number) => {
                        return (
                            <Carousel.Item key={index} className="h-100">
                                <img src={bestPlayer} width={'100%'} className="rounded-4 h-auto" style={{ maxHeight: '24vh' }} />
                                <BestPlayerCard player={player} />
                                <Carousel.Caption>
                                    <strong className="text-white">Mejor jugador #{index + 1}</strong>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </Container>
    )
}