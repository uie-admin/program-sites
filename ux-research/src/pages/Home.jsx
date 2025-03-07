// Components
import Testimonial from "../components/Content/Testimonial.jsx";
import Section from "../components/Layout/Section.jsx";
import IconList from "../components/Content/IconList.jsx";
import PriceList from "../components/Content/PriceList.jsx";

// Widgets
import HorizontalCohortSelector from "../components/CohortSelectors/HorizontalCohortSelector";
import VerticalCohortSelector from "../components/CohortSelectors/VerticalCohortSelector";
import CalendarV2 from "../components/CalendarV2/CohortCalendar";
import Headline from "../components/Content/Headline";
import PageSticky from "../components/Utility/PageSticky.jsx";
import Sticky from "../components/Utility/Sticky.jsx";
import Placeholder from "../components/Utility/Placeholder.jsx";
import DesktopOnly from "../components/Utility/DesktopOnly.jsx";

export default function Home() {
    return (
        <div className="App">
            <Headline
                split
                mobileTop="3em"
                title={
                    <>
                        <p>
                            Strategic UX Research is changing organizations. Get
                            ready to change yours, too.
                        </p>
                        <p>
                            Lead your organization to become the foremost expert
                            in your users and customers.
                        </p>
                    </>
                }
            >
                <DesktopOnly>
                    <Placeholder>
                        <VerticalCohortSelector />
                    </Placeholder>
                </DesktopOnly>
            </Headline>

            <Section name="HomeContent" split>
                <div>
                    <h2>Strategic UX Research is the Next Big Thing.</h2>
                    <p>
                        Get ready to connect your organization’s long-term
                        direction and strategy directly to your customers’ and
                        users’ deepest needs.
                    </p>
                    <p>
                        Awaken your top executives to the value that great user
                        experiences bring to your organization and the people
                        you serve.
                    </p>
                    <p>
                        Give your senior stakeholders and executives a detailed,
                        shared understanding of your customers’ and users’
                        experiences. They’ll use your Strategic UX Research to
                        set the business’ direction, determine where to invest,
                        and focus the entire organization’s long-term and
                        short-term objectives on prioritizing improved
                        experiences.
                    </p>
                    <p>
                        Your new Strategic UX Research efforts will change the
                        relationships your senior executives and stakeholders
                        will have with everyone who will benefit from your
                        products and services. It’s a profound transformation
                        that restructures how your organization makes essential
                        decisions.
                    </p>

                    <h3>
                        How Strategic UX Research is different from what’s
                        practiced today.
                    </h3>
                    <p>
                        Most teams today practice Tactical UX Research. Their
                        work rarely affects more than a specific feature or
                        product.
                    </p>
                    <p>
                        Their research results only describe immediate
                        recommendations or changes that will improve the product
                        slightly.
                    </p>
                    <p>
                        Tactical UX Research rarely improves our understanding
                        of users or what they need in the long term. This
                        understanding never reaches the organization’s upper
                        levels. The most critical decisions, like budgets,
                        staffing, and priorities, don’t consider the users’
                        experiences. Yet these decisions affect whether the team
                        will have what it needs to deliver a great user
                        experience.
                    </p>
                    <p>
                        Conversely, Strategic UX Research is about attaining a
                        deeper understanding of all the different users and
                        their individual experiences. Everyone, including the
                        executive team, learns more about what makes an
                        excellent experience for users, employees, and customers
                        and how to improve their current experiences.
                    </p>
                    <p>
                        These experiences go beyond using the organization’s
                        products or services. They include what happens before,
                        during, and after someone has interacted with the
                        product. Strategic UX Research uncovers the entirety of
                        people's experiences.
                    </p>
                    <p>
                        Research teams orchestrate deep-hanging-out sessions
                        with customers and users. They collect observations and
                        insights that show what a day in the life of users could
                        be like. They combine different experiences with the
                        product or service across the user’s lifetime and
                        connect this all together to show a detailed journey.
                    </p>

                    <h3>
                        Discover the basic principles of Strategic UX Research:
                    </h3>
                    <ul>
                        <li>
                            Build deep expertise about users and their needs.
                        </li>
                        <li>
                            Focus the organization on improving the daily lives
                            of customers, users, and employees.
                        </li>
                        <li>
                            Combine UX and CX practices to collect knowledge
                            from every touch point.
                        </li>
                        <li>
                            Study holistic experiences instead of small slices
                            of a product’s features.
                        </li>
                        <li>
                            Feed the research results into every outcome and
                            decision.
                        </li>
                    </ul>
                    <p>
                        Strategic UX research transforms your organization into
                        an industry leader who delivers, hands down, the most
                        innovative experiences.
                    </p>
                    <p>
                        Your senior executives will champion even more research
                        because they now see how the entire organization
                        treasures it. They'll no longer stop your UX research
                        efforts from being undervalued and the first to be cut.
                    </p>
                    <p>
                        <strong>
                            Shape the way your organization makes strategic
                            decisions. Deliver better-designed products and
                            services. Our Advanced Strategic UX Research
                            essentials will guide you every step of the way.
                        </strong>
                    </p>
                    {/* <CourseScheduleTest /> */}
                </div>
                <Placeholder>
                    <VerticalCohortSelector />
                </Placeholder>
            </Section>

            <Section
                name="testimonials-container"
                color="--accent-1-overlay"
                bg="pixel-texture.jpg"
            >
                <Testimonial icon="star.png" author="T.H., Design Consultant:">
                    <p>
                        “Each day’s takeaways are built upon the next to thread
                        the story and explain a mature way of looking at
                        human-centric design and user experience to the product
                        team. I connected with new friends and members, which
                        was an unexpected bonus!”
                    </p>
                </Testimonial>
            </Section>

            <Section name="courseSchedule" split>
                <div>
                    <h2>Strategic UX Research: Your Online Course Schedule</h2>

                    <p>
                        Strategic UX Research sets the business’ direction,
                        determines where to invest, and focuses the entire
                        organization’s long-term and short-term objectives on
                        prioritizing improved experiences.
                    </p>
                    <p>
                        Join our online workshop to make UX a valuable part of
                        the organization’s strategy. During each of this
                        course’s four weeks, you’ll cover two of the eight
                        Strategic UX Research topics. For each topic, you’ll
                        watch a pre-recorded lecture and join Jared in a live
                        small-group coaching session.
                    </p>
                    <p>
                        The lectures are already recorded, so you can watch them
                        in advance or join an optional “Live Watch” session with
                        your fellow cohort members.
                    </p>
                    <p>
                        In each coaching session, you’ll work directly with
                        Jared and your fellow cohort members to create a
                        strategic UX Research plan and work through challenges
                        that are specific to your current situation. You’ll hear
                        how others are working through their challenges, and
                        you’ll share what’s worked best for you.
                    </p>
                    <p>
                        We keep the cohorts small, so you’ll have plenty of time
                        to be coached on how you’ll implement your strategic UX
                        Research.
                    </p>
                </div>
                <Sticky>
                    <div className="hide-on-mobile">
                        <VerticalCohortSelector />
                    </div>
                </Sticky>
            </Section>

            <CalendarV2 cohortID="B" />

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
                        {" "}
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
                    <VerticalCohortSelector />
                </Sticky>
            </Section>

            <Section name="video-series" color="bg-grey" split>
                <section className="video-series-content">
                    <div>
                        <h2>
                            Can’t attend the course live? <br />
                            Purchase the Recorded Adv. Strategic UX Research
                            Video Series.
                        </h2>
                        <p>
                            We know that not everyone has the resources to join
                            us live. That’s ok. You can purchase the Adv.
                            Strategic UX Research video series.
                        </p>
                        <p>
                            You can watch all eight sessions of the Adv.
                            Strategic UX Research Course broken up into two
                            parts in our UX Strategy Essentials Library.
                        </p>
                        <h3>What’s included for $227:</h3>
                        <ul>
                            <li>
                                The lectures and notes from all eight topics.
                            </li>
                            <li>Catch the lectures on your own schedule.</li>
                        </ul>
                        <span>Access is for 90 days.</span>
                    </div>
                </section>
                <div className="purchase-box">
                    <img src="./images/laptopResearch.png" alt="computer" />
                    <div className="purchase-box-text">
                        <h3>Adv. Strategic UX Research Video Series</h3>
                        <p className="purchase-box-price">$277</p>
                    </div>
                    <button className="btn-shadow btn purchase-box-button">
                        <a
                            className="purchase-box-button-white"
                            href="https://essentials.centercentre.com/research"
                        >
                            PURCHASE VIDEO SERIES
                        </a>
                    </button>
                </div>
            </Section>
        </div>
    );
}
