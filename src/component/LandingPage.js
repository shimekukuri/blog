import React from "react";
import "./LandingPage.css";
import profilePicture from "../logo.svg";
import clsx from "clsx";

export default function LandingPage() {
  const name = `James Tyler Hutchinson`;
  const nameArray = name.split("");

  console.log(nameArray);

  return (
    <>
      <div className="flex-container">
        <img src={profilePicture} alt="yolo" className="profile-picture" />
        <div className="animated-name-grid">
          {nameArray.map((letter, i) => {
            if (letter === ` `) {
              return (
                <>
                  <span className={clsx(`letter letter${i} space`)}>
                    {letter}
                  </span>
                </>
              );
            }
            return (
              <>
                <span className={clsx(`letter letter${i}`)}>{letter}</span>
              </>
            );
          })}
        </div>
        <div className="animated-bar-container-container">
          <div className="animated-bar-container">
            <div className="animated-bar">
              <div className="animated-bar2">
                <div className="animated-bar3">
                  <div className="animated-bar4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
