import Section from "./Section";
import LinkList from "../Content/LinkList";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const links = {
        column1: [
            {
                description: "All Center Centre Programs",
                url: "https://centercentre.com/programs/",
            },
            {
                description: "Leaders of Awesomeness",
                url: "https://leaders.centercentre.com/",
            },
            {
                description: "UX Strategy Essentials",
                url: "https://essentials.centercentre.com/",
            },
            {
                description: "UX Research Essentials",
                url: "https://research.centercentre.com/",
            },
            {
                description: "UX Vision Essentials",
                url: "https://visions.centercentre.com/",
            },
        ],
        column2: [
            {
                description: "All You Can Learn",
                url: "https://aycl.uie.com/",
            },
            {
                description: "UIE Articles",
                url: "https://articles.uie.com/",
            },
            {
                description: "UIE Podcasts",
                url: "https://uie.fm/",
            },
            {
                description: "UIE Webinars",
                url: "https://uie.com/",
            },
            {
                description: "UIE Workshops",
                url: "https://uie.com/",
            },
        ],
        column3: [
            {
                description: "UIE Conferences",
                url: "https://uie.com/",
            },
            {
                description: "UIE Virtual Seminars",
                url: "https://uie.com/",
            },
            {
                description: "UIE Training",
                url: "https://uie.com/",
            },
            {
                description: "UIE Virtual Seminars",
                url: "https://uie.com/",
            },
            {
                description: "UIE Workshops",
                url: "https://uie.com/",
            },
        ],
    };

    return (
        <Section name="footer-wrapper" color="--black">
            <footer className="footer">
                <div className="logo-row">
                    <div className="company-name">
                        <div>
                            <a href="https://www.centercentre.com">
                                <img
                                    src="https://asset.uie.com/img/logo/center_centre_white.png"
                                    className="white-logo"
                                    alt="Center Centre UIE Logo"
                                />
                            </a>
                        </div>
                    </div>
                    <address className="address">
                        791 Turnpike Street, Unit 4<br />
                        North Andover, MA 01845
                        <br />{" "}
                        <a href="tel:19783275561" className="phone-link">
                            +1 978-327-5561
                        </a>
                    </address>
                </div>

                <div className="disclaimer">
                    <div className="footer-row footer-row links">
                        <p className="dark-footer">
                            Center Centre is proud to provide the expertise you
                            need to deliver better products and services.
                        </p>
                    </div>
                </div>

                <div className="program-links-row">
                    <LinkList links={links.column1} name="dark-footer" />
                    <LinkList links={links.column2} name="dark-footer" />
                    <LinkList links={links.column3} name="dark-footer" />
                </div>

                <div className="copyright-row">
                    <Copyright year={currentYear}></Copyright>
                    <div className="footer-column">
                        <p>Questions or comments? </p>
                        <a href="https://centercentre.com/contact">
                            Contact Us
                        </a>
                    </div>
                    <div className="footer-column">
                        <p>
                            <a href="https://centercentre.com/privacy-notice/">
                                Privacy Notice
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </Section>
    );
}

export function Copyright({ year }) {
    return (
        <>
            <div className="footer-column">
                <p className="copyright-text first-one">© {year} </p>
                <p className="copyright-text">Center Centre Inc.</p>
                <p className="copyright-text">All rights reserved.</p>
            </div>
        </>
    );
}
