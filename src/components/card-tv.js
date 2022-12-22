import React from "react";
import style from "../styles/cardtv.module.css";
import Tv from "../images/tv1.webp";
const CardTv = (props) => {
  return (
    <div>
      <div className={style.cardBox}>
        <div>
          <img className={style.imgElement} src={props.img} />
        </div>
        <div>
            <h6>{props.h6}</h6>
            <p>{props.content}</p>
        </div>
        <div className={style.logBox}>
            <a href="#">Login to Join</a>
        </div>
      </div>
    </div>
  );
};

export default CardTv;
