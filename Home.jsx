import { useState } from "react";
import FadeIn from "../components/FadeIn";
import "./Register.css";

const INITIAL = { firstName: "", lastName: "", email: "", organization: "", role: "", source: "", newsletter: false };

function validate(f) {
  const e = {};
  if (!f.firstName.trim()) e.firstName = "First name is required";
  if (!f.lastName.trim()) e.lastName = "Last name is required";
  if (!f.email.trim()) e.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Enter a valid email address";
  if (!f.organization.trim()) e.organization = "Organization is required";
  if (!f.role) e.role = "Please select your role";
  return e;
}

export default function Register() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handle = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(p => ({ ...p, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: "" }));
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) return setErrors(errs);
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1800);
  };

  return (
    <div>
      {/* PAGE HERO */}
      <section className="page-hero grid-bg" style={{ minHeight: 320 }}>
        <div className="orb" style={{ position: "absolute", width: 500, height: 400, background: "radial-gradient(circle,rgba(0,201,167,0.15) 0%,transparent 70%)", top: 0, right: "5%", borderRadius: "50%", filter: "blur(70px)" }} />
        <div className="container" style={{ paddingTop: 80, paddingBottom: 60, position: "relative", zIndex: 2 }}>
          <FadeIn>
            <div className="tag">Registration</div>
            <h1 style={{ maxWidth: 600, marginBottom: 18 }}>
              Save your seat.<br /><span className="grad-text">It's free.</span>
            </h1>
            <p style={{ maxWidth: 480, fontSize: "1.05rem" }}>
              Join 2,000+ builders at WebConf 2025. Takes 30 seconds to register.
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="divider" />

      {/* FORM + INFO */}
      <section className="section">
        <div className="container reg-layout">

          {/* LEFT: Event Info */}
          <div className="reg-info">
            <FadeIn>
              <h2 style={{ marginBottom: 8 }}>Event Details</h2>
              <p style={{ marginBottom: 32 }}>Everything you need to know before you register.</p>

              {[
                ["🗓", "Date", "August 15, 2025"],
                ["🕙", "Time", "10:00 AM – 1:30 PM IST"],
                ["📍", "Format", "Online (Zoom Webinar)"],
                ["🎟", "Price", "Completely Free"],
                ["📜", "Certificate", "Verified PDF on completion"],
                ["🔁", "Replay", "30-day on-demand access"],
              ].map(([icon, lbl, val]) => (
                <div key={lbl} className="detail-row">
                  <div className="detail-icon">{icon}</div>
                  <div>
                    <p style={{ fontSize: "0.73rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.07em", color: "var(--text3)", marginBottom: 2 }}>{lbl}</p>
                    <p style={{ color: "var(--text)", fontWeight: 600, fontSize: "0.95rem" }}>{val}</p>
                  </div>
                </div>
              ))}

              <div className="cert-box">
                <p style={{ color: "var(--accent2)", fontWeight: 700, marginBottom: 4, fontSize: "0.9rem" }}>✓ Certificate Included</p>
                <p style={{ fontSize: "0.85rem", color: "var(--text2)" }}>
                  Verified PDF certificate emailed within 48 hours of attending the live session.
                </p>
              </div>

              <div style={{ marginTop: 28 }}>
                <p style={{ fontSize: "0.82rem", color: "var(--text3)", marginBottom: 14 }}>What attendees say:</p>
                <div className="mini-testi">
                  <div style={{ display: "flex", gap: 3 }}>{[...Array(5)].map((_, j) => <span key={j} style={{ color: "#FFD700", fontSize: "0.9rem" }}>★</span>)}</div>
                  <p style={{ fontSize: "0.87rem", color: "var(--text2)", fontStyle: "italic", marginTop: 8 }}>"Completely changed how I approach project architecture."</p>
                  <p style={{ fontSize: "0.78rem", color: "var(--text3)", marginTop: 6 }}>— Rohan K., Frontend Developer</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT: Form */}
          <div className="reg-form-wrap">
            <FadeIn delay={0.12}>
              {submitted ? (
                <div className="success-card card-static">
                  <div className="success-icon">✓</div>
                  <h2 style={{ marginBottom: 12 }}>You're registered! 🎉</h2>
                  <p style={{ marginBottom: 20 }}>
                    Confirmation sent to <strong style={{ color: "#b89fff" }}>{form.email}</strong>.<br />
                    Check your inbox (and spam folder just in case).
                  </p>
                  <div className="success-box">
                    <p style={{ color: "var(--accent2)", fontWeight: 700, fontSize: "0.9rem" }}>📅 Add to your calendar to get a reminder!</p>
                  </div>
                  <div style={{ marginTop: 24, display: "flex", flex: 1, gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
                    <button className="btn btn-outline btn-sm" onClick={() => { setForm(INITIAL); setSubmitted(false); }}>Register Another</button>
                  </div>
                </div>
              ) : (
                <form className="reg-form card-static" onSubmit={submit} noValidate>
                  <div className="form-header">
                    <h3 style={{ fontSize: "1.4rem" }}>Register for Free</h3>
                    <p style={{ color: "var(--text3)", fontSize: "0.85rem", marginTop: 4 }}>All fields marked * are required.</p>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="label">First Name *</label>
                      <input className={`input${errors.firstName ? " err" : ""}`} name="firstName" value={form.firstName} onChange={handle} placeholder="Ravi" />
                      {errors.firstName && <p className="err-msg">{errors.firstName}</p>}
                    </div>
                    <div className="form-group">
                      <label className="label">Last Name *</label>
                      <input className={`input${errors.lastName ? " err" : ""}`} name="lastName" value={form.lastName} onChange={handle} placeholder="Shankar" />
                      {errors.lastName && <p className="err-msg">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="label">Work Email *</label>
                    <input className={`input${errors.email ? " err" : ""}`} name="email" type="email" value={form.email} onChange={handle} placeholder="ravi@company.com" />
                    {errors.email && <p className="err-msg">{errors.email}</p>}
                  </div>

                  <div className="form-group">
                    <label className="label">Organization *</label>
                    <input className={`input${errors.organization ? " err" : ""}`} name="organization" value={form.organization} onChange={handle} placeholder="Company / University / Personal" />
                    {errors.organization && <p className="err-msg">{errors.organization}</p>}
                  </div>

                  <div className="form-group">
                    <label className="label">Your Role *</label>
                    <select className={`input${errors.role ? " err" : ""}`} name="role" value={form.role} onChange={handle}>
                      <option value="">Select your role</option>
                      <option>Software Developer / Engineer</option>
                      <option>Product Manager</option>
                      <option>UX / UI Designer</option>
                      <option>Data Scientist / ML Engineer</option>
                      <option>Founder / Entrepreneur</option>
                      <option>Student</option>
                      <option>Other</option>
                    </select>
                    {errors.role && <p className="err-msg">{errors.role}</p>}
                  </div>

                  <div className="form-group">
                    <label className="label">How did you hear about us?</label>
                    <select className="input" name="source" value={form.source} onChange={handle}>
                      <option value="">Select source (optional)</option>
                      <option>LinkedIn</option>
                      <option>Twitter / X</option>
                      <option>Friend / Colleague</option>
                      <option>Email Newsletter</option>
                      <option>Search Engine</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <label className="checkbox-label" onClick={() => setForm(p => ({ ...p, newsletter: !p.newsletter }))}>
                    <div className={`check-box${form.newsletter ? " checked" : ""}`}>
                      {form.newsletter && <span className="check-tick">✓</span>}
                    </div>
                    <span>Send me future event updates and curated resources. No spam, unsubscribe anytime.</span>
                  </label>

                  <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
                    {loading ? (
                      <><span className="spinner" /> Registering...</>
                    ) : "Confirm My Registration →"}
                  </button>

                  <p className="privacy-note">🔒 Your data is safe. We never sell or share your information.</p>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
