import { useContext } from "react";
import { Link } from "react-router-dom";
import { CohortContext } from "../CalendarV2/CalendarDataV2";
import GenericButton from "../Buttons/GenericButton";

export default function VerticalCohortSelector({ logoImage, altText }) {
    const cohorts = useContext(CohortContext);

    return (
        <div className="verticalCohortSelector">
            <img
                src={`/images/${logoImage}.png`}
                alt={altText}
                className="cohortSelector-image"
            />
            <span>Next Cohorts:</span>
            <div>
                {cohorts ? (
                    cohorts.map((cohort, index) => (
                        <div
                            className="cohort-choice"
                            key={"cohort-choice" + index}
                        >
                            <VerticalCohort
                                eventDates={cohort}
                                scheduleLink={`/Cohort${index + 1}-Schedule`}
                                cohortLink={`/Cohort${index + 1}`}
                            />
                        </div>
                    ))
                ) : (
                    <div className="cohort-choice" key={"cohort-choice"}>
                        <VerticalCohort
                            scheduleLink={`/Cohort${1}-Schedule`}
                            cohortLink={`/Cohort${1}`}
                        />
                    </div>
                )}
            </div>
            <span className="mt-2">8 or more team members?</span>
            <br />
            <Link to="/teams">Explore private team courses</Link>
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
            <GenericButton
                cohortLink={cohortLink}
                text="Join Us"
                btnClass="join-cohort"
            />
        </div>
    );
}
