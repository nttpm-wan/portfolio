"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CircleButtons } from "@designcodeio/threeui";
import { site } from "@/lib/data";

const channels = [
  { label: "GitHub", value: "@nttpm-wan", href: site.github },
  { label: "LinkedIn", value: "in/nathapoom", href: site.linkedin },
  { label: "Phone", value: "066 154 5060", href: "tel:+66661545060" },
];

export default function Contact() {
  return <section id="contact" className="editorial-section contact-layout">
    <div className="shader-frame contact-mail-float">
      <CircleButtons variant="mail" mode="light" hue={0} saturation={1} brightness={1} ariaLabel="Email Nathapoom" className="contact-mail-control" onClick={() => window.location.assign("mailto:" + site.email)} />
      <div className="contact-mail-tooltip"><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">Get in touch</span><a href={"mailto:" + site.email} className="mt-1 block text-sm font-medium text-ink">{site.email}</a></div>
    </div>
    <div>
      <div className="section-title"><span className="section-index" aria-hidden="true">06</span><h2>Get in touch</h2></div>
      <p className="contact-intro">Open to internships, new ideas, and people who love building things. Let&apos;s start a conversation.</p>
      <a href={"mailto:" + site.email} className="contact-email">{site.email}<ArrowUpRight size={22} aria-hidden="true" /></a>
      <div className="contact-channels">{channels.map(channel => <a key={channel.label} href={channel.href} target={channel.href.startsWith("https") ? "_blank" : undefined} rel={channel.href.startsWith("https") ? "noreferrer" : undefined}><span>{channel.label}</span><strong>{channel.value}</strong><ArrowUpRight size={16} aria-hidden="true" /></a>)}<div><span>Location</span><strong>{site.location}</strong></div></div>
    </div>
    <figure className="contact-portrait"><Image src="/images/contact-staircase.jpg" alt="Black and white spiral staircase viewed from above" fill sizes="(max-width: 700px) 90vw, 38vw" className="object-cover grayscale" /><figcaption>Always learning.<br />Always building.</figcaption></figure>
  </section>;
}
