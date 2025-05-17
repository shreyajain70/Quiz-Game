import React, { useState } from "react";

const HistoryQuestions = {
  History: [
    {
      question: "Who was the first President of the United States?",
      options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
      answer: "B"
    },
    {
      question: "Which year did World War I begin?",
      options: ["1914", "1918", "1939", "1920"],
      answer: "A"
    },
    {
      question: "Who was the first President of independent India?",
      options: ["Jawaharlal Nehru", "Rajendra Prasad", "Sardar Patel", "B.R. Ambedkar"],
      answer: "B"
    },
    {
      question: "Who wrote the Indian national anthem \"Jana Gana Mana\"?",
      options: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Subramania Bharati", "Sarojini Naidu"],
      answer: "A"
    },
    {
      question: "Who was the first woman Prime Minister of India?",
      options: ["Indira Gandhi", "Sarojini Naidu", "Sonia Gandhi", "Pratibha Patil"],
      answer: "A"
    },
    {
      question: "During the First World War, which country signed the Peace Treaty (1917) with Germany?",
      options: ["England", "USA", "Russia", "Austria"],
      answer: "C"
    },
    {
      question: "Who were the Axis powers in World War II?",
      options: ["Poland, Japan, Germany", "Italy, Japan, Britain", "Germany, Italy, France", "Germany, Italy, Japan"],
      answer: "D"
    },
    {
      question: "Greenland was a colony of which country until 1981?",
      options: ["Denmark", "Norway", "USA", "UK"],
      answer: "A"
    },
    {
      question: "Who was the founder of the Haryanka Dynasty?",
      options: ["Ajatashatru", "Harshvardhan", "Bimbisara", "Ghananand"],
      answer: "C"
    },
    {
      question: "The Rowlatt Act was passed in:",
      options: ["1905", "1913", "1919", "1925"],
      answer: "C"
    },
    {
      question: "Who founded the organization “Servants of Indian Society”?",
      options: ["Dr. B.R. Ambedkar", "Mahatma Gandhi", "Dayanand Saraswati", "Gopal Krishna Gokhale"],
      answer: "D"
    },
    {
      question: "In which year did the Jallianwala Bagh massacre take place?",
      options: ["1919", "1920", "1930", "1942"],
      answer: "A"
    },
    {
      question: "The United Nations was established in which year?",
      options: ["1919", "1945", "1950", "1965"],
      answer: "B"
    },
    {
      question: "Who was the first woman ruler of India?",
      options: ["Razia Sultana", "Rani Laxmi Bai", "Nur Jahan", "Ahilyabai Holkar"],
      answer: "A"
    },
    {
      question: "Who gave the slogan \"Do or Die\" during the Quit India Movement?",
      options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Patel"],
      answer: "B"
    },
    {
      question: "What was the name of Hitler’s autobiography?",
      options: ["Mein Land", "My Germany", "Mein Kampf", "Nazi Life"],
      answer: "C"
    },
    {
      question: "Who invented the printing press?",
      options: ["Isaac Newton", "Galileo Galilei", "Johannes Gutenberg", "Alexander Graham Bell"],
      answer: "C"
    },
    {
      question: "Which country was formerly known as Persia?",
      options: ["Iraq", "Iran", "Turkey", "Syria"],
      answer: "B"
    },
    {
      question: "The Statue of Liberty was gifted to the USA by which country?",
      options: ["Italy", "Britain", "France", "Germany"],
      answer: "C"
    },
    {
      question: "When was the Constitution of India adopted?",
      options: ["15th August 1947", "26th January 1950", "26th November 1949", "2nd October 1947"],
      answer: "C"
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
  const SymbolObj = [{ High: "😎" }, { Medium: "😊" }, { Low: "😨" }];

  let sticker = "";
  if (score > 14) {
    sticker = SymbolObj[0].High;
  } else if (score > 8 && score <= 14) {
    sticker = SymbolObj[1].Medium;
  } else {
    sticker = SymbolObj[2].Low;
  }

  return (
    <>
      <div className="Result-Page-MD">
        <h3 className="WelcomeBack">Welcome Back...</h3>
        <h1 className="Scoreis">Your Score is<br></br></h1>
        <h1 className="Sticker">{sticker}</h1>
        <h1 className="Result">{score}</h1>
        <h3 className="Outof">{totalQuestions}</h3>
        <h4 className="Answers">Your score is based on the correct Answers you give. </h4>
      </div>
    </>
  );
};


export const HistoryBody = () => {
  const questions = HistoryQuestions.History;
  const totalQuestions = questions.length;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showResult, setShowResult] = useState(false);

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

  const handleShowResult = () => {
    setShowResult(true);
  };

  if (showResult) {
    return <ResultPage score={score} totalQuestions={totalQuestions} />;
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
          <button
            onClick={handleShowResult}
            disabled={!showAnswer}
          >
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
