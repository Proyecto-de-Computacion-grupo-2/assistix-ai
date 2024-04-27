import {Container} from "react-bootstrap";
import {Player} from "../../../models/player.ts";
import {NavLink} from "react-router-dom";

function getPosition(position: number) {
    switch (position) {
        case 1:
            return 'PT';
        case 2:
            return 'DF';
        case 3:
            return 'MC';
        case 4:
            return 'DL';
    }
}

export default function PlayerFaceCard({player, children, onGraphClick}: { player: Player, children: React.ReactNode, onGraphClick: () => void }) {

    return (
        <Container className="container border-top border-bottom d-flex flex-row justify-content-between align-items-center py-1" fluid>
            <NavLink to={`/player/${player.id_mundo_deportivo}`} className='text-decoration-none text-dark'>
                <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                    <div className='d-flex flex-column align-items-center ms-1 me-2 mt-1'>
                        <p className='fw-bold mb-1 bg-dark rounded-2 text-white text-center p-1' style={{height:'35px',width:'35px'}}>{getPosition(player.position)}</p>
                        <p className='fw-bold bg-dark rounded-2 text-white p-1 text-center' style={{height:'35px',width:'35px'}}>{player.season_23_24}</p>
                    </div>
                    <div className='bg-light d-flex justify-content-center align-items-center rounded-4 border border-dark'
                         style={{height: '60px', width: '60px'}}>
                        <img src={player.photo_face} alt={player.full_name}
                             style={{height: '50px', width: '50px'}}/>
                    </div>
                    <div className="d-flex flex-column justify-content-around">
                        <strong>{player.full_name}</strong>
                        <div className="d-flex flex-row gap-1">
                            <p className='fw-medium'>{player.player_value.toLocaleString('de-DE')} €</p>
                        </div>
                    </div>
                </div>
            </NavLink>
            <div className="d-flex flex-row cursor-pointer" onClick={onGraphClick}>
                {children}
            </div>
        </Container>
    )
}