import React from "react";
import Card from "./Card";
import { data } from "../data";

function CardList() {
  return (
    <div className="wrapper">
      <h1>Страница супергероев</h1>
      <div className="container">
        {data.map((hero) => (
          <Card {...hero} />
        ))}
      </div>
    </div>
  );
}
export default CardList;
