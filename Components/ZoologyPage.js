import React from "react";
import { useState } from "react";

const ZoologyQuestions = {
  zoology: [
    {
      question: "Which animal lays eggs but is a mammal?",
      options: ["Kangaroo", "Bat", "Platypus", "Whale"],
      answer: "C"
    },
    {
      question: "Which bird is known for mimicking human speech?",
      options: ["Sparrow", "Owl", "Parrot", "Pigeon"],
      answer: "C"
    },
    {
      question: "Which Indian river dolphin is endangered and lives in the Ganges?",
      options: ["Blue Whale", "Irrawaddy Dolphin", "Ganges River Dolphin", "Bottlenose Dolphin"],
      answer: "C"
    },
    {
      question: "Kaziranga National Park is famous for which animal?",
      options: ["Asiatic Lion", "One-horned Rhinoceros", "Indian Elephant", "Snow Leopard"],
      answer: "B"
    },
    {
      question: "Which species of bear is found in the Himalayan region?",
      options: ["Grizzly Bear", "Polar Bear", "Sloth Bear", "Himalayan Brown Bear"],
      answer: "D"
    },
    {
      question: "Which is the smallest wild cat found in India?",
      options: ["Bengal Cat", "Leopard Cat", "Rusty-Spotted Cat", "Jungle Cat"],
      answer: "C"
    },
    {
      question: "What is the common name for the Indian Cobra?",
      options: ["King Snake", "Naja", "Hooded Snake", "Spectacled Cobra"],
      answer: "D"
    },
    {
      question: "Which Indian reptile is a critically endangered crocodilian species?",
      options: ["Mugger", "Saltwater Crocodile", "Gharial", "Monitor Lizard"],
      answer: "C"
    },
    {
      question: "The excretory organs of earthworm are:",
      options: ["Nephridia", "Malpighian tubules", "Kidneys", "Flame cells"],
      answer: "A"
    },
    {
      question: "Which of the following is a cold-blooded animal?",
      options: ["Cow", "Pigeon", "Crocodile", "Whale"],
      answer: "C"
    },
    {
      question: "Which of the following animals is a marsupial?",
      options: ["Kangaroo", "Elephant", "Bat", "Whale"],
      answer: "A"
    },
    {
      question: "Which animal is the state animal of Madhya Pradesh?",
      options: ["Barasingha", "Tiger", "Elephant", "Leopard"],
      answer: "A"
    },
    {
      question: "Which animal has the most powerful bite in the world?",
      options: ["Hippopotamus", "Saltwater crocodile", "Jaguar", "Gorilla"],
      answer: "B"
    },
    {
      question: "Which of the following is the tallest flying bird in the world?",
      options: ["Sarus Crane", "Black Stork", "Andean Condor", "Bar-headed Goose"],
      answer: "A"
    },
    {
      question: "If the elephant is the heaviest land animal, which of the following is the second heaviest?",
      options: ["Hippopotamus", "Gorilla", "Bison", "Rhinoceros"],
      answer: "D"
    },
    {
      question: "Which animal has the longest tongue relative to its body size?",
      options: ["Frog", "Chameleon", "Anteater", "Giraffe"],
      answer: "B"
    },
    {
      question: "Which animal is famous for changing its color to blend into its surroundings?",
      options: ["Octopus", "Chameleon", "Cuttlefish", "All of the above"],
      answer: "D"
    },
    {
      question: "Which animal is known for its ability to regenerate lost limbs?",
      options: ["Starfish", "Frog", "Crab", "Lobster"],
      answer: "A"
    },
    {
      question: "Which animal is known for building dams in rivers?",
      options: ["Beaver", "Otter", "Platypus", "Muskrat"],
      answer: "A"
    },
    {
      question: "Which animal is known as the ‘King of the Arctic’?",
      options: ["Polar bear", "Walrus", "Arctic fox", "Narwhal"],
      answer: "A"
    }
  ],
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


export const ZoologyBody = () => {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [ZoologyResult, setZoologyResult] = useState(false);

  const questions = ZoologyQuestions.zoology;
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

  function ShowZoologyResult() {
    setZoologyResult(true)
  }
  if (ZoologyResult) {
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
          <button onClick={ShowZoologyResult}
            disabled={!showAnswer}>
            SUBMIT
          </button>
        ) : (
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


