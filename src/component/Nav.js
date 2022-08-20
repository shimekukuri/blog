import React from "react";
import clsx from "clsx";
import "./Nav.css";

export default function Navigator(props) {
  const { children } = props;


  const handleNavActive = (e) => {
    let selection = document.querySelector(`#${e.target.value}`);
    console.log(selection);
    selection.scrollIntoView();

  }

  return (
    <>
      <section className="area-activator">
        <div className="navigator">
          <nav>
            <ul className="nav-container">
              <li className="nav-item"><button onClick={handleNavActive} value="container1"></button></li>
              <li className="nav-item">item 2</li>
              <li className="nav-item">item 3</li>
            </ul>
          </nav>
          <div>{children}</div>
        </div>
      </section>
    </>
  );
}
