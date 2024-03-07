import React from "react";
import gameImage from "../../assets/icon/gamebargains.png";
import passImage from "../../assets/icon/passgen.png";
import weatherDashImage from "../../assets/icon/Weather_Dashboard.png";
import codingquizImage from "../../assets/icon/codingquiz.png";
import readmeImage from "../../assets/icon/readmegenerator.png";
import VideoVaultImage from "../../assets/icon/VideoVault.png";
import pwatextImage from "../../assets/icon/pwatext.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work/Projects</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://game-bargains.onrender.com/">
                {" "}
                <img
                  src={gameImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="gamebargains"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Game Bargains</h4>
              <p>
              This project is a video game app that searches for savings based on the top 60 games with the highest metacritic scores of the week. The user can view game info, "favorite" games on sale, and keep track of prices with their wish list.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://ceewizz.github.io/PasswordGen/">
                {" "}
                <img
                  src={passImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="passgen"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Password Generator</h4>
              <p>
              A Password Generator using JavaScript that enables employees to generate random passwords based on criteria that they’ve selected.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://ceewizz.github.io/CodeQuiz">
                {" "}
                <img
                  src={codingquizImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="codingquiz"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Coding Quiz</h4>
              <p>
              A timed quiz on JavaScript fundamentals that stores high scores SO THAT I can gauge my progress compared to my peers.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://ceewizz.github.io/ReadmeGenerator">
                {" "}
                <img
                  src={readmeImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="readmegenerator"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Readme Generator</h4>
              <p>
               An application that will generate a readme.md file and put it into appropriate sections of the readme.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://ceewizz.github.io/WeatherForecast">
                {" "}
                <img
                  src={weatherDashImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Weather_Dashboard"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>
                A website that allows the user see the weather outlook for
                multiple cities. The user can enter a city and see a 5-Day
                Forecast. The user can see the temperature, humidity levels,
                wind speed as well as the UV index.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://video-vault-a9fdebd79a00.herokuapp.com/">
                {" "}
                <img
                  src={VideoVaultImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="VideoVault"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Video Vault</h4>
              <p>
              The motivation behind this project was to test our knowledge of what we've learned throughout the course and to culminiate it into a full stack web application. We were able to build a full stack application using our knowledge of Javascript, SQL, Node,Sequelize, Express-session, and cookies.The project that we created is called VideoVault, its a full stack web application that store links of video, as well as images from multiple social media.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href=" https://pwatexteditor-cwz-e3c67fb4c29e.herokuapp.com/">
                {" "}
                <img
                  src={pwatextImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="pwatext"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Text Editor PWA</h4>
              <p>
              Progressive Web Applications (PWA) Challenge: Text Editor As you have progressed through this course, you have put together a number of impressive projects that you can show off to potential employers. This project is no exception; in fact, it features some of the most impressive expressions of the concepts you have learned so far.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;