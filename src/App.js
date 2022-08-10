import React, { useEffect, useState } from "react";
import Container from "./component/Container";
import Navigator from "./component/Nav";
import PropPassTest from "./component/PropPassTest";
import "./App.css";
import Projects from "./component/projects";
import LandingPage from "./component/LandingPage";

function App() {
  //states
  const [sanity, setSanity] = useState({});

  //vars for usage on sanity io
  let PROJECT_ID = "s4fylfy4";
  let DATASET = "production";
  let QUERY = encodeURIComponent('*[_type == "post"]');
  let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

  //fetching proejcts from sanity
  useEffect(() => {
    document.title = "Tyler James Hutchinson";
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

  return (
    <>
      <div className="snap">
        <Container>
          <LandingPage />
        </Container>
        <Container>
          <Projects sanity={sanity} URL={URL} />
        </Container>
        <Container></Container>
      </div>
      <Navigator />
    </>
  );
}

export default App;
