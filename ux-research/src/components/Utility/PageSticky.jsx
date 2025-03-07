import { useState, useEffect } from "react";
import Placeholder from "./Placeholder";

export default function PageSticky({ children, topBoundingElement, bottomBoundingElement, paddingTop, paddingBottom }) {
    const [positionMode, setPositionMode] = useState(null);
    const [positionY, setPositionY] = useState(null);
    const [positionX, setPositionX] = useState(null);
    const [transition, setTransition] = useState("none");

    useEffect(() => {
        const topElement = document.querySelector(topBoundingElement);
        const bottomElement = document.querySelector(bottomBoundingElement);
        const selfElement = document.querySelector(".page-sticky");
        const placeholderElement = document.querySelector(
            ".placeholder .verticalCohortSelector"
        );

        const manageVerticalScroll = () => {
            const scrollY = window.scrollY;

            const topRect = topElement?.getBoundingClientRect();
            const bottomRect = bottomElement?.getBoundingClientRect();
            const selfRect = selfElement.getBoundingClientRect();
            const placeholderRect = placeholderElement.getBoundingClientRect();

            const isAbove = placeholderRect.y - paddingTop > 0;
            const isBelow =
                bottomRect.y +
                bottomRect.height -
                selfRect.height -
                paddingTop -
                paddingBottom <=
                0;
            const isScrolling = !isAbove && !isBelow;

            if (positionY === null) setPositionY(0);
            if (positionX === null) setPositionX(placeholderRect.x);

            if (isBelow && positionMode !== "below") {
                setPositionMode("below");
                setPositionY(
                    bottomRect.y +
                    bottomRect.height -
                    selfRect.height -
                    placeholderRect.y -
                    paddingBottom
                );
                setPositionX(placeholderRect.x);
                setTransition("none");
            } else if (isScrolling && positionMode !== "scroll") {
                setPositionMode("scroll");
                setPositionY(selfRect.y);
                setPositionX(selfRect.x);

                setTimeout(() => {
                    setTransition("top 0.1s ease-out");
                    setPositionY(paddingTop);
                    setPositionX(placeholderRect.x);
                }, 10);
            } else if (isAbove && positionMode !== "above") {
                setTransition("none");
                setPositionMode("above");
                setPositionY(0);
                setPositionX(placeholderRect.x);
            }
        };

        const manageResize = () => {
            const placeholderRect = placeholderElement.getBoundingClientRect();
            setPositionX(placeholderRect.x);
            manageVerticalScroll();
        };

        window.addEventListener("scroll", manageVerticalScroll);
        window.addEventListener("resize", manageResize);

        return () => {
            window.removeEventListener("scroll", manageVerticalScroll);
            window.removeEventListener("resize", manageResize);
        };
    }, [positionMode, positionY, window.location.pathname]);

    return (
        <div className="page-sticky-container">
            <Placeholder>
                {children}
            </Placeholder>
            <div className={"page-sticky"}
                style={{ position: positionMode === "scroll" ? "fixed" : "absolute", top: `${positionY}px`, left: positionMode === "scroll" ? `${positionX}px` : "", right: positionMode === "scroll" ? "" : "0", transition: transition, }}
            >
                {children}
            </div>
        </div >
    );
}
