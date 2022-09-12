import React from "react";
import "./MajorProject.css";

export default function MajorProject(props) {
  const { inView } = props;

  return (
    <>
      {inView && (
        <div className="screen-container">
          <div className="first-containers animate-container-mp-1">
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
                  management. Now I'm living my dream of Programing.
                </p>
                <p>
                  In my spare time I enjoy spending time with my beautiful new
                  baby girl and wife. Avid collector of video games, vinyl
                  records, and rare books.
                </p>
                <h4> Top 5</h4>
                <ul>
                  <li>Authentic Ramen</li>
                  <li>Any FromSoftware title</li>
                  <li>
                    Nausicaa of the valley of the wind (manga) by Hayao Miyazaki
                  </li>
                  <li>Tolken</li>
                  <li>Programing</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="first-containers animate-container-mp-2">
            <div className="title-container-project">
              <div className="project-header">Resume</div>
            </div>
            <div className="body-project">
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
          <div className="first-containers animate-container-mp-3">
            <div className="title-container-project">
              <div className="project-header">Major Projects</div>
            </div>
            <div className="body-project">
              <div className="mp-body-text">
                <h3>Docker, express and postgresql</h3>
                <p>
                  Docker container utilizing both express and postgresql, easily
                  doployable simply change the schema in the initalize function
                  of the express image, and write in your own sql query. By
                  default there is no way to access the database from the
                  outside. I built this to serve as the database for the contact
                  form for this website. 
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
