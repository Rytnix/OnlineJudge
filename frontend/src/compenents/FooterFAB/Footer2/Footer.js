import React, { Fragment } from "react";
import {
  FavoriteBorder,
  Java,
  Instagram,
  LinkedIn,
  Mail,
  StarBorder,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import classes from "./Footer.module.css";
import javaicon from "../../../assests/icons/icons8-java.json";
import { SERVER_LINK } from "../../../dev-server-link";
import animatedicon from "react-lottie";
import InputSlider from "../../InputSlider/InputSlider";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import {
  Button,
  Drawer,
  Fab,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
const Footer = (props) => {
  const {
    favStyle,
    resetCode,
    showCorrectCode,
    codeFontSize,
    selectedLang,
    codeEditable,
    setcodeFontSize,
    setSelectedLang,
    correctCodeAvailable,
  } = props;

  const clickHandler = (link, name) => {
    window.open(link, "_blank");

    fetch(`${SERVER_LINK}/api/experimental/log`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ msg: `Visited ${name}` }),
      credentials: "include",
    }).catch((error) => console.error(error));
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: javaicon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Fragment>
      <Box
        sx={{
          borderBottom: "1.5px solid rgba(0,0,0,0.1)",
          paddingBottom: "1em",
        }}
      >
        <div className={classes.fontSnippet}>&#60; Choose Lang /&#62;</div>
        <span
          onClick={() => {
            setSelectedLang("c");
          }}
          style={{ padding: "0 1em 0 0" }}
        >
          <img
            className="iconspan"
            width="42"
            height="42"
            src="https://img.icons8.com/color/48/c-programming.png"
            alt="c-programming"
          />
        </span>
        <span
          onClick={() => setSelectedLang("cpp")}
          style={{ padding: "0 1em 0 0" }}
        >
          <img
            width="42"
            height="42"
            src="https://img.icons8.com/external-others-iconmarket/64/external-cpp-file-types-others-iconmarket-2.png"
            alt="external-cpp-file-types-others-iconmarket-2"
          />
        </span>
        <span
          onClick={() => setSelectedLang("py")}
          style={{ padding: "0 1em 0 0" }}
        >
          <img
            width="42"
            height="42"
            src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-python-computer-programming-flaticons-lineal-color-flat-icons.png"
            alt="external-python-computer-programming-flaticons-lineal-color-flat-icons"
          />
        </span>
        <span
          onClick={() => setSelectedLang("java")}
          style={{ padding: "0 1em 0 0" }}
        >
          <img
            width="42"
            height="42"
            src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-java-web-development-flaticons-lineal-color-flat-icons.png"
            alt="external-java-web-development-flaticons-lineal-color-flat-icons"
          />
        </span>

        <span onClick={() => setSelectedLang("js")}>
          <img
            width="42"
            height="42"
            src="https://img.icons8.com/external-bearicons-outline-color-bearicons/32/external-JS-file-extension-bearicons-outline-color-bearicons.png"
            alt="external-JS-file-extension-bearicons-outline-color-bearicons"
          />
        </span>
      </Box>
      <div style={{ width: "15rem", margin: "1rem" }}>
        <div className={classes.fontSnippet}>&#60; Font Size /&#62;</div>
        <div className={classes.changeFont}>
          <InputSlider
            codeFontSize={codeFontSize}
            setcodeFontSize={setcodeFontSize}
          />
        </div>
        {codeEditable && (
          <Fragment>
            <div className={classes.resetCode}>
              <Button
                color="error"
                onClick={() => {
                  resetCode();
                }}
                variant="contained"
                startIcon={
                  <RestartAltIcon
                    fontSize="large"
                    style={{ marginRight: "0.5em", fontSize: "2em" }}
                  />
                }
                style={{ textTransform: "capitalize" }}
              >
                ResetCode
              </Button>
            </div>
            {correctCodeAvailable && (
              <Button
                color="info"
                onClick={() => {
                  showCorrectCode();
                }}
                variant="contained"
                startIcon={
                  <RestartAltIcon
                    fontSize="large"
                    style={{ marginRight: "0.5em", fontSize: "2em" }}
                  />
                }
                style={{ textTransform: "capitalize" }}
              >
                ShowCorrectCode.
                <span style={{ textTransform: "lowercase" }}>
                  {selectedLang}
                </span>
              </Button>
            )}
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default Footer;
