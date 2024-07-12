import { NavLink } from "react-router-dom";
import Quiz from "./Question/Question";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function StartQuiz() {
  const { username } = useSelector((state) => state.user);

  return (
    <>
      <div className=" bg-[url(https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] w-full h-screen bg-cover bg-center bg-fixed bg-no-repeat flex items-center justify-center">
        <div className="text-white flex items-center justify-center flex-col gap-12 bg-neutral-400 p-12 rounded-lg">
          <h2>Welcome {username || ""}</h2>
          <ul
            role="list"
            className="gap-4 flex flex-col text-[1.1rem] items-center"
          >
            <li>you will be given 10 questions</li>
            <li>and each question contains 4 options</li>
            <li>you are to click on submit once done with the quiz</li>
          </ul>

          <NavLink to={"/quiz"} className="font-bold">
            <button className="bg-blue-400 w-[7rem] h-[3rem] rounded-lg transition delay-75 duration-150 hover:bg-blue-500">
              Start Quiz
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default StartQuiz;
