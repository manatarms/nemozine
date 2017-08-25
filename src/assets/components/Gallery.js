import React from "react";
import { createComponent } from "react-fela";
import { Route, Switch } from "react-router-dom";

import square1 from "../images/square_1.jpg";
import square2 from "../images/square_2.jpg";
import square3 from "../images/square_3.jpg";
import square4 from "../images/square_4.jpg";
import painting1 from "../images/painting_1.jpg";
import painting2 from "../images/painting_2.jpg";
import painting3 from "../images/painting_3.jpg";
import painting4 from "../images/painting_4.jpg";

const ThumbnailWrapper = createComponent(({ width }) => ({
	width: width ? width : "auto",
	float: "left"
}));

const PaintingWrapper = createComponent(({ width }) => ({
	width: width ? width : "auto",
	float: "right"
}));

const Painting = props => {
	return (
		<div>
			<ThumbnailWrapper width="145px">
				<ul>
					{props.match.number}

					<img src={square1} onClick={() => props.handleClick(painting1)} />
					<img src={square2} onClick={() => props.handleClick(painting2)} />
					<img src={square3} onClick={() => props.handleClick(painting3)} />
					<img src={square4} onClick={() => props.handleClick(painting4)} />
				</ul>
			</ThumbnailWrapper>
			<PaintingWrapper width="585px">
				<img src={props.currentPainting} />
			</PaintingWrapper>
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
							<Painting
								{...props}
								currentPainting={this.state.currentPainting}
								handleClick={this.handleClick}
							/>
						)}
					/>
					<Route
						path="/paintings/:number"
						component={props => (
							<Painting
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
