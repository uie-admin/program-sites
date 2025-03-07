// components
import Header from "../components/Header/Header";
import GreenArticle from "../components/GreenArticle/GreenArticle";
import Navbar from "../components/Navbar/Navbar";

import Footer from "../components/Footer/Footer";
import Testimonials from "../components/Testimonials/Testimonials";
import TestComponent from "../components/TestComponent/TestComponent";
import VideoSeries from "../components/VideoSeries/VideoSeries";
import HorizontalCohortSelector from "../components/HorizontalCohortSelector/HorizontalCohortSelector";

export default function Teams() {
    return (
        <div className="teams">
            <Navbar />
            <Header />
            <GreenArticle>
                <h1>Sign Up Your Team</h1>
            </GreenArticle>
            {/* <TestComponent>
                <div className="article-teams">
                    <h2>UX Metrics to drive your entire organization.</h2>
                    <p>Focus your team and executives on improving your customers’ lives through visible outcomes your entire team and stakeholders can measure and see.</p>
                    <p>Get much more out of implementing your Outcome-driven UX Metrics by involving your larger team.</p>
                    <ul className="article-team-list">
                        <li className="article-team-list-item">
                            <img src="./images/bubble.png" alt="speech bubble" /> For Less than 8 Team Members: Join a Public Course
                        </li>
                        <li className="article-team-list-item">
                            <img src="./images/bubble-star.png" alt="speech bubble with a star" /> For More than 8 Team Members: Plan a Private Workshop
                        </li>
                    </ul>
                </div>
                <div className="team-testimonial">
                    <p>Wow, our team’s time with Jared had been a whirlwind of learning and development!
                    </p>
                    <p>I moved into a new role, building a team to bring valuable users through software products and workflows that help them achieve their goals and desired outcomes.
                    </p>
                    <p>Jared has helped me tremendously to articulate how we can make the life of the customer better and how to be effective in collaborating with other functional leaders in a UX role.
                    </p>
                    <span><b>- Senior Product Leader</b></span>

                </div>
            </TestComponent> */}

            {/* current teams component - look in TestComponent.css */}
            <TestComponent>
                <div className="article-teams">
                    <h2>UX Metrics to drive your entire organization.</h2>
                    <p>
                        Focus your team and executives on improving your
                        customers’ lives through visible outcomes your entire
                        team and stakeholders can measure and see.
                    </p>
                    <p>
                        Get much more out of implementing your Outcome-driven UX
                        Metrics by involving your larger team.
                    </p>
                    <ul className="article-team-list">
                        <li className="article-team-list-item">
                            <img src="/images/bubble.png" alt="speech bubble" />{" "}
                            <p>
                                {" "}
                                For Less than 8 Team Members: Join a Public
                                Course
                            </p>
                        </li>
                        <li className="article-team-list-item">
                            <img
                                src="/images/bubble-star.png"
                                alt="speech bubble with a star"
                            />{" "}
                            <p>
                                For More than 8 Team Members: Plan a Private
                                Workshop
                            </p>
                        </li>
                    </ul>
                </div>
            </TestComponent>
            <Testimonials>
                <p>
                    Wow, our team’s time with Jared had been a whirlwind of
                    learning and development!
                </p>
                <p>
                    I moved into a new role, building a team to bring valuable
                    users through software products and workflows that help them
                    achieve their goals and desired outcomes.
                </p>
                <p>
                    Jared has helped me tremendously to articulate how we can
                    make the life of the customer better and how to be effective
                    in collaborating with other functional leaders in a UX role.
                </p>
                <span>
                    <b>- Senior Product Leader</b>
                </span>
            </Testimonials>
            <TestComponent>
                <div>
                    <h3>For Less than 8 Team Members: Join a Public Course</h3>
                    <p>
                        As a team, you’ll develop your UX Metrics plan as a team
                        . and alongside a small group of teams facing similar
                        challenges. Together, you’ll start drafting the
                        blueprints for what change will look like across your
                        organization. You’ll come away with your own custom
                        approach to UX Metrics that your entire team can use.
                    </p>
                    <p>When you sign up for a public course cohort:</p>
                    <ul>
                        <li>
                            Sign up each team member at the Team Member Price
                            and save $100 off each registration.
                        </li>
                        <li>
                            Each team member purchases their registration
                            separately or contact us for an invoice.
                        </li>
                    </ul>
                    <p>
                        Pick the next cohort that works best for your team
                        members. If you need to move your team to another cohort
                        date after your team signs up, no worries; we can take
                        care of moving your team.
                    </p>
                </div>
                <div>
                    <img
                        src="/images/public-teams.png"
                        alt="Jared"
                        className="left-content-image"
                    />
                </div>
            </TestComponent>

            <HorizontalCohortSelector />

            <TestComponent>
                <div>
                    <img
                        src="/images/private-teams.png"
                        alt="Jared"
                        className="left-content-image"
                    />
                </div>
                <div>
                    <h3>
                        For More than 8 Team Members: Plan a Private Workshop
                    </h3>
                    <p>
                        Our private workshops work one-on-one with Jared and are
                        ideal for teams who are:
                    </p>
                    <ul>
                        <li>
                            larger than eight team members (you’ll save on the
                            cost of the workshop).
                        </li>
                        <li>scaling their design capabilities.</li>
                        <li>growing their organization's UX maturity.</li>
                        <li>tackling new or complex projects.</li>
                    </ul>
                    <h3>Next Steps for a Private Workshop:</h3>
                    <p>
                        Reach out to us, and we’ll send you a link to jump on a
                        one-on-one call with Jared. Jared will work with you to
                        determine if this course is best for your team.
                    </p>
                    <p>
                        Jared will work with you to pick dates and times that
                        work best for your team members.
                    </p>
                </div>
            </TestComponent>
            <VideoSeries>
                <div className="width-test-team pl-2">
                    <p className="">
                        If you think a tailored, private Outcome-Driven UX
                        Metrics course would be critical for your entire team,
                        contact Jared to discuss the benefits and costs.
                    </p>
                </div>
                <div className="">
                    <h3>Talk to Jared Over a Call</h3>
                    <button className=" btn btn-shadow green-team-button">
                        <a
                            className="purchase-box-button-white"
                            href="https://jmspool-mentoring.youcanbook.me/"
                        >
                            Contact Us and Talk to Jared
                        </a>
                    </button>
                </div>
            </VideoSeries>
            <Footer />
        </div>
    );
}
