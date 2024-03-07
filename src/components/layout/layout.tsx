import Header from '../../components/header/header.tsx'
import SideBar from "../../components/side_bar/side-bar.tsx";
import './layout.scss'

export default function Layout({ children }: { children: any }) {

    const teamInfo = {
        name: "UA2C",
        next_gameweek: "17:30:59",
        current_balance: "17560860",
        future_balance: "17560860",
        maximum_debt: "42311110",
        points: "748",
    };

    /*
    return (
        <div className='grid-container'>
            <SideBar />
            <div className="main-container">
                <Header teamInfo={teamInfo} />
                {children}
            </div>
        </div>
    )
    */

    return (
        <>
            <SideBar/>
        </>
    )
}