import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <br />I am fluent in classics like
          <i>
            <b className="purple"> React, Node, TypeScript, Three.js, Unity, and Web3 </b>
          </i>
          <br />
          <br />
          Highly skilled and experienced <b className="purple">2D, 3D Web and Mobile App && Game Developer </b>with expertise in cutting-edge technologies such
          as <b className="purple">React.js, Vue.js, Node.js, Three.js, Unity3D, Various HTML5 Game Engines like Phaser, Pixi, Cocos2D, PlayCanvas, and WebGL. </b> <br />Adept at creating
          immersive and interactive game and web experiences through the seamless integration of 3D graphics and
          animations.
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
