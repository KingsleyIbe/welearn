import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faUser, faUserTie, faLock, faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import LoginImage from '../../../assets/images/loginImage.jpg';

const Form = () => (
  <div className="">
    <div className="flex flex-row gap-10 ">
    <div className="w-[50vw]">
                    <img src={LoginImage} alt="Tutoring guys" className="h-[100vh] w-[50vw]" />
                </div>
                <div className="w-[50vw]">
    <form className="">
    <h1 className="text-[35px] text-[#ccc] font-bold my-[50px]">Register with us</h1>
      <label htmlFor="First Name" className="w-[70%] register-input-bolder flex flex-row gap-4 items-center p-2">
        <FontAwesomeIcon icon={faUser} className="opacity-[0.2]" />
        <input type="text" placeholder="First Name" className="login-input w-[100%]" />
      </label>
      <label htmlFor="Last Name" className="w-[70%] register-input-bolder flex flex-row gap-4 items-center my-2 p-2">
        <FontAwesomeIcon icon={faUserTie} className="opacity-[0.2]" />
        <input type="text" placeholder="Last Name" className="login-input w-[100%]" />
      </label>
      <label htmlFor="email" className="w-[70%] register-input-bolder flex flex-row gap-4 items-center my-2 p-2">
        <FontAwesomeIcon icon={faEnvelope} className="opacity-[0.2]" />
        <input type="email" placeholder="Email" className="login-input w-[100%]" />
      </label>
      <label htmlFor="password" className="w-[70%] register-input-bolder flex flex-row gap-4 items-center my-2 p-2">
        <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
        <input type="password" placeholder="Password" className="login-input w-[100%]" />
      </label>
      <label htmlFor="confirm_password" className="w-[70%] register-input-bolder flex flex-row gap-4 items-center my-2 p-2">
        <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
        <input type="password" placeholder="Confirm Password" className="login-input w-[100%]" />
      </label>
      <div className="flex flex-col gap-5">
      <div className="flex flex-col items-center justify-center p-2">
        <button type="submit" className="rounded-[8px] px-[21px] py-[12px] bg-[#FF9900] w-[30%] text-[#000]">Sign up for free</button>
      </div>
      <div className="w-[50vw] text-center">
    <div className="">
      <p>Already have an account?</p>
      <p><Link to="/login" className="text-[#ff9900] underline ml-[70px] text-center font-bold">Login</Link></p>
    </div>
    <div className="opacity-[0.8]">
      <p>By continuing, you agree to WeTeach&#39;s</p>
      <Link to="/privacy-policy" className="underline">Terms of Service and Privacy Policy</Link>
    </div>
    </div>
      </div>
    </form>
    </div>
    </div>
  </div>
);

export default Form;