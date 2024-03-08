import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";


function Footer() {
  return (
    <footer>
      <h2>Made by Chris Huynh</h2>
      <p>
        <ul>
          <a href="https://github.com/ceewizz">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/chris-huynh-8ba0b5291/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
  
     
        </ul>
      </p>
    </footer>
  );
}

export default Footer;