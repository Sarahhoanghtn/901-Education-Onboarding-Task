import type { Team } from './types'

export default function TeamCard ({team}: {team: Team}) {
    return (
        <div>
            <h1>{team.teamName}</h1>
            <h3>School: {team.school}</h3>
        </div>
    );
}