import { Data } from "@/db/TopSkills";
import { Link } from "react-router-dom";

const TopCoursesAndSkills = () => {
    return (
        <div>
            <div>
                <h1>Top Courses And Skills</h1>
            </div>
            <div>
                <ul>
                    {Data?.map((item) => (
                        <li key={item?.id}><Link to={item?.url}>{item?.title}</Link></li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TopCoursesAndSkills;
