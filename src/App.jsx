import './index.css';

import Avatar from './component/Avatar';
import Intro from './component/Intro';
import SkillList from './component/SkilList';

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

export default App;
