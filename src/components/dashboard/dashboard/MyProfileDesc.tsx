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
                <p>
                    In order for us to validate your profile, please fill in the required fields.
                    The video can be added later, but we insist, the more quality information you provide,
                    the more chances you have to find new students.
                </p>
                <p className="flex flex-col text-end text-[#f00]">Required fields: *</p>
            </div>
            <hr />
            <div className="flex flex-row justify-between items-between mt-10">
                <div className="w-[30%] font-bold text-[18px]">
                    <h1>ABOUT ME</h1>
                </div>
                <div className="w-[70%]">
                    <span className="font-bold text-[18px] opacity-[0.7]">HOW WOULD YOU DESCRIBE YOUR CLASSES?</span>
                    <p className="mt-2">
                        It's time to introduce yourself to potential students! Tell them who you are,
                        what makes you different from other teachers, how do you organise your classes?
                        Gain their trust by being approachable.
                        Tell them about your professional experience. Do you master any programmes or tools?
                    </p>
                    <div>
                        <p>Introduce yourself as if you were talking to a friend, be direct and friendly,
                            we all like positive people. Here is an example: Hello! I'm Stephen Jones,
                            I have a degree in Computer Science from the University of Leeds.
                            I have worked for the last 5 years in
                        </p>
                        {isReadMore && (
                            <p>
                                
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfileDesc;
