import React from "react";
import "./assets/styles/PokeList.scss";
import PokeCell from "./PokeCell";

const PokeList = () => {
  return (
    <section className="poke-list">
      <PokeCell />
      <PokeCell />
      <PokeCell />
    </section>
  );
};

export default PokeList;
