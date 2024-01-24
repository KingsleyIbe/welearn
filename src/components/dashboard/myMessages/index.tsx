import Footer from "../../../components/common/Footer";
import Heading from "../../../components/common/Heading";
import DashboardHeader from "../DashboardHeader";
import NoMessages from "./NoMessages";

const index = () => {
    return (
        <div>
            <Heading />
            <DashboardHeader />
            <NoMessages />
            <Footer />
        </div>
    );
};

export default index;
