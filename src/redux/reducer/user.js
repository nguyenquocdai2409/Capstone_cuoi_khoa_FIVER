import { USER_INFO, USER_LOGIN } from "../constant/user";

const initialState = {
  user: JSON.parse(localStorage.getItem(USER_INFO)),
};

export let userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      state.user = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};
