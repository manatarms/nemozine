import React from "react";
import { createComponent } from "react-fela";
import { withRouter } from "react-router-dom";

const Page = createComponent(props => ({
	width: "100%",
	minHeight: "100%",
	height:
		props.location.pathname === "/" || props.location.pathname === "/404"
			? "100vh"
			: null,
	position: "relative"
}));

export default withRouter(props => <Page {...props} />);
