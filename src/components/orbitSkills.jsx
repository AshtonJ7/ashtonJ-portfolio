import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";


const orbitSkills = [
  { icon: <FaHtml5 />, name: "HTML" },
  { icon: <FaCss3Alt />, name: "CSS" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaGitAlt />, name: "Git" }
];

function OrbitingSkills() {
  return (
    <div className="orbit-container">
      <div className="orbit-circle">
        {orbitSkills.map((skill, index) => (
          <div
            className="orbit-icon"
            key={skill.name}
            style={{ transform: `rotate(${index * (360 / orbitSkills.length)}deg) translate(8rem) rotate(-${index * (360 / orbitSkills.length)}deg)` }}
            title={skill.name}
          >
            {skill.icon}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrbitingSkills;