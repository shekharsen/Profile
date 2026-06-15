import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const links = [
    "about",
    "skills",
    "experience",
    "achievements",
    "education",
    "contact"
  ];

  // 🔥 OUTSIDE CLICK HANDLER
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo-placeholder.png" alt="Logo" className="logo-img" />
        <span className="logo-text">Shekhar Sen</span>
      </div>

      {/* DESKTOP */}
      <div className="nav-links">
        {links.map((link) => (
          <a key={link} href={`#${link}`} className="nav-link">
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </div>

      {/* MOBILE MENU */}
      <div ref={menuRef}>
        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;