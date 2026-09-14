import type { Team } from './types'
import TeamList from './TeamList'

function App() {
  let empty: Team[] = [];

  let teams : Team[] = [{
    id: '1',
    teamName: 'Dragons',
    school: 'Drexel'
  },{
    id: '2',
    teamName: 'Owls',
    school: 'Temple'
  },{
    id: '3',
    teamName: 'Quakers',
    school: 'UPenn'
  },{
    id: '4',
    teamName: 'Rams',
    school: 'Thomas Jefferson'
  },{
    id: '5',
    teamName: 'Nittany Lions',
    school: 'Penn State'
  }];

  return (
    // <TeamList teams={empty} />
    <TeamList teams={teams} />
  );
}

export default App