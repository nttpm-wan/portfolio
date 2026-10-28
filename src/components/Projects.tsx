import { Activity, Network, PlugZap, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { projects } from "@/lib/data";

const illustrations = [Activity, Network, PlugZap];
export default function Projects() {
  return (
    <section id="work" className="work-section">
      <div className="editorial-section work-inner">
        <div className="work-heading"><div className="section-title"><span className="section-index" aria-hidden="true">03</span><h2>Featured<br />projects</h2></div><p>Learning through building.<br />A selection of software, AI, and IoT projects from university.</p></div>
        <div className="project-grid">
          {projects.map((project, i) => {
            const Illustration = illustrations[i];
            const image = project.image;
            return <article className="project-card" key={project.id}>
              <a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title.split(" — ")[0]} on GitHub (opens in a new tab)`} className={`project-art${image ? " project-art--image" : ""}${image?.fit === "contain" ? " project-art--contain" : ""}`}>
                {image ? <Image src={image.src} alt={image.alt} width={image.width} height={image.height} /> : <><span>{project.index}</span><Illustration size={82} strokeWidth={1} /><span>{project.tags[0]}</span></>}
              </a>
              <div className="project-card__heading"><h3>{project.title.split(" — ")[0]}</h3><span>{project.year}</span></div>
              <p className="project-subtitle">{project.title.split(" — ")[1]}</p>
              <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              <details className="project-details">
                <summary>About this project <ArrowUpRight size={16} aria-hidden="true" /></summary>
                <p>{project.description}</p>
                <h4>My contribution</h4>
                <ul>{project.contributions.map(contribution => <li key={contribution}>{contribution}</li>)}</ul>
                <span>{project.role}</span>
              </details>
            </article>;
          })}
        </div>
      </div>
    </section>
  );
}

export function SectionEyebrow({ index, label }: { index: string; label: string }) {
  return <div className="section-title"><span className="section-kicker">{index}</span><h2>{label}</h2></div>;
}
