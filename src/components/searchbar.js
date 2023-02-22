import React from "react";
import style from "../styles/searchbar.module.css";
import SelectBar from "./select";

const Searchbar = () => {
  // const [searchItem, setSearchItem] = useState([])

  return (
    <>
      <div className={style.parentBox}>
        <div className={style.fdiv}>
          <div className={style.logoBox}>
            <a href="/"> <h4>ESSAGE</h4></a>
          </div>
          <div className={style.inputBox}>
            <input type="text" placeholder="search for products" 
            //  onChange={(event) => {
            //   setSearchItem(event.target.value);
            // }}
            />
          </div>
          <div className={style.SelectBar}>
            <SelectBar />
          </div>
        </div>

        
          <div className={style.btn}>
            <p>Sell on SH-Store</p>
          </div>
          <div className={style.btn}>
            
          </div>
        
      </div>
    </>
  );
};

export default Searchbar;
