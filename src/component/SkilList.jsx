import Skill from './Skill';

export default function SkillList() {
  const skills = [
    {
      skill: 'HTML+CSS',
      level: 'advanced',
      color: '#2662EA',
    },
    {
      skill: 'JavaScript',
      level: 'advanced',
      color: '#EFD81D',
    },
    {
      skill: 'Web Design',
      level: 'advanced',
      color: '#C3DCAF',
    },
    {
      skill: 'Git and GitHub',
      level: 'intermediate',
      color: '#E84F33',
    },
    {
      skill: 'React',
      level: 'advanced',
      color: '#60DAFB',
    },
    {
      skill: 'Svelte',
      level: 'beginner',
      color: '#FF3B00',
    },
  ];

  return (
    <div className="skill-list">
      {skills.map((skillObj) => (
        <Skill key={skillObj.skill} skill={skillObj.skill} color={skillObj.color} level={skillObj.level} />
      ))}

      {/* <Skill skill={'JavaScript'} color="yellow" emoji="🤬" />
      <Skill skill={'Web Design'} color="blue" emoji="😻" />
      <Skill skill={'Git and GitHub'} color="green" emoji="🙈" />
      <Skill skill={'Raect'} color="gray" emoji="😁" /> */}
    </div>
  );
}
