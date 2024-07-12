import { NavLink } from "react-router-dom";

function QuizHome() {
  return (
    <>
      <div>
        <p>You will be give 5 question</p>
        <p>and you are to pick one option from the four</p>
        <p>click on finis Quiz once you are done</p>

        {/*  */}
        <NavLink to="/start-quiz">Start Quiz</NavLink>
      </div>
    </>
  );
}

export default QuizHome;
