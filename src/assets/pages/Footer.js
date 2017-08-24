import React from "react";
import { createComponent } from "react-fela";

const FooterContainer = createComponent(({}) => ({
	position: "absolute",
	bottom: "0"
}));

const Wrapper = createComponent(({ width }) => ({
	width: width ? width : "auto",
	margin: "0 auto"
}));

const Footer = () => (
	<Wrapper width="1024px">
		<FooterContainer>
			<footer>
				Footer
			</footer>
		</FooterContainer>
	</Wrapper>
);

export default Footer;
