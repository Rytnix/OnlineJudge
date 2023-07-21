import React, { useRef, useState } from "react";

import {
  ClickAwayListener,
  Fab,
  Paper,
  Popper,
  Tooltip,
  Zoom,
} from "@mui/material";
import { Box } from "@mui/system";
import Footer from "./Footer2/Footer";
import Settings from "@mui/icons-material/Settings";

import classes from "../../pages/Question/Options/Options.module.css";
const OptionFAB = (props) => {
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

  const [isExpanded, setExpanded] = useState(false);
  const fabRef = useRef(null);
  return (
    <ClickAwayListener onClickAway={() => setExpanded(false)}>
      <Box>
        <Tooltip placement="top" TransitionComponent={Zoom} title="Settings">
          <Fab
            size="large"
            ref={fabRef}
            aria-label="add"
            onClick={() => setExpanded((prev) => !prev)}
            style={favStyle}
            color="secondary"
          >
            <Settings fontSize="large" />
            <div
              className={classes.optionSnippet}
              style={{
                top: "-1.5rem",
                whiteSpace: "nowrap",
                textTransform: "lowercase",
              }}
            >
              &#60; change lang /&#62;
            </div>
          </Fab>
        </Tooltip>
        <Popper
          open={isExpanded}
          anchorEl={fabRef.current}
          placement={"right"}
          transition
          style={{ zIndex: "999" }}
        >
          {({ TransitionProps }) => (
            <Zoom {...TransitionProps} timeout={350}>
              <Paper elevation={5} sx={{ margin: "0.5rem", zIndex: "5" }}>
                <Box sx={{ p: 2 }}>
                  <Footer
                    resetCode={resetCode}
                    selectedLang={selectedLang}
                    codeFontSize={codeFontSize}
                    setSelectedLang={setSelectedLang}
                    setcodeFontSize={setcodeFontSize}
                    showCorrectCode={showCorrectCode}
                    codeEditable
                  />
                </Box>
              </Paper>
            </Zoom>
          )}
        </Popper>
      </Box>
    </ClickAwayListener>
  );
};

export default OptionFAB;
