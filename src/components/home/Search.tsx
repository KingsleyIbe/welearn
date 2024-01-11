import { faBookOpen, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  return (
    <div className="text-center w-[50%] m-auto bg-[#FD9800] cursor p-3 rounded-[40px]">
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row justify-center gap-2 items-center">
              <FontAwesomeIcon icon={faBookOpen} />
              <button type="button">What do you want to learn?</button>
            </div>
            <div className="flex flex-row gap-2 items-center  bg-[#181842] py-[12px] px-[21px] rounded-[40px]">
              <FontAwesomeIcon icon={faSearch} />
              <button type="button">Find a Tutor</button>
            </div>
        </div>
    </div>
  );
};

export default Search;
