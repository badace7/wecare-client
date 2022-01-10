import * as React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { styled } from "@mui/material/styles";

const Homepage = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
  height: "100%"
}));

const Title = styled("h1")(({ theme }) => ({
  marginTop: "5%"

}));
const SubTitle = styled("h2")(({ theme }) => ({
  marginTop: "1%",
  alignContent: "left",
}));

let color1 = "#005AA1";
let color2 = "white";

export default function HomePage() {
  return (
    <Homepage  style={{background: `linear-gradient(to bottom,  ${color1} 0%,${color2} 100%)`}}>
      <Title>Bienvenue sur WeCare,<br/>La plateforme de prise de rendez-vous avec les professionnels de santé.</Title>
      <SubTitle>Rechercher</SubTitle>
      <SearchBar />
    </Homepage>
  )
}
