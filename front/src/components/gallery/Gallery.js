import React, { useEffect, useState } from "react";
import "./Gallery.scss";
import { Card } from "../card/Card";
import { FormattedMessage } from "react-intl";
import { json } from "express";

export const Gallery = () => {
	const [state, setState] = useState({ homes: [] });

	useEffect(() => {
		if (!navigator.onLine) {
			if (localStorage.getItem("homes") === null) setState({ homes: [] });
			else setState({ homes: localStorage.getItem("homes") });
		}
		let endpoint = "http://localhost:3000/api/homes";
		fetch(endpoint)
			.then((res) => {
				return res.json();
			})
			.then((phomes) => {
				setState({ homes: phomes });
				localStorage.setItem("homes", phomes);
			});
	}, []);
	return (
		<div className="Gallery">
			{state.homes == null ? (
				<FormattedMessage id="noHomes"></FormattedMessage>
			) : (
				<p>{JSON.stringify(state.homes[0])}</p>
			)}
		</div>
	);
};
