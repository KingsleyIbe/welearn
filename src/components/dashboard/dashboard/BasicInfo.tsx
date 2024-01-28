import ProfilePhoto from '../../../assets/images/photo1.jpg';
const BasicInfo = () => {
    return (
        <div className="bg-[#fff] text-[#181842] p-10 rounded-[8px]">
            <div className="mb-5">
                <h1 className="text-[30px] font-bold mb-5">Your Personal Information</h1>
                <p>In order for us to validate your profile, please fill in the required fields. Remember that the more quality information you provide, the more chances you have to attract new students.</p>
                <p className="flex flex-col text-end text-[#f00]">Required fields: *</p>
            </div>
            <hr />
            <div>
                <div className="flex flex-col items-center mt-10">
                    <div className="flex flex-row gap-4 items-center">
                        <div>
                            <img src={ProfilePhoto} alt="Profile avatar" className="rounded-[100%] w-[120px] h-[120px]" />

                        </div>
                        <div className="flex flex-col gap-4 items-start">
                            <button type="button" className="upload-photo-btn">Upload a photo</button>
                            <button type="button" className="upload-photo-btn">Take a photo</button>
                        </div>
                    </div>
                    <div>
                        <h3>Tips for an incredible photo:</h3>
                        <ul>
                            <li>Smile and look at the camera</li>
                            <li>Centre your head and shoulders</li>
                            <li>Make sure your picture is centred and upright</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasicInfo;
