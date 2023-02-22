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
import Pef from "../images/pef.jpg";
import Cream from "../images/cream.jpg";
import Eye from "../images/eye1.jpg";
import Hair from "../images/hair1.jpg";
import Paste from "../images/paste.jpg";
import Baby from "../images/baby.jpg";
import Watch from "../images/watch.jpg";
import Bag from "../images/bag.jpeg";
import Pod from "../images/pod.jpg";
import Awatch from "../images/awatch.jpeg";
import Speaker from "../images/speaker.jpg";
import Pbank from "../images/power.jpg";
import Tv from "../images/tv1.webp";
// import Tv1 from "../images/tv.webp";
import Media from "../images/homet.webp";
import Laptop from "../images/laptop.jpg";
import Ps5 from '../images/ps5.webp';




const AllShops = () => {

  
    const [productData, setProductData] = useState([]);
    const [categoriesData, setCategoriesData] = useState([]);


  const options = {
    method: "GET",
    url: "https://fakestoreapi.com/products",
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setProductData(response.data);

        console.log (response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  const secOptions = {
    method: "GET",
    url: 'https://fakestoreapi.com/products/category/jewelery',
  };

  useEffect(() => {
    axios
      .request(secOptions)
      .then(function (response) {
        setCategoriesData(response.data);

        console.log (response.data);
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

            {productData.map((item, index)=>{
              return(
                <Cards key={item.id}
                   title={item.title}
                   img={item.image}
                   price={item.price}
                  //  rate={item.rating}

                   category={item.category}
                
                />
                
              )
            })}
           

            {}
          </div>
          {/* mobile view */}
         
          <div className={style1.imgBanner}>
            <img className={style1.imgCont} src={Mencol}  alt=""/>
          </div>
          <div>
            <div className={style.textHead}>
              <p>DAILY PICKS</p>
              <a href="href=https://essage.com" >View All</a>
            </div>
            <div className={style1.cardBox}>
              {categoriesData.map((item, index)=>
              <CardE key={item.id} img={item.image}  title={item.title} price={item.price}/>
              )}
             
            </div>
          </div>

          {/* mobile view */}
          <div>
            <div className={style1.mobilecardBox}>
              <div className={style1.singleBox}>
                <CardE title="skin care" price="10,000.00" img={Cream}alt="" />
                <CardE title="Perfumes" price="20,000.00" img={Pef} alt="" />
              </div>
              <div className={style1.singleBox}>
                <CardE title="Sun glass" price="5,720.000" img={Eye} alt="" />
                <CardE title="Hair Care" price="3,000.00" img={Hair} alt=""/>
              </div>
              <div className={style1.singleBox}>
                <CardE title="Baby lotion" price="15,000.00" img={Baby}alt="" />
                <CardE title="tootpaste" price="1500.00" img={Paste}alt="" />
              </div>
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
              <CardE title="Smart Watch" img={Watch} alt="" />
              <CardE title="Laptop Bag" img={Bag} alt="" />
              <CardE title="Ear Pod" img={Pod} alt="" />
              <CardE title="Wrist watch" img={Awatch} alt="" />
              <CardE title="Power Bank" img={Pbank} alt="" />
              <CardE title="Bluetooth Speaker" img={Speaker} alt="" />
            </div>
          </div>
          {/* mobile view */}
          <div>
            <div className={style1.mobilecardBox}>
              <div className={style1.singleBox}>
                <CardE title="Smart Watch" img={Watch} alt="" />
                <CardE title="Laptop Bag" img={Bag} alt="" />
              </div>
              <div className={style1.singleBox}>
                <CardE title="Ear Pod" img={Pod} alt="" />
                <CardE title="Wrist watch" img={Awatch} alt="" />
              </div>
              <div className={style1.singleBox}>
                <CardE title="Power Bank" img={Pbank} alt=""/>
                <CardE title="Bluetooth Speaker" img={Speaker} alt=""/>
              </div>
            </div>
          </div>

          <div className={style.textHead}>
            <p>Featured Group</p>
            <a href="href=https://essage.com">View All</a>
          </div>
          <div className={style1.cardBox}>
            <CardTv
              img={Tv} alt=""
              h6="A NNEMY TELEVISION GROUP"
              content="A NNEMY TELEVISION GROUP"
            />
            <CardTv
              img={Media} alt=""
              h6="A NNEMY TELEVISION GROUP"
              content="A NNEMY TELEVISION GROUP"
            />
            <CardTv
              img={Ps5} alt=""
              h6="A NNEMY TELEVISION GROUP"
              content="A NNEMY TELEVISION GROUP"
            />
            <CardTv
              img={Laptop} alt=""
              h6="A NNEMY TELEVISION GROUP"
              content="A NNEMY TELEVISION GROUP"
            />
          </div>

          {/* mobile view */}
          <div>
            <div className={style1.mobilecardBox}>
              <div className={style1.singleBoxTv}>
                <CardTv
                  img={Tv} alt=""
                  h6="A NNEMY TELEVISION GROUP"
                  content="A NNEMY TELEVISION GROUP"
                />
                <CardTv
                  img={Media} alt=""
                  h6="A NNEMY TELEVISION GROUP"
                  content="A NNEMY TELEVISION GROUP"
                />
                <CardTv
                  img={Ps5} alt=""
                  h6="A NNEMY TELEVISION GROUP"
                  content="A NNEMY TELEVISION GROUP"
                />
                <CardTv
                  img={Laptop} alt=""
                  h6="A NNEMY TELEVISION GROUP"
                  content="A NNEMY TELEVISION GROUP"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      
    </div>
  );
};

export default AllShops;
