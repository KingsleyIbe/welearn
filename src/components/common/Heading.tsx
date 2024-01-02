import React from 'react';
// import { Link } from 'react-router-dom';

const Heading = () => {
  return (
    <div className="flex flex-row justify-between p-10">
        <div>
            <span>WeLearn</span>
        </div>
        <nav>
            <ul className="flex flex-row gap-10 items-center justify-center">
                <li><a href="/help">Help</a></li>
                <li><a href="/tutoring-jobs">Tutoring Jobs</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    </div>
  );
};

export default Heading;
