import Skill from './Skill';

export default function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill={'HTML + CSS'} color="red" emoji="😎" />
      <Skill skill={'JavaScript'} color="yellow" emoji="🤬" />
      <Skill skill={'Web Design'} color="blue" emoji="😻" />
      <Skill skill={'Git and GitHub'} color="green" emoji="🙈" />
      <Skill skill={'Raect'} color="gray" emoji="😁" />
    </div>
  );
}
