export type user = {
  id?: string;
  email?: string;
  password?: string;
  access_token?: string | undefined;
  refresh_token?: string | undefined;
  first_name?: string;
  last_name?: string;
  gender?: string;
  postal_code?: string;
  city?: string;
  address?: string;
  social_security_number?: string;
  phone_number?: string;
};
export type userToken = {
  id?: string;
  role?: string;
  iat?: number;
  exp?: number;
};
export type userStore = {
  user: user | null;
  isLogged: boolean;
  role: string;
};

export type action = {
  type: string;
  payload: payload;
};

export type payload = { // payload for user
      user: user;
      role: string;
}



/**
 * @REVOIR TYPE POUR ACCESS TOKEN
 */
export type jwtToken = {
  access_token: string;
};
