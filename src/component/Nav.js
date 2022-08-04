import React from "react";
import clsx from "clsx";
import "./Nav.css";

export default function Navigator(props) {
  const { children } = props;

  const handleNavActive = () => {

  }

  return (
    <>
      <section className="area-activator">
        <div className="navigator">
          <nav>
            <ul className="nav-container">
              <li className="nav-item">item 1</li>
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
