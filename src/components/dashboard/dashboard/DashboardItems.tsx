import { useState } from "react";
import BasicInfo from "./BasicInfo";

const DashboardItems = () => {
    const [basicInfo, setBasicInfo] = useState(false);
    const [subjects, setSubjects] = useState(false);
    const [profileDesc, setProfileDesc] = useState(false);
    const [eduExp, setEduExp] = useState(false);
    const [priceCat, setPriceCat] = useState(false);

    const handleBasicInfo = () => {
        setBasicInfo(true);
        setSubjects(false);
        setProfileDesc(false);
        setEduExp(false);
        setPriceCat(false);
    };

    const handleSubjects = () => {
        setSubjects(true);
        setBasicInfo(false);
        setProfileDesc(false);
        setEduExp(false);
        setPriceCat(false);
    };

    const handleProfileDesc = () => {
        setProfileDesc(true);
        setSubjects(false);
        setBasicInfo(false);
        setEduExp(false);
        setPriceCat(false);
    };

    const handleEduEx = () => {
        setEduExp(true);
        setProfileDesc(false);
        setSubjects(false);
        setBasicInfo(false);
        setPriceCat(false);
    };

    const handlePriceCat = () => {
        setPriceCat(true);
        setEduExp(false);
        setProfileDesc(false);
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
                            <li><button type="button" onClick={handleEduEx}>Education and experience</button></li>
                            <li><button type="button" onClick={handlePriceCat}>Price and Category</button></li>
                        </ul>
                    </nav>
                </div>
                {basicInfo && <div className="bg-[#ddd]"><BasicInfo /></div>}
                {subjects && <div className="bg-[#ddd]">Subjects</div>}
                {profileDesc && <div className="bg-[#ddd]">Profile Description</div>}
                {eduExp && <div className="bg-[#ddd]">Education and Experience</div>}
                {priceCat && <div className="bg-[#ddd]">Price Category</div>}
            </div>
        </div>
    );
};

export default DashboardItems;
