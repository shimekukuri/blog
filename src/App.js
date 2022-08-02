import React, {useReducer} from "react";
import Container from "./component/Container";
import Navigator from "./component/Nav";
import PropPassTest from "./component/PropPassTest";
import "./App.css";
import Projects from "./component/projects";

function App() {

  return (
    <>
      <div className="snap">
        <Container>
          <PropPassTest isAThing="athing"/>
        </Container>
        <Container>
          <Projects />
        </Container>
        <Container>
          <PropPassTest isAnotherAnotherThing="anotherAnotherThing"/>
        </Container>
      </div>
      <Navigator />
    </>
  );
}

export default App;
