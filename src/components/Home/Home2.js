import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Introduce
              {/* <span className="purple"> Introduce </span> Myself */}
            </h1>
            <p className="home-about-body">
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Unity, Three.js, React, Node, TypeScript and Web3. </b>
              </i>
              <br />
              <br />
              Highly skilled and experienced 3D Website Developer with expertise in cutting-edge technologies such
              as React.js, Vue.js, Node.js, Three.js, Unity3D, PlayCanvas, and WebGL. Adept at creating
              immersive and interactive web experiences through the seamless integration of 3D graphics and
              animations. Proven track record of delivering high-quality projects on time and within budget. Strong
              problemsolving abilities and a passion for pushing the boundaries of web development to create
              visually stunning and engaging user experiences. Committed to staying up-to-date with the latest
              industry trends and continuously expanding knowledge in the field of 3D web development.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/profullstackdeveloper"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tajnarine-ganpat-51205a259/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
