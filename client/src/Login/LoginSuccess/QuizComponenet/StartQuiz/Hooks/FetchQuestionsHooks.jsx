import { useEffect, useState } from "react";
import { data } from "../../../Database/data";

function FetchQuestionsHooks() {
  //// getting the dispatch

  /// decleration of the variables

  const [userData, setUserData] = useState({
    isLoading: false,
    serverError: null,
    apiData: [],
  });

  /// getting the data

  useEffect(() => {
    setUserData((old) => ({ ...old, isLoading: true }));
    async () => {
      // error handler
      try {
        // getting the api data
        const question = await data;
        setUserData((prev) => ({ ...prev, isLoading: false }));
        setUserData((prev) => ({ ...prev, apiData: question }));
      } catch (error) {
        console.log(error);
        setUserData((prev) => ({ ...prev, serverError: error }));
        setUserData((prev) => ({ ...prev, isLoading: false }));
      }
    };
  });

  return [userData, setUserData];
}

export default FetchQuestionsHooks;
