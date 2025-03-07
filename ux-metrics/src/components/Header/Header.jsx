import "./Header.css";

export function Hero() {
    return (
        <div className="hero">
            <img
                className="programName"
                src="/images/11.png"
                alt="Outcome-Driven UX Metrics"
            />
            <img
                className="jared"
                src="/images/Jared_Spool 2.png"
                alt="Jared"
            />
            <div className="hero-paragraphs">
                <p>Small Group Coaching</p>
                <p>
                    8 Hours Live with Jared Spool <br />8 Hours of Recorded
                    Content
                </p>
            </div>
        </div>
    );
}

export default function Header() {
    return (
        <section className="header-background">
            <section className="header">
                {/* original nav */}
                {/* <nav className="header-nav">
                    <img className="header-logo" src="/images/Center_Centre_Logo.png" alt="center centre logo" />

                    <div className="hamburger" onClick={toggleMenu}>
                        <img
                            src="/images/Menu.png"
                            alt="Menu"
                            className="hamburger-image"
                        />
                    </div>

                    <div className={`header-links ${menuOpen ? 'open' : ''}`}>
                        <Link to="/">Home</Link>
                        <Link to="/topics">Course Topics</Link>
                        <Link to="/outcomes">Why UX Outcomes?</Link>
                        <Link to="/teams">Team Pricing</Link>
                        <Link to="/october">Join Next Cohort</Link>
                    </div>
                </nav> */}
                <div>
                    <h1>Outcome-Driven UX Metrics</h1>
                    <p className="online-course">
                        An Online Course with Jared Spool
                    </p>
                    <Hero />
                </div>
            </section>
        </section>
    );
}
