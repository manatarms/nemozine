import React from 'react';
import { createComponent } from 'react-fela';
import { withRouter } from 'react-router-dom';

import Wrapper from './Wrapper';

import facebookIcon from '../images/social/facebook.jpg';
import instagramIcon from '../images/social/instagram.jpg';
import snapchatIcon from '../images/social/snapchat.jpg';
import twitterIcon from '../images/social/twitter.jpg';
import whatsappIcon from '../images/social/whatsapp.jpg';
import youtubeIcon from '../images/social/youtube.jpg';

const SocialContainer = createComponent(() => ({
  display: 'inline-block',
  paddingLeft: '10px',
  paddingRight: '10px',
  paddingTop: '20px',
  paddingBottom: '20px'
}));

const FooterWrapper = createComponent(() => ({
  width: '100%',
  margin: '0 auto',
  backgroundColor: '#ffffff',
  position: 'absolute',
  marginTop: '-200px',
  bottom: '0',
  height: '200px'
}));

const Copyright = createComponent(() => ({
  padding: '32px'
}));

class Footer extends React.Component {
  render() {
    return (
      <FooterWrapper>
        <footer>
          <Wrapper width="1024px">
            <Wrapper width="360px" float="left">
              <ul>
                <SocialContainer>
                  <a href="http://www.google.com">
                    <img src={facebookIcon} width="40" />
                  </a>
                </SocialContainer>
                <SocialContainer>
                  <a href="/"><img src={instagramIcon} width="40" /></a>
                </SocialContainer>
                <SocialContainer>
                  <a href="/"><img src={twitterIcon} width="40" /></a>
                </SocialContainer>
                <SocialContainer>
                  <a href="/"><img src={youtubeIcon} width="40" /></a>
                </SocialContainer>
                <SocialContainer>
                  <a href="/"><img src={snapchatIcon} width="40" /></a>
                </SocialContainer>
                <SocialContainer>
                  <a href="/"><img src={whatsappIcon} width="40" /></a>
                </SocialContainer>
              </ul>
            </Wrapper>
            <Wrapper float="right">
              {this.props.location.pathname === '/paintings' &&
                <Copyright>© NEMOZINE</Copyright>}
            </Wrapper>
          </Wrapper>
        </footer>
      </FooterWrapper>
    );
  }
}

export default withRouter(props => <Footer {...props} />);
