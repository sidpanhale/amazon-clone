import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
        <Product title='India Positive by Chetan Bhagat'
        id='111'
        price ={12}
        image='https://n1.sdlcdn.com/imgs/i/b/e/India-Positive-New-Essays-and-SDL118044305-1-c3579.jpg'
        rating={5}/>

        <Product title='WD 5TB Elements Portable External Hard Drive, USB 3.0, Compatible with PC, Mac, PS4 & Xbox - WDBU6Y0050BBK-WESN'
        id='222'
        price ={109.99}
        image='https://images-na.ssl-images-amazon.com/images/I/71VB--jaeSL._AC_SL1500_.jpg'
        rating={4}/>
        </div>


        <div className="home__row">
        <Product title='Jenga Classic Game'
        id='333'
        price ={12.97}
        image='https://images-na.ssl-images-amazon.com/images/I/81OAWwX3djL._AC_SL1500_.jpg'
        rating={5}/>            

        <Product title='Thanksgiving Fall Pillow Covers for Fall Decor Set of 4 Autumn Harvest Pumpkin Theme'
        id='444'
        price ={16.96}
        image='https://images-na.ssl-images-amazon.com/images/I/71QXuiAzFoL._AC_SL1000_.jpg'
        rating={4}/>    

        <Product title='Xbox Wireless Controller - Black'
        id='555'
        price ={84.99}
        image='https://images-na.ssl-images-amazon.com/images/I/41LO2OX6pRL.jpg'
        rating={4}/>    
        </div>

        <div className="home__row">
        <Product title='Queen Memory Foam Mattress, Avenco 10 Inch Queen Size Mattress in a Box, Premium Bed Mattress Queen with CertiPUR-US Foam for Supportive, Pressure Relief & Cooler Sleeping, 10 Years Support'
        id='666'
        price ={449}
        image='https://m.media-amazon.com/images/I/71vKyvVYr3L._SL1051_.jpg'
        rating={5}/>    
        </div>
      </div>
    </div>
  );
}

export default Home;
