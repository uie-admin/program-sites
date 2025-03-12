// components
import CohortCalendar from "../../../shared/components/CalendarV2/CohortCalendar";
import HorizontalCohortSelector from "../../../shared/components/CohortSelectors/HorizontalCohortSelector";
import Headline from "../../../shared/components/Content/Headline";
import { useState, useEffect, useContext } from "react";
import { CohortContext } from "../../../shared/components/CalendarV2/CalendarDataV2";

export default function CohortSchedule({ cohortIndex }) {
    const cohorts = useContext(CohortContext);
    const [month, setMonth] = useState(null);

    if (!month && cohorts && cohorts[cohortIndex - 1]) {
        const startDate = new Date(cohorts[cohortIndex - 1][0].watchStart1);
        const month = startDate.toLocaleString("default", { month: "long" });
        setMonth(month);
    }

    return (
        <div id="CohortASchedule">
            <Headline
                title={<h1>{month} Schedule</h1>}
                color="--research-accent-1"
            />

            <section className="inner-column">
                <div>
                    <h2>
                        Develop your own organization’s advanced UX Research
                        strategy.
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
            <HorizontalCohortSelector />
        </div>
    );
}
