import React, { useEffect, useState } from "react";
import Container from "./component/Container";
import Navigator from "./component/Nav";
import "./App.css";
import Projects from "./component/projects";
import LandingPage from "./component/LandingPage";
import MajorProject from "./component/MajorProject";
import ContactMe from "./component/ContactMe";

function App() {
  //states
  const [sanity, setSanity] = useState({});
  const [scrollTo, setScrollTo] = useState();
  const [urlParams, setUrlParams] = useState();

  //vars for usage on sanity io
  let PROJECT_ID = "s4fylfy4";
  let DATASET = "production";
  let QUERY = encodeURIComponent('*[_type == "post"]');
  let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

  //fetching proejcts from sanity
  useEffect(() => {
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

  //scrolling in selections for the navbar
  const handleScrollTo = (e) => {
    let selection = document.querySelector(`#${e.target.value}`);
    selection.scrollIntoView({ behavior: "smooth" });
    console.log(urlParams);
  };

  return (
    <>
      <div className="snap">
        <Container id="container1">
          <LandingPage />
        </Container>
        <Container id="container2">
          <MajorProject />
        </Container>
        <Container id="container3">
          <Projects sanity={sanity} URL={URL} />
        </Container>
        <Container id="container4">
          <ContactMe />
        </Container>
      </div>
      <Navigator urlParams={urlParams} handleScrollTo={handleScrollTo} />
    </>
  );
}

export default App;
