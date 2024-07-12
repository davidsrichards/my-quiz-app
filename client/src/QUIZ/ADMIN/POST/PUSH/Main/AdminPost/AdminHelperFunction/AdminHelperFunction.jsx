import axios from "axios";
import { NavLink } from "react-router-dom";

export const AdminHelperFunction = async (url, result) => {
  const data = await axios.post(url, result).catch((err) => console.log(err));
  if (data) console.log(data);
};

// empty admin post
export const Emptypost = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[1.3rem]">Looks like you have nothing here</h1>
      <NavLink to={"/"} className={"text-blue-400"}>
        Add Questions
      </NavLink>
    </div>
  );
};
