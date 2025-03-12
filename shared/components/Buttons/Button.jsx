import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Button({
    href,
    children,
    className,
}) {
    const isLinkExternal = href.includes("http");

    return (
        <button className={`${className} btn-shadow`}>
            {isLinkExternal ? (
                <a
                    href={href}
                    className="cohortSelector-button-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {children}
                </a>
            ) : (
                <Link to={href} className="cohortSelector-button-link">
                    {children}
                </Link>
            )}
        </button>
    );
}
