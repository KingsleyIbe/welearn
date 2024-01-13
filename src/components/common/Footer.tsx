import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../assets/images/weteach.png';
import line from '../../assets/images/weteach.png';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { AboutUs, CourseYouLove } from '../../db/footer';

const Footer = () => {
    return (
        <div
            className="bg-[#EAF3FF] text-[#181842] p-10 footer"
        >
            <div className="lg:flex gap-[50px] items-center">
                <div className="flex gap-10 items-center">
                    <div>
                        <Link to="/" className="bg-[#181842]">
                            <img src={Logo} alt="Site Footer Logo" className="mb-2 w-[100px] bg-[#181842]" />
                        </Link>
                        <p className="lg:max-w-[289px] opacity-[0.6]">
                            weTeach.com is a free website, trusted by thousands of students and teachers, all over the world.
                            You can find local tutors, online teachers, and teachers to help with tutoring, coaching, assignments, academic projects, and dissertations for over 9500 courses.
                        </p>
                    </div>
                </div>
                <div className="sm:flex md:flex lg:flex lg:gap-10 md:gap-10 md:mt-10">
                    <div className="my-[50px] sm:my-0 md:my-0 lg:my-0">
                        <Link to="/about-us"><h3 className="my-2 text-[20px] font-bold hover:text-[#FFC01D]">About Us</h3></Link>
                        <ul className="opacity-[0.6]">
                            {AboutUs?.map((item) => (
                              <li key={item?.id}><Link to={item?.url} className="hover:text-[#FFC01D]">{item?.title}</Link></li>
                            ))}

                        </ul>
                    </div>
                    <div>
                        <Link to="/services"><h3 className="my-2 text-[20px] font-bold hover:text-[#FFC01D]">Courses You Love</h3></Link>
                        <ul className="opacity-[0.6]">
                            {CourseYouLove?.map((item) => (
                              <li key={item?.id}><Link to={item?.url} className="hover:text-[#FFC01D]">{item?.title}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div className="my-[50px] sm:my-0 md:my-0 lg:my-0">
                        <Link to="/industries"><h3 className="my-2 text-[20px] font-bold hover:text-[#FFC01D]">Region</h3></Link>
                        <ul className="opacity-[0.6]">
                            <li><Link to="/industries" className="hover:text-[#FFC01D]">Africa</Link></li>
                            <li><Link to="/industries" className="hover:text-[#FFC01D]">Europe</Link></li>
                            <li><Link to="/industries" className="hover:text-[#FFC01D]">Asia</Link></li>
                            <li><Link to="/industries" className="hover:text-[#FFC01D]">North America</Link></li>
                            <li><Link to="/industries" className="hover:text-[#FFC01D]">South America</Link></li>
                            <li><Link to="/industries" className="hover:text-[#FFC01D]">Antarctica</Link></li>
                            <li><Link to="/industries" className="hover:text-[#FFC01D]">Australia</Link></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h2 className="font-bold mb-2">Follow Us</h2>
                    <ul className="flex gap-2 items-center lg:w-[100%] xsm:text-[#f00] sm:w-[50%] sm:m-auto md:w-[50%] md:m-auto">
                        <li className="hover:bg-[#FFC01D] hover:rounded-[100%]"><a href="https://www.facebook.com/prudenceConcept" target="__blank"><FontAwesomeIcon icon={faFaceFrown} /></a></li>
                        <li className="hover:bg-[#FFC01D] hover:rounded-[100%]"><a href="https://www.instagram.com/prudenceconcept/" target="__blank"><FontAwesomeIcon icon={faFaceFrown} /></a></li>
                        <li className="hover:bg-[#FFC01D] hover:rounded-[100%]"><a href="https://twitter.com/PrudenceConcept" target="__blank"><FontAwesomeIcon icon={faFaceFrown} /></a></li>
                        <li className="hover:bg-[#FFC01D] hover:rounded-[100%]"><a href="https://www.linkedin.com/company/69190691/admin/" target="__blank"><FontAwesomeIcon icon={faFaceFrown} /></a></li>
                    </ul>
                </div>
            </div>
            <div className="my-10 text-center">
                {/* <img src={line} alt="Line" /> */}
                <p className="mt-10">Copyright ® 2024 weTeach All rights Reserved</p>
            </div>
        </div>
    );
};
export default Footer;