import React from "react";
import style from "../styles/cardtv.module.css";

const CardTv = (props) => {
  return (
    <div>
      <div className={style.cardBox}>
        <div>
          <img className={style.imgElement} src={props.img}alt="" />
        </div>
        <div>
            <h6>{props.h6}</h6>
            <p>{props.content}</p>
        </div>
        <div className={style.logBox}>
            <a href="href=https://essage.com">Login to Join</a>
        </div>
      </div>
    </div>
  );
};

export default CardTv;
