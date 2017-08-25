import React from "react";
import ReactDOM from "react-dom";

import { createComponent } from "react-fela";
import { createRenderer } from "fela";
import { Provider } from "react-fela";
import { render } from "fela-dom";

import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import Gallery from "./assets/components/Gallery";

import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import aboutImg from "./assets/images/about_pic.jpg";

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
				<Route path="/paintings" component={Gallery} />
				<Route exact path="/about" component={About} />
			</Switch>
		</main>
	</Wrapper>
);

const About = () => (
	<div>
		<img src={aboutImg} />
	</div>
);

const Home = () => (
	<div>
		<h1>Welcome to the Nemozine Website!</h1>
	</div>
);

ReactDOM.render(
	<Provider renderer={renderer}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
