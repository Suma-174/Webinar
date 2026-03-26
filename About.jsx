.hero { min-height: 100vh; display: flex; align-items: center; position: relative; overflow: hidden; padding-top: 66px; }
.hero-inner { display: flex; align-items: center; justify-content: space-between; gap: 40px; padding: 80px 24px; position: relative; z-index: 2; }
.hero-content { max-width: 640px; }

.orb { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; }
.orb1 { width: 600px; height: 600px; background: radial-gradient(circle,rgba(124,92,252,0.22) 0%,transparent 70%); top: 5%; left: 55%; }
.orb2 { width: 380px; height: 380px; background: radial-gradient(circle,rgba(0,201,167,0.13) 0%,transparent 70%); top: 55%; left: -5%; }

.hero-sub { font-size: 1.1rem; color: var(--text2); line-height: 1.8; margin: 22px 0 34px; max-width: 520px; }
.hero-btns { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 48px; }
.hero-stats { display: flex; gap: 36px; flex-wrap: wrap; }
.stat-item { display: flex; flex-direction: column; }
.stat-val { font-size: 1.65rem; font-weight: 800; color: var(--accent); }
.stat-lbl { font-size: 0.78rem; color: var(--text3); font-weight: 600; margin-top: 2px; text-transform: uppercase; letter-spacing: 0.05em; }

.hero-right { flex-shrink: 0; }
.hero-card-main {
  background: rgba(255,255,255,0.05); border: 1px solid rgba(124,92,252,0.2);
  border-radius: 24px; padding: 36px 40px; text-align: center; width: 260px;
}
.event-badge {
  background: rgba(0,201,167,0.15); color: var(--accent2);
  font-size: 0.7rem; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase;
  padding: 5px 14px; border-radius: 100px; border: 1px solid rgba(0,201,167,0.25);
  display: inline-block; margin-bottom: 18px;
}
.mini-tag {
  background: rgba(124,92,252,0.12); color: #b89fff;
  font-size: 0.7rem; font-weight: 700; padding: 4px 10px; border-radius: 100px;
  border: 1px solid rgba(124,92,252,0.2);
}

.benefit-icon { font-size: 2rem; margin-bottom: 14px; }
.avatar-sm { width: 38px; height: 38px; border-radius: 50%; background: rgba(124,92,252,0.2); color: var(--accent); font-weight: 800; font-size: 1rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

.cta-banner {
  background: linear-gradient(135deg,rgba(124,92,252,0.16),rgba(0,201,167,0.08));
  border: 1px solid rgba(124,92,252,0.25); border-radius: 28px;
  padding: clamp(36px,5vw,64px); text-align: center; position: relative; overflow: hidden;
}
