// importing modules
import { useCallback, useEffect, useState } from "react";
import SignUpOrSignIn from "../../../../SignUp/SignUpOrSignIn";
import axios from "axios";

function AdminRegistration() {
  /// getting the base url
  const BASE_URL = "/api/user";

  /// decleration of  states

  const [admins, setAdmins] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  /// error handlings

  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setlastnameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [move, setMove] = useState(true);

  /// function to handle error

  const handleErrors = (error, message, setter) => {
    const findError = error.find(({ msg }) => msg === message);
    !findError ? setter("") : setter(message);
  };

  // remove the error message

  const removeError = () => {
    setFirstnameError("");
    setlastnameError("");
    setEmailError("");
    setPasswordError("");
    setPhoneNumberError("");
    setConfirmPasswordError("");
  };

  // handle confirmpassword

  const isPasswordMatch = () => {
    if (
      admins.confirmPassword.length < 1 ||
      admins.confirmPassword !== admins.password
    ) {
    } else {
      setConfirmPasswordError("password not match");
    }
  };

  // resetall

  const resetAll = () => {
    setAdmins({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      phoneNumber: "",
      confirmPassword: "",
    });
  };

  /// function to posting admins

  const postAdmins = async () => {
    /// posting admins
    const response = await axios
      .post(`${BASE_URL}/admin/new`, {
        firstname: admins.firstname,
        lastname: admins.lastname,
        email: admins.email,
        password: admins.password,
        phone: admins.phoneNumber,
      })
      .catch((err) => {
        console.log(err.response.data);
        // firstname
        handleErrors(
          err.response.data,
          "Please provide firstname",
          setFirstnameError
        );
        // lastname
        handleErrors(
          err.response.data,
          "Please provide lastname",
          setlastnameError
        );
        // password
        handleErrors(
          err.response.data,
          "Please provide password",
          setPasswordError
        );
        // email
        handleErrors(err.response.data, "Please provide email", setEmailError);
        // phone number
        handleErrors(
          err.response.data,
          "Please provide phone number",
          setPhoneNumberError
        );
      });

    if (response && response.data) {
      console.log(response.data);
      removeError();
      resetAll();
    }
  };

  return (
    <div className="bg-[url(https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-center bg-cover bg-fixed rounded-lg">
      <form
        action=""
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();

          if (
            admins.confirmPassword.length < 1 ||
            admins.confirmPassword !== admins.password
          ) {
            return setConfirmPasswordError("pasword not match");
          }
          postAdmins();
        }}
      >
        <div className="w-full grid grid-cols-1 container mx-auto p-12 gap-6 justify-items-center">
          <h1 className="text-white font-bold text-[2rem]">
            Admin Registration Form
          </h1>
          {/*  */}
          <div className="w-full space-y-2">
            <label htmlFor="" className="text-white text-[1.2rem]">
              <span className="sm:block hidden cursor-pointer">
                {" "}
                Name of student
              </span>{" "}
              <span className="sm:hidden block  ">First Name</span>
            </label>
            {/*  */}
            <div className="w-full grid sm:grid-cols-2 sm:gap-2 gap-4">
              {/*  */}
              <div>
                <input
                  type="text"
                  value={admins.firstname}
                  onChange={(e) =>
                    setAdmins((prev) => ({
                      ...prev,
                      firstname: e.target.value,
                    }))
                  }
                  placeholder="First Name"
                  className="p-4 text-slate-500 bg-slate-400 font-serif rounded-sm ring-2 ring-white w-full transition delay-100  hover:ring-blue-400 outline-none"
                />
                <p className="text-red-500">{firstnameError || ""}</p>
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
                  value={admins.lastname}
                  onChange={(e) =>
                    setAdmins((prev) => ({ ...prev, lastname: e.target.value }))
                  }
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
                  value={admins.password}
                  onChange={(e) =>
                    setAdmins((prev) => ({ ...prev, password: e.target.value }))
                  }
                  type="password"
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
                  value={admins.confirmPassword}
                  onChange={(e) =>
                    setAdmins((prev) => ({
                      ...prev,
                      confirmPassword: e.target.value,
                    }))
                  }
                  type="password"
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
              value={admins.email}
              onChange={(e) =>
                setAdmins((prev) => ({ ...prev, email: e.target.value }))
              }
              type="email"
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
              value={admins.phoneNumber}
              onChange={(e) =>
                setAdmins((prev) => ({ ...prev, phoneNumber: e.target.value }))
              }
              type="text"
              className="p-4 text-slate-500 bg-slate-400 font-serif rounded-sm ring-2 ring-white w-full transition delay-100  hover:ring-blue-400 outline-none"
            />
            <p className="text-red-500">{phoneNumberError}</p>
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
      <div className="absolute -top-10 right-10">
        <SignUpOrSignIn to="/admin-login" action="Sign In" />
      </div>
      {/*  */}
      <div className="absolute -top-10 left-10">
        <SignUpOrSignIn to="/" action="Home" />
      </div>
    </div>
  );
}

export default AdminRegistration;
