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

            <a href="#">About us</a>
            </div>
            <div className={style.footCol}>
              <a href="#">About Essage</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms and condition</a>
              <a href="#">Our Blog</a>
            </div>
          </div>
          <div className={style.footHead}>
            <div>

            <a href="#">Help</a>
            </div>
            <div className={style.footCol}>
              <a href="#">Support@essage.com</a>
              <a href="#">Help center</a>
              <a href="#">Contact Us</a>
              <a href="#">FAQ</a>
            </div>
          </div>
          <div className={style.footHead}>
            <div>

            <a href="#">Most Ads Region</a>
            </div>
            <div className={style.footCol}>
              {/* <a href="#">Support@essage.com</a>
              <a href="#">Help center</a>
              <a href="#">Contact Us</a>
              <a href="#">FAQ</a> */}
            </div>
          </div>
          <div className={style.footHead}>
            <div>

            <a href="#">Moile app cooming soon</a>
            </div>
            <div className={style.footCol}>
             <img src=""/>
             <p>Stay Conected</p>
              <img src="" />
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
