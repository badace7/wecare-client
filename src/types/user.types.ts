export type user = {
  id: string;
  email: string;
  password: string;
  access_token: string;
  first_name: string;
  last_name: string;
  city: string;
  address: string;
  social_security_number: string;
  phone_number: string;
  refresh_token: string;
};

export type userStore = {
  user: user | null;
  isLogged: boolean;
};

export type action = { 
    type: string; 
    payload: object | string | boolean;
 };
