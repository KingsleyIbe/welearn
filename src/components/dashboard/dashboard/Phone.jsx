import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';

const Phone = () => {
    // `value` will be the parsed phone number in E.164 format.
    // Example: "+12133734253".
    const [value, setValue] = useState();
    console.log(value);
    return (
        <PhoneInput
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
            className="register-input-bolder p-2 w-[300px]"
        />

    );
};

export default Phone;
