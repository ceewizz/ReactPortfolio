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
          5 + years working in the tech industries. A hard-working Software Engineer with a strong background in marketing and Full Stack Web Developer</p>
          <p>B.S in Computer Science @WGU </p>
          <p>Full Stack Developer @UCI</p>
         </div>
      </div>
    </section>
  );
}

export default About;
