// components
import Header from "../components/Header/Header";
import GreenArticle from "../components/GreenArticle/GreenArticle";
import Footer from "../components/Footer/Footer";
import TestComponent from "../components/TestComponent/TestComponent";
import Cohort8Calendar from "../components/CalendarV2/Cohort8Calendar";
import HorizontalCohortSelector from "../components/HorizontalCohortSelector/HorizontalCohortSelector";
import Navbar from "../components/Navbar/Navbar";

export default function Cohort8Schedule() {
    return (
        <div id="Cohort8Schedule">
            <Navbar />
            <Header />
            <GreenArticle>
                <h1>May Schedule</h1>
            </GreenArticle>
            <Cohort8Calendar />
            <TestComponent />
            <HorizontalCohortSelector />
            <Footer />
        </div>
    );
}
