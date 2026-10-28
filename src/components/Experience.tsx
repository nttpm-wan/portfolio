import Image from "next/image";
import { certificates, experience } from "@/lib/data";

export default function Experience() {
  return <>
    {experience.length > 0 ? <section id="experience" className="editorial-section experience-section">
    <div className="experience-layout">
      <div>
        <div className="experience-heading">
          <div className="section-title"><span className="section-index" aria-hidden="true">05</span><h2>Experience</h2></div>
          <p>Internships, professional roles,<br />and hands-on work.</p>
        </div>
        <div className="experience-list">
          {experience.map(item => (
            <article key={item.title}>
              <span className="experience-date">{item.year}</span>
              <div>
                <h3>{item.title}</h3>
                <span className="experience-context">{item.context}</span>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <figure className="experience-architecture">
        <Image
          src="/images/experience-stairs.png"
          alt="Concrete stairs with a black handrail casting geometric shadows"
          fill
          sizes="(max-width: 700px) 90vw, 32vw"
          className="object-cover"
        />
      </figure>
    </div>
    </section> : null}
    <section id="certificates" className="editorial-section certificates-section">
    <div className="certificates-heading"><div className="section-title">{experience.length === 0 ? <span className="section-index" aria-hidden="true">05</span> : null}<h2>Certificates</h2></div><span>{certificates.length} credentials</span></div>
    <div className="certificate-grid">{certificates.map(cert => <a key={cert.id} href={cert.href} target="_blank" rel="noreferrer" className="certificate-card"><div className="certificate-image"><Image src={cert.image} alt={cert.title} fill sizes="(max-width: 700px) 90vw, (max-width: 1000px) 45vw, 23vw" className="object-contain" /></div><div className="certificate-copy"><span>{cert.date} <span aria-hidden="true">↗</span></span><h4>{cert.title}</h4><p>{cert.issuer}</p></div></a>)}</div>
    </section>
  </>;
}
