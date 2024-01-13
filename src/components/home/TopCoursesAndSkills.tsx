import { Data } from "../../db/TopSkills";
import { Link } from "react-router-dom";

const TopCoursesAndSkills = () => {
    return (
        <div>
            <div className="text-center font-bold text-[24px]">
                <h1>Top Courses And Skills</h1>
            </div>
            <div className="p-10">
                <ul className="top-skills">
                    {Data?.map((item) => (
                        <li className="child-top-skills" key={item?.id}><Link to={item?.url}>{item?.title}</Link></li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TopCoursesAndSkills;
