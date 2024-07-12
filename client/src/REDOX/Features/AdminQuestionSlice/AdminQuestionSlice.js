import { createSlice } from "@reduxjs/toolkit";

const AdminQuestionSlice = createSlice({
  name: "Add",
  initialState: {
    questions: [],
    answers: [],
  },
  reducers: {
    addQuestionAction: (state, action) => {
      let { question, answers } = action.payload;
      state.questions.push(question);
      state.answers.push(answers);
    },
  },
});

export const { addQuestionAction } = AdminQuestionSlice.actions;
export default AdminQuestionSlice.reducer;
