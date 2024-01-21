import Footer from "../../../components/common/Footer";
import Heading from "../../../components/common/Heading";
import DashboardHeader from "../DashboardHeader";
import Settings from "./Settings";

const index = () => {
    return (
        <div>
            <Heading />
            <DashboardHeader />
            <div className="relative">
                <Settings />
                <Footer />
            </div>
        </div>
    );
};

export default index;
