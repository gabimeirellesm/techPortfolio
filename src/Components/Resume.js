import React from "react";
import { RiDownloadLine } from "react-icons/ri";

function Cv() {
  function handleClick() {
    const url =
      "https://www.dropbox.com/s/cnmoldd41hkkga5/Gabriela%20Meirelles%20CV%20.pdf?dl=1";
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "CV - Gabriela Meirelles.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="home-button-container">
      <button onClick={handleClick} className="arrow">
        <RiDownloadLine style={{ fontSize: "1.2rem", marginRight: "0.5rem" }} />
        <span style={{ fontSize: "0.8rem" }}>Download CV</span>
      </button>
      <style jsx="true">{`
        @import url("https://fonts.googleapis.com/css2?family=Amiri+Quran&family=Montserrat:wght@500&display=swap");
        .home-button-container {
          position: fixed;
          top: 0;
          right: 0;
          z-index: 9999;
          margin: 10px 20px;
        }

        .arrow {
          background-color: #181818;
          color: #fff;
          padding: 8px 16px;
          border: none;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          font-family: "Montserrat", sans-serif;
        }

        .arrow:hover {
          background-color: #fff;
          color: #333;
          border: 1px solid #333;
          font-family: "Montserrat", sans-serif;
        }

        @media only screen and (max-width: 768px) {
          .home-button-container {
            top: 1rem;
            right: 2rem;
            margin: 0px;
            width: 7rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Cv;
