import type { Team } from './types'
import { useState } from 'react'
import TeamCard from './TeamCard'

export default function TeamList({
    teams, 
    attributes, 
    dispatch
}: {
    teams: Team[],
    attributes: Record<string, string | null>;
    dispatch: (eventName: string, details?: unknown) => void;
}) {
    const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null)
    
    function selectTeamClick(teamId: string) {
        setSelectedTeamId(teamId);
        dispatch("requestTeamStatus", {teamId});
    }
    
    if (teams.length == 0) {
        return <p>No teams yet.</p>
    }
    
    const selectedTeam = teams.find(t => t.id === selectedTeamId);
    const selectedLabel = selectedTeam ? selectedTeam.teamName : "none";

    const statusAttr = attributes['team-status'];
    let statusMessage = null;
    if (selectedTeamId) {
        if (statusAttr === null) {
            statusMessage = "Loading status...";
        } else {
            const result = JSON.parse(statusAttr);
            statusMessage = result?.approved ? "Approved" : "Pending Approval.";
        }
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
            {statusMessage && <p>{statusMessage}</p>}
            <ul>{cards}</ul>
        </div>
    );
}
