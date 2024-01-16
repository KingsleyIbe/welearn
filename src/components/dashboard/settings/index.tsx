import Footer from "../../../components/common/Footer";
import Heading from "../../../components/common/Heading";
import DashboardHeader from "../DashboardHeader";
import Settings from "./Settings";

const index = () => {
    return (
        <div className="relative">
            <Heading />
            <DashboardHeader />
            <Settings />
            <Footer />
        </div>
    );
};

export default index;
