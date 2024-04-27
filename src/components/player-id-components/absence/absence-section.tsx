import {Col, Container, Row} from "react-bootstrap";
import {Absence} from "../../../models/absence.ts";

interface AbsenceSectionProps {
    absence: Absence;
}

interface AbsencesSectionProps {
    absences: Absence[];
}

function mapIconToAbsenceType(absenceType: string) {
    switch (absenceType) {
        case "red":
            return "https://cdn-icons-png.flaticon.com/512/867/867340.png";
        case "doubt":
            return "https://cdn-icons-png.flaticon.com/512/14264/14264017.png";
        case "five":
            return "https://cdn-icons-png.flaticon.com/512/8676/8676804.png";
        case "injury":
            return "https://cdn-icons-png.flaticon.com/512/469/469413.png";
        case "double":
            return "https://cdn-icons-png.flaticon.com/512/1845/1845350.png";
        default:
            return "https://cdn-icons-png.flaticon.com/512/1828/1828666.png";
    }
}

function formatDate(dateString: string) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-based
    const day = date.getDate();

    return `${day}-${month}-${year}`;
}

function PlayerInjuryCard({absence}: AbsenceSectionProps) {
    return (
        <Row className="m-0 p-0 h-auto border-top border-bottom w-100 align-items-center">
            <Col xs={4} sm={4} className="d-flex flex-column justify-content-center gap-1 p-1 align-items-center">
                <img className="mx-auto d-block" src={mapIconToAbsenceType(absence.type_absence)}
                     alt={absence.type_absence} width={20}/>
                <p className="small text-justify">{absence.description_absence}</p>
            </Col>
            <Col xs={4} sm={4} className='align-items-center'>
                <p className="small text-center">{formatDate(absence.since)}</p>
            </Col>
            <Col xs={4} sm={4}>
                <p className="small text-center">{formatDate(absence.until)}</p>
            </Col>
        </Row>
    )
}

export default function AbsenceSection({absences}: AbsencesSectionProps) {
    return (
        <Container className="m-0 p-2 h-100" fluid>
            <p className="text-secondary fw-bold mb-2">Ausencias</p>
            <Row className="h-auto d-flex justify-content-around border-bottom w-100 p-0 m-0" fluid>
                <Col sm={4} xs={4} className="text-center p-0 m-0 fw-bold">
                    Tipos
                </Col>
                <Col sm={4} xs={4} className="text-center p-0 m-0 fw-bold">
                    Desde
                </Col>
                <Col sm={4} xs={4} className="text-center p-0 m-0 fw-bold">
                    Hasta
                </Col>
            </Row>
            <Container className="flex-grow-1 px-1 scroll-section" style={{maxHeight: "25vh"}} fluid>
                {absences.map((absence, index) => (
                    <PlayerInjuryCard absence={absence} key={index}/>
                ))}
            </Container>
        </Container>
    )
}