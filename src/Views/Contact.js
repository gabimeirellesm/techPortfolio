import React from "react";
import graphicBrown from "../Images/graphicBrown.png";
import graphicYellow from "../Images/graphicYellow.png";

function Contact() {
  return (
    <section>
      <img
        src={graphicBrown}
        alt="graphic diagram brown"
        className="graphicBrown"
      />
      <img
        src={graphicYellow}
        alt="graphic diagram yellow"
        className="graphicYellow"
      />

      <style jsx="true">{`
      .graphicBrown {
        position: absolute;
        top: -5rem;
        left: 0;
        width: 30vw;
        height; 30vh;
      }
      .graphicYellow{
        position: absolute;
        bottom: -5rem;
        right: 0;
        width: 30vw;
        height; 30vh;
      }
      `}</style>
    </section>
  );
}

export default Contact;
