import React, { useEffect } from "react";
import "./Stats.scss";
import { FormattedMessage } from "react-intl";
const d3 = require("d3");

export const Stats = (props) => {
	useEffect(() => {
		const canvas = d3.select("#canvas");
		let data = [];
		if (props.rooms != null) {
			data = props.rooms.map((element) => {
				return { name: element.name, value: element.powerUsage.value };
			});

			let width = 400;
			let height = 400;
			//initialize margin end
			let svg = canvas
				.append("svg")
				.attr("width", width)
				.attr("height", height)
				.append("g")
				.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

			let color = d3
				.scaleOrdinal()
				.domain(data.map((d) => d.name))
				.range(["#1dc0c6", "#134e6f", "#ffa821", "#ff6250", "#fc6453"]);

			let pie = d3.pie().value(function (d) {
				return d.value;
			});

			var arc = d3
				.arc()
				.innerRadius(0)
				.outerRadius(Math.min(width, height) / 2 - 1);

			const arcs = pie(data);

			let tooltip = d3
				.select("#canvas")
				.append("div")
				.style("opacity", 0)
				.attr("class", "tooltip")
				.style("background-color", "white")
				.style("border", "solid")
				.style("border-width", "2px")
				.style("border-radius", "5px")
				.style("padding", "5px");

			let mousemove = function (d) {
				tooltip
					.style("left", d3.pointer(d, d3.select(this))[0] + 30 + "px")
					.style("top", d3.pointer(d, d3.select(this))[1] - 30 + "px");
			};
			var mouseleave = function (d) {
				tooltip.style("opacity", 0);
				d3.select(this).style("stroke", "none").style("opacity", 1);
			};

			svg
				.append("g")
				.selectAll("path")
				.data(arcs)
				.enter()
				.append("path")
				.attr("fill", (d) => color(d.data.name))
				.attr("d", arc)
				.on("mouseover", function (evt, d) {
					tooltip
						.style("opacity", 1)
						.html(`${d.data.name} : ${d.data.value} KwH`);
					d3.select(this).style("stroke", "black").style("opacity", 0.8);
				})
				.on("mousemove", mousemove)
				.on("mouseleave", mouseleave);
		}
	}, [props.rooms]);

	return (
		<div className="visualization">
			<h6>
				<FormattedMessage id="powerusage"></FormattedMessage>
			</h6>
			<div id="canvas"></div>
		</div>
	);
};
