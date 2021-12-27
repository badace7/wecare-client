import { userStore, action, jwtToken } from "../../types/user.types";
import jwt_decode from "jwt-decode";

// User initial state define the user as null
// He is inexistant by default
const initialState = {
  user: null,
  isLogged: false,
  role: "visitor"

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

// const decodedToken = jwt_decode(payload);
// let payload = {
//   access_token: dzaihnazidnazid;
// }
// payload.access_token;

/**
 * @REVOIR ACCESS TOKEN
 */



console.log(payload);

  switch (type) {
    case "LOGIN":
      console.log(`PAYLOAD`,payload);
      return { // update states of redux store
        ...state,
        user: payload,
        isLogged: true,
        // role: decodedToken.role
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
