import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Data } from "../../db/samplecourses";

const SampleCourses = () => {
    const data = Data;
    return (
        <div className="flex flex-col px-10 mt-[100px]">
            <ul className="flex flex-row bg-[#EAF3FF] items-center rounded-[21px] text-[#181842] justify-between p-3 gap-5">
                {data.map((item) => (
                    <li key={item?.id} className="flex flex-col items-center gap-2">
                        <FontAwesomeIcon icon={item?.icon} />
                        <p>{item?.course}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SampleCourses;
