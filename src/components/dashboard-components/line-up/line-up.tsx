import { useEffect, useState } from 'react'
import BoxInfo from './box-info/box-info.tsx'
import { LeftArrowIcon, RightArrowIcon } from '../../shared-components/icons/icons.tsx'
import PlayerCard, { PredictionPlayerCard } from '../player-card/player-card.tsx'
import './line-up.scss'
import { Container } from 'react-bootstrap'

import '../../../styles/dashboard-page.scss'
import { PlayerWithPointPrediction, PlayersUser } from '../../../models/player.ts'
import { LineUps, getRecommendationsLineUps, getUserPlayers } from '../../../services/player-service/players-service.ts'
import NormalPlayerCard from '../player-card/player-card.tsx'

export default function LineUp() {

    const types = ['Mi equipo', 'Fantasy', 'Max. puntos', 'Con mercado']

    const [currentPlantilla, setCurrentPlantilla] = useState<number>(0)
    const [plantilla, setPlantilla] = useState<any>([] as PlayersUser[])
    const [lineUps, setLineUps] = useState<LineUps[]>([] as LineUps[])

    useEffect(() => {
        getUserPlayers(12705845)
            .then(players => {
                setPlantilla(players);
            })
            .catch(error => {
                console.error(error);
            })

        getRecommendationsLineUps(12705845)
            .then(lineUps => {
                setLineUps(lineUps);
            })
            .catch(error => {
                console.error(error);
            })

    }, [])

    const changePlantilla = (direction: string) => {

        if (direction === 'left') {
            if (currentPlantilla === 0) {
                setCurrentPlantilla(types.length - 1)
            } else {
                setCurrentPlantilla(currentPlantilla - 1)
            }
        } else {
            if (currentPlantilla === types.length - 1) {
                setCurrentPlantilla(0)
            } else {
                setCurrentPlantilla(currentPlantilla + 1)
            }
        }
    }

    const dataLineUp = (index: number) => {
        switch (index) {
            case 1:
                return 2;
            case 2:
                return 0;
            case 3:
                return 1;
            default:
                return 0;
        }
    }

    const getFormation = (lineUp: LineUps) => {
        return lineUp.defense.length + '-' + lineUp.midfield.length + '-' + lineUp.attack.length
    }

    const getLineUpValue = (lineUp: LineUps) => {
        let value = 0;
        lineUp.defense.forEach((player: PlayerWithPointPrediction) => {
            value += player.player_value
        })
        lineUp.midfield.forEach((player: PlayerWithPointPrediction) => {
            value += player.player_value
        })
        lineUp.attack.forEach((player: PlayerWithPointPrediction) => {
            value += player.player_value
        })
        value += lineUp.goalkeeper.player_value

        return parseFloat((value / 1000000).toFixed(1))
    }

    const getPlantiilaValue = () => {
        let value = 0;
        plantilla.forEach((player: PlayersUser) => {
            value += player.player_value
        })
        return parseFloat((value / 1000000).toFixed(1))
    }

    const getPlayerTypesLength = (id: number) => {
        return plantilla.filter((player: PlayersUser) => player.position === id).length
    }

    return (

        <Container className='bg-white rounded-4 h-100 d-flex align-items-center justify-content-center p-3 ms-md-1' style={{ minHeight: '700px' }} fluid>
            <Container className='d-flex flex-column h-100'>
                <strong className='text-secondary'>Plantilla</strong>

                {
                    plantilla.length === 0 && lineUps.length === 0 ?
                        <Container className='futbol-campo rounded-4 shadow-lg flex-grow-1 d-flex justify-content-center align-items-center' fluid>
                            <p className='text-light fs-3 fw-bolder'>No hay datos disponibles</p>
                        </Container>
                        :
                        <>
                            <Container className='d-flex justify-content-around align-items-center selection-plantilla mb-2'>
                                <p className='fs-7 text-secondary text-truncate'>{currentPlantilla === 0 ? types[types.length - 1] : types[currentPlantilla - 1]}</p>
                                <button className='change-button' onClick={() => changePlantilla('left')}><LeftArrowIcon fill='white' /> </button>
                                <strong className='fs-5'>{types[currentPlantilla]}</strong>
                                <button className='change-button' onClick={() => changePlantilla('up')}> <RightArrowIcon fill='white' /></button>
                                <p className='fs-7 text-secondary text-truncate'>
                                    {currentPlantilla === types.length - 1 ? types[0] : types[currentPlantilla + 1]}
                                </p>
                            </Container>
                            <Container className='futbol-campo rounded-4 shadow-lg flex-grow-1 d-flex justify-content-center' fluid>
                                {
                                    currentPlantilla === 0 ?
                                        <Container className='d-flex flex-wrap m-0 p-0 justify-content-center align-content-center' fluid>
                                            {
                                                plantilla.length != 0 ?
                                                    plantilla.map((player: PlayersUser, index: number) => {
                                                        return <NormalPlayerCard key={index} player={player} />
                                                    }) :
                                                    <p>No tienes jugadores en tu plantilla</p>
                                            }
                                            <BoxInfo info={`${getPlantiilaValue()} M`} icon={<RightArrowIcon fill='black' />} bottom='10px' right='5px' />
                                        </Container>
                                        :
                                        <Container className='custom-line-up  flex-grow-1'>
                                            <Container className='d-flex justify-content-center flex-wrap p-0 m-0' fluid>
                                                {lineUps[dataLineUp(currentPlantilla)].attack?.map((player: PlayerWithPointPrediction, index: number) => {
                                                    return <PredictionPlayerCard key={index} player={player} />
                                                })}
                                            </Container>
                                            <Container className='d-flex  justify-content-center flex-wrap p-0 m-0' fluid>
                                                {lineUps[dataLineUp(currentPlantilla)].midfield?.map((player: PlayerWithPointPrediction, index: number) => {
                                                    return <PredictionPlayerCard key={index} player={player} />
                                                })}
                                            </Container>
                                            <Container className='d-flex justify-content-center flex-wrap p-0 m-0' fluid>
                                                {lineUps[dataLineUp(currentPlantilla)].defense?.map((player: PlayerWithPointPrediction, index: number) => {
                                                    return <PredictionPlayerCard key={index} player={player} />
                                                })}
                                            </Container>
                                            <Container className='d-flex  justify-content-center flex-wrap p-0 m-0' fluid>
                                                <PredictionPlayerCard player={lineUps[dataLineUp(currentPlantilla)].goalkeeper} />
                                            </Container>
                                            <BoxInfo info={getFormation(lineUps[dataLineUp(currentPlantilla)])} icon={<RightArrowIcon fill='black' />} bottom='10px' left='5px' />
                                            <BoxInfo info={`${getLineUpValue(lineUps[dataLineUp(currentPlantilla)])} M`} icon={<RightArrowIcon fill='black' />} bottom='10px' right='5px' />
                                        </Container>
                                }

                            </Container>
                            <Container className='d-flex justify-content-between align-items-center mt-2' fluid>
                                <p className='fs-4 fw-medium w-50'>{plantilla.length} Jugadores</p>
                                <Container className='d-flex justify-content-end align-items-center'>
                                    <p className='fs-5 mx-2 fw-medium text-danger'>PT <strong className='fs-4 text-black'>{getPlayerTypesLength(1)}</strong></p>
                                    <p className='fs-5 mx-2 fw-medium text-warning'>DF <strong className='fs-4 text-black'>{getPlayerTypesLength(2)}</strong></p>
                                    <p className='fs-5 mx-2 fw-medium text-danger-emphasis'>MC <strong className='fs-4 text-black'>{getPlayerTypesLength(3)}</strong></p>
                                    <p className='fs-5 mx-2 fw-medium text-primary'>DL <strong className='fs-4 text-black'>{getPlayerTypesLength(4)}</strong></p>
                                </Container>
                            </Container></>
                }
            </Container>
        </Container>
    )
}