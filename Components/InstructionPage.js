import React from "react";
import { useState } from "react";
import { HistoryBody } from "./HistoryPage";
import { GeographyBody } from "./GeographyPage";
import { ITBody } from "./ITPage";
import { AstronomyBody } from "./AstronomyPage";
import { ResultPage } from "./ResultPage";
import { SubjectSelectionPage } from "./SubjectSelectionPage";

export const InstructionPage = () => {
  const [instPage,setHistoryPage]=useState(false);
  function AddHistoryPage(){
if(setHistoryPage){
  setHistoryPage(true)
}
  }
  if(instPage===true){
   return(
<SubjectSelectionPage></SubjectSelectionPage>
   )
  }
  

  return(
    <>
    <div className="InstrustionPage-maindiv">
    <div className="instruction-container">
      <h1>Hello Welcome to Quiz-Hub</h1>
      <h3>Here are some instructions to be considered are:-</h3>
      <h4>
        1. We have 20 questions and options for each question to choose the suitable answer for the question.<br />
        2. Choose your answer wisely, as the option once submitted, cannot be changed.<br />
        3. If answer is not right, correct answer will shown on the screen.<br />
        4. And if the answer is right the score counting will increase.<br />
        5. At the end your knowledge on this particular subject will be shown as High, Medium, Low.
      </h4>
      <button className="instruction-btn" onClick={AddHistoryPage}>Start your Quiz</button>
    </div>
    </div>
    </>
)
}