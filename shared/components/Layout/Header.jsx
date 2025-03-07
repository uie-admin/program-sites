import { useState } from "react";
import { Link } from "react-router-dom";
import Section from "./Section";
import VerticalCohortSelector from "../CohortSelectors/VerticalCohortSelector";
import PageFilter from "../Utility/PageFilter";
import PageSticky from "../Utility/PageSticky";

import DesktopOnly from "../Utility/DesktopOnly";
import MobileOnly from "../Utility/MobileOnly";

export default function Header({ title }) {
    return (
        <>
            <Navigation />
            <Section name="header-background" bg="pixel-texture.jpg">
                <h1>{title}</h1>
                <p className="online-course strong">
                    An Online Course with Jared Spool
                </p>
                <div className="flex relative">
                    <div className="hero">
                        <img
                            className="research-logo"
                            src="/images/UxResearchLogo.png"
                            alt="Adv. UX Research"
                        ></img>
                        <img
                            className="jared"
                            src="/images/Jared_Spool 2.png"
                            alt="Jared"
                        />
                        <div className="hero-paragraphs">
                            <h2>Small Group Coaching</h2>
                            <p className="semi-strong">
                                8 Hours Live with Jared Spool <br />8 Hours of
                                Recorded Content
                            </p>
                        </div>
                    </div>

                    <PageFilter pathname={"/"}>
                        <DesktopOnly>
                            <PageSticky
                                topBoundingElement={".hero"}
                                bottomBoundingElement={".HomeContent"}
                                paddingTop={40}
                                paddingBottom={40}
                            >
                                <VerticalCohortSelector />
                            </PageSticky>
                        </DesktopOnly>
                        <MobileOnly>
                            <VerticalCohortSelector />
                        </MobileOnly>
                    </PageFilter>
                </div>
            </Section>
        </>
    );
}

function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false); // State to track menu open/close

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the menu state
    };

    const handleLinkClick = () => {
        setMenuOpen(false); // Close the menu immediately
    };

    const navLinks = [
        { name: "Home", url: "/" },
        { name: "Topics", url: "/topics" },
        { name: "Research", url: "/research" },
        { name: "Teams", url: "/teams" },
        { name: "Join Next Cohort", url: "/Cohort1" },
    ];

    return (
        <div className="new-nav">
            <div className="inner-column">
                <nav className="header-nav">
                    <a
                        className="the-cc-logo"
                        href="https://www.centercentre.com"
                    >
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
                    <ul className={`header-links ${menuOpen ? "open" : ""}`}>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link
                                    key={index}
                                    to={link.url}
                                    onClick={handleLinkClick}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}
