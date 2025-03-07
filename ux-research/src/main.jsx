import React from "react";
import ReactDOM from "react-dom/client";
import "./normalize.css"; // If you use normalize.css
import "./index.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App className="research-global" />
    </React.StrictMode>
);
