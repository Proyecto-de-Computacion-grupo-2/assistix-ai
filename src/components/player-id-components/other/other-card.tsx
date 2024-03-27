import {Col, Row} from "react-bootstrap";
import medkit from '../../../assets/botiquin.webp'


export default function OtherCard({absence}) {
    return (
        <Row className="m-0 p-0 h-auto border-top border-bottom w-100 align-items-center">
            <Col xs={2} sm={2} className="d-flex flex-column">
                <img className="mx-auto d-block" src={medkit} width={20}></img>
                <p className="small text-center">Lesion</p>
            </Col>
            <Col xs={5} sm={5} className='align-items-center'>
                <p className="small text-center">25/02/2024</p>
            </Col>
            <Col xs={5} sm={5}>
                <p className="small text-center">25/02/2024</p>
            </Col>
        </Row>
    )
}