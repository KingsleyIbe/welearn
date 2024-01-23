import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import Welearn from '../../assets/images/weteach.png';
import ProfilePhoto from '../../assets/images/photo1.jpg';
import DropdownMenu from './DropdownMenu';

const Heading = () => {

  const [loggedin, setLoggedin] = useState(true);
  const [dropDown, setDropDown] = useState(false);

  const handleDropdown = () => {
    setDropDown(!dropDown);
  };

  return (
    <>
    <div className="flex flex-row justify-between bg-[#181842] w-[100%] z-10 top-0 p-10 fixed">
      <div>
        <Link to="/#"><img src={Welearn} alt="Site Logo" className="w-[130px]" /></Link>
      </div>
      <nav>
        <ul className="flex flex-row gap-5 items-center justify-center">
          <li><Link to="/help"><FontAwesomeIcon icon={faCircleQuestion} /></Link></li>
          <li><Link to="/tutoring-jobs">Tutoring Jobs</Link></li>
          {loggedin ? (
            <li>
              <button type="button" onClick={handleDropdown} className="flex flex-row gap-2 items-center profile-btn">
                <img src={ProfilePhoto} alt="Profile avatar" className="rounded-[100%] w-[50px] h-[50px]" />
                <p>Kingsley</p>
              </button>
            </li>
          ) : (

            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </nav>
    </div>
    {dropDown && (
      <div className="relative">
        <DropdownMenu />
      </div>
      )}
    </>
  );
};

export default Heading;
