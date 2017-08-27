import React from 'react';
import { createComponent } from 'react-fela';
import { Link } from 'react-router-dom';

import Wrapper from './Wrapper';
import logo from '../images/logo.png';

const NavLink = createComponent(
  () => ({
    display: 'inline-block',
    textDecoration: 'none',
    color: '#000'
  }),
  Link,
  ['to']
);

const LinkContainer = createComponent(() => ({
  paddingLeft: '10px',
  paddingRight: '32px',
  paddingTop: '20px',
  paddingBottom: '20px',
  display: 'inline-block'
}));

const MenuContainer = createComponent(() => ({ paddingTop: '4px' }));

const HeaderWrapper = createComponent(() => ({
  width: '100%',
  margin: '0 auto',
  backgroundColor: '#ffffff'
}));

class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <header>
          <Wrapper width="1024px">
            <Wrapper width="285px" float="left">
              <LinkContainer>
                <NavLink to="/"><img src={logo} width="245" /></NavLink>
              </LinkContainer>
            </Wrapper>
            <Wrapper width="300px" float="right">
              <MenuContainer>
                <nav>
                  <ul>
                    <LinkContainer>
                      <NavLink to="/">Home</NavLink>
                    </LinkContainer>
                    <LinkContainer>
                      <NavLink to="/paintings">Paintings</NavLink>
                    </LinkContainer>
                    <LinkContainer>
                      <NavLink to="/about">About</NavLink>
                    </LinkContainer>
                  </ul>
                </nav>
              </MenuContainer>
            </Wrapper>
          </Wrapper>
        </header>
      </HeaderWrapper>
    );
  }
}

export default Header;
