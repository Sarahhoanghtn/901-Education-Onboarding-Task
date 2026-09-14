import type { Team } from './types'

export default function TeamList({teams}: {teams: Team[]}) {
    if (teams.length == 0) {
        return <p>No teams yet.</p>
    }
    const cards = teams.map(currTeam =>
        <div>
            <h1>{currTeam.teamName}</h1>
            <h3>School: {currTeam.school}</h3>
        </div>
    );
    return <ul>{cards}</ul>;
}
