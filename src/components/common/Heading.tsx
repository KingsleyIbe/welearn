import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import Welearn from '../../assets/images/weteach.png';
import ProfilePhoto from '../../assets/images/photo1.jpg';

const Heading = () => {

  const [loggedin, setLoggedin] = useState(true);
  return (
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
              <button type="button" className="flex flex-row gap-2 items-center profile-btn">
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
  );
};

export default Heading;
