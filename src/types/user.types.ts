

export type user = {
  id: string;
  email?: string;
  password?: string;
  access_token: string;
  first_name?: string;
  last_name?: string;
  gender?: string;
  postal_code?: string;
  city?: string;
  address?: string;
  social_security_number?: string;
  phone_number?: string;
  refresh_token?: string;
  role: string;
};

export type userStore = {
  user: user | null;
  isLogged: boolean;
  role: string;
};

export type action = { 
    type: string; 
    payload: object | string | boolean;
 };

 export type userToken = {
   id: string,
   role: string,
   iat: number,
   exp: number
 }


 /**
  * @REVOIR TYPE POUR ACCESS TOKEN
  */
 export type jwtToken = {
    access_token: string;
 }