import React from "react";
import graphicGreen from "../Images/graphicGreen.png";

function Projects() {
  return (
    <section>
      <img
        src={graphicGreen}
        alt="graphic diagram green"
        className="graphicGreen"
      />
      <style jsx="true">{`
      .graphicGreen {
        position: absolute;
        top: -5rem;
        right: 0;
        width: 50vw;
        height; 50vh;
      }
      `}</style>
    </section>
  );
}

export default Projects;
