import { Link } from "react-router-dom";
import { Data } from "../../db/dashboardheader";

const DropdownMenu = () => {
    return (
        <div className="absolute z-50 top-[60px] p-3 bg-[#EAF3FF] text-[#000] rounded-[12px] right-2">
            <ul className="flex flex-col gap-2">
                {Data?.map((item) => (
                    <li key={item?.id}><Link to={item?.href}>{item?.title}</Link></li>

                ))}
                <li><button type="button">Logout</button></li>
            </ul>
        </div>
    );
};

export default DropdownMenu;
