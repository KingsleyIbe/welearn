const Form = () => {
    return (
        <div className="w-[93%] p-5 bg-[#F4F6FC] text-[#181842] m-auto rounded-[8px] mt-5">
            <h1 className="mb-10 font-bold text-[32px]">Settings</h1>
            <hr />

            <form action="">
                <h2 className="font-bold my-10 text-[18px]">Change password</h2>
                <div className="w-[70%] m-auto">
                    <div className="flex justify-center flex-row gap-5 my-2 items-center p-2">
                  <label htmlFor="confirm_password" className="">Current password:</label>
                  <input type="password" placeholder="Current Password" className="register-input-bolder p-2 w-[300px]" />
                  </div>
      
                </div>
            </form>
        </div>
    );
};

export default Form;
