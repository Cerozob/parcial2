import React, { useEffect, useState } from "react";
import "./HomesList.scss";
import { getHomes } from "../../services/utils";
import { FormattedMessage } from "react-intl";
import { Gallery } from "../../components/gallery/Gallery";

export const HomesList = () => {
	const [, setHomes] = useState([]);

	useEffect(() => {
		getHomes().then((data) => setHomes(data));
	}, []);

	return (
		<div className="container home">
			<h1>
				<FormattedMessage id="spaces"></FormattedMessage>
			</h1>
			<Gallery></Gallery>
		</div>
	);
};
