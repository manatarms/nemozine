import React from "react";
import ReactDOM from "react-dom";

import { createComponent } from "react-fela";
import { createRenderer } from "fela";
import { Provider } from "react-fela";
import { render } from "fela-dom";

import Footer from "./assets/pages/Footer";
import Header from "./assets/pages/Header";

import img from "./assets/images/about_pic.jpg";

import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

const renderer = createRenderer();

const Page = createComponent(({}) => ({
	width: "100%"
}));

const Wrapper = createComponent(({ width }) => ({
	width: width ? width : "auto",
	margin: "0 auto"
}));

class App extends React.Component {
	render() {
		return (
			<div>
				<Page>
					<Header />
					<Main />
					<Footer />
				</Page>
			</div>
		);
	}
}

const Main = () => (
	<Wrapper width="1024px">
		<main>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/paintings" component={Paintings} />
				<Route exact path="/about" component={About} />
			</Switch>
		</main>
	</Wrapper>
);

const Painting = props => (
	<div>
		<ul>
			{props.match.number}
			All Paintings

		</ul>
	</div>
);

const About = () => (
	<div>
		<img src={img} />
	</div>
);

const Home = () => (
	<div>
		<h1>Welcome to the Nemozine Website!</h1>
	</div>
);

const Paintings = () => (
	<Switch>
		<Route exact path="/paintings" component={Painting} />
		<Route path="/paintings/:number" component={Painting} />
	</Switch>
);

ReactDOM.render(
	<Provider renderer={renderer}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
