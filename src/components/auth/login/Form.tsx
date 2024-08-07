import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
    faEye, faLock, faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import LoginImage from '../../../assets/images/loginImage.jpg';

const Form = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <div className="">
            <div className="flex flex-row">
                <div className="w-[50vw]">
                    <img src={LoginImage} alt="Tutoring guys" className="h-[100vh] w-[50vw]" />
                </div>
                <div>
                    <form className="w-[50vw]">
                    <h1 className="text-[35px] text-[#ccc] font-bold ml-[100px] mt-[50px]">Login</h1>
                        <label htmlFor="email" className="w-[70%] m-auto input-active-border register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
                            <FontAwesomeIcon icon={faEnvelope} className="opacity-[0.2]" />
                            <input type="email" placeholder="Email" className="w-[100%] login-input" />
                        </label>
                        <label htmlFor="password" className="w-[70%] m-auto input-active-border register-input-bolder flex flex-row gap-4 items-center my-5 p-2">
                            <FontAwesomeIcon icon={faLock} className="opacity-[0.2]" />
                            <input type={toggle ? "text" : "password"} placeholder="Password" className="w-[100%] login-input" />
                            <button type="button" onClick={handleToggle}><FontAwesomeIcon icon={faEye} className="text-[#ccc]" /></button>
                        </label>
                        <div className="items-center justify-cente my-5 p-2 w-[20%] m-auto">
                            <button type="submit" className="rounded-[8px] px-[21px] w-[100%] py-[12px] bg-[#FF9900] text-[#000]">Login</button>
                        </div>
                    </form>
                    <div className="text-[#ccc] text-center gap-2">
                        <p>Don&#39;t have an account?</p>
                        <Link to="/register" className="font-bold text-[#ff9900] hover:text-[#ccc] underline mb-5">Sign Up</Link>
                        <br/>
                        <br/>
                        <Link to="/password-recovery" className="hover:text-[#ff9900] underline ">Forgot your password?</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Form;
