import {user} from "../../types/user.types";

/**
 * @func login Is the login action triggered by the user
 * @param user Is the user datas
 * @returns the type of the action and the user datas
 */
export const login = (user: user) => {
  localStorage.setItem("access-token", user.access_token);
  console.log(`/user.actions.ts > login > user data:`, user);
  
  return {
    type: "LOGIN",
    payload: user,
  };
};

// removes the access token from the localStorage, this will logout the user 
/**
 * @func logout Is the logout action triggerd by the user.
 * @returns The type if the action and remove the user datas in the payload property.
 */
export const logout = () => {
  localStorage.removeItem("access-token");
  return {
    type: "LOGOUT",
    payload: false,
  };
};

export const register = (user:user) => {
  return {
    type: "REGISTER",
    payload: user,
  };
};
