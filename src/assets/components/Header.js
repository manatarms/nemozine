import React from "react";
import { createComponent } from "react-fela";
import { Link } from "react-router-dom";

const NavLink = createComponent(
	({}) => ({
		display: "block",
		textDecoration: "none",
		color: "#000"
	}),
	Link,
	["to"]
);

const LinkContainer = createComponent(({}) => ({
	display: "inline-block",
	paddingLeft: "10px",
	paddingRight: "10px",
	paddingTop: "20px",
	paddingBottom: "20px"
}));

const Wrapper = createComponent(({ width }) => ({
	width: width ? width : "auto",
	margin: "0 auto"
}));

const Header = () => (
	<Wrapper width="1024px">
		<header>
			<Wrapper width="230px">
				<nav>
					<ul>
						<LinkContainer><NavLink to="/">Home</NavLink></LinkContainer>
						<LinkContainer>
							<NavLink to="/paintings">Paintings</NavLink>
						</LinkContainer>
						<LinkContainer><NavLink to="/about">About</NavLink></LinkContainer>
					</ul>
				</nav>
			</Wrapper>
		</header>
	</Wrapper>
);

export default Header;
