import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import metaverse from "../../Assets/Projects/metaverse.gif";
import aviator from "../../Assets/Projects/aviator.gif";
import niuniu from "../../Assets/Projects/niuniu.gif";
import exmoc from "../../Assets/Projects/exmoc.gif";
import bao from "../../Assets/Projects/bao.gif";
import slot from "../../Assets/Projects/slot.gif";
import kohai from "../../Assets/Projects/kohai.gif";
import museum from "../../Assets/Projects/museum.gif";
import playzelo from "../../Assets/Projects/playzelo.gif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={playzelo}
              isBlog={false}
              title="PlayZelo"
              description="Crypto Casino Online Game Platform"
              demoLink="http://162.255.116.172:5000"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={museum}
              isBlog={false}
              title="NFT Museum"
              description="React Three.js Metaverse"
              demoLink="https://drive.google.com/file/d/1k5hVywKO9AFD4eSgtnLsce4WBXUMIhoM/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={metaverse}
              isBlog={false}
              title="CocaCola"
              description="3D City Based Metaverse Game"
              demoLink="https://drive.google.com/file/d/1cE3vGV6UiJmkkhWXhUAy1bWN-ZJfd9dN/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aviator}
              isBlog={false}
              title="Aviator"
              description="Unity Based Crash Game"
              demoLink="https://drive.google.com/file/d/1Ox8xT8w-RZplql53umFZB18IhuVIQwda/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={niuniu}
              isBlog={false}
              title="NiuNiu"
              description="Unity Based Card Game"
              demoLink="https://drive.google.com/file/d/1gSeBEzM0zfv7myAoSnMyCNSM6b3hYddT/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exmoc}
              isBlog={false}
              title="EXMOC"
              description="Unity Web3 MultiPlayer Card Game"
              demoLink="https://drive.google.com/file/d/1xKVCUUGbuoLVbYaumLaYvddHisiN0hq3/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bao}
              isBlog={false}
              title="BaoCou"
              description="Web Based Online Betting Game"
              demoLink="https://drive.google.com/file/d/1aoJtiLd2G0Gna5o-vMxD8qe_hPYn4qMj/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={slot}
              isBlog={false}
              title="CRYPTOSLOTS"
              description="Web3 Slot Game"
              demoLink="https://drive.google.com/file/d/1XIVEfbbkGH0meVITmMF-tN7Y3AFZja8b/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kohai}
              isBlog={false}
              title="KOHAI WARZ"
              description="OpenGL Shooting Game and Web Portal"
              demoLink="http://ec2-13-114-30-24.ap-northeast-1.compute.amazonaws.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
