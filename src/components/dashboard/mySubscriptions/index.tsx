import Footer from "../../../components/common/Footer";
import Heading from "../../../components/common/Heading";
import DashboardHeader from "../DashboardHeader";
import SubNotes from "./SubNotes";

const index = () => {
    return (
        <div>
            <Heading />
            <DashboardHeader />
            <SubNotes />
            <Footer />
        </div>
    );
};

export default index;
