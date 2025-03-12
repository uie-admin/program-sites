import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function CohortButton({
    cohortLink,
    text,
    btnClass,
    externalLink,
}) {
    const [buttonStyle, setButtonStyle] = useState({});

    useEffect(() => {
        const determineColor = () => {
            const url = window.location.href;
            if (url.includes("ux-metrics")) {
                return { backgroundColor: "var(--metrics-accent-2)" };
            } else if (url.includes("ux-research")) {
                return { backgroundColor: "var(--research-accent-2)" };
            } else {
                return {};
            }
        };

        setButtonStyle(determineColor());
    }, []);

    return (
        <button className={`${btnClass} btn-shadow`} style={buttonStyle}>
            {externalLink ? (
                <a
                    href={externalLink}
                    className="cohortSelector-button-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {text}
                </a>
            ) : (
                <Link to={cohortLink} className="cohortSelector-button-link">
                    {text}
                </Link>
            )}
        </button>
    );
}
