import { user, userToken } from "../../types/user.types";

import jwt_decode from "jwt-decode";

/**
 * @func login Is the login action triggered by the user
 * @param user Is the user datas
 * @returns the type of the action and the user datas
 */
export const login = (user: user) => {
  //                    ^ token containing user data

  localStorage.setItem("access-token", user.access_token);
  // decode token.role

  // const decodedToken: userToken = jwt_decode(user.access_token);
  // console.log(`decodedToken:`, decodedToken.id);
  // console.log(`decodedToken:`, decodedToken.role);

  // user.id = decodedToken.id;
  // console.log(`USER`, user);

  // const userStore = useSelector((state: { user: userStore }) => state.user);
  const decodedToken: userToken = jwt_decode(user.access_token);
  // console.log(`decodedToken ROLE >>>>>>> :`, decodedToken.role);
  // user.role = decodedToken.role;

  // console.log(`user store > role :`,
  // userStore.role
  // );
  console.log(`user POP>>>`, user);

  return {
    type: "LOGIN",
    payload: {
      user: user,
      role: decodedToken.role,
    },
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

export const register = (user: user) => {
  return {
    type: "REGISTER",
    payload: user,
  };
};
