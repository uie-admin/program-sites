import { Link } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import Headline from "../../../shared/components/Content/Headline";

// components
import SpiffyCheckout from "../../../shared/components/Integrations/SpiffyCheckout";
import Section from "../../../shared/components/Layout/Section";
import { CohortContext, UpcomingCohortContext } from "../../../shared/components/CalendarV2/CalendarDataV2";
import Button from "../../../shared/components/Buttons/Button";

export default function Cohort({ cohortIndex, cohortName }) {
    const [loadingTime, setLoadingTime] = useState(true);
    const [loadingText, setLoadingText] = useState("Loading Checkout...");
    const checkoutRef = useRef(null);

    const cohorts = useContext(CohortContext);
    const upcomingCohorts = useContext(UpcomingCohortContext);
    if (!cohortIndex && upcomingCohorts) {
        cohortIndex = upcomingCohorts[0][0].cohortNumber;
    }

    useEffect(() => {
        const observer = new MutationObserver(() => {
            //defines what happens after the target is changed
            if (
                checkoutRef.current &&
                checkoutRef.current.querySelector("spiffy-checkout")
            ) {
                setLoadingTime(false);
                observer.disconnect();
            }
        });

        if (checkoutRef.current) {
            // we attach the observer to watch for specific changes
            observer.observe(checkoutRef.current, {
                childList: true,
                subtree: true,
            });
        }

        const refreshTimeout = setTimeout(() => {
            setLoadingText("Click here to see our checkout.");
        }, 4000);

        return () => {
            observer.disconnect();
            clearTimeout(refreshTimeout);
        };
    }, []);

    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div id="Cohort">
            <Headline
                title={<h1>Join the {cohortName} Cohort</h1>}
                color="--accent-1"
            />

            <Section className="inner-column" split>
                <div className="width-500">
                    <h2>
                        Develop your own organization’s advanced UX Research
                        strategy.
                    </h2>
                    <p>
                        <strong>
                            Awaken your top executives to the value that great
                            user experiences bring to your organization and the
                            people you serve.
                        </strong>
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
                </div>
                <div className="schedule-aside">
                    <img
                        src="./images/UxResearchLogo.png"
                        alt="Advanced Strategic UX Research"
                    />
                    <Button className="btn btn-shadow schedule-button inner-column-purchase button cohortSelector-button-link" href={"/Cohort" + cohortIndex + "-schedule"}>
                        {cohortName} Schedule
                    </Button>
                </div>
            </Section>
            <Section name={'teamOrIndividual'} split>
                <div>
                    <h2>Choose to sign up as an Individual or a Team Member</h2>
                    <p>
                        You’ll get the most out of your course if you come with
                        your team.
                    </p>

                    <p>
                        <strong>
                            As a team, you’ll develop your advanced UX Research
                            strategy together.
                        </strong>
                        You’ll restructure how your organization makes essential
                        decisions with advanced UX Research. You’ll come away
                        from the course with a plan to connect your
                        organization’s long-term direction and strategy directly
                        to your customers’ and users’ deepest needs.
                    </p>
                    <p>
                        <strong>
                            Each team member saves $100 on their registration
                            when they sign up as a team member.
                        </strong>
                    </p>
                    <p>
                        Each team member must purchase their registration
                        separately. Whichever you choose, team or individual,
                        we’ll give you our full support.
                    </p>
                </div>
                <div>
                    <h2>Currently out of work? We’ve got you.</h2>
                    <p>
                        <strong>
                            We’re offering $199 registrations for our
                            out-of-work colleagues.
                        </strong>
                    </p>
                    <p>
                        We recognize that there are UX Leaders dedicated to
                        learning and growing who are unfortunately in between
                        jobs right now—we get it. So, if you’re an unemployed,
                        dedicated learner, this special price is for you.
                    </p>
                    <p>
                        (If you’re fortunate enough to be employed right now,
                        please leave these spots for those who are not currently
                        employed. Don’t be that person. Don’t take the seat of
                        someone who really needs this price.)
                    </p>
                </div>
            </Section>

            <div ref={checkoutRef}>
                <SpiffyCheckout>
                    <h2>Join the {cohortName} UX Research Cohort</h2>
                    {loadingTime && (
                        <a onClick={handleRefresh}>{loadingText}</a>
                    )}
                    <spiffy-checkout
                        url={
                            cohorts ? cohorts[cohortIndex - 1][0]?.embedURL : ""
                        }
                    ></spiffy-checkout>
                </SpiffyCheckout>
            </div>
        </div >
    );
}
