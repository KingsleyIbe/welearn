import { useState } from "react";

const DashboardItems = () => {
    const [basicInfo, setBasicInfo] = useState(false);
    const [subjects, setSubjects] = useState(false);
    const [profileDesc, setProfileDesc] = useState(false);

    const handleBasicInfo = () => {
        setBasicInfo(true);
        setSubjects(false);
        setProfileDesc(false);
    };

    const handleSubjects = () => {
        setSubjects(true);
        setBasicInfo(false);
        setProfileDesc(false);
    };

    const handleProfileDesc = () => {
        setProfileDesc(true);
        setSubjects(false);
        setBasicInfo(false);
    };
    return (
        <div className="my-[200px] px-10">
            <div className="flex flex-row gap-2">
                <div className="w-[30%]">
                    <div className="">
                        <h3 className="mb-2">Congratulations! Your profile has been approved</h3>
                        <p>Your profile is now public! You are now ready to teach on Weteach.</p>
                    </div>
                    <nav className="mt-10">
                        <ul>
                            <li><button type="button" onClick={handleBasicInfo}>Basic Info</button></li>
                            <li><button type="button" onClick={handleSubjects}>Subjects</button></li>
                            <li><button type="button" onClick={handleProfileDesc}>Profile Description</button></li>
                            <li><button type="button">Education and experience</button></li>
                            <li><button type="button">Price and Category</button></li>
                        </ul>
                    </nav>
                </div>
                {basicInfo && <div className="bg-[#ddd]">Old</div>}
                {subjects && <div className="bg-[#ddd]">Subjects</div>}
                {profileDesc && <div className="bg-[#ddd]">Profile Description</div>}
            </div>
        </div>
    );
};

export default DashboardItems;
