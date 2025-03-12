import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function GenericButton({
    cohortLink,
    children,
    className,
    externalLink,
}) {
    return (
        <button className={`${className} btn-shadow`}>
            {externalLink ? (
                <a
                    href={externalLink}
                    className="cohortSelector-button-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {children}
                </a>
            ) : (
                <Link to={cohortLink} className="cohortSelector-button-link">
                    {children}
                </Link>
            )}
        </button>
    );
}
