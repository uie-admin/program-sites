import "./styles/site.css";
import "./App.css";

// Router and Pages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useEffect, useContext, createContext, useState } from "react";

// Pages
import Home from "./pages/Home";
import Research from "./pages/Research";
import Teams from "./pages/Teams";
import Topics from "./pages/Topics";
import Cohort from "./pages/Cohort";
import CohortSchedule from "./pages/CohortSchedule";

// Global Layout Components
import Header from "../../shared/components/Layout/Header";
import Footer from "../../shared/components/Layout/Footer";

import { fetchCohorts } from "../../shared/components/CalendarV2/CalendarDataV2";

const NUM_COHORTS = 3;
export const CohortContext = createContext(null);

function App() {
    const [cohorts, setCohorts] = useState(null);

    useEffect(() => {
        fetchCohorts("RESEARCH").then(setCohorts);
    }, []);

    return (
        <Router>
            <CohortContext.Provider value={cohorts}>
                <Header />
                <Routes>
                    {/* Define the routes for each page */}
                    <Route path="/" element={<Home />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="/teams" element={<Teams />} />
                    <Route path="/topics" element={<Topics />} />

                    {/* <Route key={`cohort-1`} path={`/Cohort1`} element={<Cohort cohortIndex={1} />} />
                    <Route key={`cohort-2`} path={`/Cohort2`} element={<Cohort cohortIndex={2} />} />
                    <Route key={`cohort-schedule-1`} path={`/Cohort1-schedule`} element={<CohortSchedule cohortIndex={1} />} />
                    <Route key={`cohort-schedule-2`} path={`/Cohort2-schedule`} element={<CohortSchedule cohortIndex={2} />} /> */}

                    {Array.from({ length: NUM_COHORTS }, (_, i) => {
                        const cohortIndex = i + 1;
                        return (
                            <>
                                <Route
                                    key={`cohort-${i}`}
                                    path={`/Cohort${cohortIndex}`}
                                    element={
                                        <Cohort cohortIndex={cohortIndex} />
                                    }
                                />
                                <Route
                                    key={`cohort-schedule-${i}`}
                                    path={`/Cohort${cohortIndex}-schedule`}
                                    element={
                                        <CohortSchedule
                                            cohortIndex={cohortIndex}
                                        />
                                    }
                                />
                            </>
                        );
                    })}
                </Routes>
                <Footer />
            </CohortContext.Provider>
        </Router>
    );
}

export default App;
