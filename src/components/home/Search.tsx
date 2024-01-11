import { useState } from "react";
import { faBookOpen, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchTutor from "./SearchTutor";

const Search = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
        console.log(toggle);
    }
  return (
    <>
    {!toggle ? 
    <div onClick={handleToggle} className="text-center w-[50%] m-auto bg-[#FD9800] cursor p-3 rounded-[40px]">
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row justify-center gap-2 items-center">
              <FontAwesomeIcon icon={faBookOpen} />
              <button onClick={handleToggle} type="button">What do you want to learn?</button>
            </div>
            <div className="flex flex-row gap-2 items-center  bg-[#181842] py-[12px] px-[21px] rounded-[40px]">
              <FontAwesomeIcon icon={faSearch} />
              <button onClick={handleToggle} type="button">Find a Tutor</button>
            </div>
        </div>
    </div>
    : (
        <SearchTutor />
    )}
    </>
  );
};

export default Search;
