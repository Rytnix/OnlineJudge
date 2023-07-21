import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assests/svg/homeimg.json";
import AppBackground from "./App";
import classes from "../Question/Question.module.css";
import nam from "../../assests/images/nam.png";
import "./App.css";
const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <AppBackground />
      <Lottie options={defaultOptions} height={400} width={400} />
      <div className={classes.heading}>
        Namaste!!!
        <span>
          <img className="img" src={nam}></img>
        </span>{" "}
        Welcome to AlgoU Contest Platform
      </div>
    </div>
  );
};

export default Home;
