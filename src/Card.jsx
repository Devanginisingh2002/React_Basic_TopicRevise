import React from 'react';
import "./Card.css";
import Price from './Price';

const Card = ({title, idx}) => {
  let OldPrice = ["60,000", "12,000", "1234", "20,452"];
  let NewPrice = ["25,000", "8,000", "1000", '15,000'];
  let description = [
    ["8,000 DPI", "Programmable Buttons"], 
    ["Intuitive surface", "Reliable"],
    ["designed for iPad Pro", "intuitive surface"],
    ["wireless", "optical orientation"]
  ]
  return (
    <div className="cardContainer">
      <h3>{title}</h3>
      <p>{description[idx]}</p>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price OldPrice={OldPrice[idx]} NewPrice={NewPrice[idx]}/>
    </div>
  );
};

export default Card;
