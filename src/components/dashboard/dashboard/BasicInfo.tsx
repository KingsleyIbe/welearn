import { useState } from 'react';
import ProfilePhoto from '../../../assets/images/photo1.jpg';
import UserData from './UserData';
const BasicInfo = () => {
    const [isReadMore, setIsReadMore] = useState(false);

    const handleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
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
                    <div className="items-center w-[35%] m-auto ">
                        <h3 className="opacity-[0.6] mt-10">Tips for an incredible photo:</h3>
                        <ul className="flex flex-col ml-10 gap-2 text-start justify-center photo-tips">
                            <li>Smile and look at the camera.</li>
                            <li>Centre your head and shoulders.</li>
                            <li className="opacity-[0.2]">Make sure your picture is centred and upright.</li>
                            {isReadMore && (
                                <ul>
                                <li>Use neutral lighting and backgrounds.</li>
                                <li>Your face and eyes should be fully visible (unless you have cultural reasons that contradict this).</li>
                                <li>Avoid logos or contact information.</li>
                                <li>You should be the only person in the photo.</li>
                                </ul>
                            )}
                        </ul>
                        <div className="flex flex-col items-end text-center text-[#FD9800] font-bold">
                            <button type="button" onClick={handleReadMore}>{isReadMore ? 'Read More' : 'Read Less'}</button>
                        </div>
                    </div>
                    <UserData />
                </div>
            </div>
        </div>
    );
};

export default BasicInfo;
