import Image from "next/image";
import { site } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="editorial-section about-layout">
      <div className="section-title"><h2 className="about-heading"><span>About</span>{" "}<span>me</span></h2><span className="section-index section-index--below" aria-hidden="true">02</span></div>
      <div className="about-photo"><Image src="/images/about-portrait.png" alt="Nathapoom, Computer Engineering student" fill sizes="(max-width: 700px) 90vw, 30vw" className="object-cover object-top grayscale" /></div>
      <div className="about-copy">
        <h3>Curiosity is where<br />everything starts.</h3>
        <p>I&apos;m Nathapoom Wangsatang, a Computer Engineering student at Sripatum University. I enjoy understanding how things work — and turning that understanding into useful software.</p>
        <p>My projects connect web applications, AI, and embedded systems. From testing a fitness app&apos;s real-time camera pipeline to building IoT networks, I learn by working through real problems with a team.</p>
        <dl className="about-facts"><div><dt>Based in</dt><dd>{site.location}</dd></div><div><dt>Looking for</dt><dd>Internship opportunities</dd></div></dl>
        <a className="editorial-button" href="#contact">Let&apos;s connect <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
