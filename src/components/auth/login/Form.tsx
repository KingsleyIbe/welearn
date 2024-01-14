import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faEye, faLock, faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import LoginImage from '../../../assets/images/loginImage.jpg';
import Title from './Title';

const Form = () => (
  <div className="">
    <div className="flex flex-row gap-10">
    <div className="w-[50vw]">
        <img src={LoginImage} alt="Tutoring guys" className="h-[100vh] w-[50vw]" />
    </div>
    <div>
        <Title />
    <form className="w-[50vw]">
      <label htmlFor="email" className="w-[70%] input-active-border register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
        <FontAwesomeIcon icon={faEnvelope} className="opacity-[0.2]" />
        <input type="email" placeholder="Email"  className="w-[100%] login-input" />
      </label>
      <label htmlFor="password" className="w-[70%] input-active-border register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
        <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
        <input type="password" placeholder="Password" className="w-[100%] login-input" />
        <FontAwesomeIcon icon={faEye} className="opacity-[0.2]" />
      </label>
      <div className="flex flex-col items-center justify-center my-5 p-2">
        <button type="submit" className="rounded-[8px] px-[21px] py-[12px] bg-[#FF9900] text-[#000]">Continue</button>
      </div>
    </form>
    <div className="flex flex-row items-center gap-2">
      <p>Don&#39;t have an account?</p>
      <Link to="/sign-up" className="text-[#ff9900] underline">Sign Up</Link>
    </div>
    <div className="mt-2 opacity-[0.5] text-center">
      <Link to="/password-recovery">Forgot your password?</Link>
    </div>
    </div>
    </div>
    
  </div>
);

export default Form;
