// components
import Header from "../components/Header/Header";
import GreenArticle from "../components/GreenArticle/GreenArticle";
import Footer from "../components/Footer/Footer";
import TestComponent from "../components/TestComponent/TestComponent";
import Cohort7Calendar from "../components/CalendarV2/Cohort7Calendar";
import HorizontalCohortSelector from "../components/HorizontalCohortSelector/HorizontalCohortSelector";
import Navbar from "../components/Navbar/Navbar";

export default function Cohort7Schedule() {
    return (
        <div id="Cohort7Schedule">
            <Navbar />
            <Header />
            <GreenArticle>
                <h1>April Schedule</h1>
            </GreenArticle>
            <Cohort7Calendar />
            <TestComponent />
            <HorizontalCohortSelector />
            <Footer />
        </div>
    );
}
