import React, { useEffect, useState } from "react";
import "./Gallery.scss";
import { Card } from "../card/Card";
import { FormattedMessage } from "react-intl";

export const Gallery = () => {
	const [state, setState] = useState({ homes: [] });

	useEffect(() => {
		if (!navigator.onLine) {
			if (localStorage.getItem("homes") == null) setState({ homes: [] });
			else setState({ homes: JSON.parse(localStorage.getItem("homes")) });
		} else {
			let endpoint =
				"https://isis3710parcial2smarthome.herokuapp.com/api/homes";
			fetch(endpoint)
				.then((res) => {
					return res.json();
				})
				.then((phomes) => {
					setState({ homes: phomes });
					localStorage.setItem("homes", JSON.stringify(phomes));
				});
		}
	}, []);
	return (
		<div className="container home">
			<h1>
				<FormattedMessage id="spaces"></FormattedMessage>
			</h1>
			<div className="Gallery">
				{state.homes == null ? (
					<FormattedMessage id="noHomes"></FormattedMessage>
				) : (
					state.homes
						.filter((home) => home.isActive)
						.map((home) => <Card key={home.id} home={home}></Card>)
				)}
			</div>
		</div>
	);
};
