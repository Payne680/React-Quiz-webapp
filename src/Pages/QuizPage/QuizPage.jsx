/* eslint-disable react/no-danger */
import React from 'react';
import { Link } from 'react-router-dom';
import { QuestionConsumer } from '../../Context';
import './QuizPage.css';

function QuizPage() {
  return (
    <QuestionConsumer>
      {({ quiz, pageNumber, setPageNumber, ansTracker, setAnsTracker }) => {
        const validateAns = (ans, correctAns) => {
          if (ans === correctAns) {
            setAnsTracker({
              passed: ansTracker.passed + 1,
              failed: ansTracker.failed,
            });
          } else {
            setAnsTracker({
              passed: ansTracker.passed,
              failed: ansTracker.failed + 1,
            });
          }
        };

        return (
          quiz.length > 0 && (
            <div className="main">
              <div className="quiz">
                <h1 className="title">
                  <i>Quiz Game</i>
                </h1>
                <h4>Category: {quiz[pageNumber].category}</h4>
                <p
                  dangerouslySetInnerHTML={{
                    __html: quiz[pageNumber].question,
                  }}
                />

                <div className="answers">
                  <Link
                    to={
                      quiz.length - 1 === pageNumber
                        ? '/result'
                        : `/quiz/${pageNumber}`
                    }
                  >
                    <button
                      type="button"
                      className="true"
                      value="True"
                      onClick={(e) => {
                        validateAns(
                          e.target.value,
                          quiz[pageNumber].correct_answer
                        );
                        setPageNumber((prevNum) => prevNum + 1);
                      }}
                    >
                      True
                    </button>
                  </Link>

                  <Link
                    to={
                      quiz.length - 1 === pageNumber
                        ? '/result'
                        : `/quiz/${pageNumber}`
                    }
                  >
                    <button
                      type="button"
                      className="false"
                      value="False"
                      onClick={(e) => {
                        validateAns(
                          e.target.value,
                          quiz[pageNumber].correct_answer
                        );
                        setPageNumber((prevNum) => prevNum + 1);
                      }}
                    >
                      False
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )
        );
      }}
    </QuestionConsumer>
  );
}

export default QuizPage;
