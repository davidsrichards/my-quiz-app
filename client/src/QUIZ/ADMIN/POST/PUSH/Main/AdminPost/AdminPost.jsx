import { useEffect } from "react";
import { useSelector } from "react-redux";
import { AdminHelperFunction } from "./AdminHelperFunction/AdminHelperFunction";
import { Emptypost } from "./AdminHelperFunction/AdminHelperFunction";

function AdminPost() {
  ///

  const BASE_URL = "/api/user/quiz/question/new";

  // getting items from store

  const state = useSelector((state) => state);
  const { questions, answers } = useSelector((state) => state.adminQuestions);

  useEffect(() => {
    console.log(state);
  });

  const handlePost = () => {
    AdminHelperFunction(BASE_URL, { data: questions, answers: answers });
  };

  return (
    <>
      <div className="flex w-full items-center justify-center h-screen bg-neutral-200">
        {questions.length < 1 || answers.length < 1 ? (
          <Emptypost />
        ) : (
          <form action="" onSubmit={handlePost}>
            <button
              type="submit"
              className="bg-blue-400 text-white p-4 rounded-lg font-bold hover:bg-blue-500"
            >
              Publish Questions
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default AdminPost;
