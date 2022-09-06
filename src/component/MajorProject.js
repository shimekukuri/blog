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
            <div className="title-container-project">
              <div className="flex-devide">
                <div className="project-header">About me</div>
                <div className="justify-image">
                  <img
                    className="profile"
                    src="https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"
                    alt="yolo"
                  />
                </div>
              </div>
            </div>
            <div className="body-project">
              <div className="mp-body-text">
                <p>
                  Thanks for stopping by I'm James, an inspiring web developer
                  with an associates in computer networking, and a bechelors of
                  Business. After graduating I spent two years working in retail
                  management.
                </p>
                <p>
                  In my spare time I enjoy spending time with my beautiful new
                  baby girl and wife. 
                </p>
              </div>
            </div>
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
