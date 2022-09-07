import React from "react";
import "./LandingPage.css";
import clsx from "clsx";

export default function LandingPage(props) {
  const { id } = props;
  const name = `James Tyler Hutchinson`;
  const nameArray = name.split("");

  const containerClasses = clsx("flex-container", id)

  return (
    <>
      <div className={containerClasses}>
        <div className="animated-name-grid">
          {nameArray.map((letter, i) => {
            if (letter === ` `) {
              return (
                <>
                  <span key={letter + i} className={clsx(`letter letter${i} space`)}>
                    {letter}
                  </span>
                </>
              );
            }
            return (
              <>
                <span key={letter + i} className={clsx(`letter letter${i}`)}>{letter}</span>
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
