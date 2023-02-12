import React, { useState } from "react";
import "./App.css";
import logo from"./idinaadi.png";
import logo2 from"./bogo.png";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    {
      text: "1. Did the course achieve its stated objectives?",
      options: [
        
      ],
    },
    {
      text: "2. Have you acquired the stated skills?",
      options: [
      ],
    },
    {
      text: "3. Is the syllabus content adequate to achieve the objectives?",
      options: [
        
      ],
    },
    {
      text: "4. Tell us whether the instructor helped you in acquiring the stated skills.",
      options: [
        
      ],
    },
    {
      text: "5. Did the instructor give real life applications of the course?",
      options: [
        
      ],
    },
    {
      text: "6. Were the tests, assignments, projects and grading fair?",
      options: [
        
      ],
    },
    {
      text: "7. Were the instructional approach(es) used appropriate to the course?",
      options: [
        
      ],
    },
    {
      text: "8. Did the instructor motivate you to do your best work?",
      options: [
        
      ],
    },
    {
      text: "9. I gave my best effort in this course.",
      options: [
        
      ],
    },
    {
      text: "10. To what extent you feel the course outcomes have been achieved?",
      options: [
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    // if (isCorrect) {
    //   setScore(score + 1);
    // }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  // const restartGame = () => {
  //   setScore(0);
  //   setCurrentQuestion(0);
  //   setShowResults(false);
  // };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1 className="GCTC" style={{font: "red"}}><u>GEETHANJALI COLLEGE OF ENGINEERING AND TECHNOLOGY</u></h1>

      {/* 2. Current Score  */}
      <img className="logo" src={logo} alt="Logo" />

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          {/* <h1>Final Results</h1> */}
          <h2>
            {/* {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%) */}

            Thank you for submitting a response.
            <br></br>
            <br></br>
            <img className="logo2" src={logo2} alt="Logo" />

          </h2>
          {/* <button onClick={() => restartGame()}>Restart game</button> */}
        </div>
      ) : (
        <>
            <div className="question-card">
              {/* Current Question  */}
              <h2>
                Question: {currentQuestion + 1} out of {questions.length}
              </h2>
              <h3 className="question-text">{questions[currentQuestion].text}</h3>

              {/* List of possible answers  */}
              {/* <ul>
                {questions[currentQuestion].options.map((option) => {
                  return (
                    <li
                      key={option.id}
                      onClick={() => optionClicked(option.isCorrect)}
                    >
                      {option.text}
                    </li>
                  );
                })}
              </ul> */}
            </div>
            <br></br>
            <button type="button" onClick={(option) => optionClicked(option.isCorrect)}>Next</button></>
        
      )}
    </div>
  );
}

export default App;
