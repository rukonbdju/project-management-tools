import DocsCard from "./DocsCard/DocsCard"
import TeamCard from "./TeamsCard/TeamCard"

const Dashboard = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DocsCard />
                <TeamCard />
            </div>
        </div>
    )
}

export default Dashboard;