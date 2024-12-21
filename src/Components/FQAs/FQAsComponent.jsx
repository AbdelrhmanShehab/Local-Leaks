import React, { useState } from "react";
import "./FQAsComponent.module.css";
import style from "./FQAsComponent.module.css";
import plusIcon from "../../Assets/plus-icon.svg";
import minusIcon from "../../Assets/minus-icon.svg";
const FQAsComponent = ({ questionNum, questionContent, questionAnswer, miniMax }) => {
  const [isAnswerd, setAnswer] = useState(false);
  function showAnswer() {
    setAnswer(!isAnswerd);
  }
  return (
    <section className={style.FQAsSection}>
      <div className={style.questionWidth}>
        <div className={style.numQuestionFlex}>
          <div className={style.questionNum}>{questionNum}</div>
          <div>
            <h3 className={style.questionContent}>{questionContent}</h3>
            {isAnswerd && <p className={style.answer}>{questionAnswer}</p>}
          </div>
        </div>
        <img
          onClick={showAnswer}
          className={style.minusIcon}
          src={isAnswerd ? minusIcon : plusIcon}
          alt="answer"
        />
      </div>
      <div className={style.lineBetweenQuestions}></div>
    </section>
  );
};
export default FQAsComponent;
