import * as React from "react";
import RegisterForm from "./RegisterForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userServices } from "../../services";
import { register } from "../../services/user.service";

const RegisterPage = () => {
  // let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [social_security_number, setSocialSecurityNumber] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [postal_code, setPostalCode] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleClick = async () => {

    try {
      // const response = await userServices.register({
      //   gender,
      //   email,
      //   password,
      //   first_name,
      //   last_name,
      //   social_security_number,
      //   phone_number,
      //   city,
      //   address,
      //   postal_code
      // });
      const user = {
        gender,
        email,
        password,
        first_name,
        last_name,
        social_security_number,
        phone_number,
        city,
        address,
        postal_code,
      };

      // response.data;

      // localStorage.setItem("access-token", user.access_token);
     await dispatch(register(user));
    //  navigate("/");


    } catch (error: any) {
      setError(true);
    }
  };

  return (
    <>
      <RegisterForm
        error={error}
        setError={setError}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setEmail={setEmail}
        setPassword={setPassword}
        setAddress={setAddress}
        setCity={setCity}
        setPhoneNumber={setPhoneNumber}
        setSocialSecurityNumber={setSocialSecurityNumber}
        setPostalCode={setPostalCode}
        setGender={setGender}
        handleClick={handleClick}
      />
    </>
  );
};

export default RegisterPage;
