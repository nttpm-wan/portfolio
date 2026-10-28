import Image from "next/image";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return <section id="skills" className="editorial-section skills-layout">
    <div className="skills-heading">
      <div className="section-title"><span className="section-index" aria-hidden="true">04</span><h2>Skills</h2></div>
      <p>Technologies<br />I work with</p>
      <figure className="skills-architecture">
        <Image src="/images/skills-architecture-hd.png" alt="Geometric concrete architecture in black and white" fill sizes="(max-width: 700px) 45vw, 35vw" className="object-cover grayscale" />
      </figure>
    </div>
    <div className="skills-groups">
      {skillGroups.map(group => (
        <div className="skill-group" key={group.title}>
          <h3>{group.title}</h3>
          <ul>
            {group.items.map(skill => (
              <li key={skill.name}>
                <Image src={`/icons/skills/${skill.icon}.svg`} alt="" width={48} height={48} className="skill-logo" />
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>;
}
