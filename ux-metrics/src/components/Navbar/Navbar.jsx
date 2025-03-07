import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// All CSS FOR Navbar currently lives in the Header.css
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false); // State to track menu open/close

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the menu state
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 770) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    });

    return (
        <section className="header">
            <div className="new-nav-test">
                <nav className="header-nav">
                    <a href="https://www.centercentre.com">
                        <img
                            className="header-logo"
                            src="/images/Center_Centre_Logo.png"
                            alt="center centre logo"
                        />
                    </a>

                    <div className="hamburger" onClick={toggleMenu}>
                        <img
                            src="/images/Menu.png"
                            alt="Menu"
                            className="hamburger-image"
                        />
                    </div>

                    <div className={`header-links ${menuOpen ? "open" : ""}`}>
                        <Link to="/">Home</Link>
                        <Link to="/topics">Course Topics</Link>
                        <Link to="/outcomes">Why UX Outcomes?</Link>
                        <Link to="/teams">Team Pricing</Link>

                        {/* UPDATE THIS */}
                        {/* UPDATE THIS */}
                        <Link to="/cohort7">Join Next Cohort</Link>
                        {/* UPDATE THIS */}
                        {/* UPDATE THIS */}
                    </div>
                </nav>
            </div>
        </section>
    );
}
