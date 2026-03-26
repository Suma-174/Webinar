import FadeIn from "../components/FadeIn";
import "./About.css";

const AGENDA = [
  { time: "10:00 AM", title: "Opening Keynote", desc: "The Future of Web Development in the AI Era", speaker: "Dr. Priya Sharma" },
  { time: "10:45 AM", title: "Deep Dive Session", desc: "Scaling Architecture for Millions of Users", speaker: "Arjun Mehta" },
  { time: "11:30 AM", title: "Design Workshop", desc: "Building Products People Actually Love", speaker: "Sofia Reyes" },
  { time: "12:15 PM", title: "Panel Discussion", desc: "Open Q&A with All Speakers", speaker: "All Speakers" },
  { time: "01:00 PM", title: "Networking", desc: "Virtual Breakout Rooms & Connections", speaker: "Everyone" },
];

const FAQS = [
  { q: "Is this webinar free?", a: "Yes, completely free! Just register and show up. A replay will also be available for 30 days." },
  { q: "What platform is used?", a: "We use Zoom Webinar. A link will be sent to your email 24 hours and 1 hour before the event." },
  { q: "Can I ask questions live?", a: "Absolutely. There's a live Q&A panel at 12:15 PM and a chat feature throughout the event." },
  { q: "Will I receive a certificate?", a: "Yes — a verified PDF certificate is emailed within 48 hours of attending the full session." },
  { q: "What if I miss the live session?", a: "Registered users get 30-day replay access. We still recommend attending live for the Q&A." },
];

export default function About({ navigate }) {
  return (
    <div>
      {/* PAGE HERO */}
      <section className="page-hero grid-bg">
        <div className="orb" style={{ position: "absolute", width: 500, height: 400, background: "radial-gradient(circle,rgba(124,92,252,0.2) 0%,transparent 70%)", top: 0, right: "10%", borderRadius: "50%", filter: "blur(70px)" }} />
        <div className="container" style={{ paddingTop: 80, paddingBottom: 80, position: "relative", zIndex: 2 }}>
          <FadeIn>
            <div className="tag">About the Event</div>
            <h1 style={{ maxWidth: 700, marginBottom: 20 }}>
              A webinar built for<br /><span className="grad-text">builders who ship.</span>
            </h1>
            <p style={{ maxWidth: 560, fontSize: "1.1rem" }}>
              WebConf 2025 is a free, full-day virtual event for developers, designers, and product teams.
              We bring real practitioners on stage — no fluff, all signal.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="divider" />

      {/* MISSION */}
      <section className="section">
        <div className="container">
          <div className="about-split">
            <FadeIn style={{ flex: 1 }}>
              <div className="tag">Our Mission</div>
              <h2 style={{ marginBottom: 20 }}>Why we built WebConf</h2>
              <p style={{ marginBottom: 16 }}>
                Most webinars are vendor pitches in disguise. We got tired of that. WebConf was built with one
                goal: give every developer, designer, and PM access to the kind of unfiltered, expert-level
                conversations that usually happen only at expensive conferences or inside big-tech corridors.
              </p>
              <p>
                We curate 3 practitioners per edition, give them uninterrupted stage time, and then open the
                floor completely for live Q&A. Free. Forever.
              </p>
              <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
                {[["100%", "Free to attend"], ["3", "Expert speakers"], ["5h", "Live content"], ["30d", "Replay access"]].map(([v, l]) => (
                  <div key={l} className="mission-stat">
                    <span className="stat-val" style={{ fontSize: "1.4rem" }}>{v}</span>
                    <span style={{ fontSize: "0.78rem", color: "var(--text3)", marginTop: 2 }}>{l}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.15} style={{ flex: 1 }}>
              <div className="card-static about-info-card">
                <p className="about-info-label">Event Details</p>
                {[
                  ["🗓", "Date", "August 15, 2025"],
                  ["🕙", "Time", "10:00 AM – 1:30 PM IST"],
                  ["📍", "Venue", "Zoom Webinar (Online)"],
                  ["🎟", "Entry", "Free — 2,000 seats only"],
                  ["📜", "Certificate", "Verified PDF on completion"],
                  ["🔁", "Replay", "30-day on-demand access"],
                ].map(([icon, lbl, val]) => (
                  <div key={lbl} className="info-row">
                    <div className="info-icon">{icon}</div>
                    <div>
                      <p style={{ fontSize: "0.75rem", color: "var(--text3)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>{lbl}</p>
                      <p style={{ color: "var(--text)", fontWeight: 600, fontSize: "0.95rem" }}>{val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* AGENDA */}
      <section className="section" style={{ background: "rgba(124,92,252,0.04)" }}>
        <div className="container">
          <FadeIn>
            <div className="sec-header">
              <div className="tag">Schedule</div>
              <h2>Full Day Agenda</h2>
              <p>From keynote to networking — here's how the day unfolds.</p>
            </div>
          </FadeIn>

          <div className="agenda-timeline">
            <div className="timeline-line" />
            {AGENDA.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="agenda-row">
                  <div className="agenda-dot" />
                  <div className="card agenda-card">
                    <div className="agenda-top">
                      <span className="time-badge">{item.time}</span>
                      <span style={{ color: "var(--text3)", fontSize: "0.8rem" }}>{item.speaker}</span>
                    </div>
                    <h3 style={{ marginBottom: 6 }}>{item.title}</h3>
                    <p style={{ fontSize: "0.9rem" }}>{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <FadeIn>
            <div className="sec-header">
              <div className="tag">FAQ</div>
              <h2>Common Questions</h2>
            </div>
          </FadeIn>
          <div className="faq-list">
            {FAQS.map((faq, i) => <FaqItem key={i} faq={faq} delay={i * 0.06} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ paddingBottom: 80 }}>
        <div className="container" style={{ textAlign: "center" }}>
          <FadeIn>
            <h2 style={{ marginBottom: 14 }}>Ready to join?</h2>
            <p style={{ marginBottom: 28 }}>It's free. Takes 30 seconds to register.</p>
            <button className="btn btn-primary" style={{ fontSize: "1rem", padding: "15px 36px" }} onClick={() => navigate("register")}>
              Register for Free →
            </button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

function FaqItem({ faq, delay }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeIn delay={delay}>
      <div className="faq-item">
        <button className="faq-q" onClick={() => setOpen(o => !o)}>
          <span>{faq.q}</span>
          <span className={`faq-icon${open ? " open" : ""}`}>+</span>
        </button>
        <div className="faq-body" style={{ maxHeight: open ? 200 : 0 }}>
          <p style={{ paddingTop: 14, fontSize: "0.95rem" }}>{faq.a}</p>
        </div>
      </div>
    </FadeIn>
  );
}

import { useState } from "react";
