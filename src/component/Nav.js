import React from "react";
import clsx from "clsx";
import "./Nav.css";

export default function Navigator(props) {
  const { children } = props;
  const navItems = ["item1", "item2", "item3"];

  return (
    <>
      <section className="test">
        <nav>
          <ul className="nav-container">
            {navItems.map((item, i) => (
                <li key={item} className="nav-item">
                  <div>{item}</div>
                </li>
            ))}
          </ul>
        </nav>
        <div>{children}</div>
      </section>
    </>
  );
}
