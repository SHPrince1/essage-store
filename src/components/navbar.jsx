import React, { useState } from "react";
import style from "../styles/navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
// import Container from "react-bootstrap/Container";

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
              <a href="href=https://essage.com" className={style.linkItem}>
                Electronics
              </a>
            </div>

            <div className={style.dropdownContent}>
              <a href="href=https://essage.com">Computer and Laptops </a>
              <a href="href=https://essage.com" >Video games and Consoles</a>
              <a href="href=https://essage.com">Audio and Music Equipments</a>
              <a href="href=https://essage.com">Camera and Photo</a>
              <a href="href=https://essage.com">Computer Accessories</a>
              <a href="href=https://essage.com">Radio and Home Audio</a>
              <a href="href=https://essage.com">Video Projectors</a>
              <a href="href=https://essage.com">Television</a>
              <a href="href=https://essage.com">General Electronice accessories Gadget</a>
              <a href="href=https://essage.com">Projectors </a>
              <a href="href=https://essage.com">Printers</a>
            </div>
          </div>
          <div className={style.dropdownBox}>
            <a href="href=https://essage.com"className={style.links}>
              Real Estates
            </a>
            <div className={style.dropdownContent}>
              <a href="href=https://essage.com">Commercial Property for rent</a>
              <a href="href=https://essage.com">Commercial Property for sale</a>
              <a href="href=https://essage.com">Event centres and venue</a>
              <a href="href=https://essage.com">Houses apartment for rent</a>
              <a href="href=https://essage.com">Land and plots for rent</a>
              <a href="href=https://essage.com">Land and plots for sale</a>
              <a href="href=https://essage.com">House and apartment for sale</a>
            </div>
          </div>
          <div className={style.dropdownBox}>
            <a href="href=https://essage.com">Health and Beauty</a>
            <div className={style.dropdownContent}>
              <a href="href=https://essage.com">Fragrance</a>
              <a href="href=https://essage.com">Skin</a>
              <a href="href=https://essage.com">Hair Beauty</a>
              <a href="href=https://essage.com">Make use</a>
              <a href="href=https://essage.com">Bath and Body</a>
              <a href="href=https://essage.com">Tools and Accessories</a>
            </div>
          </div>
          <div className={style.dropdownBox}>
            <a href="href=https://essage.com">Babies</a>
            <div className={style.dropdownContent}>
              <a href="href=https://essage.com">Babies and Kids accessories</a>
              <a href="href=https://essage.com">Babies care</a>
              <a href="href=https://essage.com">Children furniture</a>
              <a href="href=https://essage.com">Children Shoes</a>
              <a href="href=https://essage.com">Children Clothings</a>
              <a href="href=https://essage.com">Children gear and safety</a>
              <a href="href=https://essage.com">Prams and strollers</a>
              <a href="href=https://essage.com">Toys</a>
              <a href="href=https://essage.com">Maternity and pregnacy</a>
            </div>
          </div>
          <div className={style.dropdownBox}>
            <a href="href=https://essage.com">Jobs</a>
            <div className={style.dropdownContent}>
              <a href="href=https://essage.com">CV</a>
              <a href="href=https://essage.com">Vacancy</a>
            </div>
          </div>
          <div className={style.dropdownBox}>
            <a href="href=https://essage.com">Vehicles</a>
            <div className={style.dropdownContent}>
              <a href="href=https://essage.com">Buses & Microbusses</a>
              <a href="href=https://essage.com">Motocycles & scooters</a>
              <a href="href=https://essage.com">Heavy equipment truck and trailers</a>
              <a href="href=https://essage.com">Vehicles parts and accessories</a>
              <a href="href=https://essage.com">Water craft & Boats</a>
              <a href="href=https://essage.com" >Cars</a>
              <a href="href=https://essage.com">Luxery Cars</a>
            </div>
          </div>
          <div className={style.dropdownBox}>
            <a href="href=https://essage.com">Agriculture and food</a>
            <div className={style.dropdownContent}>
              <a href="href=https://essage.com">Machine Machinery and equipments</a>
              <a href="href=https://essage.com">Food suplements and seeds</a>
              <a href="href=https://essage.com">Meals and drinks</a>
              <a href="href=https://essage.com" >Livestock and Poultry</a>
            </div>
          </div>
        </div>

        <div className={style.left}>
          <a href="href=https://essage.com">Login</a> | <a href="href=https://essage.com">Register</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
