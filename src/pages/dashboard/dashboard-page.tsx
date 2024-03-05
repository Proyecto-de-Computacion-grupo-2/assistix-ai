import Header from '../../components/header/header.tsx'
import './dashboard-page.scss'

export default function DashboardPage() {

    const teamInfo = {
        name: "UA2C",
        next_gameweek: "17:30:59",
        current_balance: "17560860",
        future_balance: "17560860",
        maximum_debt: "42311110",
        points: "748",
    };

    return (
        <>
            <Header team={teamInfo} />
        </>
    )

}