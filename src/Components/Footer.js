import React from "react";

function Footer() {
  return (
    <div className="footer">
      <a href="https://www.linkedin.com/in/gabriela-meirelles-martins/">
        <p>Made by Gabriela Meirelles</p>
      </a>
      <style jsx="true">{`
        @import url("https://fonts.googleapis.com/css2?family=Amiri+Quran&family=Montserrat:wght@500&display=swap");
        .footer {
          background-color: #181818;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-family: "Montserrat", sans-serif;
          font-size: 0.8rem;
          color: #fff;
          padding-left: 1rem;
        }
        .footer a {
          color: #fff;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}

export default Footer;
