// components
import Header from "../components/Header/Header";
import GreenArticle from "../components/GreenArticle/GreenArticle";
import Footer from "../components/Footer/Footer";
import LeftContent from "../components/LeftContent/LeftContent";
import RightContent from "../components/RightContent/RightContent";
import TestComponent from "../components/TestComponent/TestComponent";
import VerticalCohortSelector from "../components/VerticalCohortSelector/VerticalCohortSelector";
import Navbar from "../components/Navbar/Navbar";

export default function Topics() {
    return (
        <div className="topics">
            <Navbar />
            <Header />
            <GreenArticle>
                <h1>Course Topics</h1>
            </GreenArticle>
            <TestComponent>
                <div className="test-component-spacing">
                    <h2>
                        Develop your own organization’s Outcome-driven UX
                        Metrics.
                    </h2>
                    <p>
                        Join us to complete your journey with metrics that will{" "}
                        <b>
                            drive your organization to deliver better-designed
                            products and services.
                        </b>
                    </p>
                    <p>
                        You won’t make up imaginary, over-simplified metrics for
                        fake companies and products in this intensive. Instead,
                        you (and your team, if you bring them along) will roll
                        up your sleeves and identify the critical metrics for
                        your products and services.
                    </p>
                    <p>
                        During each of this course’s four weeks, you’ll cover
                        two of the eight topics. For each topic, you’ll watch a
                        pre-recorded lecture and join Jared in a live
                        small-group coaching session.{" "}
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
                </div>
                <VerticalCohortSelector />
            </TestComponent>
            <LeftContent>
                <div className="">
                    <h2>8 Topics: Outcome-driven UX Metrics</h2>
                    <h3>
                        Topic 1: Align Your Teams to Great UX with UX Outcomes
                    </h3>
                    <p>
                        <i>
                            You can’t measure success if you don’t know what
                            your goal is.
                        </i>
                    </p>

                    <p>
                        You’ll deliver great UX when your products and services
                        exceed your users’ expectations and anticipate your
                        customers’ needs. You’ll need the right metrics to know
                        you’re on the right path. Those metrics come from the
                        ultimate UX outcome: improving the lives of your
                        customers, users, and anyone affected by your work.
                    </p>

                    <p>
                        <i>
                            Discover how to create effective UX Outcomes so
                            that…
                        </i>
                    </p>

                    <ul>
                        <li>
                            Your team and stakeholders are clearly on the same
                            page about how delivering great UX improves people’s
                            lives.
                        </li>
                        <li>
                            You’ll move beyond the unhelpful practice of
                            measuring outputs by focusing the team on outcomes.
                        </li>
                        <li>
                            You can show how the features of the next release
                            are critical to your long-term UX vision.
                        </li>
                    </ul>
                </div>
                <div>
                    <img
                        src="/images/topic-1.png"
                        alt="Jared"
                        className="left-content-image"
                    />
                </div>
            </LeftContent>
            <RightContent>
                <div>
                    <img
                        src="/images/topic-2.png"
                        alt="Jared"
                        className="left-content-image"
                    />
                </div>
                <div className="">
                    <h3>
                        Topic 2: Reach Your Objectives with Your UX Success
                        Metrics
                    </h3>
                    <p>
                        <i>
                            Your team can’t win the race if nobody can find the
                            finish line.
                        </i>
                    </p>

                    <p>
                        Everyone needs to be focused on the same goals. You’ll
                        define your OKR objectives at the precise moment your
                        designs will improve your users' and customers’ lives.
                        There’s nothing like clarity to keep everybody on the
                        same page.
                    </p>

                    <p>
                        <i>
                            Explore how to create powerful UX Success Metrics so
                            that…
                        </i>
                    </p>
                    <ul>
                        <li>
                            Your entire team and your stakeholders know exactly
                            what goals they need to aim for.
                        </li>
                        <li>
                            You know exactly when to celebrate your success.
                        </li>
                        <li>
                            Your senior management clearly sees how your work
                            has improved users’ lives.
                        </li>
                    </ul>
                </div>
            </RightContent>
            <LeftContent>
                <div className="">
                    <h3>
                        Topic 3: Achieve Key Results with Your UX Progress
                        Metrics
                    </h3>
                    <p>
                        You and your team work hard to improve things for your
                        users, customers, and employees. Yet, it seems nobody
                        sees how hard you labor.
                    </p>
                    <p>
                        <i>
                            High-value, audacious goals take time. We need to
                            show progress.
                        </i>
                    </p>
                    <p>
                        Progress happens incrementally and, all too often,
                        invisibly. Identify OKR key results that show your
                        team's work while simultaneously promoting the
                        improvements and benefits your designs are accumulating.
                        Build up your team’s value as your users receive
                        better-designed experiences.
                    </p>
                    <p>
                        <i>
                            Discover how to create insightful UX Progress
                            Metrics so that…
                        </i>
                    </p>{" "}
                    <ul>
                        <li>
                            Your development and product teams are eager to
                            prioritize the UX.
                        </li>
                        <li>You know exactly what to report in your OKRs.</li>
                        <li>
                            Your stakeholders immediately connect the UX
                            improvement to key business goals.
                        </li>
                    </ul>
                </div>
                <div>
                    <img
                        src="/images/topic-3.png"
                        alt="Jared"
                        className="left-content-image"
                    />
                </div>
            </LeftContent>
            <RightContent>
                <div>
                    <img
                        src="/images/topic-4.png"
                        alt="Jared"
                        className="left-content-image"
                    />
                </div>
                <div className="">
                    <h3>
                        Topic 4: Eliminate the Costs of Poor UX with
                        Problem-Value Metrics
                    </h3>
                    <p>
                        <i>Grow executive support for high-value UX efforts.</i>
                    </p>

                    <p>
                        Poor UX causes problems for your users and customers.
                        And it often comes back to haunt your organization’s
                        bottom line through the costs of support, training, and
                        lost sales. Now, you can accurately show how much these
                        costs continue to accumulate.
                    </p>

                    <p>
                        <i>
                            Explore how to create influential Problem-Value
                            Metrics so that…
                        </i>
                    </p>

                    <ul>
                        <li>
                            You motivate senior management to take UX seriously
                            because better UX is a win for everyone.
                        </li>
                        <li>
                            You win over the finance department as your UX
                            efforts shrink corporate costs.
                        </li>
                        <li>
                            You have vital stakeholders praising how better UX
                            improved their department’s fiscal performance.
                        </li>
                    </ul>
                </div>
            </RightContent>
            <LeftContent>
                <div className="">
                    <h3>
                        Topic 5: Raise UX’s Visibility with Outcome-driven UX
                        Metrics
                    </h3>
                    <p>
                        <i>
                            Make UX metrics a core component of your
                            organization’s culture.
                        </i>
                    </p>

                    <p>
                        Tie your UX outcomes directly to the product roadmap.
                        Show how every new capability and feature is on the path
                        to becoming the product everyone wants to own and the
                        service everyone wants to use. Influence the vital
                        strategic decisions that impact user experiences.
                    </p>

                    <p>
                        <i>
                            Discover how to create strategic UX metrics so that…
                        </i>
                    </p>

                    <ul>
                        <li>
                            You reduce the risk of delivering unwanted features
                            and poorly thought-through capabilities.
                        </li>
                        <li>
                            You get called into the high-level discussions and
                            meetings that define where your products and
                            services are heading.
                        </li>
                        <li>
                            Your UX work becomes proactive, and your
                            understanding of your users becomes invaluable.
                        </li>
                    </ul>
                </div>
                <div>
                    <img
                        src="/images/topic-5.png"
                        alt="Jared"
                        className="left-content-image"
                    />
                </div>
            </LeftContent>
            <RightContent>
                <div>
                    <img
                        src="/images/topic-6.png"
                        alt="Jared"
                        className="left-content-image"
                    />
                </div>
                <div className="">
                    <h3>Topic 6: Identifying Your UX Outcomes</h3>
                    <p>
                        <i>
                            Bring all the essential players together to identify
                            critical UX Outcomes.
                        </i>
                    </p>

                    <p>
                        Your Outcome-driven UX Metrics become far more powerful
                        when you’ve gotten buy-in from the vital stakeholders
                        and champions. You’ll discover how to conduct a special
                        UX outcome workshop to pinpoint the improvements in the
                        lives of your users and customers.
                    </p>

                    <p>
                        <i>
                            Explore the best practices for crafting UX Outcomes
                            so that
                        </i>
                    </p>

                    <ul>
                        <li>
                            You orchestrate the buy-in of what great UX looks
                            like.
                        </li>
                        <li>
                            You establish a solid “definition of done” that your
                            Agile teams can use to know what to deliver.
                        </li>
                        <li>
                            You prevent team members and stakeholders from
                            jumping to solutions before everyone understands the
                            problems.
                        </li>
                    </ul>
                </div>
            </RightContent>
            <LeftContent>
                {" "}
                <div className="">
                    <h3>Topic 7: Expand Your UX Research</h3>
                    <p>
                        <i>
                            Use UX metrics as a wedge to sell better UX
                            research.
                        </i>
                    </p>

                    <p>
                        You’ll likely need to up your UX research game to
                        deliver high-powered UX metrics. You can only know what
                        to improve if you know what’s currently in need of
                        improvement. Demonstrate the power of strategic UX
                        research.
                    </p>

                    <p>
                        <i>
                            Uncover how thorough UX research improves success so
                            that…
                        </i>
                    </p>
                    <ul>
                        <li>
                            You increase your organization’s UX maturity by
                            building expertise in your users and their needs.
                        </li>
                        <li>
                            You ensure every item in your product roadmap solves
                            a necessary problem that customers would be happy to
                            pay for.
                        </li>
                        <li>
                            You discover innovative ways to anticipate your
                            customers’ needs and exceed your users’
                            expectations.
                        </li>
                    </ul>
                </div>
                <div>
                    <img
                        src="/images/topic-7.png"
                        alt="Jared"
                        className="left-content-image"
                    />
                </div>
            </LeftContent>
            <RightContent>
                <div>
                    <img
                        src="/images/topic-8.png"
                        alt="Jared"
                        className="left-content-image"
                    />
                </div>
                <div className="">
                    <h3>Topic 8: Craft Your UX Vision</h3>
                    <p>
                        <i>
                            Make your organization an innovative market leader
                        </i>
                    </p>

                    <p>
                        A UX vision describes what your experiences will be like
                        in the distant future. You’ll inspire your organization
                        to deliver exceptional products and services for years
                        by crafting a clear vision. You instantly merge future
                        OKR objectives into a human-centered goal with broad
                        support.
                    </p>

                    <p>
                        <i>
                            Discover how a compelling UX vision drives your
                            organization so that…
                        </i>
                    </p>

                    <ul>
                        <li>
                            You influence the highest levels of your
                            organization’s strategy.
                        </li>
                        <li>
                            You make your organization the envy of your entire
                            industry, with every other organization holding you
                            up as their goal.
                        </li>
                        <li>
                            You drive your organization to see UX as the central
                            competitive promise for everything they do.
                        </li>
                    </ul>
                </div>
            </RightContent>
            <TestComponent>
                <div>
                    <h2>
                        Ready to sign up for the Outcome-Driven UX Metrics
                        Online Course?
                    </h2>
                    <p>
                        Join one of our upcoming cohorts to dive into these
                        eight influential topics. Jared Spool will walk with you
                        every step of the way.
                    </p>
                    {/* <Hero /> */}
                </div>
                <VerticalCohortSelector />
            </TestComponent>
            <Footer />
        </div>
    );
}
