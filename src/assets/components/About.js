import React from "react";
import { createComponent } from "react-fela";

import Wrapper from "./Wrapper";
import Painting from "./Painting";

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
    lineHeight: 1.5,
    fontSize: "15px",
    "@media (min-width: 768px)": {
      fontSize: "20px"
    }
  }),
  "p"
);

const About = () => (
  <div>
    <Wrapper width="435px" float="left">
      <Painting src={aboutImg} />
    </Wrapper>
    <Wrapper width="455px" float="right">
      <TextWrapper>
        <Text>
          {"All along a dilettante I have been"}<br />
          {"time it is now to row the boat it seems"}<br />
          {"Sitting by the river banks times galore"}<br />
          {"eventually will I just grow old, a bore?"}<br />
        </Text>
        <Text>
          {"With nothing to show as a creation of mine"}<br />
          {"my expressions will all perish with me, inside"}<br />
          {"A veggie is this life where in I don't leave a mark"}<br />
          {"Even Brinjal is ahead"}<br />
          {"with a purpose to nourish & color so dark"}<br />
        </Text>
        <Text>
          {"Have watched the ocean with amazement so long"}<br />
          {"feared the swim that I long to go on"}<br />
          {"Paving the way for myself to glory"}<br />
          {"achieved by expression of self through story"}<br />
        </Text>
        <Text>
          {"I will dive and swim, till my bones ache with fatigue"}<br />
          {"brave the darkness, and waters too deep"}<br />
          {"My fears and doubts will sink below"}<br />
          {"as dawn brings the sun to the shore"}<br />
        </Text>
      </TextWrapper>
    </Wrapper>
  </div>
);

export default About;
