// Components
import Testimonial from "../../../shared/components/Content/Testimonial.jsx";
import Section from "../../../shared/components/Layout/Section.jsx";
import IconList from "../../../shared/components/Content/IconList.jsx";
import PriceList from "../../../shared/components/Content/PriceList.jsx";

// Widgets
import HorizontalCohortSelector from "../../../shared/components/CohortSelectors/HorizontalCohortSelector";
import VerticalCohortSelector from "../../../shared/components/CohortSelectors/VerticalCohortSelector";
import CalendarV2 from "../../../shared/components/CalendarV2/CohortCalendar.jsx";
import Headline from "../../../shared/components/Content/Headline.jsx";
import PageSticky from "../../../shared/components/Utility/PageSticky.jsx";
import Sticky from "../../../shared/components/Utility/Sticky.jsx";
import Placeholder from "../../../shared/components/Utility/Placeholder.jsx";
import DesktopOnly from "../../../shared/components/Utility/DesktopOnly.jsx";
import Button from "../../../shared/components/Buttons/Button.jsx";

export default function Home() {
    return (
        <div className="App">
            <Headline
                split
                color="--accent-1"
                mobileTop="3em"
                title={
                    <>
                        <p>
                            To get real measurable UX results, we need to focus
                            on our customers’ and users’ real needs.
                        </p>
                        <p>
                            Everything we do and measure should be
                            outcome-based. No more measuring for measuring sake.
                        </p>
                    </>
                }
            >
                <DesktopOnly>
                    <Placeholder>
                        <VerticalCohortSelector
                            logoImage="UxMetricsLogo"
                            altText="Outcome-Drive UX Metrics"
                        />
                    </Placeholder>
                </DesktopOnly>
            </Headline>

            <Section name="HomeContent" split>
                <div>
                    <h2>Outcome-Driven UX Metrics.</h2>
                    <h2>Measuring your users’ actual experience.</h2>
                    <p>
                        <strong>Outcome-Driven UX Metrics</strong> is our
                        radical approach to measuring and reporting UX metrics
                        with your organization. You’ll directly measure how
                        every new release of your products and services improves
                        your customers’ and users’ lives.
                    </p>
                    <p>When you share Outcome-driven UX Metrics, you’ll…</p>
                    <ul className="styled-list">
                        <li>
                            Increase the strategic contributions your UX team
                            delivers to your organization.
                        </li>
                        <li>
                            Raise the perception of UX’s value in the eyes of
                            your executives and senior stakeholders.
                        </li>
                        <li>
                            Inspire your peers in development and product
                            management to make UX a priority in their work.
                        </li>
                        <li>
                            Guide your organization to deliver more
                            human-centered products and services.
                        </li>
                    </ul>
                    <p>
                        The Outcome-driven UX Metrics framework is not based on
                        the magical thinking you find in conventional UX metrics
                        approaches. Conventional metrics make your work harder
                        because there’s no direct connection to the effort you
                        put in.
                    </p>

                    <p>
                        With conventional metrics, you have to cross your
                        fingers and hope that your hard work will improve your
                        conversion rates, Net Promoter Scores, or revenue and
                        retention metrics. Those metrics make it hard when
                        someone asks how you know your work made things better.
                        With conventional metrics, you never really know.
                    </p>

                    <p>
                        Outcome-driven UX Metrics are different. They measure
                        directly how you and your team have improved your
                        customers’ and users’ lives.
                    </p>
                    <p>
                        <em>”What gets measured, gets done.”</em> With
                        Outcome-driven UX Metrics, UX gets done well. Your
                        executives and senior stakeholders immediately see the
                        value improved UX brings your customers and the
                        increased benefits your users receive.
                    </p>
                    <p>
                        Outcome-driven UX Metrics make UX distinctively visible.
                    </p>

                    <h3>Showcase precisely where you’re delivering value.</h3>

                    <p>
                        You’ll start with what we call a <em>UX Outcome.</em>{" "}
                        Your UX outcome answers a simple question:
                        <em className="emphasis">
                            “How will you improve your users’ and customers’
                            lives?”
                        </em>
                    </p>
                    <p>
                        Ultimately, you’ll build your metrics around this
                        question.
                    </p>

                    <p>
                        Using your UX outcome, you’ll create three categories of
                        metrics:
                    </p>
                    <ul className="styled-list">
                        <li>
                            <em>UX Success metrics:</em> Report the precise
                            moment you’ve improved your customers’ and users'
                            lives.
                        </li>
                        <li>
                            <em>UX Progress metrics:</em> Achieve key results as
                            your team progresses against your planned
                            milestones.
                        </li>
                        <li>
                            <em>Problem-value metrics:</em> Pinpoint and
                            aggregate your organization’s ongoing costs of poor
                            UX to promote UX’s return on investment.
                        </li>
                    </ul>
                    <p>
                        Each of these metrics categories helps you tell the
                        story of your UX journey. The story of where you’re
                        going, where you started, and how far along you are.
                    </p>
                    <p>
                        Outcome-driven UX Metrics are simple in their concepts.
                        Once you acquire the fundamentals, you’re ready to
                        implement your own.
                    </p>
                    <p>
                        And once you implement your own Outcome-Driven UX
                        Metrics, you've unleashed a superpower. You'll spark
                        exceptional outcomes with your UX metrics as a
                        foundation.
                    </p>
                    <p>
                        <b>
                            You need Outcome-driven UX metrics to improve how
                            your organization values UX.
                        </b>
                    </p>
                </div>
                {/* <CourseScheduleTest /> */}
                <Placeholder>
                    <VerticalCohortSelector
                        logoImage="UxMetricsLogo"
                        altText="Outcome-Drive UX Metrics"
                    />
                </Placeholder>
            </Section>

            <Section
                name="testimonials-container"
                color="--accent-1-overlay"
                bg="pixel-texture.jpg"
            >
                <Testimonial icon="star.png" author="T.H., Design Consultant:">
                    <p>
                        The content of this course has deeply impacted my career
                        (and love for experience design). Your framing of UX
                        outcomes and metrics particularly filled a previously
                        daunting gap in my practice. I find myself constantly
                        returning to anecdotes, positions, and points of view
                        that I came across with Jared Spool.
                    </p>
                    <p>
                        You’re hands down the biggest influence on my own
                        career.
                    </p>
                    <span>
                        <strong>- UX Researcher and Designer </strong>
                    </span>
                </Testimonial>
            </Section>

            <Section name="courseSchedule" split>
                <div className="courseSchedule-pretext">
                    <h2>
                        Outcome-Driven UX Metrics: <br />
                        Your Online Course Schedule
                    </h2>
                    <h4>
                        8 Hours live with Jared Spool in small group coaching,
                        plus 8 hours of recorded content.
                    </h4>
                    <p>
                        During each of this course’s four weeks, you’ll cover
                        two of the eight topics. For each topic, you’ll watch a
                        lecture recording and join Jared in a live small-group
                        coaching session.
                    </p>
                    <p>
                        The lectures are already recorded, so you can watch them
                        in advance or join an optional “Live Watch” session with
                        your fellow cohort members.
                    </p>
                    <p>
                        In each coaching session, you’ll work directly with
                        Jared and your fellow cohort members to identify your
                        own metrics and work through challenges that are
                        specific to your current situation. You’ll hear how
                        others are working through their challenges, and you’ll
                        share what’s worked best for you.
                    </p>
                    <p>
                        We keep the cohorts small, so you’ll have plenty of time
                        to be coached on how you’ll implement your
                        Outcome-driven UX metrics.
                    </p>
                    <p>
                        We know that schedules are tough, so we record every
                        coaching session with Jared. If you miss a session, or
                        you just want to review what you discussed, you’ll have
                        access to the recordings for 6 months after the course
                        ends. (You can also watch the recordings from other
                        cohorts, to hear how they worked through their biggest
                        challenges.)
                    </p>
                </div>
                <Sticky>
                    <div className="hide-on-mobile">
                        <VerticalCohortSelector
                            logoImage="UxMetricsLogo"
                            altText="Outcome-Drive UX Metrics"
                        />
                    </div>
                </Sticky>
            </Section>

            <CalendarV2 cohortID="1" />

            <HorizontalCohortSelector />

            <Section name="jaredSpool" split>
                <div>
                    <h2>
                        Led by Jared Spool, <br /> Maker of Awesomeness
                    </h2>
                    <p>
                        Everything you learn in this Intensive comes directly
                        from Jared’s years of working across industries,
                        discovering the best practices for organizations to
                        deliver well-designed products and services.
                    </p>

                    <p>
                        His experience working with design leaders of
                        organizations like IBM, NASA, GE, Fidelity Investments,
                        SAP, GM, Exxon Mobil, and the Obama White House has
                        taught him exactly what teams need to mount strategic,
                        influential UX research initiatives.
                    </p>

                    <p>
                        You’ll love his stories, his ability to demonstrate
                        every point with a simple, concrete example, and his
                        comically adorable attempts to draw out his ideas. (You
                        can’t fault him for trying, though.)
                    </p>

                    <p>
                        Most importantly, you’ll love how smarter you’ll feel
                        after spending a few minutes absorbing his
                        experience-informed wisdom. Don’t pass up this
                        opportunity to glean everything you can from Jared.
                    </p>
                </div>
                <div>
                    <img
                        src="/images/Jared_Spool 2.png"
                        alt="Jared"
                        className="jaredSpool-image"
                    />
                </div>
            </Section>

            <Section name="program-pricing pricing">
                <div>
                    <h2>Sign up for Advanced Strategic UX Research Course</h2>
                    <p>
                        Ready to dive in deep and absorb everything there is to
                        know about Outcome-driven UX Metrics?
                    </p>
                    <PriceList
                        prices={[
                            {
                                description: "Individual price per person",
                                price: "$499",
                            },
                            {
                                description:
                                    "Team price per person ($100 off each person)",
                                price: "$399",
                            },
                            {
                                description: "Unemployed UXer per person",
                                price: "$199",
                            },
                        ]}
                    />

                    <h3>What’s included in the course:</h3>

                    <IconList
                        icons={[
                            "./images/8.png",
                            "./images/8.png",
                            "./images/5-2.png",
                            "./images/7.png",
                            "./images/comp.png",
                            "./images/10.png",
                        ]}
                        iconSize="2.5rem"
                        descriptions={[
                            "Eight 90-minute live sessions with Jared Spool.",
                            "Eight 60-minute recorded lectures by Jared Spool.",
                            "Your Outcome-driven UX Metrics Planning Workbook.",
                            "Direct access to ask Jared Spool questions.",
                            "6 Weeks of access to all session recordings, Q&As, and notes.",
                            "A personalized Certificate of Completion for the Outcome-driven UX Metrics program.",
                        ]}
                    />
                </div>
                <Sticky>
                    <VerticalCohortSelector
                        logoImage="UxMetricsLogo"
                        altText="Outcome-Drive UX Metrics"
                    />
                </Sticky>
            </Section>

            <Section name="video-series" color="bg-grey" split>
                <section className="video-series-content">
                    <div>
                        <h2>
                            Can’t attend the course live? <br />
                            Purchase the Recorded Outcome-Driven UX Metrics
                            Video Series.
                        </h2>
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
                        <h3>What’s included for $227:</h3>
                        <ul className="styled-list">
                            <li>
                                The lectures and notes from all eight topics.
                            </li>
                            <li>Catch the lectures on your own schedule.</li>
                        </ul>
                        <span>Access is for 90 days.</span>
                    </div>
                </section>
                <div className="purchase-box">
                    <img src="./images/Metrics-laptop.png" alt="computer" />
                    <div className="purchase-box-text">
                        <h3>Outcome Driven UX Metrics Video Series</h3>
                        <p className="purchase-box-price">$277</p>
                    </div>
                    <Button className="btn-shadow btn purchase-box-button"
                        href="https://essentials.centercentre.com/metrics">
                        PURCHASE VIDEO SERIES
                    </Button>
                </div>
            </Section>
        </div>
    );
}
