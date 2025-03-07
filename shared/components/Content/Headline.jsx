import { useState, useEffect } from "react";
import Section from "../Layout/Section";

export default function Headline({
    children,
    split,
    color = "accent-1",
    title,
}) {
    const [styleObj, setStyleObj] = useState({});
    const isHomePage = window.location.pathname === "/";

    useEffect(() => {
        const handleResize = () => {
            const verticalCohortSelector = document.querySelector(
                ".header-background .verticalCohortSelector"
            );

            if (!verticalCohortSelector) return;

            const offsetHeight =
                verticalCohortSelector.offsetHeight * 0.25 || 0;

            if (window.innerWidth < 768 && isHomePage) {
                setStyleObj({ paddingTop: `${offsetHeight}px` });
                verticalCohortSelector.style.marginBottom = "-25%";
            } else {
                setStyleObj({});
                verticalCohortSelector.style.marginBottom = "";
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isHomePage]);

    return (
        <Section name="headline" split={split} color={color}>
            <div className="headline-text" style={styleObj}>
                {title}
            </div>
            {children}
        </Section>
    );
}
