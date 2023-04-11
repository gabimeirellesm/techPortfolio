import React from "react";
import Resume from "../Components/Resume";

function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Resume />

      <nav>
        <ul>
          <li>
            <button onClick={() => scrollToSection("section1")}>HOME</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("section2")}>ABOUT</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("section3")}>
              PROJECTS
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("section4")}>CONTACT</button>
          </li>
        </ul>

        <style jsx="true">{`
          @import url("https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap");
          nav {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 999;
          }

          ul {
            display: flex;
            justify-content: center;
            align-items: center;
            list-style: none;
            margin: 0;
            padding: 0;
          }

          li {
            margin: 10px 20px;
          }

          button {
            font-family: "Share Tech Mono", monospace;
            font-size: 1.5rem;
            font-weight: bold;
            color: #555;
            border: none;
            background-color: transparent;
            cursor: pointer;
            padding: 0;
            margin: 0;
          }

          button:hover {
            color: #f00;
          }

          button::after {
            content: "";
            display: block;
            height: 4px;
            width: 0%;
            background-color: #f00;
            transition: width 0.3s;
          }

          button:hover::after {
            width: 100%;
          }
        `}</style>
      </nav>
    </div>
  );
}

export default Navbar;
