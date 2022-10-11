import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import img from "./Tyler_Hutchinson_Resume .jpg";
import "./AboutMe.css";
import "../MajorProject.css";

export default function AboutMe(props) {
  const { inView } = props;
  const [activeAboutMe, setActiveAboutMe] = useState(false);
  const [escapeSnapScrollBug, setEscapeSnapScrollBug] = useState(false);
  const [ref1, inView1] = useInView({
    threshold: 0.5,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.5,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (!activeAboutMe) return;
    document
      .querySelector(`#${activeAboutMe}`)
      .scrollIntoView({ behavior: "smooth" });
  }, [activeAboutMe]);
  // fix snap scroll bug
  useEffect(() => {
    const timerId = setTimeout(() => {
      setEscapeSnapScrollBug(true);
    }, 1000);

    return () => {
      clearTimeout(timerId);
      setEscapeSnapScrollBug(false);
    };
  }, [inView]);
  const snapStyles = clsx(
    "full-w flex over-flow-x",
    inView && escapeSnapScrollBug ? "snap-container" : ""
  );
  //
  const handleScrollIntoView = (val) => {
    setActiveAboutMe(val);
  };

  //navButton active
  const nav1 = clsx(
    "about-nav-buttons",
    "title-background-image-1",
    inView1 ? "active-nav-button" : ""
  );
  const nav2 = clsx(
    "about-nav-buttons",
    "title-background-image-2",
    inView2 ? "active-nav-button" : ""
  );
  const nav3 = clsx(
    "about-nav-buttons",
    "title-background-image-3",
    inView3 ? "active-nav-button" : ""
  );

  return (
    <>
      {inView && (
        <div className="vh-full-w">
          <div
            style={{
              position: "absolute",
              top: "0px",
              zIndex: "1",
              width: "100%",
              height: "10%",
            }}
          >
            <div className="flex justify align">
              <div className="about-nav">
                <div
                  className={nav1}
                  onClick={() => handleScrollIntoView("aboutMe1")}
                >
                  About Me
                </div>
                <div
                  className={nav2}
                  onClick={() => handleScrollIntoView("aboutMe2")}
                >
                  Resume
                </div>
                <div
                  className={nav3}
                  onClick={() => handleScrollIntoView("aboutMe3")}
                >
                  Projects
                </div>
              </div>
            </div>
          </div>
          <span className={snapStyles}>
            <div className="full-w snap-child p-1-L p-1-R">
              <div className="full-w flex justify align">
                <div className="container-fill ">
                  <div
                    ref={ref1}
                    id="aboutMe1"
                    className="first-containers border-r"
                  >
                    <div className="title-container-project title-background-image-1">
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
                          Thanks for stopping by I'm James, an inspiring web
                          developer with an associates in computer networking,
                          and a bechelors of Business. After graduating I spent
                          two years working in retail management. Now I'm living
                          my dream of Programing.
                        </p>
                        <p>
                          I love to learn new things, I'm a little obsessive
                          when it comes to it. If I have a question I won't stop
                          searching until I have the answer. I'm purely self
                          taught, but I've taken multiple online courses and
                          have read every doc I can get my hand on.
                        </p>
                        <p>
                          In my spare time I enjoy spending time with my
                          beautiful new baby girl and wife. Avid collector of
                          video games, vinyl records, and rare books.
                        </p>
                        <h4> Top 5</h4>
                        <ul>
                          <li>Authentic Ramen</li>
                          <li>Any FromSoftware title</li>
                          <li>
                            Nausicaa of the valley of the wind (manga) by Hayao
                            Miyazaki
                          </li>
                          <li>Tolkien</li>
                          <li>Programing</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="full-w snap-child p-1-L p-1-R">
              <div className="full-w flex justify align">
                <div className="container-fill">
                  <div
                    ref={ref2}
                    id="aboutMe2"
                    className="first-containers animate-container-mp-2"
                  >
                    <div className="title-container-project title-background-image-2">
                      <div className="project-header">Resume</div>
                    </div>
                    <div className="body-project">
                      <a href={img} download="Tyler_James_Hutchinson_Resume">
                        Download resume PDF
                      </a>
                      <div className="mp-body-text">
                        <h3>Education</h3>
                        <div style={{ fontWeight: "bolder" }}>
                          Ferris State University
                        </div>
                        <div>Bachelors of Business</div>
                        <div style={{ fontWeight: "bolder" }}>
                          Saint Clair County Community College
                        </div>
                        <div>Associates of computer newtworking</div>
                        <h3>References</h3>
                        <div style={{ fontWight: "bolder" }}>Jackson Hicks</div>
                        <div style={{ opacity: "0.5" }}>
                          (Contanct Information available upon request)
                        </div>
                        <div style={{ fontWight: "bolder" }}>Demita Luquer</div>
                        <div style={{ opacity: "0.5" }}>
                          (Contanct Information available upon request)
                        </div>
                        <div style={{ fontWight: "bolder" }}>Chris Sanders</div>
                        <div style={{ opacity: "0.5" }}>
                          (Contanct Information available upon request)
                        </div>
                        <h3>Work History</h3>
                        <div className="mp-body-text">
                          <div style={{ fontWeight: "bolder" }}>Meijer</div>
                          <li>Overnight General Merchandise manager</li>
                          <li>2020-2021</li>
                          <div style={{ fontWeight: "bolder" }}>
                            Ollies Bargain outlet
                          </div>
                          <li>Co General Manager</li>
                          <li>2021-2022</li>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="full-w snap-child p-1-L p-1-R">
              <div className="full-w flex justify align">
                <div className="container-fill">
                  <div
                    ref={ref3}
                    id="aboutMe3"
                    className="first-containers animate-container-mp-3"
                  >
                    <div className="title-container-project title-background-image-3">
                      <div className="project-header">Major Projects</div>
                    </div>
                    <div className="body-project">
                      <div className="mp-body-text">
                        <h3>Docker, express and postgresql</h3>
                        <p>
                          Docker container utilizing both express and
                          postgresql, easily doployable simply change the schema
                          in the initalize function of the express image, and
                          write in your own sql query. By default there is no
                          way to access the database from the outside. I built
                          this to serve as the database for the contact form for
                          this website.
                        </p>
                        <h4
                          className="link-text"
                          onClick={() =>
                            window.open(
                              "https://github.com/shimekukuri/DockerComposeSQLExpress"
                            )
                          }
                        >
                          Github
                        </h4>
                      </div>
                      <div className="mp-body-text">
                        <h3>Ecom website</h3>
                        <div>Coming Soon</div>
                      </div>
                      <div className="mp-body-text">
                        <h3>React Native App</h3>
                        <div>Coming Soon</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
      )}
    </>
  );
}
