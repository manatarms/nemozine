import React from "react";
import { createComponent } from "react-fela";
import { withRouter } from "react-router-dom";

import Wrapper from "./Wrapper";

import facebookIcon from "../images/social/facebook.jpg";
import instagramIcon from "../images/social/instagram.jpg";
import tumblrIcon from "../images/social/tumblr.jpg";
import twitterIcon from "../images/social/twitter.jpg";
import pinterestIcon from "../images/social/pinterest.jpg";
import youtubeIcon from "../images/social/youtube.jpg";

const SocialIcon = createComponent(() => ({
  display: "inline-block",
  paddingLeft: "10px",
  paddingRight: "10px",
  paddingTop: "20px",
  paddingBottom: "20px"
}));

const SocialWrapper = createComponent(() => ({
  maxWidth: "300px",
  display: "block",
  margin: "0 auto",
  "@media (min-width: 768px)": {
    maxWidth: "none"
  }
}));

const FooterWrapper = createComponent(props => ({
  width: "100%",
  margin: "0 auto",
  backgroundColor: "#ffffff",
  //position: "absolute",
  //marginTop: "-200px",
  //bottom: "0",
  // height: "90px",
  // maxHeight: "90px",
  "@media (min-width: 768px)": {
    height: "200px"
    // maxHeight: "none"
  }
}));

const Copyright = createComponent(() => ({
  padding: "32px"
}));

class Footer extends React.Component {
  render() {
    return (
      <FooterWrapper isHome={this.props.location.pathname === "/"}>
        <footer>
          <Wrapper width="1024px">
            <Wrapper width="300px" float="left">
              <SocialWrapper>
                <SocialIcon>
                  <a target="_blank" href="https://www.facebook.com/n1m1sha">
                    <img src={facebookIcon} width="40" />
                  </a>
                </SocialIcon>
                <SocialIcon>
                  <a target="_blank" href="https://www.instagram.com/nemozine/">
                    <img src={instagramIcon} width="40" />
                  </a>
                </SocialIcon>
                <SocialIcon>
                  <a target="_blank" href="https://twitter.com/nemozine">
                    <img src={twitterIcon} width="40" />
                  </a>
                </SocialIcon>
                <SocialIcon>
                  <a target="_blank" href="https://nemozine.tumblr.com">
                    <img src={tumblrIcon} width="40" />
                  </a>
                </SocialIcon>
                <SocialIcon>
                  <a target="_blank" href="https://in.pinterest.com/nemozine/">
                    <img src={pinterestIcon} width="40" />
                  </a>
                </SocialIcon>
              </SocialWrapper>
            </Wrapper>
            <Wrapper float="right">
              {this.props.location.pathname === "/paintings" && (
                <Copyright>© nemozine</Copyright>
              )}
            </Wrapper>
          </Wrapper>
        </footer>
      </FooterWrapper>
    );
  }
}

export default withRouter(props => <Footer {...props} />);
