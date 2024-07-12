// importing modules

import { useEffect, useState } from "react";
import FetchQuestins from "../../Hooks/FetchQuestions/FetchQuestions";
import { useDispatch, useSelector } from "react-redux";
import { updateResultAction } from "../../../REDOX/Features/ResultSlice/ResultSlice";
import "./Quetion.css";
import LoadingQuestion from "../../Hooks/ApiData/LoadingQuestion/LoadingQuestion";
import ServerError from "../../Hooks/ApiData/ServerError/ServerError";

function Question({ onCheck }) {
  /// variables
  const [check, setCheck] = useState(undefined);
  const dispatch = useDispatch();

  // using the queston slice

  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );

  // getting the trace

  const { trace } = useSelector((state) => state.questions);

  const { results } = useSelector((state) => state.results);

  const [{ userApi, serverError, isLoading }] = FetchQuestins();

  useEffect(() => {
    dispatch(updateResultAction({ trace, check }));
  }, [check, results, trace]);
  /// handleInputCheck
  const handleInputCheck = (i) => {
    setCheck(i);
    onCheck(i);
    console.log(check);
    dispatch(updateResultAction({ trace, check }));
  };

  if (isLoading) {
    return <LoadingQuestion />;
  } else {
    console.log("result", results);
    console.log("trace", trace);
    console.log("check", check);
  }

  if (serverError) {
    return <ServerError />;
  }

  return (
    <>
      {/*  */}
      <div className="questions">
        <h2 className="text-light">{questions?.question}</h2>

        <ul key={trace}>
          {questions?.options.map((q, i) => (
            <li key={i}>
              <input
                type="radio"
                value={false}
                name="options"
                id={`q${i}-option`}
                onChange={() => handleInputCheck(i)}
              />

              <label className="text-primary" htmlFor={`q${i}-option`}>
                {q}
              </label>
              <div
                className={`check ${results[trace] == i ? "checked" : ""}`}
              ></div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Question;
