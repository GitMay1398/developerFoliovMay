﻿import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";

export default function Greeting() {
  return (
    <Fade bottom duration={1000} distance="40px">
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">
              {" "}
              {greeting.title}
              {" "}
              <span><img id="mayMemoji" src={require("../../assets/images/may_memoji.png")} ></img></span>
              <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
            <p className="greeting-text-p subTitle">{greeting.subTitle2}</p>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Me contacter" href="#contact" />
              <Button text="Mon CV" newTab={true} href={greeting.resumeLink} />
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <img alt="may et internet" src={require("../../assets/images/mainFitting.svg")}></img>
        </div>
      </div>
    </div>
    </Fade>
  );
}
