import React, { useEffect } from "react";
import clsx from "clsx";
import "./Nav.css";

export default function Navigator(props) {
  const { children, urlParams, handleScrollTo } = props;

  return (
    <>
      <section className="area-activator">
        <div className="navigator">
          <nav>
            <ul className="nav-container">
              <li className="nav-item"><button onClick={handleScrollTo} value="container1">Landing Page</button></li>
              <li className="nav-item"><button onClick={handleScrollTo} value="container2">Major Projects</button></li>
              <li className="nav-item"><button onClick={handleScrollTo} value="container3">General BlogPost</button></li>
            </ul>
          </nav>
          <div>{children}</div>
        </div>
      </section>
    </>
  );
}
