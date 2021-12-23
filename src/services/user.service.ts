import { user } from '../types/user.types';
import http from "./config";


export const signIn = async (
  user: Omit<user, "access_token" | "refresh_token" | "first_name" | "last_name" | "city" | "address" | "phone_number" |
  "social_security_number" | "id">
): Promise<any> => { // <- what should be returned
  return await http.post("/users/login", user);
};


export const register = async (
    user: Omit<user, "access_token" | "refresh_token" | "id">
  ): Promise<any> => { 
    return await http.post("/users/register", user);
  };
  
//   export const deleteUser = async (
//     user: Omit<user, "access_token">
//   ): Promise<any> => { 
//     return await http.delete("/users/delete", user);
//   };
  
//   export const updateUser = async (
//     user: Omit<user, "access_token">
//   ): Promise<any> => { 
//     return await http.patch("/users/update", user);
//   };
  

export const getAll = async (): Promise<any> => {
  return await http.get("/users");
};
