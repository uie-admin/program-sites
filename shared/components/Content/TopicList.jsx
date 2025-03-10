import { useState, useEffect, useContext } from "react";
import ReactMarkdown from "react-markdown";
import Section from "../Layout/Section";
import { CohortContext } from "../CalendarV2/CalendarDataV2";

export default function TopicList({ }) {
    const cohorts = useContext(CohortContext);
    const cohort = cohorts ? cohorts[0] : null;

    if (!cohort) {
        return <div>Loading...</div>;
    }

    return (
        cohort.map((topic, index) => {
            return (
                <div key={`topic-pair-${index}`}>
                    <Topic
                        side="left"
                        topicName={topic.topicName1}
                        index={index}
                        rich={topic.rich1}
                        week={topic.week}
                    />
                    <Topic
                        side="right"
                        topicName={topic.topicName2}
                        index={index}
                        rich={topic.rich2}
                        week={topic.week}
                    />
                </div>
            );
        }));
}

function Topic({ side, topicName, index, rich, week }) {
    function calculateStep(num, side) {
        return num * 2 + (side === "left" ? 1 : 2);
    }

    return (
        <Section name={`${side}-content`}>
            <div className={`${side}-content-container`}>
                {side === "left" ? (
                    <div className="">
                        <h3>{topicName}</h3>
                        <ReactMarkdown>{rich}</ReactMarkdown>
                    </div>
                ) : (
                    ""
                )}
                <div>
                    <img
                        src={`/images/topic-${calculateStep(index, side)}.png`}
                        alt={`Topic ${calculateStep(index, side)}`}
                        className="topic-icon"
                    />
                </div>
                {side === "right" ? (
                    <div className="">
                        <h3>{topicName}</h3>
                        <ReactMarkdown>{rich}</ReactMarkdown>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </Section>
    );
}
