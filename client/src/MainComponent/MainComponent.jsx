import Login from "../Login/Login";
import Registration from "../REGISTRATION/Registration/Registration";
import LoginSuccess from "../Login/LoginSuccess/LoginSuccess";
import Loginfailure from "../Login/LoginFailure/LoginFailure";
import { Routes, Route } from "react-router-dom";
import StartQuiz from "../QUIZ/StartQuiz/StartQuiz";
import Quiz from "../QUIZ/StartQuiz/Quiz/Quiz";
import Result from "../QUIZ/Result/Result";
import AdminRegistration from "../QUIZ/ADMIN/POST/Registration/Registration";
import AdminLogin from "../QUIZ/ADMIN/POST/Login/Login";
import AdminMainQuestion from "../QUIZ/ADMIN/POST/PUSH/Main/Main";
import AdminPost from "../QUIZ/ADMIN/POST/PUSH/Main/AdminPost/AdminPost";

function MainComponenet() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/google/login/success" element={<LoginSuccess />} />
        <Route path="/google/login/failure" element={<Loginfailure />} />
        <Route path="/admin-registration" element={<AdminRegistration />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-post" element={<AdminPost />} />
        <Route path="/admin-question" element={<AdminMainQuestion />} />
      </Routes>
    </>
  );
}

export default MainComponenet;
