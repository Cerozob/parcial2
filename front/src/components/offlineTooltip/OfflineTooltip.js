import React, { useEffect } from "react";
import "./OfflineTooltip.scss";
import { useIntl } from "react-intl";
const d3 = require("d3");

export const OfflineTooltip = () => {
	const intl = useIntl();

	useEffect(() => {
		let tooltip = d3
			.select("#offlinetooltipdivider")
			.append("div")
			.style("z-index", 30)
			.style("opacity", 0)
			.attr("class", "offlinetooltip")
			.style("background-color", "white")
			.style("border", "solid")
			.style("border-width", "2px")
			.style("border-radius", "5px")
			.style("padding", "5px")
			.style("position", "fixed")
			.style("width", 500 + "px")
			.style("height", 50 + "px")
			.style("bottom", 5 + "%")
			.style("right", 5 + "%")
			.style("display", "flex")
			.style("justify-content", "center");

		window.onoffline = (event) => {
			d3.selectAll(".offlinetooltip")
				.html(intl.formatMessage({ id: "offline" }))
				.transition()
				.duration(500)
				.style("opacity", 1);
		};

		window.ononline = (event) => {
			d3.selectAll(".offlinetooltip")
				.html(intl.formatMessage({ id: "online" }))
				.transition()
				.delay(300)
				.duration(500)
				.style("opacity", 0);
		};
	}, [intl]);
	return <div id="offlinetooltipdivider"></div>;
};
