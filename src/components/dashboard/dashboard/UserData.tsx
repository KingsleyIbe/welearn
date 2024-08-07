import Location from "./Location";
import Phone from "./Phone";

const UserData = () => {
    return (
        <div>
            <form action="">
                <h2 className="font-bold my-10 text-[18px]">Change Name</h2>
                <div className="w-[100%] m-auto flex flex-col items-end gap-1">
                    <div className="flex justify-center flex-row gap-5 my-2 items-center p-2">
                        <label htmlFor="confirm_password" className="items-end">First Name:</label>
                        <input type="text" placeholder="First Name" className="register-input-bolder p-2 w-[300px]" />
                    </div>
                    <div className="flex justify-center flex-row gap-5 my-2 items-center p-2">
                        <label htmlFor="confirm_password" className="items-end">Last Name:</label>
                        <input type="text" placeholder="Last Name" className="register-input-bolder p-2 w-[300px]" />
                    </div>
                    <div className="flex justify-center flex-row gap-5 my-2 items-center p-2">
                        <label htmlFor="confirm_password" className="">Date of Birth:</label>
                        <input type="date" placeholder="mm/dd/yy" className="register-input-bolder p-2 w-[300px]" />
                    </div>
                    <div className="flex justify-center flex-ro gap-5 my-2 items-center p-2">
                        <label htmlFor="confirm_password" className="">Gender:</label>
                        <select className="register-input-bolder p-2 w-[300px]">
                            <option>Select your gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>

                    </div>
                </div>
                <h2 className="font-bold my-10 text-[18px]">Location</h2>
                <div className="w-[100%] m-auto flex flex-col items-end gap-1">
                    <Location />
                    <div className="flex justify-center flex-row gap-5 my-2 items-center p-2">
                        <Phone />
                    </div>
                    <div className="w-[60%] flex flex-col text-end">
                        <p>Don't worry, it won't be visible on Weteach. We will only use it to contact you in case you need help.</p>
                    </div>

                </div>
                <div className="flex flex-col items-end justify-cente p-2">
                    <button type="submit" className="rounded-[8px] px-[21px] py-[12px] bg-[#FF9900] text-[#000]">Save and continue</button>
                </div>
            </form>
        </div>
    );
};

export default UserData;
