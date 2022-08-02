import React from "react";
import clsx from "clsx";
import "./Nav.css";

export default function Navigator(props) {
  const { children } = props;

  return (
    <>
      <section className="test">
        <nav>
          <ul className="nav-container">
            <li className="nav-item">item 1</li>
            <li className="nav-item">item 2</li>
            <li className="nav-item">item 3</li>
          </ul>
        </nav>
        <div>{children}</div>
      </section>
    </>
  );
}
