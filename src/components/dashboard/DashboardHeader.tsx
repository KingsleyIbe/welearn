import { Data } from "../../db/dashboardheader";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
    return (
        <div className="mt-[115px] text-[#181842] fixed w-[100%] z-10">
            <ul className="flex flex-row gap-10 justify-center px-10 py-2 bg-[#FD9800] font-bold">
                {Data?.map((item) => (
                    <li key={item?.id}><Link to={item?.href}>{item?.title}</Link></li>
                ))}
            </ul>
        </div>
    );
};

export default DashboardHeader;
