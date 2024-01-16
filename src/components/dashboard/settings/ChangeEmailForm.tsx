const ChangeEmailForm = () => {
    return (
        <div>
            <form action="">
                <h2 className="font-bold my-10 text-[18px]">Change email</h2>
                <div className="w-[100%] m-auto flex flex-col items-end gap-1">
                    <div className="flex justify-center flex-row gap-5 my-2 items-center p-2">
                        <label htmlFor="confirm_password" className="items-end">New e-mail address:</label>
                        <input type="password" placeholder="example@gmail.com" className="register-input-bolder p-2 w-[300px]" />
                    </div>
                    <div className="flex justify-center flex-row gap-5 my-2 items-center p-2">
                        <p className="text-[#f00]">We will send you an email to verify your account</p>
                    </div>
                </div>
                <div className="flex flex-col items-end justify-cente p-2">
        <button type="submit" className="rounded-[8px] px-[21px] py-[12px] bg-[#FF9900] text-[#000]">Submit email</button>
      </div>
            </form>
        </div>
    );
};

export default ChangeEmailForm;
