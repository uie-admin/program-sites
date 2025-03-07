import { useState, useContext } from "react";
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router-dom";
import playButton1 from "./playButton1.png";
import playButton2 from "./playButton2.png";
import "./CalendarV2.css";
import { formatToLocalTime, timezoneDropdown } from "./CalendarDataV2";
import { CohortContext } from "../../../ux-research/src/App";

export default function CohortCalendar({ cohortIndex }) {
    const [expandedSections, setExpandedSections] = useState({});
    const [selectedTimezone, setSelectedTimezone] =
        useState("America/New_York"); // Default to EST

    const location = useLocation();
    const toggleDetails = (index) => {
        setExpandedSections((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    // Conditionally add the class 'inactive' when on the home page ("/")
    const containerClass =
        location.pathname !== "/" ? "calendar-container" : "";

    const cohorts = useContext(CohortContext);
    const events = cohorts ? cohorts[cohortIndex - 1] : [];

    return (
        // containerClass here is a CSS class that toggles off on the home page.
        <div className="calendarV2">
            <div className="inner-column">
                <div className="scheduleTitle">
                    <div className="courseSchedule-container">
                        <h1>Course Schedule</h1>
                        {!events ? (
                            <p>Loading Calendar...</p>
                        ) : (
                            <h2>
                                Cohort: {events[0]?.start} – {events[3]?.end}
                            </h2>
                        )}
                    </div>

                    <div className="timezone-container">
                        <div className="timezoneText">
                            <p>
                                All times are currently listed in East Time
                                Zone.
                            </p>
                            <p>
                                We welcome folks from other time zones to join
                                us.
                            </p>
                            <p>
                                Translate times to your time zone with the drop
                                down below.
                            </p>
                        </div>
                        {timezoneDropdown(
                            selectedTimezone,
                            setSelectedTimezone
                        )}
                    </div>
                </div>
                {/* <h3>Text about the timezone is default is EST, but user can select from the dropdown</h3> */}

                {events &&
                    events.map((event, index) => {
                        return (
                            <div className="test123" key={index}>
                                <div id="scheduleCard">
                                    <div id="WeekNUM">
                                        <div className="weekInfo">
                                            Week {event.week} of 4
                                        </div>

                                        {/* Odd Numbered Topic */}
                                        <div
                                            id="oddTopicNumber"
                                            className="headerTitle"
                                            onClick={() => toggleDetails(index)}
                                        >
                                            <div className="mobile-row">
                                                <img
                                                    src={playButton1}
                                                    className={`scheduleIconImg ${expandedSections[index]
                                                            ? "rotated"
                                                            : ""
                                                        }`}
                                                    alt="playButton1"
                                                />
                                                <div className="classTitle">
                                                    {event.name1}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="clickDetails">
                                                    Topic Details
                                                </div>
                                            </div>
                                        </div>

                                        {expandedSections[index] && (
                                            <>
                                                <div className="topicDetails">
                                                    <ReactMarkdown>
                                                        {event.rich1}
                                                    </ReactMarkdown>
                                                </div>
                                            </>
                                        )}

                                        <div
                                            id="optionalTitle"
                                            className="subTitle"
                                        >
                                            <div className="optionTime">
                                                {event.date1},{" "}
                                                {formatToLocalTime(
                                                    event.watchStart1,
                                                    false,
                                                    selectedTimezone
                                                )}{" "}
                                                -{" "}
                                                {formatToLocalTime(
                                                    event.watchEnd1,
                                                    true,
                                                    selectedTimezone
                                                )}
                                            </div>
                                            <div className="optionTitle">
                                                Watch the Lecture*
                                            </div>
                                        </div>
                                        <div
                                            id="liveTopicTitle"
                                            className="subTitle"
                                        >
                                            <div className="optionTime">
                                                {event.date1},{" "}
                                                {formatToLocalTime(
                                                    event.coachStart1,
                                                    false,
                                                    selectedTimezone
                                                )}{" "}
                                                -{" "}
                                                {formatToLocalTime(
                                                    event.coachEnd1,
                                                    true,
                                                    selectedTimezone
                                                )}
                                            </div>
                                            <div className="optionTitle">
                                                Live Coaching with Jared
                                            </div>
                                        </div>
                                        {/* END Odd Numbered Topic */}

                                        {/* START Even Numbered Topic */}
                                        <div
                                            id="oddTopicNumber"
                                            className="headerTitle"
                                            onClick={() =>
                                                toggleDetails(index + 0.1)
                                            }
                                        >
                                            <div className="mobile-row">
                                                <img
                                                    src={playButton2}
                                                    className={`scheduleIconImg ${expandedSections[
                                                            index + 0.1
                                                        ]
                                                            ? "rotated"
                                                            : ""
                                                        }`}
                                                    alt="playButton2"
                                                />
                                                <div className="classTitle">
                                                    {event.name2}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="clickDetails">
                                                    Topic Details
                                                </div>
                                            </div>
                                        </div>

                                        {expandedSections[index + 0.1] && (
                                            <>
                                                <div className="topicDetails">
                                                    <ReactMarkdown>
                                                        {event.rich2}
                                                    </ReactMarkdown>
                                                </div>
                                            </>
                                        )}

                                        <div
                                            id="optionalTitle"
                                            className="subTitle"
                                        >
                                            <div className="optionTime">
                                                {event.date2},{" "}
                                                {formatToLocalTime(
                                                    event.watchStart2,
                                                    false,
                                                    selectedTimezone
                                                )}{" "}
                                                -{" "}
                                                {formatToLocalTime(
                                                    event.watchEnd2,
                                                    true,
                                                    selectedTimezone
                                                )}
                                            </div>
                                            <div className="optionTitle">
                                                Watch the Lecture*
                                            </div>
                                        </div>
                                        <div
                                            id="liveTopicTitle"
                                            className="subTitle"
                                        >
                                            <div className="optionTime">
                                                {event.date2},{" "}
                                                {formatToLocalTime(
                                                    event.coachStart2,
                                                    false,
                                                    selectedTimezone
                                                )}{" "}
                                                -{" "}
                                                {formatToLocalTime(
                                                    event.coachEnd2,
                                                    true,
                                                    selectedTimezone
                                                )}
                                            </div>
                                            <div className="optionTitle">
                                                Live Coaching with Jared
                                            </div>
                                        </div>
                                        {/* END Even Numbered Topic */}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
