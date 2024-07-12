import { createSlice } from "@reduxjs/toolkit";

const ResultSlice = createSlice({
  name: "results",
  initialState: {
    userId: null,
    results: [],
  },
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    pushAnswerAction: (state, action) => {
      state.results.push(action.payload);
    },

    resetResultAction: (state, action) => {
      return {
        userId: null,
        results: [],
      };
    },
    updateResultAction: (state, action) => {
      const { trace, check } = action.payload;
      state.results.fill(check, trace, trace + 1);
    },
  },
});

export const {
  setUserId,
  pushAnswerAction,
  resetResultAction,
  updateResultAction,
} = ResultSlice.actions;
export default ResultSlice.reducer;
