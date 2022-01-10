import * as React from "react";

import { useSelector } from "react-redux";
import { userStore } from "../../../types/user.types";
import { styled } from "@mui/material/styles";




const FooterContainer = styled("footer")(({ theme }) => ({
  marginTop: "5%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  height: "20%",
  // backgroundColor: "black"
}));

export default function Footer() {
  const userState = useSelector((state: { user: userStore }) => state.user);

  return (
    <FooterContainer>
      <div>
        <p>
          Rôle : {userState.role} isLogged :{" "}
          {userState.isLogged ? "true" : "false"} First name :{" "}
          {userState.user?.first_name ? userState.user?.first_name : "null"}
        </p>
      </div>
    </FooterContainer>
  );
}
