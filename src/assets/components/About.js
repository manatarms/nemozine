import React from "react";
import { createComponent } from "react-fela";

import Wrapper from "./Wrapper";

import aboutImg from "../images/about_pic.jpg";

const TextWrapper = createComponent(() => ({
  textAlign: "center",
  marginTop: "40px",
  marginBottom: "40px",
  fontSize: "20px"
}));
const Text = createComponent(
  () => ({
    marginBottom: "30px",
    whiteSpace: "pre"
  }),
  "p"
);

const About = () => (
  <div>
    <Wrapper width="435px" float="left">

      <img src={aboutImg} />

    </Wrapper>
    <Wrapper width="340px" float="right">
      <TextWrapper>
        <Text>
          {`All along a dilettante I have been\ntime it is now to row the boat it seems\nSitting by the river banks times galore\neventually will I just grow old, a bore?`}
        </Text>
        <Text>
          With nothing to show as a creation of mine
          my expressions will all perish with me, inside
          A veggie is this life where in I don't leave a mark
          Even Brinjal is ahead
          with a purpose to nourish & color so dark
        </Text>
        <Text>
          Have watched the ocean with amazement so long
          feared the swim that I long to go on
          Paving the way for myself to glory
          achieved by expression of self through story
        </Text>
        <Text>
          I will dive and swim, till my bones ache with fatigue
          brave the darkness, and waters too deep
          My fears and doubts will sink below
          as dawn brings the sun to the shore
        </Text>
      </TextWrapper>
    </Wrapper>
  </div>
);

export default About;
