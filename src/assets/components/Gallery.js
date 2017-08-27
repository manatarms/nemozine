import React from 'react';
import { createComponent } from 'react-fela';
import { Route, Switch } from 'react-router-dom';

import Wrapper from './Wrapper';

import square1 from '../images/square_1.jpg';
import square2 from '../images/square_2.jpg';
import square3 from '../images/square_3.jpg';
import square4 from '../images/square_4.jpg';
import painting1 from '../images/painting_1.jpg';
import painting2 from '../images/painting_2.jpg';
import painting3 from '../images/painting_3.jpg';
import painting4 from '../images/painting_4.jpg';

let thumbnailImages = [square1, square2, square3, square4];
let paintingImages = [painting1, painting2, painting3, painting4];

const Thumbnail = createComponent(() => ({
  marginTop: '20px',
  cursor: 'pointer'
}));
const Painting = createComponent(() => ({
  minHeight: '723px'
}));

const Paintings = props => {
  return (
    <div>
      <Wrapper width="145px" float="left">
        <ul>
          {/*props.match.number*/}
          {thumbnailImages.map((thumbnail, index) => (
            <Thumbnail key={index}>
              <img
                src={thumbnail}
                onClick={() => props.handleClick(paintingImages[index])}
              />
            </Thumbnail>
          ))}
        </ul>
      </Wrapper>
      <Wrapper float="right">
        <Painting>
          <img src={props.currentPainting} />
        </Painting>
      </Wrapper>
    </div>
  );
};

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPainting: painting1 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(paintingId) {
    this.setState({
      currentPainting: paintingId
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
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Gallery;
