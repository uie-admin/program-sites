// components
import Header from "../components/Header/Header";
import GreenArticle from "../components/GreenArticle/GreenArticle";
import Footer from "../components/Footer/Footer";
import TestComponent from "../components/TestComponent/TestComponent";
import Cohort6Calendar from "../components/CalendarV2/Cohort6Calendar";
import HorizontalCohortSelector from "../components/HorizontalCohortSelector/HorizontalCohortSelector";
import Navbar from "../components/Navbar/Navbar";

export default function Cohort3Schedule() {
    return (
        <div id="Cohort6Schedule">
            <Navbar />
            <Header />
            <GreenArticle>
                <h1>March Schedule</h1>
            </GreenArticle>
            <Cohort6Calendar />
            <TestComponent />
            <HorizontalCohortSelector />
            <Footer />
        </div>
    );
}
