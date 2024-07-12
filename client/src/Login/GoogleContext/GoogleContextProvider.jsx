import { useState } from "react";
import GoogleContext from "./GoogleContext";

const GoogleContextProvider = ({ children }) => {
  const [contextUser, setContextUser] = useState("");
  return (
    <>
      <GoogleContext.Provider value={{ contextUser, setContextUser }}>
        {children}
      </GoogleContext.Provider>
    </>
  );
};

export default GoogleContextProvider;
