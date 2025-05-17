import React, { useState } from "react";
import { InstructionPage } from "./InstructionPage";

export const WelcomePage = () => {
    const [userName, setUserName] = useState("");
    const [onClickBtn, setOnClickBtn] = useState(false);

    function onChange(e) {
        setUserName(e.target.value);
    }

    function ChangePage() {
        if (userName.trim() !== "") {
            setOnClickBtn(true);
        } else {
            alert("Please enter your Name!!");
        }
    }

    if (onClickBtn) {
        return <InstructionPage userName={userName} />;
    }

    return (
        <div className="Fullwp">
            <div className="WelcomePage-div">
                <div className="otherDetails-div">
                    <h1>Welcome to Quiz-Hub</h1>
                </div>
                <div className="image-div">
                    <img
                        className="frontPage-image"
                        src="https://img.freepik.com/premium-vector/thinking-abstract-concept-vector-illustration_107173-24960.jpg?semt=ais_hybrid&w=740"
                        alt="Quiz Hub Welcome"
                    />
                </div>
            </div>

            <div className="description-div">
                <p>
                    <b>
                        We have 5 subjects each with 20 questions, select the subject you want to try and answer the questions and test your knowledge.
                    </b>
                </p>
                <h1>Enter Your Name</h1>
                <input
                    className="EnterName"
                    placeholder="Enter your name"
                    value={userName}
                    onChange={onChange}
                />
                <br />
                <br />
                <button onClick={ChangePage}>Let's Get Started</button>
            </div>
        </div>
    );
};
