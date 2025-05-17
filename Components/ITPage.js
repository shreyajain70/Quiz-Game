import React from "react";
import { useState } from "react";

const ITQuestions = {
    IT: [
        {
          question: "Which programming language is known as the “mother of all languages”?",
          options: ["Java", "C", "Python", "HTML"],
          answer: "B"
        },
        {
          question: "What is the full form of \"USB\"?",
          options: ["Universal Software Bus", "United System Bus", "Universal Serial Bus", "Unused Storage Base"],
          answer: "C"
        },
        {
          question: "Which Indian is the CEO of Google (Alphabet Inc.)?",
          options: ["Satya Nadella", "Sundar Pichai", "Arvind Krishna", "Nandan Nilekani"],
          answer: "B"
        },
        {
          question: "What is the name of India’s national digital identity project?",
          options: ["DigiID", "JanID", "Aadhaar", "BharatID"],
          answer: "C"
        },
        {
          question: "Which Indian developed the Hotmail email service?",
          options: ["Vinod Dham", "Narayana Murthy", "Sabeer Bhatia", "Nandan Nilekani"],
          answer: "C"
        },
        {
          question: "What does NIC stand for in Indian IT?",
          options: ["National IT Corporation", "National Informatics Centre", "New India Computers", "National Internet Channel"],
          answer: "B"
        },
        {
          question: "Which company is known as the pioneer of personal computers?",
          options: ["IBM", "Apple", "Microsoft", "Google"],
          answer: "A"
        },
        {
          question: "What is the primary function of an operating system?",
          options: ["Manage hardware", "Run applications", "Provide user interface", "All of the above"],
          answer: "D"
        },
        {
          question: "Which is the first search engine on the Internet?",
          options: ["Google", "Archie", "Yahoo", "Bing"],
          answer: "B"
        },
        {
          question: "What is the full form of URL?",
          options: ["Uniform Resource Locator", "Uniform Resource Link", "Unified Resource Locator", "Uniform Reference Link"],
          answer: "A"
        },
        {
          question: "Which organization launched Digital India campaign?",
          options: ["NASSCOM", "Ministry of Electronics & IT", "ISRO", "NIC"],
          answer: "B"
        },
        {
          question: "What does \"debugging\" refer to?",
          options: ["Writing code", "Testing code", "Fixing errors in code", "Documenting code"],
          answer: "C"
        },
        {
          question: "How do you properly comment on a single line in JavaScript?",
          options: ["# This is a comment.", "// This is a comment.", "/* This is a comment. */", "<!-- This is a comment. -->"],
          answer: "B"
        },
        {
          question: "What is the index of the first element in an array?",
          options: ["0", "1", "-1", "10"],
          answer: "A"
        },
        {
          question: "What is the correct syntax to call an external JavaScript file in an HTML document?",
          options: ["<script src=\"jsfile\"></script>", "<script link=\"jsfile\"></script>", "<js src=\"jsfile\"></js>", "<js link=\"jsfile\"></js>"],
          answer: "A"
        },
        {
          question: "What is the purpose of a firewall in IT security?",
          options: ["Protecting against physical theft", "Filtering network traffic", "Monitoring employee behavior", "Managing software licenses"],
          answer: "B"
        },
        {
          question: "What does HTTP stand for?",
          options: ["HyperText Transfer Protocol", "Hyper Terminal Transfer Protocol", "HyperText Transmission Process", "Hyper Transfer Text Program"],
          answer: "A"
        },
        {
          question: "What is cloud computing?",
          options: ["Storing and accessing data over the internet", "Using floppy disks for storage", "Printing documents", "Coding in the cloud"],
          answer: "A"
        },
        {
          question: "Which sensor is commonly used in modern AI robots for obstacle detection?",
          options: ["Temperature sensor", "Ultrasonic sensor", "Humidity sensor", "Light sensor"],
          answer: "B"
        },
        {
          question: "What is the name for the space inside which a robot unit operates?",
          options: ["Environment", "Spatial base", "Work envelope", "Exclusion zone"],
          answer: "C"
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

  
  

  export const ITBody = () => {
  
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [ITResult,setITResult] = useState(false);
  
    const questions = ITQuestions.IT;
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
  function ShowITResult(){
setITResult(true)
  }
  if(ITResult){
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
            <button
            onClick={ShowITResult}
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
  