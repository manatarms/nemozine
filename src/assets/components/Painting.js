import React from "react";
import { createComponent } from "react-fela";

const Painting = createComponent(
	() => ({
		width: "100%",
		"@media (min-width: 768px)": {
			minHeight: "723px"
		}
	}),
	"img",
	["src"]
);

export default Painting;
