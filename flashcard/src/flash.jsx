import { useState } from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { RiQuestionAnswerFill } from "react-icons/ri";
function Flash({ questions }) {
  const [index, setIndex] = useState(1);
  const [click, setClick] = useState(true);
  function increaseCount() {
    setIndex((index) => ((index + 1) % questions.length) + 1);
  }
  function decreaseCount() {
    if (index == 1) {
      setIndex(questions.length);
      return;
    }

    setIndex((index) => index - 1);
  }
  function findClick() {
    setClick(!click);
  }
  function revertBack() {
    setClick(!click);
  }
  return (
    <div className={click ? "container" : "noncontainer"}>
      {click ? (
        <>
          <div className="ques">{questions[index - 1].question}</div>
          <div className="buttons">
            <button onClick={decreaseCount} className="btn">
              <FaAngleDoubleLeft />
            </button>
            <button onClick={findClick} className="btn">
              <RiQuestionAnswerFill />
            </button>
            <button onClick={increaseCount} className="btn">
              <FaAngleDoubleRight />
            </button>
          </div>
        </>
      ) : (
        <>
          <div>{questions[index - 1].answer}</div>
          <button onClick={revertBack} className="btn1">
            <RiQuestionAnswerFill />
          </button>
        </>
      )}
    </div>
  );
}
export default Flash;
