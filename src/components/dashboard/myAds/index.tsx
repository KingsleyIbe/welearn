import DashBoardPage from "@/pages/DashBordPage";
import Footer from "../../../components/common/Footer";
import Heading from "../../../components/common/Heading";
import DashboardHeader from "../DashboardHeader";
import NoAds from "./NoAds";

const index = () => {
    return (
        <div>
            <Heading />
            <DashboardHeader />
            <NoAds />
            <Footer />
        </div>
    );
};

export default index;
