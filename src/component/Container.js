import React, { useState, useEffect } from "react";
import "./Container.css";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";

export default function Container(props) {
  //destructuring props
  const { children, innerClasses, scrollLock, id, navAlert } = props;

  //Observer related functions and declarations
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: `-100px 0px`,
  });

  useEffect(() => {
    navAlert(prev => {
      return {container: {...prev.container, [id]: inView}}
    })
  }, [inView]);

  //First container styling
  const classForStyles = clsx(
    "flex-center",
    "container",
    scrollLock && "scroll-disable"
  );

  //Styling for the inner container of the component
  const innerContainerStyles = clsx("inner-container", innerClasses ?? "");

  //Passing the view boolean down to react children, note that you can only nest in react components
  //into the <Container /> element other wise it tries to write it to the dom.
  //!!Will look into fixing later!!
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { inView, id });
    }
    return child;
  });

  return (
    <>
      <div id={id} ref={ref} className={classForStyles}>
        <div className={innerContainerStyles}>{childrenWithProps}</div>
      </div>
    </>
  );
}
