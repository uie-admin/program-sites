import { Link } from "react-router-dom";

// components
import VerticalCohortSelector from "../../../shared/components/CohortSelectors/VerticalCohortSelector";
import HorizontalCohortSelector from "../../../shared/components/CohortSelectors/HorizontalCohortSelector";
import PageFilter from "../../../shared/components/Utility/PageFilter";
import Section from "../../../shared/components/Layout/Section";
import Headline from "../../../shared/components/Content/Headline";
import PageSticky from "../../../shared/components/Utility/PageSticky";
import Placeholder from "../../../shared/components/Utility/Placeholder";
import DesktopOnly from "../../../shared/components/Utility/DesktopOnly";

export default function Research() {
    // State and hooks to change the h1 on resize

    return (
        <div className="outcomes">
            <Headline
                title={<h1> Why UX Research?</h1>}
                color="--accent-1"
                split
            >
                <DesktopOnly>
                    <PageSticky
                        bottomBoundingElement={".research-content"}
                    >
                        <VerticalCohortSelector
                            logoImage="UxMetricsLogo"
                            altText="Outcome-Drive UX Metrics"
                        />
                    </PageSticky>
                </DesktopOnly>
            </Headline>
            <Section name="research-content" split>
                <div>
                    <h2>The most effective metrics tell compelling stories.</h2>
                    <p>
                        Great metrics describe how you and your team are
                        increasing the value of your products and services for
                        customers, helping your business achieve its top
                        priorities, and making the world better in the process.
                    </p>
                    <p>
                        For UX work, you want metrics showing how a great user
                        experience has increased the value your customers and
                        users receive. You want to show how investing in great
                        UX has paid off by hitting business targets with great
                        returns. And you want your metrics to describe how
                        you’re improving the lives of your customers and users.
                    </p>
                    <h2>
                        Not every metric helps you. Some even harm your efforts.
                    </h2>
                    <p>
                        Unfortunately, you can’t do that with just any metric.
                        The metrics that UX folk commonly use generally don’t
                        tell attention-grabbing stories.
                    </p>

                    <p>
                        Metrics like the time an average user spends on a page,
                        click-through rates, bounce rates, or even conversion
                        rates only indicate what someone did, not whether they
                        had a great experience while doing it. For example, you
                        don’t know if a longer time on a page helped the
                        customer understand your offerings or if the page was
                        confusing and difficult to navigate. Both would take
                        longer and make for an unclear metric without a good
                        story.
                    </p>

                    <p>
                        Measurements of how users feel about you, like their
                        satisfaction (C-SAT), their loyalty (Net Promoter
                        Score), or their assessment of the design’s usability
                        (System Usability Score), don’t tell you anything about
                        the experience your users are having. Their lack of
                        definition can’t separate a poor experience from a bad
                        day with nothing to do with you. And they don’t guide
                        you on what to do differently in your design.
                    </p>

                    <p>
                        UX folks pick these metrics not because they’re
                        effective at telling a compelling story but because they
                        are easy to generate data for. Unfortunately, these
                        metrics don’t help you make your case about your UX
                        efforts’ significant contributions to your
                        organization’s success.
                    </p>
                </div>
                <Placeholder>
                    <VerticalCohortSelector />
                </Placeholder>
            </Section>
            <Section name="goals" split>
                <div>
                    <img
                        src="./images/metrics-goals.png"
                        alt="Jared"
                        className="left-content-image"
                    />
                </div>
                <div>
                    <h2>
                        Outcome-driven UX Metrics focus on the users’
                        experience.
                    </h2>
                    <p>
                        You will start with your team’s current UX outcomes when
                        you craft your outcome-driven UX metrics. These outcome
                        statements describe the improvements you’ll make in the
                        lives of your users and customers.
                    </p>

                    <p>
                        Here are some examples of how teams have used
                        outcome-driven UX metrics to tell stories of their
                        contributions and successes:
                    </p>
                    <ul>
                        <li>
                            A UX team working on electronic healthcare records
                            crafted outcome-driven UX metrics that told the
                            story of how doctors now spend more time with
                            patients and less time entering data into the
                            database. Their metrics showed that time with
                            patients increased while time entering data
                            decreased due to the team’s improvements in the
                            system.
                        </li>
                        <li>
                            Another team working on a Customs port-of-entry
                            logistics system used their outcome-driven UX
                            metrics to share how their design changes, along
                            with new API integration, reduced port inspection
                            times by more than a million hours in one year,
                            which reduced end-customer delivery delays and
                            enhanced their customers’ supply-chain monitoring.
                        </li>
                        <li>
                            A team working on an in-classroom product that
                            monitors student progress used outcome-driven UX
                            metrics to demonstrate how teachers could focus more
                            on students struggling the most with new lessons.
                            Their metrics became instrumental in boosting sales
                            to new school districts.
                        </li>
                    </ul>

                    <p>
                        Outcome-driven UX metrics tell stories about the
                        real-life improvements that users and customers see from
                        better UX. Conventional UX metrics, like time on page or
                        customer satisfaction, don’t come close to having the
                        same impact.
                    </p>

                    <p>
                        If you want everyone in your organization to see the
                        benefit of investing in great UX, you need
                        outcome-driven UX metrics to tell your story.
                    </p>

                    <Link to="/topics">
                        Check out everything you’ll learn in this course.
                    </Link>
                </div>
            </Section>
            <Section name="cta-topics">
                <div className="cta-topics-text">
                    <div>
                        <h2>
                            Ready to sign up for the Outcome-Driven UX Metrics
                            Online Course?
                        </h2>
                        <p>
                            Join one of our upcoming cohorts to dive into these
                            eight influential topics. Jared Spool will walk with
                            you every step of the way.
                        </p>
                    </div>
                    <picture className="research-logo hide-on-mobile">
                        <img
                            src="./images/UxMetricsLogo.png"
                            alt="Outcome Driven UX Metrics"
                        />
                    </picture>
                </div>
            </Section>
            <div className="horizontal-VerticalCohortSelector-grey-container">
                <HorizontalCohortSelector />
            </div>
        </div>
    );
}
