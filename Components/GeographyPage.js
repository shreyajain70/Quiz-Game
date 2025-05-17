import React from "react";
import { useState } from "react";

const GeographyQuestions = {
    Geography: [
        {
          question: "Which is the largest continent in the world?",
          options: ["Africa", "Asia", "Europe", "North America"],
          answer: "B"
        },
        {
          question: "Which of the following countries is an island nation?",
          options: ["Nepal", "Germany", "Japan", "Canada"],
          answer: "C"
        },
        {
          question: "Which line divides the Earth into the Northern and Southern Hemispheres?",
          options: ["Prime Meridian", "Equator", "Tropic of Cancer", "Tropic of Capricorn"],
          answer: "B"
        },
        {
          question: "Which is the largest state of India by area?",
          options: ["Maharashtra", "Rajasthan", "Uttar Pradesh", "Madhya Pradesh"],
          answer: "B"
        },
        {
          question: "Which mountain range separates India from China?",
          options: ["Aravalli", "Western Ghats", "Himalayas", "Vindhya"],
          answer: "C"
        },
        {
          question: "Which is the southernmost point of India?",
          options: ["Kanyakumari", "Indira Point", "Rameswaram", "Nicobar"],
          answer: "B"
        },
        {
          question: "The Tropic of Cancer passes through how many Indian states?",
          options: ["5", "8", "9", "10"],
          answer: "D"
        },
        {
          question: "Before Mount Everest was discovered, which mountain was considered the highest in the world?",
          options: ["Nanda Devi", "K2", "Kangchenjunga", "Annapurna"],
          answer: "C"
        },
        {
          question: "The total area of the Earth is:",
          options: ["510,072,000 sq. km", "400,000,000 sq. km", "610,000,000 sq. km", "700,000,000 sq. km"],
          answer: "A"
        },
        {
          question: "The lowest point on Earth is:",
          options: ["Death Valley", "Mariana Trench", "Dead Sea", "Lake Assal"],
          answer: "C"
        },
        {
          question: "Which country is known as the \"Land of the Rising Sun\"?",
          options: ["China", "Japan", "South Korea", "Vietnam"],
          answer: "B"
        },
        {
          question: "Kerala is also known as:",
          options: ["The Land of Five Rivers", "The Spice Garden of India", "The Land of the Rising Sun", "The Desert State of India"],
          answer: "B"
        },
        {
          question: "The longest river in the world is:",
          options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
          answer: "B"
        },
        {
          question: "The capital of Andaman and Nicobar Islands is:",
          options: ["Port Blair", "Kavaratti", "Panaji", "Daman"],
          answer: "A"
        },
        {
          question: "The only active volcano in India is located at:",
          options: ["Barren Island", "Narcondam Island", "Lakshadweep", "Minicoy"],
          answer: "A"
        },
        {
          question: "The Indian state with the highest rainfall is:",
          options: ["Assam", "Meghalaya", "Kerala", "West Bengal"],
          answer: "B"
        },
        {
          question: "Which is the smallest continent by area?",
          options: ["Europe", "Australia", "Antarctica", "South America"],
          answer: "B"
        },
        {
          question: "The largest island in the world is:",
          options: ["Borneo", "Madagascar", "Greenland", "Iceland"],
          answer: "C"
        },
        {
          question: "Which continent is known as the 'Dark Continent'?",
          options: ["Africa", "South America", "Asia", "Australia"],
          answer: "A"
        },
        {
          question: "Which country is called the 'Land of the Midnight Sun'?",
          options: ["Sweden", "Norway", "Canada", "Russia"],
          answer: "B"
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

  

  export const GeographyBody = () => {
    
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [GeographyResult, setGeographyResult]= useState(false)
  
    const questions = GeographyQuestions.Geography;
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
  
    const ShowGeographyResult = ()=>{
      setGeographyResult(true)
    }
    if(GeographyResult){
      return(
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
          
          {currentQuestionIndex === totalQuestions -1 ?(
            <button onClick={ShowGeographyResult} 
            disabled={!showAnswer}
            >
              SUBMIT
            </button>
          ):(
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
  