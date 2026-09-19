type TeamRow = { _id: string; teamName: string; school: string; approved: boolean };

const mockTeams: Record<string, TeamRow> = {
  '1': { _id: '1', teamName: 'Team1', school: 'School1', approved: true },
  '2': { _id: '2', teamName: 'Team2', school: 'School2', approved: false },
  '3': { _id: '3', teamName: 'Team3', school: 'School3', approved: true },
  '4': { _id: '4', teamName: 'Team4', school: 'School4', approved: false },
  '5': { _id: '5', teamName: 'Team5', school: 'School5', approved: true },
};

async function get(
  collectionId: string, 
  itemId: string
): Promise<TeamRow | null> {  
  const team = mockTeams[itemId];  
  if (team) {    
    return team;  
  }  
  return null;
}

export default {  
  get,
};
