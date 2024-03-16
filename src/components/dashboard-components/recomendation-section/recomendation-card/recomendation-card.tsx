import {Container} from "react-bootstrap";
import RamanzaniImage from '../../../../assets/40090.png';
import '../recomendation.scss';

interface RecomendationProps {
    playerName: string;
    actionText: string;
    actionValue: string;
    latestGameWeekPoints: number[];
}

const recomendationProps: RecomendationProps = {
    playerName: 'Ramanzani',
    actionText: 'Vender',
    actionValue: '1.7M',
    latestGameWeekPoints: [1, 2, 3],
};

export default function RecomendationCard() {
    return (
        <Container className="d-flex justify-content-around align-items-center border-top border-bottom py-1" fluid>
            <Container className='bg-light d-flex justify-content-center align-items-center rounded-4 border border-dark' style={{height: '60px', width: '60px'}} fluid><img src={RamanzaniImage} alt={recomendationProps.playerName} style={{height: '50px', width: '50px'}}/>
            </Container>
            <Container className="d-flex flex-column" fluid>
                <strong>{recomendationProps.playerName}</strong>
                <div className="d-flex justify-content-start align-items-center gap-2">
                    {recomendationProps.latestGameWeekPoints.map((point, index) => (
                        <p key={index} className='rounded-2 m-0 align-center text-center j'>{point}</p>
                    ))}
                </div>
            </Container>
            <Container className="d-flex flex-column  align-items-center p-0 m-0">
                <p>{recomendationProps.actionText}</p>
                <p>{recomendationProps.actionValue}</p>
            </Container>
        </Container>
    );
}
