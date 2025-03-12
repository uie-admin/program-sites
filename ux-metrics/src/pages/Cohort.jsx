import { Link } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import Headline from "../../../shared/components/Content/Headline";

// components
import SpiffyCheckout from "../../../shared/components/Integrations/SpiffyCheckout";
import Section from "../../../shared/components/Layout/Section";
import { CohortContext } from "../../../shared/components/CalendarV2/CalendarDataV2";

export default function Cohort({ cohortIndex }) {
    const [loadingTime, setLoadingTime] = useState(true);
    const [loadingText, setLoadingText] = useState("Loading Checkout...");
    const checkoutRef = useRef(null);

    const cohorts = useContext(CohortContext);
    const [month, setMonth] = useState(null);

    if (!month && cohorts && cohorts[cohortIndex - 1]) {
        const startDate = new Date(cohorts[cohortIndex - 1][0].watchStart1);
        const month = startDate.toLocaleString("default", { month: "long" });
        setMonth(month);
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
                title={<h1>Join the {month} Cohort</h1>}
                color="--metrics-accent-1"
            />

            <Section className="inner-column" split>
                <div className="width-500">
                    <h2>
                        Develop your own organization’s Outcome-driven UX
                        Metrics..
                    </h2>
                    <p>
                        <strong>
                            Join us to complete your journey with metrics that
                            will drive your organization to deliver
                            better-designed products and services.
                        </strong>
                    </p>
                    <p>
                        You won’t make up imaginary, over-simplified metrics for
                        fake companies and products in this intensive. Instead,
                        you (and your team, if you bring them along) will roll
                        up your sleeves and identify the critical metrics for
                        your products and services.
                    </p>
                </div>
                <div className="schedule-aside">
                    <img
                        src="./images/UxMetricsLogo.png"
                        alt="Outcome Driven UX Metrics"
                    />
                    <button className="btn btn-shadow schedule-button inner-column-purchase button cohortSelector-button-link">
                        <Link
                            to={"/Cohort" + cohortIndex + "-schedule"}
                            className="cohortSelector-button-link"
                        >
                            {month} Schedule
                        </Link>
                    </button>
                </div>
            </Section>
            <Section split>
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
                        </strong>{" "}
                        You’ll start drafting the blueprints for what change
                        will look like across your organization. You’ll come
                        away from the intensive with your own custom approach to
                        UX Vision that your entire team can use.
                    </p>
                    <p>
                        <strong>
                            Each team member saves $100 on their registration
                            when they sign up as a team member.
                        </strong>
                    </p>
                    <p>
                        Whichever you choose, team or individual, we’ll give you
                        our full support.
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
                    <h2>Join the {month} UX Research Cohort</h2>
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
        </div>
    );
}
