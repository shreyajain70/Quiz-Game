import React from "react";
import { useState } from "react";

const AstronomyQuestions = {
  Astronomy: [
    {
      question: "Which planet is known as the \"Evening Star\"?",
      options: ["Mars", "Mercury", "Venus", "Jupiter"],
      answer: "C"
    },
    {
      question: "What galaxy do we live in?",
      options: ["Andromeda", "Milky Way", "Whirlpool", "Pegasus"],
      answer: "B"
    },
    {
      question: "Which Indian satellite mission was launched to explore Mars?",
      options: ["Chandrayaan", "Mangalyaan", "Gaganyaan", "Astrosat"],
      answer: "B"
    },
    {
      question: "Who founded ISRO?",
      options: ["A.P.J. Abdul Kalam", "Vikram Sarabhai", "Homi Bhabha", "Satish Dhawan"],
      answer: "B"
    },
    {
      question: "Which was ISRO’s first satellite?",
      options: ["INSAT-1A", "Bhaskara", "Aryabhata", "Rohini"],
      answer: "C"
    },
    {
      question: "Which NASA program did SpaceX partner with to send astronauts to the ISS?",
      options: ["Artemis", "Constellation", "Commercial Crew Program", "Skylab"],
      answer: "C"
    },
    {
      question: "What is the name of SpaceX’s spacecraft used to carry astronauts?",
      options: ["Starliner", "Dragon", "Eagle", "Orion"],
      answer: "B"
    },
    {
      question: "A constellation is:",
      options: ["a car model", "an alignment of planets", "an apparent pattern of stars in the sky", "another name for circles on the celestial sphere"],
      answer: "C"
    },
    {
      question: "Which planet is the fastest rotating planet in the Solar System?",
      options: ["Mercury", "Mars", "Jupiter", "Venus"],
      answer: "C"
    },
    {
      question: "Which of the following is not considered a planet in our Solar System?",
      options: ["Pluto", "Neptune", "Saturn", "Jupiter"],
      answer: "A"
    },
    {
      question: "Which was the first private company to send humans to the International Space Station?",
      options: ["Blue Origin", "Virgin Galactic", "SpaceX", "Boeing"],
      answer: "C"
    },
    {
      question: "Which NASA telescope revolutionized astronomy with its images since 1990?",
      options: ["Spitzer", "Hubble Space Telescope", "Chandra", "Kepler"],
      answer: "B"
    },
    {
      question: "Which galaxy is the nearest large neighbor to the Milky Way?",
      options: ["Triangulum Galaxy", "Andromeda Galaxy", "Whirlpool Galaxy", "Sombrero Galaxy"],
      answer: "B"
    },
    {
      question: "What is a dwarf galaxy?",
      options: ["A galaxy with billions of stars", "A small galaxy with up to a few billion stars", "A galaxy with no stars", "A galaxy larger than the Milky Way"],
      answer: "B"
    },
    {
      question: "What is the primary component of stars?",
      options: ["Oxygen", "Hydrogen", "Carbon", "Nitrogen"],
      answer: "B"
    },
    {
      question: "What is the name of the first artificial satellite sent into space?",
      options: ["Apollo 11", "Sputnik 1", "Voyager 1", "Hubble"],
      answer: "B"
    },
    {
      question: "Which planet is known for its extreme winds and storms, including the Great Red Spot?",
      options: ["Jupiter", "Neptune", "Uranus", "Mars"],
      answer: "A"
    },
    {
      question: "What is the term for a star that suddenly increases greatly in brightness?",
      options: ["Nova", "Quasar", "Pulsar", "Black hole"],
      answer: "A"
    },
    {
      question: "What is the closest star to Earth after the Sun?",
      options: ["Alpha Centauri", "Sirius", "Betelgeuse", "Vega"],
      answer: "A"
    },
    {
      question: "What is the name of the boundary around a black hole beyond which nothing can escape?",
      options: ["Event horizon", "Singularity", "Photon sphere", "Accretion disk"],
      answer: "A"
    }
  ]
}



const QuestionDisplay = ({
  questionObj,
  selectedOption,
  onOptionSelect,
  showAnswer,
}) => {
  const optionLetters = ["A", "B", "C", "D"];

  return (
    <div className="question-card">
      <h1>{questionObj.question}</h1>

      <div className="options-container">
        {questionObj.options.map((option, index) => {
          const letter = optionLetters[index];
          let buttonClass = "";

        
          if (showAnswer) {
            if (letter === questionObj.answer) {
              buttonClass = "correct-answer";
            } else if (selectedOption === letter) {
              buttonClass = "wrong-answer";
            }
          }

          return (
            <button
              key={index}
              className={buttonClass}
              onClick={() => onOptionSelect(letter)}
              disabled={showAnswer}
            >
              {option}
            </button>
          );
        })}
      </div>

      {/* Show correct answer when revealed */}
      {showAnswer && (
        <h3>
          Correct Answer: {questionObj.options[optionLetters.indexOf(questionObj.answer)]}
          ({questionObj.answer})
        </h3>
      )}
    </div>
  );
};
const ResultPage = ({ score, totalQuestions }) => {
  const SymbolObj = [
    { label: "High", sticker: "😎" },
    { label: "Medium", sticker: "😊" },
    { label: "Low", sticker: "😨" }
  ];

  let resultIndex = 0;
  if (score > 14) {
    resultIndex = 0; 
  } else if (score > 8 && score <= 14) {
    resultIndex = 1; 
  } else {
    resultIndex = 2;
  }

  return (
    <>
      <div className="Result-Page-MD">
        <h3 className="WelcomeBack">Welcome Back...</h3>
        <h1 className="Scoreis">Your Score is<br /></h1>
        <h1 className="Sticker">
          {SymbolObj[resultIndex].sticker} {SymbolObj[resultIndex].label}
        </h1>
        <h1 className="Result">{score}</h1>
        <h3 className="Outof">{totalQuestions}</h3>
        <h4 className="Answers">
          Your score is based on the correct Answers you give.
        </h4>
      </div>
    </>
  );
};





export const AstronomyBody = () => {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [AstronomyResult, setAstronomyResult] = useState(false);

  const questions = AstronomyQuestions.Astronomy;
  const totalQuestions = questions.length;


  const handleAnswerSelect = (letter) => {
    setSelectedOption(letter);
    setShowAnswer(true);

  
    if (letter === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
  };


  const goToNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setShowAnswer(false);
    }
  };


  const goToPrevious = () => {
    if (currentQuestionIndex > 0) {
     
      if (showAnswer && selectedOption === questions[currentQuestionIndex].answer) {
        setScore(score - 1);
      }

      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(null);
      setShowAnswer(false);
    }
  };
  const ShowAstronomyResult = () => {
    setAstronomyResult(true)
  }
  if (AstronomyResult) {
    return (
      <ResultPage score={score} totalQuestions={totalQuestions}></ResultPage>
    )
  }
  return (
    <div className="quiz-container">
      <QuestionDisplay
        questionObj={questions[currentQuestionIndex]}
        selectedOption={selectedOption}
        onOptionSelect={handleAnswerSelect}
        showAnswer={showAnswer}
      />

      <h3 className="score-display">
        Score: {score} / {totalQuestions}
      </h3>

      <div className="navigation-buttons">
        <button
          onClick={goToPrevious}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>

        {currentQuestionIndex === totalQuestions - 1 ? (
          <button onClick={ShowAstronomyResult}   disabled={!showAnswer}>
          SUBMIT
          </button>
        ) : (
          <button
            onClick={goToNext}
            disabled={!showAnswer}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};
