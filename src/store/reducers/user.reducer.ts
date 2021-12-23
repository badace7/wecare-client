import { userStore, action } from "../../types/user.types";

// User initial state define the user as null
// He is inexistant by default
const initialState = {
  user: null,
  isLogged: false,
};
// init state of type "userStore" with clean state


/**
 * @func userReducers It manage the users datas in the state
 * @param state Is the initial state
 * @param action Is the action triggered by the user
 * @returns updated state, user data and if the user is logged
 */
const userReducers = (state: userStore = initialState, action: action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      return { // update states of redux store
        ...state,
        user: payload,
        isLogged: true,
      };

    //   case "REGISTER":
    //     return { 
    //       ...state,
    //       user: payload,
    //       isLogged: false,
    //     };

    case "LOGOUT":
      return { 
        ...state,
        user: null,
        isLogged: false,
      };
    default:
      return state;
  }
};

export default userReducers;
