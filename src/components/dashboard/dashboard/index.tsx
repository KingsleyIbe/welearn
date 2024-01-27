import Footer from "../../../components/common/Footer";
import Heading from "../../../components/common/Heading";
import DashboardHeader from "../DashboardHeader";
import DashboardItems from "./DashboardItems";

const index = () => {
    return (
        <div>
            <Heading />
            <DashboardHeader />
            <DashboardItems />
            <Footer />
        </div>
    );
};

export default index;
