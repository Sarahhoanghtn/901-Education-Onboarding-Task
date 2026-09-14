import type { Team } from './types'
import TeamCard from './TeamCard'


function App() {
  let team1: Team = {
      id : '1',
      teamName : 'Dragons',
      school : 'Drexel'
  }

  return (
    <TeamCard team={team1}/>
  );
}

export default App