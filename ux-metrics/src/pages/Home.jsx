// Components
import Header from "../components/Header/Header";
import GreenArticle from "../components/GreenArticle/GreenArticle";
import HomeContent from "../components/HomeContent/HomeContent";
import Testimonials from "../components/Testimonials/Testimonials";
import CourseSchedule from "../components/CourseSchedule/CourseSchedule";
import JaredSpool from "../components/JaredSpool/JaredSpool";
import VideoSeries from "../components/VideoSeries/VideoSeries";
import Footer from "../components/Footer/Footer";
import Modal from "../components/VerticalCohortSelector/VerticalCohortSelector";
import TestComponent from "../components/TestComponent/TestComponent";
import PurchaseBox from "../components/PurchaseBox/PurchaseBox";
import HorizontalCohortSelector from "../components/HorizontalCohortSelector/HorizontalCohortSelector";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
    return (
        <div className="App">
            <Navbar />
            <Header />

            <GreenArticle>
                <p>
                    To get real measurable UX results, we need to focus on our
                    customers’ and users’ real needs.
                </p>
                <p>
                    Everything we do and measure should be outcome-based. No
                    more measuring for measuring sake. 
                </p>
            </GreenArticle>
            <TestComponent>
                <HomeContent />
            </TestComponent>

            <Testimonials>
                <p>
                    The content of this course has deeply impacted my career
                    (and love for experience design). Your framing of UX
                    outcomes and metrics particularly filled a previously
                    daunting gap in my practice. I find myself constantly
                    returning to anecdotes, positions, and points of view that I
                    came across with Jared Spool.
                </p>
                <p>You’re hands down the biggest influence on my own career.</p>
                <span>
                    <b>- UX Researcher and Designer </b>
                </span>
            </Testimonials>
            <CourseSchedule />
            <HorizontalCohortSelector />
            <JaredSpool />

            <TestComponent>
                <div className="pricing-content">
                    <h2>Sign up for Outcome-Driven UX Metrics Course</h2>
                    <p>
                        Ready to dive in deep and absorb everything there is to
                        know about Outcome-driven UX Metrics?
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
                        <p>
                            <b>What’s included:</b>
                        </p>
                        <ul>
                            <li>
                                <img
                                    src="./images/8.png"
                                    alt="8"
                                    className="pricing-list-image"
                                />
                                Eight 1-hour live coaching sessions with Jared
                                Spool.
                            </li>
                            <li>
                                <img
                                    src="./images/8.png"
                                    alt="8"
                                    className="pricing-list-image"
                                />
                                Eight 50-minute recorded lectures (to watch on
                                your own time or together during a scheduled
                                session for each topic).
                            </li>
                            <li>
                                <img
                                    src="./images/5-2.png"
                                    alt="book"
                                    className="pricing-list-image"
                                />
                                Access a library of resources for developing
                                your UX metrics strategy.
                            </li>
                            <li>
                                <img
                                    src="./images/7.png"
                                    alt="person with glasses"
                                    className="pricing-list-image"
                                />
                                A private community to get your questions
                                answered by Jared and other members.
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
                                A personalized Certificate of Completion for the
                                Outcome-driven UX Metrics program.
                            </li>
                        </ul>
                    </div>
                </div>
                <Modal />
            </TestComponent>
            <div className="bg-grey">
                <VideoSeries>
                    <div>
                        <h3>
                            Can’t attend the course live? <br />
                            Purchase the Recorded Outcome-Driven UX Metrics
                            Video Series.
                        </h3>
                        <p>
                            We know that not everyone has the resources to join
                            us live. That’s ok. You can purchase the UX Metrics
                            to Drive Your Organization's video series.
                        </p>
                        <p>
                            You can watch all nine sessions of the
                            Outcome-driven UX Metrics Course broken up into two
                            parts in our UX Strategy Essentials Library.
                        </p>
                        <span>
                            <b>What’s included for $227:</b>
                        </span>
                        <ul>
                            <li>
                                The lectures and notes from all eight topics.
                            </li>
                            <li>Catch the lectures on your own schedule.</li>
                        </ul>
                        <span>Access is for 90 days.</span>
                    </div>
                    <PurchaseBox
                        src="./images/Metrics-laptop.png"
                        text="Outcome-Driven UX Metrics Video Series"
                        price="$227"
                        buttonText="PURCHASE VIDEO SERIES"
                    />
                </VideoSeries>
            </div>
            <Footer />
            {/*<FloatingComponent /> */}
        </div>
    );
}
