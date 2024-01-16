import ChangeEmailForm from "./ChangeEmailForm";
import ChangePasswordForm from "./ChangePasswordForm";

const Settings = () => {
    return (
        <div className="w-[93%] p-5 bg-[#F4F6FC] text-[#181842] m-auto rounded-[8px] mt-5">
            <h1 className="mb-10 font-bold text-[32px]">Settings</h1>
            <hr />
            <ChangePasswordForm />
            <ChangeEmailForm />
        </div>
    );
};

export default Settings;
