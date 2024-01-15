import Heading from "../common/Heading";
import DashboardHeader from "./DashboardHeader";
import TutorProfile from "./dashboard/TutorProfile";

const index = () => {
    return (
        <div>
            <Heading />
            <DashboardHeader />
            <div>
                <TutorProfile />
            </div>
        </div>
    );
};

export default index;
