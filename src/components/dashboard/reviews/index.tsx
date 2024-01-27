import Footer from "../../../components/common/Footer";
import Heading from "../../../components/common/Heading";
import DashboardHeader from "../DashboardHeader";
import NoReviews from "./NoReviews";

const index = () => {
    return (
        <div>
            <Heading />
            <DashboardHeader />
            <NoReviews />
            <Footer />
        </div>
    );
};

export default index;
