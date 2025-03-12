import { useState, useEffect } from "react";
import Placeholder from "./Placeholder";
import Sticky from "./Sticky";
import { createPortal } from "react-dom";

export default function PageSticky({ children, bottomBoundingElement }) {
    const [positionX, setPositionX] = useState(null);
    const [positionY, setPositionY] = useState(null);
    const [containerHeight, setContainerHeight] = useState(null);
    const [containerWidth, setContainerWidth] = useState(null);

    useEffect(() => {
        const bottomElement = document.querySelector(bottomBoundingElement);
        const selfElement = document.querySelector(".page-sticky");
        const placeholderElement = document.querySelector(".placeholder").childNodes[0];

        const manageResize = () => {
            const scroll = window.scrollY;
            const bottomRect = bottomElement?.getBoundingClientRect();
            const placeholderRect = placeholderElement.getBoundingClientRect();

            setPositionX(placeholderRect.x);
            setPositionY(placeholderRect.y + scroll);
            setContainerHeight(
                bottomRect.y + bottomRect.height - placeholderRect.y
            );
            setContainerWidth(selfElement.width);
        };

        manageResize();
        window.addEventListener("resize", manageResize);

        return () => {
            window.removeEventListener("resize", manageResize);
        };
    }, [window.location.pathname]);

    return (
        <>
            <Placeholder>
                {children}
            </Placeholder>
            {createPortal(
                (<div className="page-sticky-container" style={{ display: "block", position: "absolute", top: `calc(${positionY}px - var(--fixed-scroll-padding-top))`, left: `${positionX}px`, right: "0", height: `${containerHeight}px`, width: `${containerWidth}px` }}>
                    <Sticky className={'page-sticky'}>
                        {children}
                    </Sticky>
                </div>),
                document.querySelector("body")
            )}

        </>
    );
}
