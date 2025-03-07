import "./CourseSchedule.css";
// UPDATE THIS
// UPDATE THIS
import Calendar from "../CalendarV2/Cohort7Calendar";
import VerticalCohortSelector from "../VerticalCohortSelector/VerticalCohortSelector";
// UPDATE THIS
// UPDATE THIS

export default function CourseSchedule() {
    return (
        <section>
            <section className="courseSchedule">
                <div className="courseSchedule-pretext-wrapper">
                    <div className="left-scroll-content">
                        <div className="courseSchedule-pretext">
                            <h2>
                                Outcome-Driven UX Metrics: <br />
                                Your Online Course Schedule
                            </h2>
                            <h4>
                                8 Hours live with Jared Spool in small group
                                coaching, plus 8 hours of recorded content.
                            </h4>
                            <p>
                                During each of this course’s four weeks, you’ll
                                cover two of the eight topics. For each topic,
                                you’ll watch a lecture recording and join Jared
                                in a live small-group coaching session.
                            </p>
                            <p>
                                The lectures are already recorded, so you can
                                watch them in advance or join an optional “Live
                                Watch” session with your fellow cohort members.
                            </p>
                            <p>
                                In each coaching session, you’ll work directly
                                with Jared and your fellow cohort members to
                                identify your own metrics and work through
                                challenges that are specific to your current
                                situation. You’ll hear how others are working
                                through their challenges, and you’ll share
                                what’s worked best for you.
                            </p>
                            <p>
                                We keep the cohorts small, so you’ll have plenty
                                of time to be coached on how you’ll implement
                                your Outcome-driven UX metrics.
                            </p>
                            <p>
                                We know that schedules are tough, so we record
                                every coaching session with Jared. If you miss a
                                session, or you just want to review what you
                                discussed, you’ll have access to the recordings
                                for 6 months after the course ends. (You can
                                also watch the recordings from other cohorts, to
                                hear how they worked through their biggest
                                challenges.)
                            </p>
                        </div>
                    </div>
                    <div className="right-scroll-content">
                        <VerticalCohortSelector />
                    </div>
                </div>
                <Calendar />
            </section>
        </section>
    );
}
