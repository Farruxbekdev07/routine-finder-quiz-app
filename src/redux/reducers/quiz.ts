import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { ANSWER_PROPS } from "../../types/answer";

interface QuizState {
  answers: ANSWER_PROPS[];
}

const initialState: QuizState = {
  answers: [],
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAnswer: (state, action: PayloadAction<ANSWER_PROPS>) => {
      const index = state.answers.findIndex(
        (a) => a.questionId === action.payload.questionId
      );
      if (index !== -1) {
        state.answers[index] = action.payload;
      } else {
        state.answers.push(action.payload);
      }
    },
    resetAnswers: (state) => {
      state.answers = [];
    },
  },
});

export const { setAnswer, resetAnswers } = quizSlice.actions;
export default quizSlice.reducer;
