import React from "react";
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
import Supersale from "../images/supersale.webp";
import Elec from "../images/electronics.jpeg";
import Gadget from "../images/gadgets.jpeg";
import Wears from "../images/wears.jpeg";
import Foodstuff from "../images/foodstuff.jpeg";
import Acces from "../images/accessories.jpeg";
import Books from "../images/books.jpeg";
import Mencol from "../images/mencol.webp";
import Smartwatch from "../images/smartwatch.webp";
import Men from "../images/mencol.webp";
import Pef from "../images/pef.jpeg";
import Cream from "../images/cream.jpeg";
import Eye from "../images/eye.jpeg";
import Hair from "../images/hair.jpeg";
import Paste from "../images/paste.jpeg";
import Baby from "../images/baby.jpeg";
import Watch from "../images/watch.jpg";
import Bag from "../images/bag.jpeg";
import Pod from "../images/pod.jpeg";
import Awatch from "../images/awatch.jpeg";
import Speaker from "../images/speaker.jpeg";
import Pbank from "../images/pbank.jpeg";
import Tv from "../images/tv1.webp";
import Tv1 from "../images/tv.webp";

const AllShops = () => {
  return (
    <div>
      <Container>
        {/* all shops */}
        <div>
          <div className={style.textHead}>
            <p>All Shops</p>
            <a href="">View All</a>
          </div>
          <div className={style1.cardBox}>
            <Cards title="Electronics" img={Elec} />
            <Cards title="Gadgets" img={Gadget} />
            <Cards title="Wears" img={Wears} />
            <Cards title="Food stuff" img={Foodstuff} />
            <Cards title="Accesories" img={Acces} />
            <Cards title="Books" img={Books} />
          </div>
          {/* mobile view */}
          <div>
            <div className={style1.mobilecardBox}>
              <div className={style1.singleBox}>
                <Cards title="Electronics" img={Elec} />
                <Cards title="Gadgets" img={Gadget} />
              </div>
              <div className={style1.singleBox}>
                <Cards title="Wears" img={Wears} />
                <Cards title="Food stuff" img={Foodstuff} />
              </div>
              <div className={style1.singleBox}>
                <Cards title="Accesories" img={Acces} />
                <Cards title="Books" img={Books} />
              </div>
            </div>
          </div>
          <div className={style1.imgBanner}>
            <img className={style1.imgCont} src={Mencol} />
          </div>
          <div>
            <div className={style.textHead}>
              <p>DAILY PICKS</p>
              <a href="">View All</a>
            </div>
            <div className={style1.cardBox}>
              <CardE title="skin care" price="10,000.00" img={Cream} />
              <CardE title="Perfumes" price="20,000.00" img={Pef} />
              <CardE title="Sun glass" price="5,720.000" img={Eye} />
              <CardE title="Hair Care" price="3,000.00" img={Hair} />
              <CardE title="Baby lotion" price="15,000.00" img={Baby} />
              <CardE title="tootpaste" price="1500.00" img={Paste} />
            </div>
          </div>

          {/* mobile view */}
          <div>
            <div className={style1.mobilecardBox}>
              <div className={style1.singleBox}>
                <CardE title="skin care" price="10,000.00" img={Cream} />
                <CardE title="Perfumes" price="20,000.00" img={Pef} />
              </div>
              <div className={style1.singleBox}>
                <CardE title="Sun glass" price="5,720.000" img={Eye} />
                <CardE title="Hair Care" price="3,000.00" img={Hair} />
              </div>
              <div className={style1.singleBox}>
                <CardE title="Baby lotion" price="15,000.00" img={Baby} />
                <CardE title="tootpaste" price="1500.00" img={Paste} />
              </div>
            </div>
          </div>

          <div className={style1.imgBanner}>
            <img className={style1.imgCont} src={Smartwatch} />
          </div>
          <div>
            <div className={style.textHead}>
              <p>FRESH FINDS</p>
              <a href="#">View all</a>
            </div>

            <div className={style1.cardBox}>
              <CardE title="Smart Watch" img={Watch} />
              <CardE title="Laptop Bag" img={Bag} />
              <CardE title="Ear Pod" img={Pod} />
              <CardE title="Wrist watch" img={Awatch} />
              <CardE title="Power Bank" img={Pbank} />
              <CardE title="Bluetooth Speaker" img={Speaker} />
            </div>
          </div>
          {/* mobile view */}
          <div>
            <div className={style1.mobilecardBox}>
              <div className={style1.singleBox}>
                <CardE title="Smart Watch" img={Watch} />
                <CardE title="Laptop Bag" img={Bag} />
              </div>
              <div className={style1.singleBox}>
                <CardE title="Ear Pod" img={Pod} />
                <CardE title="Wrist watch" img={Awatch} />
              </div>
              <div className={style1.singleBox}>
                <CardE title="Power Bank" img={Pbank} />
                <CardE title="Bluetooth Speaker" img={Speaker} />
              </div>
            </div>
          </div>

          <div className={style.textHead}>
            <p>Featured Group</p>
            <a href="">View All</a>
          </div>
          <div className={style1.cardBox}>
            <CardTv
              img={Tv}
              h6="A NNEMY TELEVISION GROUP"
              content="A NNEMY TELEVISION GROUP"
            />
            <CardTv
              img={Tv1}
              h6="A NNEMY TELEVISION GROUP"
              content="A NNEMY TELEVISION GROUP"
            />
            <CardTv
              img={Tv}
              h6="A NNEMY TELEVISION GROUP"
              content="A NNEMY TELEVISION GROUP"
            />
            <CardTv
              img={Tv1}
              h6="A NNEMY TELEVISION GROUP"
              content="A NNEMY TELEVISION GROUP"
            />
          </div>

          {/* mobile view */}
          <div>
            <div className={style1.mobilecardBox}>
              <div className={style1.singleBoxTv}>
                <CardTv
                  img={Tv}
                  h6="A NNEMY TELEVISION GROUP"
                  content="A NNEMY TELEVISION GROUP"
                />
                <CardTv
                  img={Tv1}
                  h6="A NNEMY TELEVISION GROUP"
                  content="A NNEMY TELEVISION GROUP"
                />
                <CardTv
                  img={Tv}
                  h6="A NNEMY TELEVISION GROUP"
                  content="A NNEMY TELEVISION GROUP"
                />
                <CardTv
                  img={Tv1}
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
