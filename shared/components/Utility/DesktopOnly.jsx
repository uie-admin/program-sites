import { useEffect, useState } from "react";

export default function DesktopOnly({ children }) {
    const breakpoint = 820;
    const [show, setShow] = useState(window.innerWidth > breakpoint);

    useEffect(() => {
        const handleResize = () => {
            setShow(innerWidth > breakpoint);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return show ? children : null;
}
