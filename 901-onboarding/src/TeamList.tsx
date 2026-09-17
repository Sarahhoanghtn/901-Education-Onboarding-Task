import type { Team } from './types'
import { useState } from 'react'
import TeamCard from './TeamCard'

export default function TeamList({teams}: {teams: Team[]}) {
    const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null)
    
    function selectTeamClick(teamId: string) {
        setSelectedTeamId(teamId);
    }
    const selectedTeam = teams.find(t => t.id === selectedTeamId);
    const selectedLabel = selectedTeam ? selectedTeam.teamName : "none";
    
    if (teams.length == 0) {
        return <p>No teams yet.</p>
    }
    const cards = teams.map(currTeam =>
        <TeamCard 
        key = {currTeam.id}
        team={currTeam}
        isSelected = {currTeam.id === selectedTeamId}
        onSelect = {() => selectTeamClick(currTeam.id)} />
    );
    return (
        <div>
            <p>Selected: {selectedLabel}</p>
            <ul>{cards}</ul>
        </div>
    );
}
