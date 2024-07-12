import axios from "axios";
import { useState } from "react";
import LoadingQuestion from "../../../Hooks/ApiData/LoadingQuestion/LoadingQuestion";
import SignUpOrSignIn from "../../../../SignUp/SignUpOrSignIn";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  /// base url
  const BASE_URL = "/api/user/admin/login";
  const navigate = useNavigate();

  /// decleration of states
  const [admin, setAdmin] = useState({
    username: "",
    password: "",
  });
  /// error states
  const [erros, setErros] = useState("");

  const [apiData, setApiData] = useState({ isLoading: false });

  // function to handle error

  const handleErrors = (error) => {
    setErros(error);
  };

  // clear errors

  const clearErrors = () => {
    setErros("");
  };

  // resetAll

  const resetAll = () => {
    setAdmin({ username: "", password: "" });
  };

  // post admin

  const postAdmin = async (e) => {
    e.preventDefault();
    setApiData((prev) => ({ ...prev, isLoading: true }));
    const response = await axios
      .post(BASE_URL, { username: admin.username, password: admin.password })
      .catch((err) => {
        setApiData((prev) => ({ ...prev, isLoading: false }));
        handleErrors(err.response.data);
      });
    if (response) {
      setApiData((prev) => ({ ...prev, isLoading: false }));
      clearErrors();
      resetAll();
      navigate("/admin-question");
    }
  };

  // if loading...

  if (apiData.isLoading) {
    return <LoadingQuestion />;
  }

  return (
    <>
      <div className="bg-[url(https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-center bg-cover bg-fixed rounded-lg p-12  h-screen w-auto flex items-center justify-center">
        <form
          action=""
          method="POST"
          className="w-full bg-transparent"
          onSubmit={postAdmin}
        >
          <div className="grid grid-cols-1 transition justify-items-center container mx-auto  lg:w-1/2 lg:p-0 p-4 m-4 ">
            <h1 className="text-[2rem] pb-6 text-pink-400 font-bold">
              Admin Sign In
            </h1>
            <p className="text-red-500 text-[1.2rem]">{erros}</p>
            <div className="w-full space-y-3">
              <label htmlFor="" className="text-white  text-[1.2rem]">
                User Name
              </label>
              <input
                value={admin.username}
                onChange={(e) =>
                  setAdmin((prev) => ({ ...prev, username: e.target.value }))
                }
                type="text"
                className="p-4 text-slate-500 bg-neutral-200 font-serif rounded-sm ring-2 ring-white w-full transition delay-100 hover:transition hover:ring-blue-500 outline-none"
              />
            </div>

            {/*  */}
            <div className="w-full space-y-3">
              <label htmlFor="" className="text-white  text-[1.2rem]">
                Password
              </label>
              <input
                value={admin.password}
                onChange={(e) =>
                  setAdmin((prev) => ({ ...prev, password: e.target.value }))
                }
                type="password"
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
          </div>
        </form>
        {/*  */}
        <div className="absolute -top-10 right-10">
          <SignUpOrSignIn to="/admin-registration" action="Sign Up" />
        </div>
        {/*  */}
        <div className="absolute -top-10 left-10">
          <SignUpOrSignIn to="/" action="Home" />
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
