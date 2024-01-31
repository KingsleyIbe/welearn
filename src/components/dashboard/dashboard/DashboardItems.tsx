import { useState } from "react";
import BasicInfo from "./BasicInfo";
import Subjects from "./Subjects";
import MyProfileDesc from "./MyProfileDesc";
import EduExperience from "./EduExperience";
import PriceCategory from "./PriceCategory";

const DashboardItems = () => {
    const [basicInfo, setBasicInfo] = useState(true);
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
                <div className="w-[30%] bg-[#EAF3FF] text-[#181842] p-10 rounded-[8px]">
                    <div className="">
                        <h3 className="mb-4 font-bold">Congratulations! Your profile has been approved</h3>
                        <p className="mb-2">Your profile is now public! You are now ready to teach on Weteach.</p>
                        <hr />
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
                {basicInfo && <div><BasicInfo /></div>}
                {subjects && <div><Subjects /></div>}
                {profileDesc && <div><MyProfileDesc /></div>}
                {eduExp && <div><EduExperience /></div>}
                {priceCat && <div><PriceCategory /></div>}
            </div>
        </div>
    );
};

export default DashboardItems;
