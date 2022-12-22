import React from "react";
import { Container } from "react-bootstrap";
import style from "../styles/footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={style.parentBox}>
        <div className={style.topFooter}>
          <Container>
            <div className={style.topFootBox}>

            <div className={style.subText}>
              <p>Are you New to Essage?</p>
              <p>
                subscribe to our news letter to get daily updates on amazing
                offers!
              </p>
            </div>
            <div className={style.inputcont}>
              <input
                className={style.inputbox}
                placeholder="Enter Email Address"
              />
              <button className={style.btn}>Suscribe</button>
            </div>
            </div>
          </Container>
        </div>
       <div className={style.bottomFooter}>
        <Container>
        <div className={style.bottomFooterBox}>
          <div className={style.footHead}>
            <div>

            <a href="href=https://essage.com">About us</a>
            </div>
            <div className={style.footCol}>
              <a href="href=https://essage.com">About Essage</a>
              <a href="href=https://essage.com">Privacy Policy</a>
              <a href="href=https://essage.com">Terms and condition</a>
              <a href="href=https://essage.com">Our Blog</a>
            </div>
          </div>
          <div className={style.footHead}>
            <div>

            <a href="href=https://essage.com">Help</a>
            </div>
            <div className={style.footCol}>
              <a href="href=https://essage.com">Support@essage.com</a>
              <a href="href=https://essage.com">Help center</a>
              <a href="href=https://essage.com">Contact Us</a>
              <a href="href=https://essage.com">FAQ</a>
            </div>
          </div>
          <div className={style.footHead}>
            <div>

            <a href="href=https://essage.com">Most Ads Region</a>
            </div>
            <div className={style.footCol}>
              {/* <a href="href=https://essage.com">Support@essage.com</a>
              <a href="href=https://essage.com">Help center</a>
              <a href="href=https://essage.com">Contact Us</a>
              <a href="href=https://essage.com">FAQ</a> */}
            </div>
          </div>
          <div className={style.footHead}>
            <div>

            <a href="href=https://essage.com">Moile app cooming soon</a>
            </div>
            <div className={style.footCol}>
             <img src="" alt=""/>
             <p>Stay Conected</p>
              <img src="" alt="" />
            </div>
          </div>
        </div>
        </Container>

       </div>
      </div>
    </>
  );
};

export default Footer;
