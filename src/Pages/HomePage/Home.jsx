import React from 'react';
import { Link } from 'react-router-dom';
import { QuestionConsumer } from '../../Context';
import './Home.css';

function Home() {
  return (
    <QuestionConsumer>
      {({ pageNumber }) => {
        return (
          <div className="wrapper">
            <h1>Take the quiz.</h1>
            <h4>Whenever, you want.</h4>
            <h2>
              <u>How to play</u>
            </h2>
            <ul>
              <li>click on ‘Begin’ button</li>
              <li>
                For each of the questions you have two options True OR False
              </li>
              <li>Click on the answer that you think is right</li>
              <li>
                And there is no posibility to go back to the previous question
              </li>
              <li>Continue until you have answered all of the questions</li>
            </ul>
            <Link to={`/quiz/${pageNumber}`}>
              <button type="button">Begin</button>
            </Link>
          </div>
        );
      }}
    </QuestionConsumer>
  );
}

export default Home;
