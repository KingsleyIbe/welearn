import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import Welearn from '../../assets/images/logo.png';

const Heading = () => {
  return (
    <div className="flex flex-row justify-between p-10">
        <div>
            <Link to="/#"><img src={Welearn} alt="Site Logo" className="" /></Link>
        </div>
        <nav>
            <ul className="flex flex-row gap-5 items-center justify-center">
                <li><Link to="/help"><FontAwesomeIcon icon={faCircleQuestion} /></Link></li>
                <li><Link to="/tutoring-jobs">Tutoring Jobs</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    </div>
  );
};

export default Heading;
