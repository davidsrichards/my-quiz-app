import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  AttemptedQuestions,
  publishResult,
} from "./ResultHelperFunction/ResultHelperFunction";
import { resetResultAction } from "./ResultHelperFunction/ResultHelperFunction";
import { resultOnpoint } from "./ResultHelperFunction/ResultHelperFunction";
import { resetAllAction } from "../Hooks/FetchQuestions/FetchQuestions";
import { useEffect } from "react";

function Result() {
  // getting the dispatch
  const dispatch = useDispatch();

  // getting the total number of attempted questions
  const { results } = useSelector((state) => state.results);
  const { answers } = useSelector((state) => state.questions);
  const { username } = useSelector((state) => state.user);
  const state = useSelector((state) => state);

  /// using the result helper function

  const totalAttempt = AttemptedQuestions(results);
  const onpoint = resultOnpoint(results, answers, 10);
  useEffect(() => {
    console.log(username);
    console.log(state);
  });

  //// using the result api

  useEffect(() => {
    console.log(username);
  });

  publishResult({
    results: results,
    attempt: totalAttempt,
    point: onpoint,
    achieved: onpoint <= 40 ? "Failed" : "Passed",
  });

  const resetResult = () => {
    dispatch(resetResultAction());
    dispatch(resetAllAction());
  };

  return (
    <>
      <div className="text-white flex flex-col items-center justify-center h-screen gap-10 contain-content">
        <h1 className="text-[1.3rem] font-bold">Quiz Results</h1>
        <table className="w-[100%] border-collapse">
          <thead>
            <tr>
              <th className="border-1 text-left border-2 p-6 border-[#ddd]bg-[#f2f2f2]">
                Name
              </th>
              <th className="border-1 text-left border-2 p-6 border-[#ddd]bg-[#f2f2f2]">
                Result
              </th>
              <th className="border-1 text-left border-2 p-6 border-[#ddd]bg-[#f2f2f2]">
                Attempts
              </th>
              <th className="border-1 text-left border-2 p-6 border-[#ddd]bg-[#f2f2f2]">
                Points
              </th>
            </tr>
          </thead>
          <tbody>
            {/*  */}
            <tr>
              <td className="border-1 text-left p-6 border-2 border-[#ddd]">
                {username || "Dauda"}
              </td>
              <td
                className={`border-1 text-left p-6 border-2 border-[#ddd] text-${
                  onpoint <= 20 ? "red-500" : "green-500"
                }`}
              >
                {`${onpoint < 20 ? "Failed" : "Pass"}`}
              </td>
              <td className="border-1 text-left p-6 border-2 border-[#ddd]">
                {totalAttempt}
              </td>
              <td className="border-1 text-left p-6 border-2 border-[#ddd]">
                {onpoint}
              </td>
            </tr>

            {/*  */}
          </tbody>
        </table>

        {/*  */}

        <NavLink
          className="text-white font-bold"
          to={"/quiz"}
          onClick={() => resetResult()}
        >
          <button className="bg-blue-400 w-[10rem] h-[3rem] rounded-lg text-xl">
            {" "}
            Restart Quiz
          </button>
        </NavLink>
      </div>
    </>
  );
}

export default Result;
