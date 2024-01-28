const BasicInfo = () => {
    return (
        <div className="bg-[#fff] text-[#181842] p-10 rounded-[8px]">
            <div className="mb-5">
                <h1 className="text-[30px] font-bold mb-5">Your Personal Information</h1>
                <p>In order for us to validate your profile, please fill in the required fields. Remember that the more quality information you provide, the more chances you have to attract new students.</p>
                <p className="flex flex-col text-end text-[#f00]">Required fields: *</p>
            </div>
            <hr />
        </div>
    );
};

export default BasicInfo;
