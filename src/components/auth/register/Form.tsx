import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
// import {  } from '@fortawesome/free-regular-svg-icons';
import {
  faUser, faUserTie, faLock, faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import LoginImage from '../../../assets/images/loginImage.jpg';

const Form = () => (
  <div className="mt-10">
    <div className="flex flex-row">
    <div className="w-[50vw]">
                    <img src={LoginImage} alt="Tutoring guys" className="h-[100vh] w-[50vw]" />
                </div>
                <div>
    <form>
    <h1 className="text-[35px] text-[#ccc] font-bold ml-[100px] mt-[50px]">Register with us</h1>
      <label htmlFor="First Name" className="register-input-bolder flex flex-row gap-4 items-center p-2">
        <FontAwesomeIcon icon={faUser} className="opacity-[0.2]" />
        <input type="text" placeholder="First Name" />
      </label>
      <label htmlFor="Last Name" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
        <FontAwesomeIcon icon={faUserTie} className="opacity-[0.2]" />
        <input type="text" placeholder="Last Name" />
      </label>
      <label htmlFor="email" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
        <FontAwesomeIcon icon={faEnvelope} className="opacity-[0.2]" />
        <input type="email" placeholder="Email" />
      </label>
      <label htmlFor="password" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
        <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
        <input type="password" placeholder="Password" />
      </label>
      <label htmlFor="confirm_password" className="register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
        <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
        <input type="password" placeholder="Confirm Password" />
      </label>

      <div className="flex flex-col items-center justify-center my-5 p-2">
        <button type="submit" className="rounded-[8px] px-[21px] py-[12px] bg-[#FF9900] w-[100%] text-[#000]">Sign up for free</button>
      </div>
    </form>
    </div>
    <div className="flex flex-row items-center gap-2">
      <p>Already have an account?</p>
      <Link to="/login" className="text-[#ff9900] underline">Login</Link>
    </div>
    <div className="mt-2 opacity-[0.8]">
      <p>By continuing, you agree to Inyeaka&#39;s</p>
      <Link to="/privacy-policy">Terms of Service and Privacy Policy</Link>
    </div>
    </div>
  </div>
);

export default Form;