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
                        <div className="ml-10 text-[14px] opacity-[0.7] mt-2">
                            <span className="text-[#000]">💡</span>
                        <span>Introduce yourself as if you were talking to a friend, be direct and friendly,
                            we all like positive people. Here is an example: Hello! I'm Stephen Jones,
                            I have a degree in Computer Science from the University of Leeds.
                            I have worked for the last 5 years in 
                        </span>
                        {isReadMore && (
                            <span className="ml-1">
                                 Adidas, about 3 years ago I decided to dedicate myself to the world of
                                teaching as I found I have a passion for it. I have experience giving online
                                classes to high school and university students. I like to organise classes
                                according to the needs of each student, I will be happy to help you achieve
                                your goals! 👋🏻
                            </span>
                        )}
                        </div>
                         <div className="flex flex-col items-end text-center text-[#FD9800] font-bold">
                            <button type="button" onClick={handleReadMore}>{isReadMore ? 'Read Less' : 'Read More'}</button>
                        </div>
                        <p className="font-bold mt-10 mb-2">Remember to fill your presentation in the languages in which you can teach:</p>
                        <form>
                            <textarea placeholder="Write your bio" rows={10} className="w-[80%] register-input-bolder p-2" />

                            <h2 className="my-5 font-semibold">AGE OF YOUR STUDENTS</h2>
                            <p className="mb-5">Indicate the age range of the students you want to teach:</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfileDesc;
