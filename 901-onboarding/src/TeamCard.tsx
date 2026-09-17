import type { Team } from './types'

export default function TeamCard ({team, isSelected, onSelect}: {team: Team, isSelected: boolean, onSelect: () => void}) {
    return (
        <button onClick={onSelect}
        style= {{
            border: isSelected ? '3px solid blue' : '1px solid gray',
            background: isSelected ? 'darkblue' : 'gray'
        }}>
            <h1>{team.teamName}</h1>
            <h3>School: {team.school}</h3>
        </button>
    );
}