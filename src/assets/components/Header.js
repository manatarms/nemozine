import React from "react";
import { createComponent } from "react-fela";
import { Link } from "react-router-dom";

import Wrapper from "./Wrapper";
import logo from "../images/logo.png";

const NavLink = createComponent(
  () => ({
    display: "inline-block",
    textDecoration: "none",
    color: "#000"
  }),
  Link,
  ["to"]
);

const LinkContainer = createComponent(() => ({
  paddingLeft: "20px",
  paddingRight: "20px",
  paddingTop: "20px",
  paddingBottom: "20px",
  display: "inline-block",
  "@media (min-width: 768px)": {
    paddingLeft: "10px",
    paddingRight: "32px"
  }
}));

const ImageContainer = createComponent(() => ({
  paddingLeft: "10px",
  paddingRight: "10px",
  paddingTop: "20px",
  paddingBottom: "20px",
  display: "block",
  "> a": {
    display: "block"
  },
  "> a > img": {
    display: "block",
    margin: "0 auto"
  }
}));

const MenuContainer = createComponent(() => ({ paddingTop: "4px" }));

const HeaderWrapper = createComponent(() => ({
  width: "100%",
  margin: "0 auto",
  backgroundColor: "#ffffff"
}));

const NavContainer = createComponent(() => ({
  "@media (min-width: 768px)": {
    width: "auto"
  },
  width: "240px",
  margin: "0 auto"
}));

class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <header>
          <Wrapper width="1024px">
            <Wrapper width="285px" float="left">
              <ImageContainer>
                <a href="/">
                  <img src={logo} width="245" />
                </a>
              </ImageContainer>
            </Wrapper>
            <Wrapper width="300px" float="right">
              <MenuContainer>
                <NavContainer>
                  <ul>
                    <LinkContainer>
                      <NavLink to="/">Home</NavLink>
                    </LinkContainer>
                    <LinkContainer>
                      <NavLink to="/paintings">ART</NavLink>
                    </LinkContainer>
                    <LinkContainer>
                      <NavLink to="/about">About</NavLink>
                    </LinkContainer>
                  </ul>
                </NavContainer>
              </MenuContainer>
            </Wrapper>
          </Wrapper>
        </header>
      </HeaderWrapper>
    );
  }
}

export default Header;
