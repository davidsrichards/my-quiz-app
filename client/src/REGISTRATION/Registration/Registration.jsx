import { useState, useEffect } from "react";
import axios from "axios";
import SignUpOrSignIn from "../../SignUp/SignUpOrSignIn";

function Registration() {
  ////// base usr

  const BASE_URL = "/api/user";

  ////// declaration of variable

  const [user, setUser] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  /////////////////////////////////

  const [firstnameError, setFirstNameError] = useState("");
  const [lastnameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  //////////////////////////// getting all data from data base

  const mongoDB = async () => {
    await fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  };

  ///////////////////////////

  useEffect(() => {
    mongoDB();
  }, []);

  //////////////////// add data

  const addUser = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/new`, {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        phone: phone,
      });
      setUser(response.data);
      console.log(response.data);
      if (response.data && confirmPassword === password) {
        setFirstNameError("");
        setLastNameError("");
        setPasswordError("");
        setConfirmPasswordError("");
        setEmailError("");
        setPhoneError("");
        setFirstname("");
        setLastname("");
        setPassword("");
        setEmail("");
        setPhone("");
        setConfirmPassword("");
      }
    } catch (error) {
      if (typeof error.response.data === "string") {
        setEmailError("Email Alrady Exist");
      }

      console.log(error.response.data);
      console.log(typeof error.response.data);
      //////// firstname error
      if (typeof error.response.data === "object") {
        const findFistNameError = error.response.data.find(
          (err) => err.msg === "please provide firstname"
        );
        !findFistNameError
          ? setFirstNameError("")
          : setFirstNameError("please provide firstname");
        /////// lastname error
        const findLastNameError = error.response.data.find(
          (err) => err.msg === "please provide lastname"
        );
        !findLastNameError
          ? setLastNameError("")
          : setLastNameError("please provide lastname");
        /////// email error
        const findEmailError = error.response.data.find(
          (err) => err.msg === "please provide email"
        );
        !findEmailError
          ? setEmailError("")
          : setEmailError("please provide email");
        ////// password error
        const findPasswordError = error.response.data.find(
          (err) => err.msg === "please provide password"
        );
        !findPasswordError
          ? setPasswordError("")
          : setPasswordError("please provide password");
        ////// phone number error
        const findPhoneError = error.response.data.find(
          (err) => err.msg === "please provide phone number"
        );
        !findPhoneError
          ? setPhoneError("")
          : setPhoneError("please provide phone number");
        if (confirmPassword.length < 5 || confirmPassword !== password) {
          setConfirmPasswordError("password not match");
        } else {
          setConfirmPasswordError("");
        }
      }
    }
  };

  return (
    <>
      <div className="bg-[url(https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-center bg-cover bg-fixed rounded-lg relative">
        <form
          action=""
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();

            if (confirmPassword === password) {
              addUser();
            }
          }}
        >
          <div className="w-full grid grid-cols-1 container mx-auto p-12 gap-6 justify-items-center">
            <h1 className="text-pink-400 font-bold text-[2rem]">
              Registration Form
            </h1>
            {/*  */}
            <div className="w-full space-y-2">
              <label htmlFor="" className="text-white text-[1.2rem]">
                <span className="sm:block hidden"> Name of student</span>{" "}
                <span className="sm:hidden block">First Name</span>
              </label>
              {/*  */}
              <div className="w-full grid sm:grid-cols-2 sm:gap-2 gap-4">
                {/*  */}
                <div>
                  <input
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    placeholder="First Name"
                    className="p-4 text-slate-500 bg-slate-400 font-serif rounded-sm ring-2 ring-white w-full transition delay-100  hover:ring-blue-400 outline-none"
                  />
                  <p className="text-red-500">{firstnameError}</p>
                </div>
                <label
                  htmlFor=""
                  className="sm:hidden block text-white  text-[1.2rem]"
                >
                  Last Name
                </label>

                {/*  */}

                <div>
                  <input
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    placeholder="Last Name"
                    className="p-4 text-slate-500 bg-slate-400 font-serif rounded-sm ring-2 ring-white w-full transition delay-100  hover:ring-blue-400 outline-none"
                  />
                  <p className="text-red-500">{lastnameError}</p>
                </div>
              </div>
            </div>

            {/*  */}

            <div className="w-full space-y-2">
              <label htmlFor="" className="text-white text-[1.2rem]">
                <span className="sm:block hidden">Password</span>{" "}
                <span className="sm:hidden block">Password</span>
              </label>
              {/*  */}
              <div className="w-full grid sm:grid-cols-2 sm:gap-2 gap-4">
                <div>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="p-4 text-slate-500 bg-slate-400 font-serif rounded-sm ring-2 ring-white w-full transition delay-100  hover:ring-blue-400 outline-none"
                  />
                  <p className="text-red-500">{passwordError}</p>
                </div>
                <label
                  htmlFor=""
                  className="sm:hidden block text-white  text-[1.2rem]"
                >
                  Confirm Password
                </label>
                <div>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    className="p-4 text-slate-500 bg-slate-400 font-serif rounded-sm ring-2 ring-white w-full transition delay-100  hover:ring-blue-400 outline-none"
                  />
                  <p className="text-red-500">{confirmPasswordError}</p>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="w-full space-y-3">
              <label htmlFor="" className="text-white  text-[1.2rem]">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-4 text-slate-500 bg-slate-400 font-serif rounded-sm ring-2 ring-white w-full transition delay-100  hover:ring-blue-400 outline-none"
              />
              <p className="text-red-500">{emailError}</p>
            </div>

            {/*  */}
            <div className="w-full space-y-3">
              <label htmlFor="" className="text-white  text-[1.2rem]">
                Phone Number
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="p-4 text-slate-500 bg-slate-400 font-serif rounded-sm ring-2 ring-white w-full transition delay-100  hover:ring-blue-400 outline-none"
              />
              <p className="text-red-500">{phoneError}</p>
            </div>
            {/*  */}
            <button
              type="submit"
              className="text-pink-400 transition delay-100 bg-four-colors w-full p-3 text-[1.3rem] font-bold rounded-lg hover:bg-four-colors-hover mt-3"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="absolute -top-10  right-10">
          <SignUpOrSignIn to="/" action="Sign In" />
        </div>
      </div>
    </>
  );
}

export default Registration;
