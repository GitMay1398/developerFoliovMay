import React from "react";
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
              <span><img id="mayMemoji" src={require("../../assets/images/may_memoji_421x421.png")} ></img></span>
              <span className="wave-emoji">
                <img alt="👋" draggable="false" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/waving-hand_1f44b.png" style="height: 1em; width: 1em; margin: 0px 0.05em 0px 0.1em; vertical-align: -0.1em;">
              </span>
            </h1>
            <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
            <p className="greeting-text-p subTitle">{greeting.subTitle2}</p>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Me contacter" href="#contact" />
              <Button text="Mon CV" newTab={true} href={greeting.resumeLink} />
              <Button text="My resume in English" newTab={true} href={greeting.resumeLink2} />
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
