@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #07071a;
  --bg2: #0f0f2a;
  --bg3: #14143a;
  --accent: #7c5cfc;
  --accent2: #00c9a7;
  --accent3: #ff6b35;
  --text: #f0eeff;
  --text2: rgba(240,238,255,0.6);
  --text3: rgba(240,238,255,0.35);
  --border: rgba(255,255,255,0.08);
  --border2: rgba(124,92,252,0.3);
  --card-bg: rgba(255,255,255,0.04);
  --radius: 16px;
  --radius-lg: 24px;
  --font: 'Sora', sans-serif;
}

html { scroll-behavior: smooth; }
body { font-family: var(--font); background: var(--bg); color: var(--text); min-height: 100vh; overflow-x: hidden; }
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 4px; }
::selection { background: var(--accent); color: #fff; }

.app { display: flex; flex-direction: column; min-height: 100vh; }
main { flex: 1; }

/* Typography */
h1 { font-size: clamp(2.4rem, 5.5vw, 4.2rem); font-weight: 800; line-height: 1.08; letter-spacing: -0.03em; }
h2 { font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; line-height: 1.12; letter-spacing: -0.02em; }
h3 { font-size: 1.15rem; font-weight: 700; }
p { font-size: 1rem; line-height: 1.75; color: var(--text2); }

/* Layout */
.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; width: 100%; }
.section { padding: 100px 0; }
.section-sm { padding: 60px 0; }

/* Section header */
.sec-header { text-align: center; margin-bottom: 64px; }
.sec-header p { max-width: 520px; margin: 14px auto 0; }

/* Tag / Badge */
.tag {
  display: inline-flex; align-items: center; gap: 6px;
  background: rgba(124,92,252,0.15); border: 1px solid rgba(124,92,252,0.3);
  color: #b89fff; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.08em;
  text-transform: uppercase; padding: 6px 16px; border-radius: 100px; margin-bottom: 18px;
}

/* Buttons */
.btn { font-family: var(--font); font-size: 1rem; font-weight: 700; cursor: pointer; border: none; border-radius: 12px; padding: 14px 32px; transition: all 0.22s; display: inline-flex; align-items: center; gap: 8px; }
.btn-primary { background: linear-gradient(135deg, var(--accent), #5a3fd6); color: #fff; box-shadow: 0 4px 24px rgba(124,92,252,0.38); }
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(124,92,252,0.55); }
.btn-outline { background: transparent; color: var(--text); border: 1.5px solid var(--border); }
.btn-outline:hover { border-color: var(--accent); color: #b89fff; }
.btn-sm { padding: 10px 22px; font-size: 0.88rem; border-radius: 10px; }

/* Card */
.card { background: var(--card-bg); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 28px; transition: all 0.3s; }
.card:hover { background: rgba(255,255,255,0.07); border-color: var(--border2); transform: translateY(-4px); }
.card-static { background: var(--card-bg); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 28px; }

/* Grid */
.grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; }
.grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }

/* Form elements */
.form-group { display: flex; flex-direction: column; gap: 6px; }
.label { font-size: 0.84rem; font-weight: 700; color: rgba(240,238,255,0.65); letter-spacing: 0.02em; }
.input { width: 100%; background: rgba(255,255,255,0.05); border: 1.5px solid rgba(255,255,255,0.1); color: var(--text); padding: 13px 18px; border-radius: 12px; font-size: 0.95rem; font-family: var(--font); outline: none; transition: border-color 0.2s, background 0.2s; }
.input:focus { border-color: var(--accent); background: rgba(124,92,252,0.08); }
.input::placeholder { color: var(--text3); }
.input.err { border-color: #ff6b6b; }
.input option { background: #1a1a3e; }
.err-msg { color: #ff8fa3; font-size: 0.78rem; margin-top: 2px; }

/* Divider */
.divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(124,92,252,0.25), transparent); }

/* Animations */
@keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
@keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(0,201,167,0.4); } 50% { box-shadow: 0 0 0 8px rgba(0,201,167,0); } }
@keyframes gradient { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }

.fade-up { animation: fadeUp 0.6s ease forwards; }
.floating { animation: float 5s ease-in-out infinite; }

/* Grid bg */
.grid-bg { background-image: linear-gradient(rgba(124,92,252,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(124,92,252,0.05) 1px, transparent 1px); background-size: 60px 60px; }

/* Gradient text */
.grad-text { background: linear-gradient(135deg, var(--accent), var(--accent2)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

/* Pulse dot */
.pulse-dot { width: 8px; height: 8px; background: var(--accent2); border-radius: 50%; animation: pulse 2s infinite; flex-shrink: 0; }

/* Responsive */
@media (max-width: 768px) {
  .section { padding: 70px 0; }
  .hide-md { display: none !important; }
  .col-rev { flex-direction: column-reverse !important; }
  .grid-2, .grid-3 { grid-template-columns: 1fr; }
}
