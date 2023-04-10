import React from "react";
import graphicGabi from "../Images/graphicGabi.png";
import { useState, useEffect } from "react";

function Home() {
  const [text, setText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const messages = ["Hi, I'm Gabriela", "Nice to meet you!"];
    const totalMessages = messages.length;
    let charIndex = 0;

    const interval = setInterval(() => {
      setText(messages[messageIndex].substring(0, charIndex + 1));
      charIndex++;

      if (charIndex === messages[messageIndex].length) {
        setTimeout(() => {
          setText("");
          charIndex = 0;
          setMessageIndex((messageIndex + 1) % totalMessages);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [messageIndex]);

  return (
    <section>
      <div className="container">
        <h1 className="animated-text">{text}</h1>
      </div>
      <img
        src={graphicGabi}
        alt="graphic diagram green"
        className="graphicGabi"
      />
      <style jsx="true">{`
      .graphicGabi {
        position: absolute;
        bottom: -5rem;
        right: 0;
        width: 50vw;
        height; 50vh;
      }
      .container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 100vh;
      }
      .animated-text {
        font-size: 5em; 
        text-align: left;
        margin-left: 10%; 
      }
      `}</style>
    </section>
  );
}

export default Home;
