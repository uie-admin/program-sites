import { useState, useEffect } from "react";
import "./VerticalCohortSelector.css";
import { Link } from "react-router-dom";

import { fetchCohort } from "../CalendarV2/CalendarDataV2";

export default function VerticalCohortSelector() {
    const [events, setEvents] = useState({
        cohortA: [],
        cohortB: [],
        cohortC: [],
    });

    // IF YOU ARE NOT MAPPING, YOU NEED A NULL OPERATOR OTHERWISE THE PAGE CRASHES
    useEffect(() => {
        const loadEvents = async () => {
            const [data2, data3] = await Promise.all([
                // fetchCohort("METRICS", "F"),
                fetchCohort("METRICS", "G"),
                fetchCohort("METRICS", "H"),
            ]);

            // Sort events by week number in ascending order
            const allCohorts = {
                // cohortA: [...data1].sort((a, b) => a.week - b.week),
                cohortB: [...data2].sort((a, b) => a.week - b.week),
                cohortC: [...data3].sort((a, b) => a.week - b.week),
            };
            setEvents(allCohorts);
        };
        loadEvents();
    }, []);

    return (
        <div className="verticalCohortSelector">
            <img
                src="./images/11.png"
                alt="Outcome-Driven UX Metrics"
                className="cohortSelector-image"
            />
            <span>Next Cohorts:</span>
            <div>
                {/* <div className="cohort-1">
                    <div className="cohort-paragraphs">
                        {!events.cohortA[0] ? (
                            <p>Loading...</p>
                        ) : (
                            <p>
                                <b>
                                    {events.cohortA[0]?.start} –{" "}
                                    {events.cohortA[3]?.end}
                                </b>
                            </p>
                        )}
                        <Link to="/cohort6-schedule">See Schedule</Link>
                    </div>
                    <button className="btn-shadow">
                        {" "}
                        <Link
                            to="/cohort6"
                            className="cohortSelector-button-link"
                        >
                            Join Cohort
                        </Link>
                    </button>
                </div> */}

                <div className="cohort-1">
                    <div className="cohort-paragraphs">
                        {!events.cohortB[0] ? (
                            <p>Loading...</p>
                        ) : (
                            <p>
                                <b>
                                    {events.cohortB[0]?.start} –{" "}
                                    {events.cohortB[3]?.end}
                                </b>
                            </p>
                        )}
                        <Link to="/cohort7-schedule">See Schedule</Link>
                    </div>
                    <button className="btn-shadow">
                        {" "}
                        <Link
                            to="/cohort7"
                            className="cohortSelector-button-link"
                        >
                            Join Cohort
                        </Link>
                    </button>
                </div>

                <div className="cohort-1">
                    <div className="cohort-paragraphs">
                        {!events.cohortC[0] ? (
                            <p>Loading...</p>
                        ) : (
                            <p>
                                <b>
                                    {events.cohortC[0]?.start} –{" "}
                                    {events.cohortC[3]?.end}
                                </b>
                            </p>
                        )}
                        <Link to="/cohort8-schedule">See Schedule</Link>
                    </div>
                    <button className="btn-shadow">
                        {" "}
                        <Link
                            to="/cohort8"
                            className="cohortSelector-button-link"
                        >
                            Join Cohort
                        </Link>
                    </button>
                </div>
            </div>
            <p>
                <span className="mt-2">8 or more team members?</span>
            </p>
            <Link to="/teams">Explore private team courses</Link>
        </div>
    );
}
