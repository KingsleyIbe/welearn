import Footer from "../../../components/common/Footer";
import Heading from "../../../components/common/Heading";
import DashboardHeader from "../DashboardHeader";
import NoScheduledLessons from "./NoScheduledLessons";

const index = () => {
    return (
        <div>
            <Heading />
            <DashboardHeader />
            <NoScheduledLessons />
            <Footer />
        </div>
    );
};

export default index;
