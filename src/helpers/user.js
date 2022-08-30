import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: {
      username: 'utilisateur',
      profileImage: 'https://boatrentalowner.com/wp-content/uploads/2022/04/unnamed.jpg',
      currentQuestion: 1,
      score: 0,
    },
  },
  reducers: {
    answer: (state, action) => {
      state.value.currentQuestion = action.payload.currentQuestion;
    },
    startover: state => {
      state.value.score = 0;
      state.value.currentQuestion = 1;
    },
  },
});

export const {answer, startover} = userSlice.actions;

export default userSlice.reducer;
