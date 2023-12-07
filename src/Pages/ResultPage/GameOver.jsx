/* eslint-disable react/no-danger */
/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import { QuestionConsumer } from '../../Context';
import './GameOver.css';

function GameOver() {
  return (
    <QuestionConsumer>
      {({ quiz, setPageNumber, ansTracker, setAnsTracker }) => {
        return (
          <div className="fin">
            <h1 className="end">Game Over</h1>
            <div className="results">
              <p className="pass">
                <i>PASSED: {ansTracker.passed} </i>
              </p>
              <p className="fail">
                <i>FAILD: {ansTracker.failed} </i>
              </p>{' '}
            </div>
            <h4>
              <i>
                <u>Below are the correct answers</u>
              </i>
            </h4>
            <div>
              {quiz.map(({ question, correct_answer }) => {
                return (
                  <div>
                    <span
                      key={question}
                      dangerouslySetInnerHTML={{ __html: question }}
                    />
                    Answers :
                    <span
                      dangerouslySetInnerHTML={{ __html: correct_answer }}
                    />
                  </div>
                );
              })}
            </div>
            <Link to="/">
              <button
                type="button"
                onClick={() => {
                  setPageNumber(0);
                  setAnsTracker({ passed: 0, failed: 0 });
                }}
              >
                Retry
              </button>
            </Link>
          </div>
        );
      }}
    </QuestionConsumer>
  );
}

export default GameOver;
