import React, { useEffect, useState } from "react";
import Container from "./component/Container";
import Navigator from "./component/Nav";
import "./App.css";
import Projects from "./component/projects";
import LandingPage from "./component/LandingPage";
import ContactMe from "./component/ContactMe";
import AboutMe from "./component/AboutMe/AboutMe";

function App() {
  //states
  const [sanity, setSanity] = useState({});
  const [activeContainer, setActiveContainer] = useState({ container: {} });
  const [urlParams, setUrlParams] = useState();

  //vars for usage on sanity io
  let PROJECT_ID = "s4fylfy4";
  let DATASET = "production";
  let QUERY = encodeURIComponent('*[_type == "post"]');
  let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

  //fetching proejcts from sanity
  useEffect(() => {
    console.log(process.env.REACT_APP_TESTO)
    document.title = "Tyler James Hutchinson";
    const yolo = new URLSearchParams(window.location.search);
    setUrlParams(yolo.get(`blog`));
    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setSanity(data.result))
      .catch((error) => console.error(error.error));
  }, [URL]);

  //useEffect for if urlParams exists scroll to container 3 and select post
  useEffect(() => {
    if (urlParams) {
      let selection = document.querySelector("#container3");
      selection.scrollIntoView({ behavior: "smooth" });
    }
  }, [urlParams]);

  //scrolling in selections for the navbar & URL PARAMS
  const handleScrollTo = (e) => {
    if (e.target.value) {
      let selection = document.querySelector(`#${e.target.value}`);
      selection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="snap">
        <Container id="container1" navAlert={setActiveContainer}>
          <LandingPage />
        </Container>
        <Container id="container2" navAlert={setActiveContainer}>
          <AboutMe />
        </Container>
        <Container id="container3" navAlert={setActiveContainer}>
          <Projects sanity={sanity} URL={URL} urlParams={urlParams} />
        </Container>
        <Container id="container4" navAlert={setActiveContainer}>
          <ContactMe />
        </Container>
      </div>
      <Navigator
        urlParams={urlParams}
        handleScrollTo={handleScrollTo}
        navAlert={activeContainer}
      />
    </>
  );
}

export default App;
