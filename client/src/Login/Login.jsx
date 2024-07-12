import { useContext, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";

import { FaDiscord } from "react-icons/fa";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import SignUpOrSignIn from "../SignUp/SignUpOrSignIn";
import { useDispatch } from "react-redux";
import { addUserName } from "../REDOX/Features/UserSlice/UserSlice";
import LoadingQuestion from "../QUIZ/Hooks/ApiData/LoadingQuestion/LoadingQuestion";

function Login() {
  // getting the dispatch

  const dispatch = useDispatch();

  ///////////////// base url

  const BASE_URL = "/api/user";

  ///// NAVIGATION
  const navigate = useNavigate();

  const [user, setUser] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState({ isLoading: false });

  //
  if (isLoading.isLoading) {
    return <LoadingQuestion />;
  }
  ///////// making a post request

  const postUser = async (e) => {
    e.preventDefault();
    // whent the component render
    setIsLoading((prev) => ({ ...prev, isLoading: true }));
    ///
    try {
      const response = await axios.post(
        `${BASE_URL}/login`,
        { firstname: firstname, password: password },
        { withCredentials: true }
      );

      if (response.data) {
        setIsLoading((prev) => ({ ...prev, isLoading: false }));
        dispatch(addUserName(firstname));
        setErrorMessage("");
        setFirstname("");
        setPassword("");
        navigate("/google/login/success");
      }
    } catch (error) {
      setIsLoading((prev) => ({ ...prev, isLoading: false }));
      console.log(error.response.data);
      setErrorMessage(error.response.data);
    }
  };

  /// handle google login

  const handleGoogleLogin = () => {
    window.open(`${BASE_URL}/google/login`);
  };

  return (
    <>
      <div className="bg-[url(https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-center bg-cover bg-fixed rounded-lg p-12 relative">
        <form
          action=""
          method="POST"
          onSubmit={postUser}
          className="w-full bg-transparent"
        >
          <div className="grid grid-cols-1 transition justify-items-center container mx-auto  lg:w-1/2 lg:p-0 p-4 m-4 ">
            <h1 className=" text-white text-[2rem] pb-6">
              Sign In to Your Account
            </h1>
            <p className="text-red-500 text-[1.2rem]">{errorMessage}</p>
            <div className="w-full space-y-3">
              <label htmlFor="" className="text-white  text-[1.2rem]">
                User Name
              </label>
              <input
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className="p-4 text-slate-500 bg-neutral-200 font-serif rounded-sm ring-2 ring-white w-full transition delay-100 hover:transition hover:ring-blue-500 outline-none"
              />
            </div>

            {/*  */}
            <div className="w-full space-y-3">
              <label htmlFor="" className="text-white  text-[1.2rem]">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-4 text-slate-500 bg-slate-200 font-serif rounded-sm ring-2 ring-white w-full transition  delay-100  hover:ring-blue-400 outline-none"
              />
            </div>
            {/*  */}
            <button
              type="submit"
              className="mt-6 w-full p-3 bg-four-colors transition delay-1000 rounded-sm text-[1.2rem] font-bold hover:bg-four-colors-hover text-pink-400 "
            >
              Submit
            </button>
            {/*  */}

            {/*  */}
            <div className="flex items-center justify-center text-white w-full mt-6">
              <hr className="w-full border-slate-600" />
              <span className=" text-nowrap px-2">Or continue with</span>
              <hr className="w-full border-slate-600" />
            </div>
            {/*  */}
            <div className="flex items-center justify-between w-full mt-8 text-[1.1rem] font-normal text-slate-200">
              <div className="flex items-center">
                <input
                  type="checkBox"
                  className="w-[3rem] h-[18px] accent-blue-400"
                />
                <span>Remember me</span>
              </div>
              <a className="text-blue-400 cursor-pointer">Forget password?</a>
            </div>
          </div>
        </form>
        {/*  */}

        {/*  */}
        <div className="text-white gap-4 mt-6 grid sm:grid-cols-2 transition justify-items-center container mx-auto  lg:w-1/2 lg:p-0 p-4 m-4 ">
          <button
            className="group/item flex items-center ring-1 ring-slate-200 w-full h-[2.5rem] justify-center rounded-sm shadow-sm gap-3 text-[1.2rem] transition hover:ring-blue-400"
            onClick={() => handleGoogleLogin()}
          >
            <FcGoogle className="group/item transition text-[1.5rem] group-hover/item:scale-125" />

            <p>Google</p>
          </button>
          {/*  */}
          <button
            className="group/item flex items-center ring-1 ring-slate-200 w-full h-[2.5rem] justify-center rounded-sm shadow-sm gap-3 text-[1.2rem] transition hover:ring-blue-400"
            onClick={() => {
              window.open(`${BASE_URL}/discord/login`);
            }}
          >
            <FaDiscord className="text-[1.5rem] transition group-hover/item:scale-125" />
            <p>Discord</p>
          </button>
          <div className="absolute -top-10 right-10">
            <SignUpOrSignIn to="/registration" action="Sign Up" />
          </div>
          {/*  */}
          <div className="absolute -top-10 left-10">
            <SignUpOrSignIn to="/admin-login" action="Admin" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
