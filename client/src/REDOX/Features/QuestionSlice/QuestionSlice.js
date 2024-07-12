import { createSlice } from "@reduxjs/toolkit";

const QuestionSlice = createSlice({
  name: "questions",
  initialState: {
    queue: [],
    answers: [],
    trace: 0,
  },
  reducers: {
    startQuizAction: (state, action) => {
      let { questions, answers } = action.payload;
      return {
        ...state,
        queue: questions,
        answers,
      };
    },
    nextMoveAction: (state, action) => {
      return {
        ...state,
        trace: state.trace + 1,
      };
    },
    movePreviousAction: (state, action) => {
      return {
        ...state,
        trace: state.trace - 1,
      };
    },
    resetAllAction: (state, action) => {
      return {
        queue: [],
        answer: [],
        trace: 0,
      };
    },
  },
});

export const {
  startQuizAction,
  nextMoveAction,
  movePreviousAction,
  resetAllAction,
} = QuestionSlice.actions;
export default QuestionSlice.reducer;
