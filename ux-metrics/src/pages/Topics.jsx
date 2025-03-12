// components
import VerticalCohortSelector from "../../../shared/components/CohortSelectors/VerticalCohortSelector";
import Section from "../../../shared/components/Layout/Section";
import HorizontalCohortSelector from "../../../shared/components/CohortSelectors/HorizontalCohortSelector";
import TopicList from "../../../shared/components/Content/TopicList";
import Headline from "../../../shared/components/Content/Headline";
import PageSticky from "../../../shared/components/Utility/PageSticky";
import Placeholder from "../../../shared/components/Utility/Placeholder";
import DesktopOnly from "../../../shared/components/Utility/DesktopOnly";
import MobileOnly from "../../../shared/components/Utility/MobileOnly";

export default function Topics() {
    return (
        <div className="topics">
            <Headline
                title={<h1> Course Topics</h1>}
                color="--accent-1"
                split
            >
                <DesktopOnly>
                    <PageSticky
                        topBoundingElement={".headline"}
                        bottomBoundingElement={".courseTopics-intro"}
                        paddingTop={40}
                        paddingBottom={40}
                    >
                        <VerticalCohortSelector
                            logoImage="UxMetricsLogo"
                            altText="Outcome-Drive UX Metrics"
                        />
                    </PageSticky>
                </DesktopOnly>
            </Headline>

            <Section name="courseTopics-intro">
                <MobileOnly>
                    <VerticalCohortSelector
                        logoImage="UxMetricsLogo"
                        altText="Outcome-Drive UX Metrics"
                    />
                </MobileOnly>
                <div className="courseTopics-content">
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
                <Placeholder>
                    <VerticalCohortSelector
                        logoImage="UxMetricsLogo"
                        altText="Outcome-Drive UX Metrics"
                    />
                </Placeholder>
            </Section>
            <Section>
                <hr></hr>
            </Section>
            <TopicList program="METRICS" cohort="F" />
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
                        <img src="/images/UxMetricsLogo.png" />
                    </picture>
                </div>
            </Section>
            <HorizontalCohortSelector />
        </div>
    );
}
