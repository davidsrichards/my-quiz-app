import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addQuestionAction } from "../../../../../../REDOX/Features/AdminQuestionSlice/AdminQuestionSlice";
import { useNavigate } from "react-router-dom";

function Questions() {
  // dispatch
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // declaring states
  const [question, setQuestion] = useState({
    question: "",
    options: ["", "", "", ""],
  });
  const [error, setError] = useState("");

  const [optionStore, setOptionStore] = useState([1, 2, 3, 4]);

  const [answers, setAnswers] = useState(0);

  // handle error

  //// handleNextQuestion

  const validate = () => {
    if (
      question.question.length < 1 ||
      question.options[0].length < 1 ||
      question.options[1].length < 1 ||
      question.options[2].length < 1 ||
      question.options[3].length < 1
    ) {
      setError("please provide info");
      return;
    } else {
      setError("");
    }
    dispatch(addQuestionAction({ question, answers }));
    setQuestion({ question: "", options: ["", "", "", ""] });
    setAnswers(0);
  };

  const handleNextQuestion = () => {
    validate();
  };

  // finish

  const handleFinish = (e) => {
    e.preventDefault();
    validate();
    navigate("/admin-post");
  };

  return (
    <div className="w-full bg-white h-screen flex flex-col items-center justify-center gap-4 relative">
      <h1 className="text-[1.2rem] font-bold border-b-4 border-dashed ">
        Add Questions
      </h1>
      <p className="text-red-500">{error}</p>
      <div className="w-full flex items-center justify-center flex-col gap-4 container mx-auto p-4 text-slate-500 ">
        <textarea
          value={question.question}
          onChange={(e) =>
            setQuestion((prev) => ({ ...prev, question: e.target.value }))
          }
          name=""
          id=""
          placeholder="type question"
          className="outline-none w-full container mx-auto p-2 transition-all delay-100 border-b-2 hover:border-blue-400 focus:border-blue-400 "
        ></textarea>
        <div className="grid grid-cols-2 justify-items-center gap-2">
          <input
            value={question.options[0]}
            onChange={(e) =>
              setQuestion((prev) => ({
                ...prev,
                options: [e.target.value, ...prev.options.slice(1)],
              }))
            }
            type="text"
            placeholder="option 1"
            className=" outline-none op border-b-2  focus:border-blue-400"
          />
          <input
            value={question.options[1]}
            onChange={(e) =>
              setQuestion((prev) => ({
                ...prev,
                options: [
                  prev.options[0],
                  e.target.value,
                  ...prev.options.slice(2),
                ],
              }))
            }
            type="text"
            placeholder="option 2"
            className="outline-none op border-b-2  focus:border-blue-400"
          />
          <input
            value={question.options[2]}
            onChange={(e) =>
              setQuestion((prev) => ({
                ...prev,
                options: [
                  prev.options[0],
                  prev.options[1],
                  e.target.value,
                  prev.options[3],
                ],
              }))
            }
            type="text"
            placeholder="option 3"
            className=" outline-none op border-b-2  focus:border-blue-400"
          />
          <input
            value={question.options[3]}
            onChange={(e) =>
              setQuestion((prev) => ({
                ...prev,
                options: [
                  prev.options[0],
                  prev.options[1],
                  prev.options[2],
                  e.target.value,
                ],
              }))
            }
            type="text"
            placeholder="option 4"
            className="outline-none op border-b-2  focus:border-blue-400"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 mt-4">
          <p>Select the correct answer</p>
          <select
            name=""
            id=""
            value={answers}
            onChange={(e) => setAnswers(Number(e.target.value))}
            className="border w-[6rem] outline-none hover:ring-1 p-2 "
          >
            {optionStore.map((a, i) => (
              <option value={a - 1} key={i}>
                {a}
              </option>
            ))}
          </select>
        </div>
        <button
          className="bg-blue-400 w-[6rem] h-[2.2rem] text-white mt-4 rounded-sm hover:font-bold"
          onClick={handleNextQuestion}
        >
          Next
        </button>
        <button
          className="text-white w-[6rem] h-[2rem] absolute top-10 right-10 bg-gray-400 rounded-sm transition hover:scale-105 hover:font-bold"
          onClick={handleFinish}
        >
          Finish
        </button>
      </div>
    </div>
  );
}

export default Questions;
