import React from "react";
import style from "../styles/carde.module.css";


const CardE = (props) => {
  return (
    <div>
      <div className={style.cardBox}>
        <div className={style.imgBox}>
           <img className={style.imgElem} alt="" 
           src={props.img} />
        </div>
        <div className={style.cardsTit}>
            <p>{props.title}</p>
        </div>
        <div className={style.price}>
            <p>{props.price}</p>
        </div>
        <div className={style.eye}>
            {/* <p>eye</p> */}
        </div>
      </div>
    </div>
  );
};

export default CardE;
