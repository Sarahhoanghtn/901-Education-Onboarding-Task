import type { Team } from './types'
import TeamList from './TeamList'
import {getTeamStatus} from './getTeamStatus'
import { useState } from 'react';

function App() {
  const [teamStatusAttr, setTeamStatusAttr] = useState<string | null>(null);

  function dispatch(eventName: string, detail?: unknown) {
    console.log("dispatch called:", eventName, detail);
    if (eventName === "requestTeamStatus") {
      const {teamId} = detail as {teamId: string};
      setTeamStatusAttr(null);
      getTeamStatus(teamId).then((result) => {
        setTeamStatusAttr(JSON.stringify(result));
      }).catch((error) => {
        console.error("getTeamStatus failed:", error);
      });
    }
  }

  let empty: Team[] = [];

  let teams : Team[] = [{
    id: '1',
    teamName: 'Team1',
    school: 'School1'
  },{
    id: '2',
    teamName: 'Team2',
    school: 'School2'
  },{
    id: '3',
    teamName: 'Team3',
    school: 'School3'
  },{
    id: '4',
    teamName: 'Team4',
    school: 'School4'
  },{
    id: '5',
    teamName: 'Team5',
    school: 'School5'
  }];

  return (
    // <TeamList teams={empty} />
    <TeamList teams={teams}
    attributes = {{'team-status' : teamStatusAttr}}
    dispatch = {dispatch} />
  );
}

export default App