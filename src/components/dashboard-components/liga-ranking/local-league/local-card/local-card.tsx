import { Col, Row } from "react-bootstrap"

export default function RankingCard({ team }: {
    team: {
        position: number,
        name: string,
        points: number,
        value: number
    }
}) {
    return (
        <Row className="h-auto d-flex border-top border-bottom justify-content-around w-100" fluid>
            <Col sm={1} className="text-center p-0 m-0">
                #{team.position}
            </Col>
            <Col sm={5} className="p-0 m-0">
                <p className="ms-2 text-truncate">
                    {team.name}
                </p>
            </Col>
            <Col sm={3} className="text-center p-0 m-0">
                {team.points}
            </Col>
            <Col sm={3} className="text-center p-0 m-0">
                {team.value} M
            </Col>
        </Row>
    )
}