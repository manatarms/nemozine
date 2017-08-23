import React from "react";
import ReactDOM from "react-dom";

import { createComponent } from "react-fela";
import { render } from "fela-dom";
// TODO maybe move to hashRoute
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

const container = ({ padding }) => ({
	padding: padding + "px",
	backgroundColor: "rgb(124, 114, 231)",
	fontSize: "20px"
});

const Container = createComponent(container);

class TopNav extends React.Component {
	render() {
		return <div>Hello World</div>;
	}
}

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Main />
				<Footer />
			</div>
		);
	}
}

const Header = () => (
	<header>
		<nav>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/paintings">Roster</Link></li>
				<li><Link to="/about">Schedule</Link></li>
			</ul>
		</nav>
	</header>
);

const Main = () => (
	<main>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/paintings" component={Paintings} />
			<Route exact path="/about" component={About} />
		</Switch>
	</main>
);

const Footer = () => <div>Footer</div>;

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
		<ul>
			<li>6/5 @ Evergreens</li>
			<li>6/8 vs Kickers</li>
			<li>6/14 @ United</li>
		</ul>
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
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);
// ReactDOM.render(<TopNav />, document.getElementById("root"));
