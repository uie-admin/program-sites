import { useState, useEffect } from "react";
import "./HorizontalCohortSelector.css";
import { Link } from "react-router-dom";

import { fetchCohort } from "../CalendarV2/CalendarDataV2";

export default function HorizontalCohortSelector() {
    // State and hooks to change the h1 on resize
    const [isMobile, setIsMobile] = useState(false);
    const [events, setEvents] = useState({
        cohortA: [],
        cohortB: [],
        cohortC: [],
    });

    // Update the state on window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup the listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const loadEvents = async () => {
            const [data2, data3] = await Promise.all([
                // fetchCohort("METRICS", "F"),
                fetchCohort("METRICS", "G"),
                fetchCohort("METRICS", "H"),
            ]);

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
        <div className="horizontalCohortSelector">
            <div className="horizontalCohortSelector-container">
                <span>
                    <b>
                        {isMobile
                            ? "Next Cohorts"
                            : "Check Out Our Upcoming Cohorts"}
                        :
                    </b>
                </span>
                <div className="cohort-1-container">
                    {/* <div className="horizontal-cohort-1">
                        <div className="horizontal-cohort-paragraphs">
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
                            <Link
                                to="/cohort6"
                                className="cohortSelector-button-link"
                            >
                                Join Cohort
                            </Link>
                        </button>
                    </div> */}

                    <div className="horizontal-cohort-1">
                        <div className="horizontal-cohort-paragraphs">
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
                            <Link
                                to="/cohort7"
                                className="cohortSelector-button-link"
                            >
                                Join Cohort
                            </Link>
                        </button>
                    </div>

                    <div className="horizontal-cohort-1">
                        <div className="horizontal-cohort-paragraphs">
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
                            <Link
                                to="/cohort8"
                                className="cohortSelector-button-link"
                            >
                                Join Cohort
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            {/* <Link to="/teams">Explore private team courses</Link> */}
        </div>
    );
}
