// components
import CohortCalendar from "../../../shared/components/CalendarV2/CohortCalendar";
import HorizontalCohortSelector from "../../../shared/components/CohortSelectors/HorizontalCohortSelector";
import Headline from "../../../shared/components/Content/Headline";
import { useState, useEffect, useContext } from "react";
import { CohortContext } from "../../../shared/components/CalendarV2/CalendarDataV2";
import Section from "../../../shared/components/Layout/Section";

export default function CohortSchedule({ cohortIndex, cohortName }) {
    const cohorts = useContext(CohortContext);

    return (
        <div id="CohortASchedule">
            <Headline
                title={<h1>{cohortName} Schedule</h1>}
                color="--accent-1"
            />

            <section className="inner-column">
                <div>
                    <h2>
                        Craft and lead a strategic UX vision in your
                        organization.
                    </h2>
                    <p>
                        Join us to complete your journey with metrics that will{" "}
                        <strong>
                            drive your organization to deliver better-designed
                            products and services.
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
            </section>
            <CohortCalendar cohortIndex={cohortIndex} />
            <Section>
                <HorizontalCohortSelector />
            </Section>
        </div>
    );
}
