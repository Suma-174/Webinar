.reg-layout { display: flex; gap: 60px; align-items: flex-start; flex-wrap: wrap; }
.reg-info { flex: 1 1 320px; min-width: 280px; position: sticky; top: 86px; }
.reg-form-wrap { flex: 1 1 440px; min-width: 300px; }

.detail-row { display: flex; align-items: flex-start; gap: 14px; margin-bottom: 18px; }
.detail-icon { width: 38px; height: 38px; background: rgba(124,92,252,0.1); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0; }

.cert-box { background: rgba(0,201,167,0.07); border: 1px solid rgba(0,201,167,0.2); border-radius: 14px; padding: 18px 20px; margin-top: 28px; }
.mini-testi { background: rgba(255,255,255,0.04); border: 1px solid var(--border); border-radius: 12px; padding: 16px 18px; }

.reg-form { display: flex; flex-direction: column; gap: 18px; }
.form-header { margin-bottom: 6px; }
.form-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

.checkbox-label {
  display: flex; align-items: flex-start; gap: 12px; cursor: pointer;
  font-size: 0.87rem; color: var(--text2); line-height: 1.55;
}
.check-box {
  width: 20px; height: 20px; border: 1.5px solid rgba(255,255,255,0.2);
  border-radius: 6px; display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; margin-top: 2px; transition: all 0.2s;
}
.check-box.checked { background: var(--accent); border-color: var(--accent); }
.check-tick { color: #fff; font-size: 0.75rem; font-weight: 900; }

.submit-btn { width: 100%; justify-content: center; font-size: 1.05rem; padding: 16px; margin-top: 4px; }
.privacy-note { text-align: center; font-size: 0.78rem; color: var(--text3); }

.spinner {
  width: 18px; height: 18px;
  border: 2.5px solid rgba(255,255,255,0.25);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.75s linear infinite;
  display: inline-block;
}

/* Success */
.success-card { text-align: center; padding: 56px 40px; display: flex; flex-direction: column; align-items: center; }
.success-icon {
  width: 76px; height: 76px; border-radius: 50%;
  background: linear-gradient(135deg,#00c9a7,#009f80);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.8rem; color: #fff; margin: 0 auto 24px;
  animation: float 4s ease-in-out infinite;
}
.success-box { background: rgba(0,201,167,0.08); border: 1px solid rgba(0,201,167,0.2); border-radius: 12px; padding: 14px 22px; }

@media (max-width: 600px) {
  .form-row-2 { grid-template-columns: 1fr; }
  .reg-info { position: static; }
}
