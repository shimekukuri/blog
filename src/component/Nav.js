import React, { useEffect, useState } from "react";
import clsx from "clsx";
import "./Nav.css";

export default function Navigator(props) {
  const { children, urlParams, handleScrollTo, navAlert } = props;
  const [forceOpen, setForceOpen] = useState(false);
  const [forceOpenTimeOut, setForceOpenTimeOut] = useState(true);

  //clsx custom classes
  //button activators
  const c1Classes = clsx({
    "nav-button" : true,
    activenav: navAlert.container.container1,
    "navigator-active-animation": navAlert.container.container1,
    "navigator-force-open": forceOpen 
  });
  const c2Classes = clsx({
    "nav-button" : true,
    activenav: navAlert.container.container2,
    "navigator-active-animation": navAlert.container.container2,
    "navigator-force-open": forceOpen
  });
  const c3Classes = clsx({
    "nav-button" : true,
    activenav: navAlert.container.container3,
    "navigator-active-animation": navAlert.container.container3,
    "navigator-force-open": forceOpen
  });
  const c4Classes = clsx({
    "nav-button" : true,
    activenav: navAlert.container.container4,
    "navigator-active-animation": navAlert.container.container4,
    "navigator-force-open": forceOpen
  });
  //navigator force open
  const navigatorClasses = clsx("navigator", {"navigator-force-open": forceOpen})

  const handlePointerEnter = () => {
    setForceOpen(true);
    setForceOpenTimeOut(prev => !prev);
  }

  

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setForceOpen(false)
    }, 1000)

    return () => clearTimeout(timeoutID);
  }, [forceOpenTimeOut])


  return (
    <>
      <section className="area-activator" onPointerEnter={handlePointerEnter}>
        <div className={navigatorClasses}>
          <nav style={{ width: "100%" }}>
            <ul className="nav-container">
              <li className="nav-item">
                <button
                  className={c1Classes}
                  onClick={handleScrollTo}
                  value="container1"
                >
                  Landing Page
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={c2Classes}
                  onClick={handleScrollTo}
                  value="container2"
                >
                  Major Projects
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={c3Classes}
                  onClick={handleScrollTo}
                  value="container3"
                >
                  General BlogPost
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={c4Classes}
                  onClick={handleScrollTo}
                  value="container4"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
          <div>{children}</div>
        </div>
      </section>
    </>
  );
}
