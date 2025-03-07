import "./App.css";

// Router and Pages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Outcomes from "./pages/Outcomes";
import Teams from "./pages/Teams";
import Topics from "./pages/Topics";

import Cohort6 from "./pages/Cohort6";
import Cohort6Schedule from "./pages/Cohort6Schedule";
import Cohort7 from "./pages/Cohort7";
import Cohort7Schedule from "./pages/Cohort7Schedule";
import Cohort8 from "./pages/Cohort8";
import Cohort8Schedule from "./pages/Cohort8Schedule";

function App() {
    return (
        <Router>
            <Routes>
                {/* Define the routes for each page */}
                <Route path="/" element={<Home />} />
                <Route path="/outcomes" element={<Outcomes />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/topics" element={<Topics />} />

                <Route path="/cohort6" element={<Cohort6 />} />
                <Route path="/cohort6-schedule" element={<Cohort6Schedule />} />

                <Route path="/cohort7" element={<Cohort7 />} />
                <Route path="/cohort7-schedule" element={<Cohort7Schedule />} />

                <Route path="/cohort8" element={<Cohort8 />} />
                <Route path="/cohort8-schedule" element={<Cohort8Schedule />} />

                {/* UPDATE THIS */}
                {/* UPDATE THIS */}
                {/* <Route path="/cohort6" element={<Cohort6 />} />
                <Route 
                    path="/cohort6-schedule" 
                    element={<Cohort6Schedule />} 
                /> */}
                {/* UPDATE THIS */}
                {/* UPDATE THIS */}
            </Routes>
        </Router>
    );
}

export default App;
