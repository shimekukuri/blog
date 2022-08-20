import React, { useState } from "react";
import "./MajorProject.css";
import clsx from "clsx";

export default function MajorProject(props) {
  const { inView } = props;

  return (
    <>
      {inView && (
        <div className="screen-container">
          <div className="first-containers">
            <div className="title-container-project">Title</div>
            <div className="body-project">Body</div>
            <div className="socials-project">Socials</div>
          </div>
          <div className="first-containers">
            <div className="title-container-project">Title</div>
            <div className="body-project">Body</div>
            <div className="socials-project">Socials</div>
          </div>
          <div className="first-containers">
            <div className="title-container-project">Title</div>
            <div className="body-project">Body</div>
            <div className="socials-project">Socials</div>
          </div>
        </div>
      )}
    </>
  );
}
