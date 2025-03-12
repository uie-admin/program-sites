import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CohortContext } from "../CalendarV2/CalendarDataV2";
import Button from "../Buttons/Button";

export default function HorizontalCohortSelector() {
    // State and hooks to change the h1 on resize
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const cohorts = useContext(CohortContext);

    // Update the state on window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="horizontalCohortSelector">
            <div className="inner-column flex">
                <span>
                    <b>
                        {isMobile
                            ? "Next Cohorts"
                            : "Check Out Our Upcoming Cohorts"}
                        :
                    </b>
                </span>
                <div className="cohort-1-container">
                    {cohorts ? (
                        cohorts.map((cohort, index) => (
                            <div
                                className="cohort-choice"
                                key={"cohort-choice" + index}
                            >
                                <HorizontalCohort
                                    eventDates={cohort}
                                    scheduleLink={`/Cohort${index + 1
                                        }-Schedule`}
                                    cohortLink={`/Cohort${index + 1}`}
                                />
                            </div>
                        ))
                    ) : (
                        <div className="cohort-choice" key={"cohort-choice"}>
                            <HorizontalCohort
                                scheduleLink={`/Cohort${1}-Schedule`}
                                cohortLink={`/Cohort${1}`}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
export function HorizontalCohort({ eventDates, scheduleLink, cohortLink }) {
    return (
        <div className="horizontal-cohort-1">
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
            <Button
                cohortLink={cohortLink}
                className="join-cohort"
            >
                Join Us
            </Button>
        </div>
    );
}
