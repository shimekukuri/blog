import React from "react";
import "./PropsPassTest.css";
import {clsx} from "clsx"

export default function PropPassTest (props) {
    const {inView} = props;
    console.log(props);
    const tester = clsx(inView? "opacity-1" : "opacity-0", "transition-opacity"); 

    return (<>
    <div className={tester}>test</div>
    </>);
}