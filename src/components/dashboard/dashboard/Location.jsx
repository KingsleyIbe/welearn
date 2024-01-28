import { useState } from "react";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
  LanguageSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

const Location = () => {
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);
  return (
    <div className="w-[100%] m-auto flex flex-col items-end gap-1">
      <div className="flex justify-center flex-row gap-5 my-2 items-center p-2">
        <label htmlFor="confirm_password" className="items-end">Country of Origin:</label>
        <CountrySelect
          onChange={(e) => {
            setCountryid(e.id);
          }}
          placeHolder="Select Country"
          className="register-input-bolder p-2 w-[300px]"
        />
      </div>
      <div className="flex justify-center flex-row gap-5 my-2 items-center p-2">
        <label htmlFor="confirm_password" className="items-end">Country of Residence:</label>
        <CountrySelect
          onChange={(e) => {
            setCountryid(e.id);
          }}
          placeHolder="Select Country"
          className="register-input-bolder p-2 w-[300px]"
        />
      </div>
      <div className="flex justify-center flex-row gap-5 my-2 items-center p-2">
        <label htmlFor="confirm_password" className="items-end">State/Province:</label>
        <StateSelect
          countryid={countryid}
          onChange={(e) => {
            setstateid(e.id);
          }}
          placeHolder="Select State"
        />
      </div>

      <div className="flex justify-center flex-row gap-5 my-2 items-center p-2">
        <label htmlFor="confirm_password" className="items-end">City:</label>
        <CitySelect
          countryid={countryid}
          stateid={stateid}
          onChange={(e) => {
            console.log(e);
          }}
          placeHolder="Select City"
        />
      </div>
      <div className="flex justify-center flex-row gap-5 my-2 items-center p-2">
        <label htmlFor="confirm_password" className="items-end">Language:</label>
        <LanguageSelect
          onChange={(e) => {
            console.log(e);
          }}
          placeHolder="Select Language"
        />
      </div>

    </div>
  );
};

export default Location;
