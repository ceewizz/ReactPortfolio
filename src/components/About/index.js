import React from "react";
import profileImage from "../../assets/img/profile.jpeg";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Hello my name is Chris Huynh. Welcome to my portfolio.
          </p>
          <p>
          I'm a hard working computer software engineering student at Cal State Fullerton with a great troubleshooting and good interpersonal skills to assist customers with computer problems
          currently I'm completing the full stack coding boot camp at UCI </p>
         </div>
      </div>
    </section>
  );
}

export default About;