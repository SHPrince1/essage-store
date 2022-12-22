import React, { useState } from "react";
import style from "../styles/navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Container from "react-bootstrap/Container";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  function ToggleBurger() {
    setVisible(!visible);
  }
  return (
    <>
      <nav className={style.parentBox}>
        <div className={style.menu} onClick={ToggleBurger}>
          <GiHamburgerMenu />
        </div>

        <div className={visible ? style.dropdownParentBox : style.show}>
          <div className={style.dropdownBox}>
            <div className={style.linkItemBox}>
              <a href="#" className={style.linkItem}>
                Electronics
              </a>
            </div>

            <div className={style.dropdownContent}>
              <a>Computer and Laptops </a>
              <a>Video games and Consoles</a>
              <a>Audio and Music Equipments</a>
              <a>Camera and Photo</a>
              <a>Computer Accessories</a>
              <a>Radio and Home Audio</a>
              <a>Video Projectors</a>
              <a>Television</a>
              <a>General Electronice accessories Gadget</a>
              <a>Projectors </a>
              <a>Printers</a>
            </div>
          </div>
          <div className={style.dropdownBox}>
            <a href="#" className={style.links}>
              Real Estates
            </a>
            <div className={style.dropdownContent}>
              <a>Commercial Property for rent</a>
              <a>Commercial Property for sale</a>
              <a>Event centres and venue</a>
              <a>Houses apartment for rent</a>
              <a>Land and plots for rent</a>
              <a>Land and plots for sale</a>
              <a>House and apartment for sale</a>
            </div>
          </div>
          <div className={style.dropdownBox}>
            <a href="#">Health and Beauty</a>
            <div className={style.dropdownContent}>
              <a>Fragrance</a>
              <a>Skin</a>
              <a>Hair Beauty</a>
              <a>Make use</a>
              <a>Bath and Body</a>
              <a>Tools and Accessories</a>
            </div>
          </div>
          <div className={style.dropdownBox}>
            <a href="#">Babies</a>
            <div className={style.dropdownContent}>
              <a>Babies and Kids accessories</a>
              <a>Babies care</a>
              <a>Children furniture</a>
              <a>Children Shoes</a>
              <a>Children Clothings</a>
              <a>Children gear and safety</a>
              <a>Prams and strollers</a>
              <a>Toys</a>
              <a>Maternity and pregnacy</a>
            </div>
          </div>
          <div className={style.dropdownBox}>
            <a href="#">Jobs</a>
            <div className={style.dropdownContent}>
              <a>CV</a>
              <a>Vacancy</a>
            </div>
          </div>
          <div className={style.dropdownBox}>
            <a href="#">Vehicles</a>
            <div className={style.dropdownContent}>
              <a>Buses & Microbusses</a>
              <a>Motocycles & scooters</a>
              <a>Heavy equipment truck and trailers</a>
              <a>Vehicles parts and accessories</a>
              <a>Water craft & Boats</a>
              <a>Cars</a>
              <a>Luxery Cars</a>
            </div>
          </div>
          <div className={style.dropdownBox}>
            <a href="#">Agriculture and food</a>
            <div className={style.dropdownContent}>
              <a>Machine Machinery and equipments</a>
              <a>Food suplements and seeds</a>
              <a>Meals and drinks</a>
              <a>Livestock and Poultry</a>
            </div>
          </div>
        </div>

        <div>
          <a>Login</a> | <a>Register</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
