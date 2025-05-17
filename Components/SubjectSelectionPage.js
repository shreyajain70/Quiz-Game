import React, { useState } from "react";
import { InstructionPage } from "./InstructionPage";
import { GeographyBody } from "./GeographyPage"; 
import { HistoryBody } from "./HistoryPage";
import { ITBody } from "./ITPage";
import { AstronomyBody } from "./AstronomyPage";
import { BotanyBody } from "./BotanyPage";
import { ZoologyBody } from "./ZoologyPage";

const cards = [
  {
    className: "HistoryMain-Div",
    title: "History",
    img: "https://www.shutterstock.com/shutterstock/photos/2314764103/display_1500/stock-vector-history-textbook-school-book-and-doodle-symbols-on-chalkboard-vector-education-background-2314764103.jpg",
    intro: "In this part we have 20 questions of history including India and World history",
    key:"1",
  },
  {
    className: "GeographyMain-Div",
    title: "Geography",
    img: "https://t4.ftcdn.net/jpg/02/43/47/67/360_F_243476769_d15WIB1ERQTzvRW51NTMOi5guTvoBOrf.jpg",
    intro: "In this part we have 20 questions of Geography including India and World geography",
    key:"2",
  },
  {
    className: "ITMain-Div",
    title: "Information Technology",
    img: "https://img.freepik.com/free-vector/computer-monitor-graphic-animator-creating-video-game-modeling-motion-processing-video-file-using-professional-editor-vector-illustration-graphic-design-art-designer-workplace-concept_74855-13038.jpg?semt=ais_hybrid&w=740",
    intro: "In this part we have 20 questions of Information Technology including India and World",
    key:"3",
  },
  {
    className: "AstronomyMain-Div",
    title: "Astronomy",
    img: "https://media.istockphoto.com/id/1285889683/vector/astronomy-science-male-female-characters-watching-on-stars-and-planets-at-telescope-studying.jpg?s=612x612&w=0&k=20&c=Jqy9JiNGNSu1jjrQP3nK-K2nsJhnJMx1BDtrDGqiil8=",
    intro: "In this part we have 20 questions of Astronomy including India and World",
    key:"4",
  },
  {
    className: "ZoologyMain-Div",
    title: "Zoology",
    img: "https://design-india.com/wp-content/uploads/2022/04/Commissioned-work-Bhadra-forest-Karanataka-1143x800.jpeg",
    intro: "In this part we have 20 questions of Zoology including India and World",
    key:"5",
  },
  {
    className: "BotanyMain-Div",
    title: "Botany",
    img: "https://img.freepik.com/free-vector/flowers_53876-59040.jpg?semt=ais_hybrid&w=740",
    intro: "In this part we have 20 questions of Botany including India and World",
    key:"6",
  },
];

export const WelcomePage = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="SelectionPage-MainDiv">
      <div
        className="SliderContainer"
        style={{ transform: `translateX(-${index * 100}vw)` }}
      >
        {cards.map(({ className, title, img, intro }, i) => (
          <div className={`CardSlide ${className}`} key={i}>
            <div className="CardContent">
              <h1>{title}</h1>
              <img src={img} alt={title} />
              <h4>{intro}</h4>
              <button>Get Started</button>
            </div>
          </div>
        ))}
      </div>

      <div className="SliderButtons">
        <button onClick={handlePrev} aria-label="Previous Slide">
          Previous
        </button>
        <button onClick={handleNext} aria-label="Next Slide">
          Next
        </button>
      </div>
    </div>
  );
};


export const SubjectSelectionPage = () => {
  const [index, setIndex] = useState(0);
  const [instPage, setInstPage] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };


  const handleInstructionClick = () => {
    setSelectedSubject(cards[index].title);
  
  };

 
  if (selectedSubject === "History") {
    return <HistoryBody />;
  }
  if (selectedSubject === "Geography") {
    return <GeographyBody />;
  }
  if (selectedSubject === "Information Technology") {
    return <ITBody />;
  }
  if (selectedSubject === "Astronomy") {
    return <AstronomyBody />;
  }
  if (selectedSubject === "Zoology") {
    return <ZoologyBody />;
  }
  if (selectedSubject === "Botany") {
    return <BotanyBody />;
  }
 

  return (
    <div className="SelectionPage-MainDiv">
      {instPage ? (
        <InstructionPage setInstPage={setInstPage} />
      ) : (
        <>
          <div className={`CardSlide ${cards[index].className}`}>
            <div className="CardContent">
              <h1>{cards[index].title}</h1>
              <img src={cards[index].img} alt={cards[index].title + " image"} />
              <h4>{cards[index].intro}</h4>
              <button onClick={handleInstructionClick} className="subject-btn">
                Get Started
              </button>
            </div>
          </div>

          <div className="SliderButtons">
            <button onClick={handlePrev} aria-label="Previous Slide">
              Previous
            </button>
            <button onClick={handleNext} aria-label="Next Slide">
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};
