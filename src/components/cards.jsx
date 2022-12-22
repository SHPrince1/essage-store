import React from "react";
import style from "../styles/cards.module.css";


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
            <a href="href=https://essage.com">Visit Shop</a>
        </div>
      </div>
    </>
  );
};

export default Cards;
