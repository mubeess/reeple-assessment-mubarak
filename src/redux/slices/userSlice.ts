import {createSlice} from '@reduxjs/toolkit';
import {UserType} from '../type';
import {RootState} from '..';

const initialState: UserType = {
  onboarded: false,
};
const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    onboardUser: state => {
      state.onboarded = true;
    },
  },
});

export const {onboardUser} = userSlice.actions;
export const userSelector = (state: RootState) => state.user;
export default userSlice.reducer;
