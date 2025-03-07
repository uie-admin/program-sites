import "./Footer.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <section className="footer-background">
            <section className="dark-footer">
                <div className="footer-row links container-cc-footer">
                    <footer className="footer-column">
                        <div className="footer-row ft-mk emulated-flex-gap first-row">
                            <div>
                                <a href="https://www.centercentre.com">
                                    <img
                                        src="https://asset.uie.com/img/logo/center_centre_white.png"
                                        className="ft-logo white-logo"
                                        alt="Center Centre UIE Logo"
                                    />
                                </a>
                            </div>
                            <div className="footer-row links">
                                <p className="dark-footer">
                                    791 Turnpike Street, Unit 4<br />
                                    North Andover, MA 01845
                                    <br />{" "}
                                    <a
                                        href="tel:19783275561"
                                        className="phone-link"
                                    >
                                        +1 978-327-5561
                                    </a>
                                </p>
                            </div>
                            <div className="footer-row footer-row links">
                                <p className="dark-footer">
                                    Center Centre is proud to provide the
                                    expertise you need to deliver better
                                    products and services.
                                </p>
                            </div>
                        </div>

                        <div className="footer-row links">
                            <div className="footer-column">
                                <p className="dark-footer">
                                    <a href="https://centercentre.com/programs/">
                                        All Center Centre Programs
                                    </a>
                                </p>
                                <p className="dark-footer">
                                    <a href="https://leaders.centercentre.com/">
                                        Leaders of Awesomeness
                                    </a>
                                </p>
                                <p className="dark-footer">
                                    <a href="https://essentials.centercentre.com/">
                                        UX Strategy Essentials
                                    </a>
                                </p>
                                <p className="dark-footer">
                                    <a href="https://agile.centercentre.com/">
                                        Taking Control of Agile UX
                                    </a>
                                </p>
                            </div>
                            <div className="footer-column">
                                <p className="dark-footer">
                                    <a href="https://winstakeholders.com/">
                                        Win Stakeholders & Influence Decisions
                                    </a>
                                </p>
                                <p className="dark-footer">
                                    <a href="https://articles.centercentre.com/">
                                        UX Strategy Articles
                                    </a>
                                </p>
                                <p className="dark-footer">
                                    <a href="https://metrics.centercentre.com/">
                                        UX Metrics to Drive Your Organization
                                    </a>
                                </p>
                                <p className="dark-footer">
                                    <a href="https://essentials.centercentre.com/your-next-ux-job">
                                        Essentials of Finding Your Next UX Job
                                    </a>
                                </p>
                            </div>
                            <div className="footer-column ">
                                <p className="dark-footer">
                                    <a href="https://centercentre.com/jared-live/">
                                        Private Talks, Workshops, & Coaching
                                    </a>
                                </p>
                                <p className="dark-footer">
                                    <a href="https://aycl.uie.com/">
                                        All You Can Learn
                                    </a>
                                </p>
                                <p className="dark-footer">
                                    <a href="https://research.centercentre.com/">
                                        Strategic Approaches to UX Research
                                    </a>
                                </p>
                                <p className="dark-footer">
                                    <a href="https://visions.centercentre.com/">
                                        Craft + Lead A Strategic UX Vision
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="footer-row ">
                            <div className="footer-column">
                                <p className="copyright-text first-one">
                                    © {currentYear}{" "}
                                </p>
                                <p className="copyright-text">
                                    Center Centre Inc.
                                </p>
                                <p className="copyright-text">
                                    All rights reserved.
                                </p>
                            </div>
                            <div className="footer-column">
                                <p>
                                    Questions or comments?{" "}
                                    <a href="https://centercentre.com/contact">
                                        Contact Us
                                    </a>
                                    .
                                </p>
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
                </div>
            </section>
        </section>
    );
}
