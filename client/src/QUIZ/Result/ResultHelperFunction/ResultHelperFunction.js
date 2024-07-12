import { Navigate, useNavigate } from "react-router-dom";
import * as Action from "../../../REDOX/Features/ResultSlice/ResultSlice";
import { postApiData } from "../../Hooks/ApiData/ApiData";
import { useSelector } from "react-redux";
const BASE_URL = "/api/user";

export const AttemptedQuestions = (result) => {
  return result.filter((r) => r !== undefined).length;
};

//// reseting the result

export const resetResultAction = () => async (dispatch) => {
  try {
    dispatch(Action.resetResultAction());
  } catch (error) {
    console.log(error);
  }
};

//// total point

export const resultOnpoint = (result, answer, point) => {
  const totalScore = result
    .map((element, i) => answer[i] === element)
    .filter((i) => i === true)
    .reduce((prev, curr) => prev + curr, 0);
  return totalScore * point;
};

export const publishResult = (resultData) => {
  (async () => {
    try {
      await postApiData(
        `${BASE_URL}/quiz/result/new`,
        resultData,
        (data) => data
      );
    } catch (error) {
      console.log(error);
    }
  })();
};

export const CheckExistingUser = ({ children }) => {
  const navigate = useNavigate();
  const username = useSelector((state) => state.user.user);
  return username ? children : navigate("/");
};
