import * as React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";


export default function HomePage() {
  return (
    <>
      <h1>Bienvenue sur WeCare,<br/>La plateforme de prise de rendez-vous avec les professionnels de santé.</h1>
      <h2>Rechercher</h2>
      <SearchBar />
    </>
  )
}
