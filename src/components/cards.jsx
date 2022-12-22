import React from "react";
import style from "../styles/cards.module.css";
import Supersale from '../images/supersale.webp'

const Cards = (props) => {
  return (
    <>
      <div className={style.parentDiv}>
        <div className={style.imgDiv}>
        <img
        className={style.imgElem}
            src={props.img} 
            alt="First slide"
          />
        </div>
        <div className={style.cardsTit}>
            <p>{props.title}</p>
        </div>
        <div className={style.cardscont}>
            <p>We manufacture, supply and install in</p>
        </div>
        <div className={style.cardsrate}>
            {/* <p>rate</p> */}
        </div>
        <div className={style.cardVisit}>
            <a href="">Visit Shop</a>
        </div>
      </div>
    </>
  );
};

export default Cards;
