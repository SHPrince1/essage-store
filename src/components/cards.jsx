// import React, { useState } from "react";
import React from "react";
import style from "../styles/cards.module.css";
// import Truncate from "react-truncate";

const Cards = (props) => {
  // const [showFullDescription, setFullDescription] = useState(false);

  // const showFullDescriptionHandler = () => {
  //   setFullDescription(!showFullDescription);
  // };

  // const description = showFullDescription
  //   ? props.description
  //   : props.description;

  // const [readMore, setReadMore] = useState(false);
  // const linkName = readMore ? "Read Less << " : "Read More >> ";
  // const extraContent = (
  //   <div>
  //     <p className="extra-content">{props.descriptions}</p>
      
  //   </div>
  // );

 
  return (
    <>
      <div className={style.parentDiv}>
        <div className={style.imgDiv}>
          <img className={style.imgElem} src={props.img} alt="new" />
        </div>
        <div className={style.cardsTit}>
          <p>{props.title}</p>
        </div>
        <div className={style.cardscont}>
       
               {props.category}
     

          {props.description}
        </div>
        <div className={style.cardPrice}>
          {/* <p>rate</p> */}
          <p>${props.price}</p>
        </div>
        <div className={style.cardRate}>
          <p>{props.rate}</p>
        </div>
        <div className={style.cardVisit}>
          <a href="href=https://essage.com">Add to Cart</a>
        </div>
      </div>
    </>
  );
};

export default Cards;
