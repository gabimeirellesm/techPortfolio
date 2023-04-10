import React from "react";
import graphicBlue from "../Images/graphicBlue.png";

function About() {
  return (
    <section>
      <img
        src={graphicBlue}
        alt="graphic diagram blue"
        className="graphicBlue"
      />
      <style jsx="true">{`
      .graphicBlue {
        position: absolute;
        bottom: -5rem;
        left: 0;
        width: 50vw;
        height; 50vh;
      }
      `}</style>
    </section>
  );
}

export default About;
