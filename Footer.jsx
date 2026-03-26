import "./Navbar.css";

const links = [
  { key: "home", label: "Home" },
  { key: "about", label: "About" },
  { key: "speakers", label: "Speakers" },
  { key: "register", label: "Register" },
];

export default function Navbar({ current, navigate }) {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <div className="nav-logo" onClick={() => navigate("home")}>
          <div className="nav-icon">W</div>
          <span>Web<span className="nav-accent">Conf</span> 2025</span>
        </div>

        <ul className="nav-links">
          {links.map(({ key, label }) => (
            <li key={key}>
              <button
                className={`nav-link${current === key ? " active" : ""}`}
                onClick={() => navigate(key)}
              >
                {label}
                {current === key && <span className="nav-dot" />}
              </button>
            </li>
          ))}
        </ul>

        <button className="btn btn-primary btn-sm" onClick={() => navigate("register")}>
          Register Free →
        </button>
      </div>
    </nav>
  );
}
