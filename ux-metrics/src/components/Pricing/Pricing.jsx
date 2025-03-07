import "./Pricing.css";
import Modal from "../Modal/Modal";

export default function Pricing({ children }) {
    return (
        <>
            <section className="pricing">
                <div className="pricing-content">
                    <div className="pricing-content">
                        <h2>Sign up for Outcome-Driven UX Metrics Course</h2>
                        <p>
                            Ready to dive in deep and absorb everything there is
                            to know about Outcome-driven UX Metrics?
                        </p>
                        <ul>
                            <li>
                                Individual price per person <br /> $499
                            </li>
                            <li>
                                Team price per person ($100 off each person)
                                <br /> $399
                            </li>
                            <li>
                                Unemployed UXer per person <br /> $199
                            </li>
                        </ul>
                        <div>
                            <p>What’s included in the course:</p>
                            <ul>
                                <li>
                                    <img
                                        src="./images/8.png"
                                        alt="8"
                                        className="pricing-list-image"
                                    />
                                    Eight 90-minute live sessions with Jared
                                    Spool.
                                </li>
                                <li>
                                    <img
                                        src="./images/8.png"
                                        alt="8"
                                        className="pricing-list-image"
                                    />
                                    Eight 60-minute recorded lectures by Jared
                                    Spool.
                                </li>
                                <li>
                                    <img
                                        src="./images/5-2.png"
                                        alt="book"
                                        className="pricing-list-image"
                                    />
                                    Your Outcome-driven UX Metrics Planning
                                    Workbook.
                                </li>
                                <li>
                                    <img
                                        src="./images/7.png"
                                        alt="person with glasses"
                                        className="pricing-list-image"
                                    />
                                    Direct access to ask Jared Spool questions.
                                </li>
                                <li>
                                    <img
                                        src="./images/comp.png"
                                        alt="computer"
                                        className="pricing-list-image"
                                    />
                                    6 Weeks of access to all session recordings,
                                    Q&As, and notes.
                                </li>
                                <li>
                                    <img
                                        src="./images/10.png"
                                        alt="certificate"
                                        className="pricing-list-image"
                                    />
                                    A personalized Certificate of Completion for
                                    the Outcome-driven UX Metrics program.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <Modal /> */}
            </section>
        </>
    );
}
