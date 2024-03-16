import { Container } from "react-bootstrap";
import { SubstitutionIcon } from '../../../icons/icons'
import Ramanzani from '../../../../assets/40090.png'

export default function ChangeRecomendationCard() {

    return (
        <Container className="container border-top border-bottom d-flex justify-content-between align-items-center p-0 m-0 py-1" fluid>
            <Container className='bg-light d-flex justify-content-center align-items-center rounded-4 border border-dark' style={{ height: '60px', width: '60px' }} fluid>
                <img src={Ramanzani} alt="" style={{ height: '50px', width: '50px' }} />
            </Container>
            <Container className="d-flex flex-column justify-content-start align-items-center" fluid>
                <strong>Cambia</strong>
                <SubstitutionIcon fill='black' />
            </Container>
            <Container className='bg-light d-flex justify-content-center align-items-center rounded-4 border border-dark' style={{ height: '60px', width: '60px' }} fluid>
                <img src={Ramanzani} alt="" style={{ height: '50px', width: '50px' }} />
            </Container>
        </Container>
    )
}