import { faBookOpen, faMapLocationDot, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchTutor = () => {
    return (
        <div className="text-center w-[50%] m-auto bg-[#FD9800] cursor p-3 rounded-[40px]">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row justify-center gap-5 items-center">
                    <div className="flex flex-row justify-center gap-2 items-center">
                        <FontAwesomeIcon icon={faBookOpen} className="text-[#181842]" />
                        <input type="text" placeholder="e.g Math" className="w-[100%] s-input rounded-[8px] px-[10px] py-[8px]" />
                    </div>
                    <div className="flex flex-row justify-center gap-2 items-center">
                        <FontAwesomeIcon icon={faMapLocationDot} className="text-[#181842]" />
                        <input type="text" placeholder="By Location" className="s-input w-[100%] rounded-[8px] px-[10px] py-[8px]"/>
                    </div>
                </div>
                <div className="flex flex-row gap-2 items-center  bg-[#181842] py-[12px] px-[18px] rounded-[40px]">
                    <FontAwesomeIcon icon={faSearch} />
                    <button type="button">Find a Tutor</button>
                </div>
            </div>
        </div>
    )
}

export default SearchTutor;
