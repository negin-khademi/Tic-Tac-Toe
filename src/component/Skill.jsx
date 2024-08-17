export default function Skill(props) {
  return (
    <div>
      <span className="skill" style={{ backgroundColor: props.color }}>
        {props.skill} {props.emoji}
      </span>
    </div>
  );
}
