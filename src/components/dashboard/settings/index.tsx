import Heading from "../../../components/common/Heading";
import DashboardHeader from "../DashboardHeader";
import ChangeEmailForm from "./ChangeEmailForm";
import ChangePasswordForm from "./ChangePasswordForm";
import Settings from "./Settings";

const index = () => {
    return (
        <div>
            <Heading />
            <DashboardHeader />
            <Settings />
        </div>
    );
};

export default index;
