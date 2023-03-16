import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import img from './myPics.jpeg'

const ProfComponent = () => {

  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="green">I'am</span>
          </h4>
          <h1 className="green">Marvellous Adeoye</h1>
          <h3>FullStack Developer</h3>
          <p>
            Marvellous Adeoye has designed responsive websites that met client specifications. She also employed code review tools to transfer knowledge and evaluate various solutions to problems. Also, she has collaborated with a team of developers to implement new features, resolve issues, and update existing applications and related visually appealing web page designs.
          </p>
          <br />

          <p>
            Marvellous has assessed user requirements and software specifications to ensure design feasibility within budget and deadline constraints and refactored the non-functional attributes to enhance performance without altering external functionality.
          </p>
          <br />

          <p>
            Marvellous composes clean, testable, and maintainable code. She has experience working with clients in a variety of industries, including healthcare, finance, and e-commerce. She uses industry best practices and follow a rigorous development process to ensure that all projects are completed on time, within budget, and to the highest quality standards.
          </p>

          <div className="parentCont">
            <button>Let's talk</button>
            <div id="cv" onClick={() => window.location.replace("https://drive.google.com/file/d/1yim97i6aXbl1ox3Oddv7QJlC1I83DY-B/view?usp=sharing")}>Check out CV</div>
          </div>

          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href="https://github.com/Marvellous0">
                  <FaGithub />
                </a>
              </span>
              <span>
                <a href="https://linkedin.com/in/adeoye-marvellous-18193a228/">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src={img}
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container >
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }

  .parentCont{
    display: flex;
    gap: 1em;
    align-items: center;
    margin-top: 3rem;
  }

  #cv{
    background-color: #01be96;
    padding: 0.7rem 2rem;
    width: 10em;
    white-space: nowrap;
    font-size: 0.8em;
    font-weight: 800;
    display: flex;
    justify-content: center;
    cursor: pointer;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
height: 35em;

  img {
    width: 20rem;
    height: 100%;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    border-radius: 50%;
    @media (max-width: 790px) {
      width: 20rem;
      border-radius: 20%;
    }

    @media (max-width: 660px) {
      width: 18rem;
      border-radius: 20%;
    }

    @media (max-width: 640px) {
      width: 100%;
      border-radius: 20%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
