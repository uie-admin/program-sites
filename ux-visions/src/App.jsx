import "../../shared/styles/site.css";
import "./metrics-settings.css";

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

import {
    fetchCohorts,
    CohortContext,
    UpcomingCohortContext,
    filterUpcomingCohorts,
} from "../../shared/components/CalendarV2/CalendarDataV2";

const NUM_COHORTS = import.meta.env.VITE_COHORT_TABLES.split(",").length;
const COHORT_NAMES = import.meta.env.VITE_COHORT_NAMES.split(",");
const DEFAULT_COHORT_NAME = import.meta.env.VITE_NEXT_COHORT_NAME;

function App() {
    const [cohorts, setCohorts] = useState(null);
    const [upcomingCohorts, setUpcomingCohorts] = useState(null);

    useEffect(() => {
        fetchCohorts().then((fetchedCohorts) => {
            setCohorts(fetchedCohorts);
            setUpcomingCohorts(filterUpcomingCohorts(fetchedCohorts));
        });
    }, []);

    return (
        <Router>
            <CohortContext.Provider value={cohorts}>
                <UpcomingCohortContext.Provider value={upcomingCohorts}>
                    <Header
                        title="UX Vision"
                        logoImage="UxMetricsLogo"
                        altText="UX Vision"
                    />
                    <Routes>
                        {/* Define the routes for each page */}
                        <Route path="/" element={<Home />} />
                        <Route path="/research" element={<Research />} />
                        <Route path="/teams" element={<Teams />} />
                        <Route path="/topics" element={<Topics />} />

                        {/* Default cohort pages show next cohort */}
                        <Route
                            key={`cohort`}
                            path={`/Cohort`}
                            element={
                                !upcomingCohorts ? (
                                    <Cohort
                                        cohortIndex={null}
                                        cohortName={DEFAULT_COHORT_NAME}
                                    />
                                ) : (
                                    <Cohort
                                        cohortIndex={
                                            upcomingCohorts[0][0].cohortNumber
                                        }
                                        cohortName={
                                            COHORT_NAMES[
                                                upcomingCohorts[0][0]
                                                    .cohortNumber - 1
                                            ]
                                        }
                                    />
                                )
                            }
                        />
                        <Route
                            key={`cohort-schedule`}
                            path={`/Cohort-schedule`}
                            element={
                                !upcomingCohorts ? (
                                    <CohortSchedule
                                        cohortIndex={null}
                                        cohortName={DEFAULT_COHORT_NAME}
                                    />
                                ) : (
                                    <CohortSchedule
                                        cohortIndex={
                                            upcomingCohorts[0][0].cohortNumber
                                        }
                                        cohortName={
                                            COHORT_NAMES[
                                                upcomingCohorts[0][0]
                                                    .cohortNumber - 1
                                            ]
                                        }
                                    />
                                )
                            }
                        />

                        {/* Route to each cohort page, depending on the number of cohort tables in .env file */}
                        {Array.from({ length: NUM_COHORTS }, (_, i) => {
                            const cohortIndex = i + 1;
                            return (
                                <>
                                    <Route
                                        key={`cohort-${i}`}
                                        path={`/Cohort${cohortIndex}`}
                                        element={
                                            <Cohort
                                                cohortIndex={cohortIndex}
                                                cohortName={COHORT_NAMES[i]}
                                            />
                                        }
                                    />
                                    <Route
                                        key={`cohort-schedule-${i}`}
                                        path={`/Cohort${cohortIndex}-schedule`}
                                        element={
                                            <CohortSchedule
                                                cohortIndex={cohortIndex}
                                                cohortName={COHORT_NAMES[i]}
                                            />
                                        }
                                    />
                                </>
                            );
                        })}
                    </Routes>
                    <Footer />
                </UpcomingCohortContext.Provider>
            </CohortContext.Provider>
        </Router>
    );
}

export default App;
