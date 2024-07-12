import { useContext } from "react";
import GoogleContext from "../../GoogleContext/GoogleContext";

function Sta() {
  const { contextUser } = useContext(GoogleContext);
  return (
    <>
      <div className="text-white text-[3rem] flex items-center justify-center">
        WELCOME {contextUser.context}
      </div>
    </>
  );
}

export default Sta;
