import React from "react";
import { createComponent } from "react-fela";
import { Route, Switch } from "react-router-dom";

import Wrapper from "./Wrapper";
import Painting from "./Painting";

import square1 from "../images/square_1.jpg";
import square2 from "../images/square_2.jpg";
import square3 from "../images/square_3.jpg";
import square4 from "../images/square_4.jpg";
import square5 from "../images/square_5.jpg";
import square6 from "../images/square_6.jpg";
import painting1 from "../images/painting_1.jpg";
import painting2 from "../images/painting_2.jpg";
import painting3 from "../images/painting_3.jpg";
import painting4 from "../images/painting_4.jpg";
import painting5 from "../images/painting_5.jpg";
import painting6 from "../images/painting_6.jpg";

let thumbnailImages = [square1, square2, square3, square4, square5, square6];
let paintingImages = [
  painting1,
  painting2,
  painting3,
  painting4,
  painting5,
  painting6
];

const Thumbnail = createComponent(() => ({
  cursor: "pointer",
  float: "left",
  margin: "10px",
  "> img": { width: "111px" },
  "@media (min-width: 768px)": {
    marginTop: "20px",
    float: "none",
    "> img": { width: "auto" }
  }
}));

const ThumbnailWrapper = createComponent(() => ({
  width: "262px",
  display: "block",
  margin: "0 auto",
  "@media (min-width: 768px)": {
    width: "auto"
  }
}));

const ArrowWrapper = createComponent(() => ({
  height: "50px",
  width: "100px",
  margin: "0 auto",
  ">svg": { height: "50px" },
  ">svg:first-child": {},
  ">svg:last-child": {},
  "@media (min-width: 768px)": {
    display: "none"
  }
}));

const Paintings = props => {
  return (
    <div>
      <Wrapper width="145px" float="left">
        <ThumbnailWrapper>
          {thumbnailImages.map((thumbnail, index) => (
            <Thumbnail key={index}>
              {props.match.number}
              <img src={thumbnail} onClick={() => props.handleClick(index)} />
            </Thumbnail>
          ))}
        </ThumbnailWrapper>
      </Wrapper>
      <Wrapper float="right">
        <ArrowWrapper>
          <svg
            onClick={props.handlePreviousClick}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path d="M9.463,4.517l-3.3,3.3a.263.263,0,0,0,0,.371l3.3,3.3a.263.263,0,0,0,.448-.186V4.7A.262.262,0,0,0,9.463,4.517Z" />
          </svg>
          <svg
            onClick={props.handleNextClick}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path d="M6.537,11.483l3.3-3.3a.263.263,0,0,0,0-.371l-3.3-3.3a.262.262,0,0,0-.448.186v6.6A.262.262,0,0,0,6.537,11.483Z" />
          </svg>
        </ArrowWrapper>
        <Painting src={paintingImages[props.currentPainting]} />
      </Wrapper>
    </div>
  );
};

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPainting: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
  }

  handleClick(paintingId) {
    this.setState({
      currentPainting: paintingId
    });
  }

  handleNextClick() {
    if (this.state.currentPainting >= paintingImages.length - 1) return;
    this.setState({
      currentPainting: this.state.currentPainting + 1
    });
  }

  handlePreviousClick() {
    if (this.state.currentPainting === 0) return;
    this.setState({
      currentPainting: this.state.currentPainting - 1
    });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/paintings"
            component={props => (
              <Paintings
                {...props}
                currentPainting={this.state.currentPainting}
                handleClick={this.handleClick}
                handleNextClick={this.handleNextClick}
                handlePreviousClick={this.handlePreviousClick}
              />
            )}
          />
          <Route
            path="/paintings/:number"
            component={props => (
              <Paintings
                {...props}
                currentPainting={this.state.currentPainting}
                handleClick={this.handleClick}
                handleNextClick={this.handleNextClick}
                handlePreviousClick={this.handlePreviousClick}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Gallery;
