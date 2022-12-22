import React from "react";
import style from "../styles/searchbar.module.css";
import SelectBar from "./select";

const Searchbar = () => {
  return (
    <>
      <div className={style.parentBox}>
        <div className={style.fdiv}>
          <div className={style.logoBox}>
            <h4>ESSAGE</h4>
          </div>
          <div className={style.inputBox}>
            <input type="text" placeholder="search for products" />
          </div>
          <div className={style.SelectBar}>
            <SelectBar />
          </div>
        </div>

        
          <div className={style.btn}>
            <p>Sell on SH-Store</p>
          </div>
        
      </div>
    </>
  );
};

export default Searchbar;
