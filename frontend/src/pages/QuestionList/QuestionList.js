import React, { useState, useEffect, Fragment, useRef } from "react";
import Card from "./Card/Card";
import classes from "./QuestionList.module.css";

import { useSelector } from "react-redux";

import { useMediaQuery } from "@mui/material";
import AppBackground from "../Home/App";
import LoadingSpinner from "../../compenents/LoadingSpinner/LoadingSpinner";
import ScrollToTop from "../../compenents/ScrollToTop/ScrollToTop";

const QuestionList = () => {
  const [easy, setEasy] = useState(false);
  const [medium, setMedium] = useState(false);
  const [hard, setHard] = useState(false);
  const [solved, setSolved] = useState(false);
  const [unsolved, setUnsolved] = useState(false);
  const cardsRef = useRef(null);

  const { loggedIn, solvedQuestions } = useSelector((state) => state.auth);
  const problems = useSelector((state) => state.questions);
  const [questions, setQuestions] = useState([]);

  useFilterQuestions({
    easy,
    medium,
    hard,
    problems,
    solved,
    unsolved,
    solvedQuestions,
    setQuestions,
  });

  return (
    <div className={classes.questions}>
      <AppBackground />
      <ScrollToTop element={cardsRef.current} />
      {problems.isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <LoadingSpinner />
        </div>
      ) : problems && problems.questions && problems.questions.length > 0 ? (
        <Fragment>
          <div className={classes.cards} ref={cardsRef}>
            {questions.map((problem) => (
              <Card
                solved={loggedIn && solvedQuestions.includes(problem._id)}
                key={problem._id}
                question={problem}
              />
            ))}
          </div>
        </Fragment>
      ) : (
        <div style={{ width: "100%" }}>
          <div className="errorTemplate">
            <div>
              <span>Msg : </span>Looks like there are no questions here !
            </div>
            {
              <div>
                <span>Cause : </span>Check if your not offline / Or may be
                server is down.
              </div>
            }
          </div>
        </div>
      )}
    </div>
  );
};

const useFilterQuestions = ({
  easy,
  medium,
  hard,
  problems,
  solved,
  unsolved,
  solvedQuestions,
  setQuestions,
}) => {
  useEffect(() => {
    if (!easy && !medium && !hard) {
      setQuestions(problems.questions);
    } else
      setQuestions(
        problems.questions.filter(
          (element) =>
            (easy && element.difficulty === "easy") ||
            (medium && element.difficulty === "medium") ||
            (hard && element.difficulty === "hard")
        )
      );

    if (solved || unsolved)
      setQuestions((questions) =>
        questions.filter(
          (ele) =>
            (solved && solvedQuestions.includes(ele._id)) ||
            (unsolved && !solvedQuestions.includes(ele._id))
        )
      );
  }, [
    easy,
    medium,
    hard,
    problems,
    solved,
    unsolved,
    solvedQuestions,
    setQuestions,
  ]);
};

export default QuestionList;
