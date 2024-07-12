import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import * as Action from "../../../REDOX/Features/QuestionSlice/QuestionSlice";

import { getApiData } from "../ApiData/ApiData";
function FetchQuestins() {
  // base url
  const BASE_URL = "/api/user";
  /// decleration of variables

  const [userData, setUserData] = useState({
    userApi: [],
    serverError: null,
    isLoading: false,
  });

  // importing the usDispatch hooks

  const dispatch = useDispatch();

  useEffect(() => {
    setUserData((old) => ({ ...old, isLoading: true }));
    (async () => {
      try {
        const [{ questions, answers }] = await getApiData(
          `${BASE_URL}/quiz/question`,
          (data) => data
        );

        setUserData((prev) => ({ ...prev, userApi: { questions, answers } }));
        setUserData((prev) => ({ ...prev, isLoading: false }));
        dispatch(Action.startQuizAction({ questions, answers }));
      } catch (error) {
        console.log(error);
        setUserData((prev) => ({ ...prev, isLoading: false }));
        setUserData((prev) => ({ ...prev, serverError: error }));
      }
    })();
  }, [dispatch]);
  return [userData, setUserData];
}

//// function to hadle the next question

export const moveNextAction = () => async (dispatch) => {
  try {
    await dispatch(Action.nextMoveAction());
  } catch (error) {}
};

//// function to handle the previous question

export const movePreviousAcion = () => async (dispatch) => {
  try {
    await dispatch(Action.movePreviousAction());
  } catch (error) {}
};

export const resetAllAction = () => async (dispatch) => {
  try {
    await dispatch(Action.resetAllAction());
  } catch (error) {
    console.log(error);
  }
};

export default FetchQuestins;
