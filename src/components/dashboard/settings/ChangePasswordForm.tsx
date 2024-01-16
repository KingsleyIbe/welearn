const ChangePasswordForm = () => {
    return (
        <div className="w-[93%] p-5 bg-[#F4F6FC] text-[#181842] m-auto rounded-[8px] mt-5">
            <h1 className="mb-10 font-bold text-[32px]">Settings</h1>
            <hr />

            <form action="">
                <h2 className="font-bold my-10 text-[18px]">Change password</h2>
                <div className="w-[100%] m-auto flex flex-col items-end gap-1">
                    <div className="flex justify-center flex-row gap-5 my-2 items-center p-2">
                        <label htmlFor="confirm_password" className="items-end">Current password:</label>
                        <input type="password" placeholder="Current Password" className="register-input-bolder p-2 w-[300px]" />
                    </div>
                    <div className="flex justify-center flex-row gap-5 my-2 items-center p-2">
                        <label htmlFor="confirm_password" className="items-end">New password:</label>
                        <input type="password" placeholder="New password" className="register-input-bolder p-2 w-[300px]" />
                    </div>
                    <div className="flex justify-center flex-row gap-5 my-2 items-center p-2">
                        <label htmlFor="confirm_password" className="">Confirm new password:</label>
                        <input type="password" placeholder="Confirm new password" className="register-input-bolder p-2 w-[300px]" />
                    </div>
                </div>
                <div className="flex flex-col items-end justify-cente p-2">
        <button type="submit" className="rounded-[8px] px-[21px] py-[12px] bg-[#FF9900] text-[#000]">Submit changes</button>
      </div>
            </form>
        </div>
    );
};

export default ChangePasswordForm;
