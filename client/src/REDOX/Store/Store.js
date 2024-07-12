import { combineReducers, configureStore } from "@reduxjs/toolkit";
import QuestionSlice from "../Features/QuestionSlice/QuestionSlice";
import ResultSlice from "../Features/ResultSlice/ResultSlice";
import UserSlice from "../Features/UserSlice/UserSlice";
import AdminQuestionSlice from "../Features/AdminQuestionSlice/AdminQuestionSlice";

const rootReducer = combineReducers({
  questions: QuestionSlice,
  results: ResultSlice,
  user: UserSlice,
  adminQuestions: AdminQuestionSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
