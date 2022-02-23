import React from "react";

import IconDel from '../images/Trash-element.svg';

const Card = ({ card, onCardClick }) => {
  const handleClick = () => {
    onCardClick(card);
  };

  return (
    <div className="element">
      <button className="element__button-delete" type="button" src={IconDel}></button>
      <img className="element__image" src={card.link} alt={card.name} onClick={handleClick}/>
      <div className="element__info">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__likes">
          <button className="element__like-button" type="button"></button>
          <span className="element__likes-number">{card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
