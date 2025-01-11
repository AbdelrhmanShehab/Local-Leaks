import { React, lazy, Suspense, useState } from "react";
import "./FAQs.module.css";
import style from "./FAQs.module.css";
import KnowUsHeader from "../KnowUsHeader/KnowUsHeader";
import FQAsComponent from "../../../Components/FQAs/FQAsComponent";
import minusIcon from "../../../Assets/minus-icon.svg";
const FAQs = () => {
  const FQAsGeneralData = [
    {
      questionNum: "01",
      questionContent: "What is StreamVibe?",
      questionAnswer:
        "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
      miniMax: minusIcon,
    },
    {
      questionNum: "02",
      questionContent: "What devices can I use to watch StreamVibe?",
      questionAnswer:
        "You can watch StreamVibe on various devices, including smartphones, tablets, smart TVs, and computers. StreamVibe is compatible with most popular web browsers and operating systems.",
      miniMax: minusIcon,
    },
    {
      questionNum: "03",
      questionContent: "How do I search for movies and shows on StreamVibe?",
      questionAnswer:
        "Use the search bar located at the top of the homepage. Simply type in the title or keyword related to the movie or show you’re looking for, and press the search button to see the results.",
      miniMax: minusIcon,
    },
    {
      questionNum: "04",
      questionContent: "Can I download movies and shows for offline viewing?",
      questionAnswer:
        "Currently, StreamVibe does not offer a download feature. However, you can stream content online anytime as long as you have an active internet connection.",
      miniMax: minusIcon,
    },
    {
      questionNum: "05",
      questionContent: "Can I download movies and shows for offline viewing?",
      questionAnswer:
        "Currently, StreamVibe does not offer a download feature. However, you can stream content online anytime as long as you have an active internet connection.",
      miniMax: minusIcon,
    },
    {
      questionNum: "06",
      questionContent: "Can I download movies and shows for offline viewing?",
      questionAnswer:
        "Currently, StreamVibe does not offer a download feature. However, you can stream content online anytime as long as you have an active internet connection.",
      miniMax: minusIcon,
    },
    {
      questionNum: "07",
      questionContent: "Can I download movies and shows for offline viewing?",
      questionAnswer:
        "Currently, StreamVibe does not offer a download feature. However, you can stream content online anytime as long as you have an active internet connection.",
      miniMax: minusIcon,
    },
    {
      questionNum: "08",
      questionContent: "Can I download movies and shows for offline viewing?",
      questionAnswer:
        "Currently, StreamVibe does not offer a download feature. However, you can stream content online anytime as long as you have an active internet connection.",
      miniMax: minusIcon,
    },
    {
      questionNum: "09",
      questionContent: "Can I download movies and shows for offline viewing?",
      questionAnswer:
        "Currently, StreamVibe does not offer a download feature. However, you can stream content online anytime as long as you have an active internet connection.",
      miniMax: minusIcon,
    },
    {
      questionNum: "10",
      questionContent: "Can I download movies and shows for offline viewing?",
      questionAnswer:
        "Currently, StreamVibe does not offer a download feature. However, you can stream content online anytime as long as you have an active internet connection.",
      miniMax: minusIcon,
    },
  ];
  return (
    <>
      <KnowUsHeader />
      <div className={style.twoQuestionSection}>
        <div className={style.questionsSeciton}>
          {FQAsGeneralData.map((question, index) => (
            <FQAsComponent
              key={index}
              questionNum={question.questionNum}
              questionContent={question.questionContent}
              questionAnswer={question.questionAnswer}
              miniMax={question.miniMax}
            />
          ))}
        </div>
        <div className={style.questionsSeciton}>
          {FQAsGeneralData.map((question, index) => (
            <FQAsComponent
              key={index}
              questionNum={question.questionNum}
              questionContent={question.questionContent}
              questionAnswer={question.questionAnswer}
              miniMax={question.miniMax}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default FAQs;
