import React from "react";
import tsParticles from "./tsParticles";

export default function TSpractice () {

  tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
      links: {
        enable: true,
        distance: 50
      },
      move: {
        enable: true,
        speed: 5,
        outModes: {
          default: "bounce"
        }
      },
      size: {
        value: 1
      }
    }
  });
  
  

  return(<></>)
}