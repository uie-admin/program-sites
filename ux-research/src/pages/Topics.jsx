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
                split
                color="--research-accent-1"
            >
                <DesktopOnly>
                    <PageSticky
                        topBoundingElement={".headline"}
                        bottomBoundingElement={".courseTopics-intro"}
                        paddingTop={40}
                        paddingBottom={40}
                    >
                        <VerticalCohortSelector
                            logoImage="UxResearchLogo"
                            altText="Advanced Strategic UX Research"
                        />
                    </PageSticky>
                </DesktopOnly>
            </Headline>

            <Section name="courseTopics-intro">
                <MobileOnly>
                    <VerticalCohortSelector
                        logoImage="UxResearchLogo"
                        altText="Advanced Strategic UX Research"
                    />
                </MobileOnly>
                <div className="courseTopics-content">
                    <h2>
                        Strategic UX Research sets the business’ direction,
                        determines where to invest, and focuses the entire
                        organization’s long-term and short-term objectives on
                        prioritizing improved experiences.
                    </h2>

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
                <Placeholder>
                    <VerticalCohortSelector
                        logoImage="UxResearchLogo"
                        altText="Advanced Strategic UX Research"
                    />
                </Placeholder>
            </Section>
            <Section>
                <hr></hr>
            </Section>
            <TopicList program="RESEARCH" cohort="C" />
            <Section name="cta-topics">
                <div className="cta-topics-text">
                    <div>
                        <h2>
                            Ready to sign up for the Adv. Strategic UX Research
                            Online Course?
                        </h2>
                        <p>
                            Join one of our upcoming cohorts to dive into these
                            eight influential topics. Jared Spool will walk with
                            you every step of the way.
                        </p>
                    </div>
                    <img
                        className="research-logo hide-on-mobile"
                        src="/images/UxResearchLogo.png"
                    />
                </div>
            </Section>
            <HorizontalCohortSelector />
        </div>
    );
}
