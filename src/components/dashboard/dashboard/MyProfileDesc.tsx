import { useState } from 'react';
import ProfilePhoto from '../../../assets/images/photo1.jpg';
import UserData from './UserData';
const MyProfileDesc = () => {
    const [isReadMore, setIsReadMore] = useState(false);

    const handleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <div className="bg-[#fff] text-[#181842] p-10 rounded-[8px]">
            <div className="mb-5">
                <h1 className="text-[30px] font-bold mb-5">Profile Description</h1>
                <p>In order for us to validate your profile, please fill in the required fields. The video can be added later, but we insist, the more quality information you provide, the more chances you have to find new students.</p>
                <p className="flex flex-col text-end text-[#f00]">Required fields: *</p>
            </div>
            <hr />
            <div className="flex flex-row justify-between">
                <div>
                    <h1>ABOUT ME</h1>
                </div>
                <div>
                    <p>HOW WOULD YOU DESCRIBE YOUR CLASSES?</p>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default MyProfileDesc;
