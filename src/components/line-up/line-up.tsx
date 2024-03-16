import { useState } from 'react'
import BoxInfo from '../box-info/box-info'
import { LeftArrowIcon, RightArrowIcon } from '../icons/icons'
import PlayerCard from '../player-card/player-card'
import './line-up.scss'
import { Container } from 'react-bootstrap'

const plantillas = [
    {
        goalkeeper: {
            nombre: 'Herrera',
            puntuation: 13,
            img: 'https://assets-fantasy.llt-services.com/players/t450/p644/256x256/p644_t450_1_001_000.png'
        },
        defense: [
            {
                nombre: 'Lejeune',
                puntuation: 16,
                img: 'https://assets-fantasy.llt-services.com/players/t184/p1208/256x256/p1208_t184_1_001_000.png'
            },
            {
                nombre: 'Copete',
                puntuation: 14,
                img: 'https://assets-fantasy.llt-services.com/players/t181/p1482/256x256/p1482_t181_1_001_000.png'
            },
            {
                nombre: 'Mingueza',
                puntuation: 14,
                img: 'https://assets-fantasy.llt-services.com/players/t176/p991/256x256/p991_t176_1_001_000.png'
            }
        ],
        midfield: [
            {
                nombre: 'Parejo',
                puntuation: 19,
                img: 'https://assets-fantasy.llt-services.com/players/t449/p310/256x256/p310_t449_1_001_000.png'
            },
            {
                nombre: 'Bellingham',
                puntuation: 10,
                img: 'https://assets-fantasy.llt-services.com/players/t186/p1678/256x256/p1678_t186_1_001_000.png'
            },
            {
                nombre: 'Fran Perez',
                puntuation: 12,
                img: 'https://assets-fantasy.llt-services.com/players/t191/p1610/256x256/p1610_t191_1_001_000.png'
            },
            {
                nombre: 'Fermin',
                puntuation: 5,
                img: 'https://assets-fantasy.llt-services.com/players/t178/p1715/256x256/p1715_t178_1_001_000.png'
            },
            {
                nombre: 'Vermeeren',
                puntuation: 1,
                img: 'https://assets-fantasy.llt-services.com/players/t175/p1837/256x256/p1837_t175_1_001_000.png'
            }
        ],
        attack: [
            {
                nombre: 'En-Nesyri',
                puntuation: 15,
                img: 'https://assets-fantasy.llt-services.com/players/t179/p415/256x256/p415_t179_1_001_000.png'
            },
            {
                nombre: 'Sorloth',
                puntuation: 18,
                img: 'https://assets-fantasy.llt-services.com/players/t449/p1289/256x256/p1289_t449_1_001_000.png'
            },
            {
                nombre: 'Morata',
                puntuation: 10,
                img: 'https://assets-fantasy.llt-services.com/players/t175/p1486/256x256/p1486_t175_1_001_000.png'
            }
        ]
    },
    {
        goalkeeper: {
            nombre: 'Bellingham',
            puntuation: 10,
            img: 'https://assets-fantasy.llt-services.com/players/t186/p1678/256x256/p1678_t186_1_001_000.png'
        },
        defense: [
            {
                nombre: 'Bellingham',
                puntuation: 10,
                img: 'https://assets-fantasy.llt-services.com/players/t186/p1678/256x256/p1678_t186_1_001_000.png'
            },
            {
                nombre: 'Bellingham',
                puntuation: 10,
                img: 'https://assets-fantasy.llt-services.com/players/t186/p1678/256x256/p1678_t186_1_001_000.png'
            },
            {
                nombre: 'Bellingham',
                puntuation: 10,
                img: 'https://assets-fantasy.llt-services.com/players/t186/p1678/256x256/p1678_t186_1_001_000.png'
            },
            {
                nombre: 'Bellingham',
                puntuation: 10,
                img: 'https://assets-fantasy.llt-services.com/players/t186/p1678/256x256/p1678_t186_1_001_000.png'
            }
        ],
        midfield: [
            {
                nombre: 'Bellingham',
                puntuation: 10,
                img: 'https://assets-fantasy.llt-services.com/players/t186/p1678/256x256/p1678_t186_1_001_000.png'
            },
            {
                nombre: 'Bellingham',
                puntuation: 10,
                img: 'https://assets-fantasy.llt-services.com/players/t186/p1678/256x256/p1678_t186_1_001_000.png'
            },
            {
                nombre: 'Bellingham',
                puntuation: 10,
                img: 'https://assets-fantasy.llt-services.com/players/t186/p1678/256x256/p1678_t186_1_001_000.png'
            },
            {
                nombre: 'Bellingham',
                puntuation: 10,
                img: 'https://assets-fantasy.llt-services.com/players/t186/p1678/256x256/p1678_t186_1_001_000.png'
            }
        ],
        attack: [
            {
                nombre: 'Bellingham',
                puntuation: 10,
                img: 'https://assets-fantasy.llt-services.com/players/t186/p1678/256x256/p1678_t186_1_001_000.png'
            },
            {
                nombre: 'Bellingham',
                puntuation: 10,
                img: 'https://assets-fantasy.llt-services.com/players/t186/p1678/256x256/p1678_t186_1_001_000.png'
            },
        ]
    },
    {
        goalkeeper: {
            nombre: 'Bellingham',
            puntuation: 10,
            img: 'https://assets-fantasy.llt-services.com/players/t186/p1678/256x256/p1678_t186_1_001_000.png'
        },
        defense: [
            {
                nombre: 'Bellingham',
                puntuation: 10,
                img: 'https://assets-fantasy.llt-services.com/players/t186/p1678/256x256/p1678_t186_1_001_000.png'
            },
            {
                nombre: 'Bellingham',
                puntuation: 10,
                img: 'https://assets-fantasy.llt-services.com/players/t186/p1678/256x256/p1678_t186_1_001_000.png'
            }, {
                nombre: 'Bellingham',
                puntuation: 10,
                img: 'https://assets-fantasy.llt-services.com/players/t186/p1678/256x256/p1678_t186_1_001_000.png'
            }, {
                nombre: 'Bellingham',
                puntuation: 10,
                img: 'https://assets-fantasy.llt-services.com/players/t186/p1678/256x256/p1678_t186_1_001_000.png'
            }, {
                nombre: 'Bellingham',
                puntuation: 10,
                img: 'https://assets-fantasy.llt-services.com/players/t186/p1678/256x256/p1678_t186_1_001_000.png'
            }
        ],
        midfield: [
            {
                nombre: 'Bellingham',
                puntuation: 10,
                img: 'https://assets-fantasy.llt-services.com/players/t186/p1678/256x256/p1678_t186_1_001_000.png'
            },
            {
                nombre: 'Bellingham',
                puntuation: 10,
                img: 'https://assets-fantasy.llt-services.com/players/t186/p1678/256x256/p1678_t186_1_001_000.png'
            },
        ],
        attack: [
            {
                nombre: 'Bellingham',
                puntuation: 10,
                img: 'https://assets-fantasy.llt-services.com/players/t186/p1678/256x256/p1678_t186_1_001_000.png'
            },
            {
                nombre: 'Bellingham',
                puntuation: 10,
                img: 'https://assets-fantasy.llt-services.com/players/t186/p1678/256x256/p1678_t186_1_001_000.png'
            },
            {
                nombre: 'Bellingham',
                puntuation: 10,
                img: 'https://assets-fantasy.llt-services.com/players/t186/p1678/256x256/p1678_t186_1_001_000.png'
            },
        ]
    }
]

