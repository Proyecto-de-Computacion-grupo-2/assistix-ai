import { Col, Row } from "react-bootstrap"
import { LeagueUser } from "../../../../../models/league-user"

export default function RankingCard({ team, position }: {
    team: LeagueUser,
    position: number
}) {
    return (
        <Row className="h-auto d-flex border-top border-bottom justify-content-around w-100" fluid>
            <Col sm={1} xs={1} className="text-center p-0 m-0">
                {position}
            </Col>
            <Col sm={5} xs={5} className="p-0 m-0">
                <p className="ms-2 text-truncate">
                    {team.team_name}
                </p>
            </Col>
            <Col sm={3} xs={3} className="text-center p-0 m-0">
                {team.team_points}
            </Col>
            <Col sm={3} xs={3} className="text-center p-0 m-0">
                {parseFloat((team.team_value / 1000000).toFixed(1))} M
            </Col>
        </Row>
    )
}