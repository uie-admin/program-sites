import { useContext } from "react";
import { Link } from "react-router-dom";
import { CohortContext, UpcomingCohortContext } from "../CalendarV2/CalendarDataV2";
import Button from "../Buttons/Button";

export default function VerticalCohortSelector({ logoImage, altText }) {
    const cohorts = useContext(UpcomingCohortContext);

    return (
        <div className="verticalCohortSelector">
            <img
                src={`./images/${logoImage}.png`}
                alt={altText}
                className="cohortSelector-image"
            />
            <span>Next Cohorts:</span>
            <div>
                {cohorts && cohorts[0] ? (
                    cohorts.map((cohort, index) => (
                        <div
                            className="cohort-choice"
                            key={"cohort-choice" + cohort[0].cohortNumber}
                        >
                            <VerticalCohort
                                eventDates={cohort}
                                scheduleLink={`/Cohort${cohort[0].cohortNumber}-Schedule`}
                                cohortLink={`/Cohort${cohort[0].cohortNumber}`}
                            />
                        </div>
                    ))
                ) : (
                    <div className="cohort-choice" key={"cohort-choice"}>
                        <VerticalCohort
                            scheduleLink={`/Cohort-Schedule`}
                            cohortLink={`/Cohort`}
                        />
                    </div>
                )}
            </div>
            <div className="cohort-cta">
                <p>8 or more team members?</p>
                <Link to="./teams">Explore private team courses</Link>
            </div>
        </div>
    );
}

export function VerticalCohort({ eventDates, scheduleLink, cohortLink }) {
    return (
        <div className="vertical-cohort-1">
            <div className="horizontal-cohort-paragraphs">
                {!eventDates || eventDates.length < 4 ? (
                    <p>Loading...</p>
                ) : (
                    <p>
                        <b>
                            {eventDates[0]?.start} - {eventDates[3]?.end}
                        </b>
                    </p>
                )}
                <Link to={scheduleLink}>See Schedule</Link>
            </div>
            <Button href={cohortLink} className="join-cohort">
                Join Cohort
            </Button>
        </div>
    );
}
