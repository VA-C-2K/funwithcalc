import React from "react";
import CardItem from "./CardItem";
import './Cards.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import video1 from './videos/video6.mp4';
const Cards = () => {
  return (
    <div className="cards">
      <video  autoPlay loop muted>
        <source src={video1}  type="video/mp4"/> 
        </video>
      <h1>Fun With Calculators!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <Row xs={1} md={4}>
          <Col>
            <ul className="cards__items">
              <CardItem
              src="images/tip.png"
              text="Split the Bills and Calculate the tips on your finger tips"
              label="Tip Calculator"
              path="/tipcalc"
              /></ul>
          </Col>
            {/* <Col>
            <ul className="cards__items">
              <CardItem
              src="images/curcon.png"
              text="Rates changing up and down? Use this to make your life easier"
              label="Currency Convertor"
              path="/currencyconv"
              /></ul>
          </Col> */}
          <Col>
          <ul className="cards__items">
              <CardItem
              src="images/pwdgen.png"
              text="We Want Security.Security needs Secure Password."
              label="Password Genrator"
              path="/pwdgen"
              />
               </ul>
            </Col>
            <Col>
            <ul className="cards__items">
              <CardItem
              src="images/agecalc.png"
              text="Why to calculate stupid things like age when we have this!"
              label="Age Calculator"
              path="/agecalc"
              /></ul>
          </Col>
          <Col>
          <ul className="cards__items">
              <CardItem
              src="images/rps.png"
              text="Let's revisit our childhood and try to fight against me"
              label="Game"
              path="/rps"
              />
               </ul>
            </Col>
            <Col>
            <ul className="cards__items">
              <CardItem
              src="images/quote.png"
              text="Let's see what Brilliant Minds Offering us & Get motivation"
              label="Quotes"
              path="/quotegen"
              /></ul>
          </Col>
          <Col>
          <ul className="cards__items">
              <CardItem
              src="images/joke.png"
              text="We deserve little bit of fun.let's give Ourself some fun time"
              label="Jokes"
              path="/jokegen"
              />
               </ul>
            </Col>
            <Col>
            <ul className="cards__items">
              <CardItem
              src="images/bmi.png"
              text="Do you Know Your BMI ? NO!!! - Here You can Calculate"
              label="BMI Calculator"
              path="/bmicalc"
              /></ul>
          </Col>
          <Col>
          <ul className="cards__items">
              <CardItem
              src="images/gradgen.png"
              text="Checkout these Gradients isn't they Mesmerizing!!!"
              label="Gradient Generator"
              path="/gradientgen"
              />
               </ul>
            </Col>
            <Col>
            <ul className="cards__items">
              <CardItem
              src="images/rgbhex.png"
              text="Convert RGB t0 HEX and HEX to RGB . Just Fun of Colors"
              label="RGB - HEX Color"
              path="/rgbgex"
              /></ul>
          </Col>
          <Col>
          <ul className="cards__items">
              <CardItem
              src="images/aspect.png"
              text="Want to calculate Aspect ratios.Thank me later!"
              label="Aspect Ratio Calculator"
              path="/aspectratiocalc"
              />
               </ul>
            </Col>
            <Col>
            <ul className="cards__items">
              <CardItem
              src="images/dict.png"
              text="Let's explore the words and magic behind them.Try different words!"
              label="Dictionary"
              path="/dictionary"
              /></ul>
          </Col>
          <Col>
          <ul className="cards__items">
              <CardItem
              src="images/pxem.png"
              text="Pixel to EM is to complicated .why to waste time.Let's Calculate"
              label="PX-EM Convertor"
              path="/pxtoemconv"
              />
               </ul>
            </Col>
            <Col>
            <ul className="cards__items">
              <CardItem
              src="images/coin.png"
              text="Coins have two sides let’s flip and see which one you get"
              label="Flip a Coin"
              path="/flipcoin"
              /></ul>
          </Col>
          </Row>
        
        </div>
      </div>
    </div>
  );
};

export default Cards;
