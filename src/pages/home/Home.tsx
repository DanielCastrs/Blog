import React from "react";
import "./Home.css";
import homeLogo from "../../assets/elevada-portatil.jpg";

const home = () => {
  return (
    <>
      <h1 className="titulo">home</h1>
      <img src={homeLogo} className="img" alt="Imagem tela inicial" />
    </>
  );
};

export default home;
