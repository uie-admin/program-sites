import { useState, useEffect } from "react";

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
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Update the state on window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup the listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="outcomes">
            <Headline title={<h1> Why UX Research?</h1>} split>
                <DesktopOnly>
                    <PageSticky
                        topBoundingElement={".headline"}
                        bottomBoundingElement={".research-content"}
                        paddingTop={40}
                        paddingBottom={20}
                    >
                        <VerticalCohortSelector />
                    </PageSticky>
                </DesktopOnly>
            </Headline>
            <Section name="research-content" split>
                <div>
                    <h2>
                        The right research makes your team more strategic,
                        influential, and innovative.
                    </h2>
                    <p>
                        There’s a technical term for the absence of UX research:
                        guessing.
                    </p>
                    <p>
                        When stakeholders and teams lack the knowledge they need
                        to make critical decisions, they guess. They might call
                        it a hunch, bet, experiment, or even an educated guess.
                        It’s still guessing.
                    </p>
                    <p>
                        Guessing is expensive and time-consuming for your
                        product team. It forces near-endless debates about the
                        “correct” approach. You have to validate your designs,
                        or worse, just build something and put it into the world
                        only to learn that it’s not what users and customers
                        want or need. When you guess wrong (which is too often
                        the case), all that work is a waste, and you learn very
                        little about what would’ve worked.
                    </p>
                    <h3>Strategic UX Research changes all that.</h3>
                    <p>
                        Your team stops guessing because they’ve built expertise
                        in who your users and customers are, what they need,
                        what their current experiences are, and what their
                        future experiences could be.
                    </p>
                    <p>
                        When your team has all that knowledge about users and
                        customers at their fingertips, you no longer have to
                        guess. Your deep understanding answers any questions
                        just as you realize you have them.
                    </p>
                    <p>
                        Most importantly, you get the right products and
                        services into the market quickly because having
                        confidence in what you need to deliver is a production
                        accelerator. Plus, you have solid outcome-driven UX
                        metrics demonstrating how every new release improves
                        your customers’ and users’ lives. Improving people’s
                        lives increases their love and loyalty to your brand and
                        products.
                    </p>

                    <h3>Build your Strategic UX Research practice today.</h3>

                    <p>
                        Turn your organization into the world’s foremost experts
                        on what your customers and users need and want.
                        Accelerate your strategic decision-making capabilities
                        with increased confidence from a shared understanding of
                        your users' experiences. No more guessing.
                    </p>
                </div>
                <Placeholder>
                    <VerticalCohortSelector />
                </Placeholder>
            </Section>

            <div className="horizontal-VerticalCohortSelector-grey-container">
                <HorizontalCohortSelector />
            </div>
        </div>
    );
}