export default function LineUp() {

    const data = plantillas;
    const types = ['Plantilla actual', 'Mejor plantilla', 'Max. puntos']

    const [currentPlantilla, setCurrentPlantilla] = useState(0)

    const changePlantilla = (direction: string) => {
        if (direction === 'left') {
            if (currentPlantilla === 0) {
                setCurrentPlantilla(data.length - 1)
            } else {
                setCurrentPlantilla(currentPlantilla - 1)
            }
        } else {
            if (currentPlantilla === data.length - 1) {
                setCurrentPlantilla(0)
            } else {
                setCurrentPlantilla(currentPlantilla + 1)
            }
        }
    }

    const formation = data[currentPlantilla].defense.length + '-' + data[currentPlantilla].midfield.length + '-' + data[currentPlantilla].attack.length

    return (

        <Container className='bg-white rounded-4 h-100 d-flex align-items-center justify-content-center p-3' fluid>
            <Container className='d-flex flex-column h-100'>
                <strong className='text-secondary'>Plantilla</strong>
                <Container className='d-flex justify-content-around align-items-center selection-plantilla mb-2'>
                    <p className='fs-7 text-secondary'>{currentPlantilla === 0 ? types[types.length - 1] : types[currentPlantilla - 1]}</p>
                    <button className='change-button' onClick={() => changePlantilla('left')}><LeftArrowIcon fill='white' /> </button>
                    <strong className='fs-5'>{types[currentPlantilla]}</strong>
                    <button className='change-button' onClick={() => changePlantilla('up')}> <RightArrowIcon fill='white' /></button>
                    <p className='fs-7 text-secondary'>
                        {currentPlantilla === types.length - 1 ? types[0] : types[currentPlantilla + 1]}
                    </p>
                </Container>
                <Container className='futbol-campo rounded-4 p-3 shadow-lg flex-grow-1' fluid>
                    <Container className='d-flex lign-items-center justify-content-center' fluid>
                        {data[currentPlantilla].attack.map((player, index) => {
                            return <PlayerCard key={index} player={player} />
                        })
                        }
                    </Container>
                    <Container className='d-flex lign-items-center justify-content-center' fluid>
                        {data[currentPlantilla].midfield.map((player, index) => {
                            return <PlayerCard key={index} player={player} />
                        })}
                    </Container>
                    <Container className='d-flex lign-items-center justify-content-center' fluid>
                        {data[currentPlantilla].defense.map((player, index) => {
                            return <PlayerCard key={index} player={player} />
                        })}
                    </Container>
                    <Container className='d-flex lign-items-center justify-content-center' fluid>
                        <PlayerCard player={data[currentPlantilla].goalkeeper} />
                    </Container>
                    <BoxInfo info={formation} icon={<RightArrowIcon fill='black' />} bottom='10px' left='5px' />
                    <BoxInfo info='93.5 M' icon={<RightArrowIcon fill='black' />} bottom='10px' right='5px' />
                </Container>
                <Container className='d-flex justify-content-between align-items-center mt-2' fluid>
                    <p className='fs-4 fw-medium w-50'>17 Jugadores</p>
                    <Container className='d-flex justify-content-end align-items-center'>
                        <p className='fs-5 mx-2 fw-medium text-danger'>PT <strong className='fs-4 text-black'>2</strong></p>
                        <p className='fs-5 mx-2 fw-medium text-warning'>DF <strong className='fs-4 text-black'>5</strong></p>
                        <p className='fs-5 mx-2 fw-medium text-danger-emphasis'>MC <strong className='fs-4 text-black'>5</strong></p>
                        <p className='fs-5 mx-2 fw-medium text-primary'>DL <strong className='fs-4 text-black'>3</strong></p>
                    </Container>
                </Container>
            </Container>
        </Container>
    )
}