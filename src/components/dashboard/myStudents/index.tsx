import Footer from "../../common/Footer";
import Heading from "../../common/Heading";
import DashboardHeader from "../DashboardHeader";
import NoStudent from "./NoStudent";

const index = () => {
    return (
        <div>
            <Heading />
            <DashboardHeader />
            <NoStudent />
            <Footer />
        </div>
    );
};

export default index;
