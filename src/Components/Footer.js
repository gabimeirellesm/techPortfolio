import React from "react";

function Footer() {
  return (
    <div className="footer">
      <a href="https://www.linkedin.com/in/gabriela-meirelles-martins/">
        <p>Made by Gabriela Meirelles</p>
      </a>
      <style jsx="true">{`
        @import url("https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap");
        .footer {
          bottom: 0;
          width: 100%;
          background-color: #333;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding-left: 1rem;
        }
        .footer a {
          color: #fff;
          text-decoration: none;
          font-family: "Share Tech Mono", monospace;
        }
      `}</style>
    </div>
  );
}

export default Footer;
