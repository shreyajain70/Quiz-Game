import React from "react";
import { useState } from "react";

const BotanyQuestions = {
    botany: [
        {
          question: "Which of the following is a non-flowering plant?",
          options: ["Mango", "Fern", "Rose", "Sunflower"],
          answer: "B"
        },
        {
          question: "Which part of the seed grows into the shoot?",
          options: ["Radicle", "Plumule", "Cotyledon", "Endosperm"],
          answer: "B"
        },
        {
          question: "Which is the largest tree species in the world?",
          options: ["Baobab", "Banyan", "Redwood (Sequoia)", "Oak"],
          answer: "C"
        },
        {
          question: "Which of the following is an Indian cereal crop?",
          options: ["Wheat", "Oats", "Rye", "Barley"],
          answer: "A"
        },
        {
          question: "Which Indian state is known for its biodiversity in medicinal plants?",
          options: ["Gujarat", "Tamil Nadu", "Kerala", "Punjab"],
          answer: "C"
        },
        {
          question: "Which Indian plant is known for its anti-malarial properties?",
          options: ["Neem", "Tulsi", "Cinchona", "Ashwagandha"],
          answer: "C"
        },
        {
          question: "Which Indian crop is mainly grown for oil production?",
          options: ["Rice", "Groundnut", "Cotton", "Sugarcane"],
          answer: "B"
        },
        {
          question: "Which structure is unique to plant cells?",
          options: ["Mitochondria", "Cell wall", "Ribosomes", "Nucleus"],
          answer: "B"
        },
        {
          question: "Which of the following is NOT a plant growth regulator?",
          options: ["Acetic acid", "Auxins", "Gibberellins", "Ethylene"],
          answer: "A"
        },
        {
          question: "Which Indian crop is known for nitrogen fixation?",
          options: ["Wheat", "Rice", "Gram", "Maize"],
          answer: "C"
        },
        {
          question: "Which enzyme is involved in the initial fixation of carbon dioxide in C3 plants?",
          options: ["PEP carboxylase", "Rubisco", "ATP synthase", "NADP reductase"],
          answer: "B"
        },
        {
          question: "What is the primary role of phloem in plants?",
          options: ["Gas exchange", "Transport of water", "Transport of sugars", "Absorption of minerals"],
          answer: "C"
        },
        {
          question: "Which Indian state is famous for the Sunderbans mangrove forest?",
          options: ["Kerala", "West Bengal", "Maharashtra", "Assam"],
          answer: "B"
        },
        {
          question: "Technically speaking, fruit is:",
          options: ["Endosperms", "Angiosperms", "Cosphere", "None of these"],
          answer: "B"
        },
        {
          question: "Which one has main role in fertilization?",
          options: ["Mg++", "Ca++", "Ag", "Na"],
          answer: "B"
        },
        {
          question: "Optimum temperature for photosynthesis is?",
          options: ["10-15ºC", "20-25ºC", "25-30ºC", "35-40ºC"],
          answer: "C"
        },
        {
          question: "During photolysis of water in photosynthesis, which elements are involved?",
          options: ["Magnesium and chlorine", "Magnesium and calcium", "Manganese and chlorine", "Manganese and sodium"],
          answer: "C"
        },
        {
          question: "What tree is revered in many ancient traditions and is known for its longevity and wisdom?",
          options: ["Oak", "Banyan", "Maple", "Pine"],
          answer: "B"
        },
        {
          question: "Which carnivorous plant snaps shut to trap insects?",
          options: ["Venus flytrap", "Pitcher plant", "Sundew", "Bladderwort"],
          answer: "A"
        },
        {
          question: "Which plant is the source of the medicine morphine?",
          options: ["Poppy", "Willow", "Foxglove", "Aloe"],
          answer: "A"
        }
      ]
    };
    


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
        <h3 className="WelcomeBack">Welcome Back....</h3>
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


export const BotanyBody = () => {
 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
const [BotanyResult,setBotanyResult] = useState(false);

  const questions = BotanyQuestions.botany;
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
function ShowBotanyResult(){
  setBotanyResult(true)
}
if(BotanyResult){
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
        {currentQuestionIndex === totalQuestions - 1 ?(
          <button  onClick={ShowBotanyResult}
          disabled={!showAnswer}>
            SUBMIT
          </button>
        ):(
        <button
          onClick={goToNext}
          disabled={currentQuestionIndex === totalQuestions - 1}
        >
          Next
        </button>
        )}
      </div>
    </div>
  );
};


