import { useEffect, useState } from "react";
import "./Countdown.css";

export default function Countdown({ target }) {
  const [t, setT] = useState({});

  useEffect(() => {
    const tick = () => {
      const diff = new Date(target) - new Date();
      if (diff <= 0) return setT({ d: 0, h: 0, m: 0, s: 0 });
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [["d", "Days"], ["h", "Hours"], ["m", "Mins"], ["s", "Secs"]];

  return (
    <div className="countdown">
      {units.map(([k, lbl]) => (
        <div key={k} className="cd-box">
          <span className="cd-num">{String(t[k] ?? 0).padStart(2, "0")}</span>
          <span className="cd-lbl">{lbl}</span>
        </div>
      ))}
    </div>
  );
}
