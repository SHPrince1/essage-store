import React from "react";
import { Container } from "react-bootstrap";
import SelectBar from "./select";

import style from "../styles/electronic-com.module.css";
import Cards from "./cards";

const ElectronicsPage = () => {
  return (
    <div>
      <Container>
        <div className={style.parentBox}>
          <div className={style.selectBox}>
            <h1>HELLO WORLD</h1>
            <p>Location</p>
            <input />
            <p>State</p>
            <SelectBar />
          </div>
          <div className={style.cardParentBox}>
            <div className={style.cardBox}>
              <Cards img="" alt="" />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ElectronicsPage;
