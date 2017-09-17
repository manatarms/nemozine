import React from "react";
import { createComponent } from "react-fela";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";

import Wrapper from "./Wrapper";
import Home from "./Home";
import Gallery from "./Gallery";
import About from "./About";
import NotFound from "./NotFound";

import bgImg from "../images/home_bg.jpg";
import bgImgMobile from "../images/home_bg_mobile.jpg";

const MainWrapper = createComponent(props => ({
  //paddingBottom: props.isHome ? "330px" : "160px",
  paddingBottom: "20px",
  background: props.isHome
    ? `url(${bgImgMobile}) no-repeat center center`
    : "#f3f4ec",
  backgroundSize: "contain",
  minHeight: "47vh",
  "@media (min-width: 768px)": {
    backgroundSize: "cover",
    minHeight: "65vh",
    background: props.isHome
      ? `url(${bgImg}) no-repeat center center`
      : "#f3f4ec"
    //paddingBottom: "200px"
  }
}));

class Main extends React.Component {
  render() {
    const isHome = this.props.location.pathname === "/";

    return (
      <MainWrapper isHome={isHome}>
        <Wrapper width="1024px">
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/paintings" component={Gallery} />
              <Route exact path="/about" component={About} />
              <Route exact path="/404" component={NotFound} />
              <Redirect to="/404" />
            </Switch>
          </main>
        </Wrapper>
      </MainWrapper>
    );
  }
}

export default withRouter(props => <Main {...props} />);
