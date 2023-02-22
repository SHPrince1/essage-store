import React, { useEffect, useState } from "react";
import axios from "axios";
// importations of modules and libraries
import { Container } from "react-bootstrap";

// importations of style
import style from "../styles/featuredcat.module.css";
import style1 from "../styles/allshops.module.css";

//  importations of components
import Cards from "../components/cards";
import CardE from "../components/card-e";
import CardTv from "../components/card-tv";

// importations of images
// import Supersale from "../images/supersale.webp";

import Mencol from "../images/mencol.webp";
import Smartwatch from "../images/smartwatch.webp";
// import Men from "../images/mencol.webp";



const AllShops = () => {
  const [productData, setProductData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [eightLimitData, setEightLimitData] = useState([]);
  const [fourLimitData, setFourLimitData] = useState([]);

  const options = {
    method: "GET",
    url: "https://fakestoreapi.com/products",
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setProductData(response.data);

        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  const secOptions = {
    method: "GET",
    url: "https://fakestoreapi.com/products/category/jewelery",
  };

  useEffect(() => {
    axios
      .request(secOptions)
      .then(function (response) {
        setCategoriesData(response.data);

        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  });
  const thirdOptions = {
    method: "GET",
    url: "https://fakestoreapi.com/products?limit=8",
  };

  useEffect(() => {
    axios
      .request(thirdOptions)
      .then(function (response) {
        setEightLimitData(response.data);

        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  });
  const fourOptions = {
    method: "GET",
    url: "https://fakestoreapi.com/products?limit=4",
  };

  useEffect(() => {
    axios
      .request(fourOptions)
      .then(function (response) {
        setFourLimitData(response.data);

        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  return (
    <div>
      <Container>
        {/* all shops */}
        <div>
          <div className={style.textHead}>
            <p>All Shops</p>
            <a href="https://essage.com">View All</a>
          </div>
          <div className={style1.cardBox}>
            {productData.map((item, index) => {
              return (
                <Cards
                  key={item.id}
                  title={item.title}
                  img={item.image}
                  price={item.price}
                  //  rate={item.rating}

                  category={item.category}
                />
              );
            })}

            {}
          </div>
          {/* mobile view */}

          <div className={style1.imgBanner}>
            <img className={style1.imgCont} src={Mencol} alt="" />
          </div>
          <div>
            <div className={style.textHead}>
              <p>DAILY PICKS</p>
              <a href="href=https://essage.com">View All</a>
            </div>
            <div className={style1.cardBox}>
              {categoriesData.map((item, index) => (
                <CardE
                  key={item.id}
                  img={item.image}
                  title={item.title}
                  price={item.price}
                />
              ))}
            </div>
          </div>

          <div className={style1.imgBanner}>
            <img className={style1.imgCont} src={Smartwatch} alt="" />
          </div>
          <div>
            <div className={style.textHead}>
              <p>FRESH FINDS</p>
              <a href="href=https://essage.com">View all</a>
            </div>

            <div className={style1.cardBox}>
              {/* <CardE title="Smart Watch" img={Watch} alt="" />
              <CardE title="Laptop Bag" img={Bag} alt="" />
              <CardE title="Ear Pod" img={Pod} alt="" />
              <CardE title="Wrist watch" img={Awatch} alt="" />
              <CardE title="Power Bank" img={Pbank} alt="" />
              <CardE title="Bluetooth Speaker" img={Speaker} alt="" /> */}

              {eightLimitData.map((item, index) => {
                return (
                  <Cards
                    key={item.id}
                    title={item.title}
                    img={item.image}
                    price={item.price}
                    //  rate={item.rating}

                    category={item.category}
                  />
                );
              })}
            </div>
          </div>

          <div className={style.textHead}>
            <p>Featured Group</p>
            <a href="href=https://essage.com">View All</a>
          </div>
          <div className={style1.cardBox}>
            <div className={style1.cardBoxContent}>
              <div className={style1.cardBoxContent2}>
                {fourLimitData.map((item, index) => {
                  return (
                    <CardTv
                      key={item.id}
                      title={item.title}
                      img={item.image}
                      price={item.price}
                      //  rate={item.rating}

                      category={item.category}
                    />  
                  );
                })}
              </div>
            </div>

            {/* <CardTv
              img={Laptop}
              alt=""
              h6="A NNEMY TELEVISION GROUP"
              content="A NNEMY TELEVISION GROUP"
            /> */}
          </div>

        
        </div>
      </Container>
    </div>
  );
};

export default AllShops;
