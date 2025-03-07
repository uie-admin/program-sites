import React from "react";
import { useLocation } from "react-router-dom";

const PageFilter = ({ children, pathname }) => {
    const location = useLocation();

    return <>{location.pathname === pathname ? children : null}</>;
};

export default PageFilter;
