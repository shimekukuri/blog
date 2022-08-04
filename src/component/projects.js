import React from "react";
import "./projects.css";
import ProjectCard from "./projectcard";

export default function Projects(props) {
  const { inView } = props;

  //animation trigger value
  const animationTrigger = inView ? "card" : "hide";

  return (
    <>
      <div className="flex-center full-size">
        <section className="animated-grid flex-center">
          <div className={animationTrigger}><ProjectCard /></div>
          <div className={animationTrigger}>b</div>
          <div className={animationTrigger}>c</div>
          <div className={animationTrigger}>d</div>
          <div className={animationTrigger}>e</div>
          <div className={animationTrigger}>f</div>
          <div className={animationTrigger}>g</div>
          <div className={animationTrigger}>h</div>
          <div className={animationTrigger}>i</div>
        </section>
      </div>
    </>
  );
}
