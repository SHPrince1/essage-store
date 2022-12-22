import React from "react";
import { Container } from "react-bootstrap";
import style from "../styles/featuredcat.module.css";
import { FcHome } from "react-icons/fc";
import { FcElectronics } from "react-icons/fc";
import { RiMentalHealthLine } from "react-icons/ri";
import { GrBaby, GrRestroomWomen, GrServices } from "react-icons/gr";
import { FcFactory } from "react-icons/fc";
import { AiFillCar } from "react-icons/ai";
import {GiCirclingFish, GiUnderwearShorts} from "react-icons/gi";
import {FaMobile} from "react-icons/fa";
import {BiDotsHorizontalRounded} from "react-icons/bi";

const FeaturedCategories = () => {
  return (
    <div>
      <Container>
        <div>
          <p className={style.textHead}>Featured Categories</p>
        </div>

        <div className={style.contentBox}>
          <div className={style.content}>
            <div className={style.contentRow}>
              <div className={style.contentCol}>
                <div className={style.iconNames}>
                  <FcElectronics size={30} />
                  <a href="href=https://essage.com">Electronics</a>
                </div>
                <div className={style.iconNames}>
                  <FcHome size={30} />
                  <a href="href=https://essage.com">Real Estate</a>
                </div>
                <div className={style.iconNames}>
                  <RiMentalHealthLine size={30} />

                  <a href="href=https://essage.com">Health and Beauty</a>
                </div>
                <div className={style.iconNames}>
                  <GrBaby size={30} />

                  <a href="href=https://essage.com">Babies</a>
                </div>
                <div className={style.iconNames}>
                  <FcFactory size={30} />
                  <a href="href=https://essage.com">Jobs</a>
                </div>
                <div className={style.iconNames}>
                  <AiFillCar size={30} />
                  <a href="href=https://essage.com">Vehicles</a>
                </div>
              </div>
            </div>
            <div className={style.contentRow}>
              <div className={style.contentCol}>
                <div className={style.iconNames}>
                  <GiCirclingFish size={30} />
                  <a href="href=https://essage.com">Agriculture & Food</a>
                </div>
                <div className={style.iconNames}>
                  <GrRestroomWomen size={30} />
                  <a href="href=https://essage.com">Women's Fashion</a>
                </div>
                <div className={style.iconNames}>
                  <GiUnderwearShorts size={30} />

                  <a href="href=https://essage.com">Men's Fashion</a>
                </div>
                <div className={style.iconNames}>
                  <FaMobile size={30} />

                  <a href="href=https://essage.com">Mobile phones and tablets</a>
                </div>
                <div className={style.iconNames}>
                  <GrServices size={30} />
                  <a href="href=https://essage.com">Services</a>
                </div>
                <div className={style.iconNames}>
                  <BiDotsHorizontalRounded size={30} />
                  <a href="href=https://essage.com">Everything else</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedCategories;
