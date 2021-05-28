import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";
import { useIntl } from "react-intl";
export const Card = (props) => {
	const intl = useIntl();
	return (
		<div className="card card-home">
			<Link className="card-home-img-link" to={`/homes/${props.home.id}`}>
				{props.home.type === "house" ? (
					<img
						src="/home.png"
						className="card-home-img-top"
						alt={intl.formatMessage({ id: "homeicon" })}
					/>
				) : (
					<img
						src="/loft.png"
						className="card-home-img-top loft"
						alt={intl.formatMessage({ id: "lofticon" })}
					/>
				)}
			</Link>
			<div className="card-home-body">
				<div className="card-home-body-description">
					<h5 className="card-home-title">{props.home.name}</h5>
					<p className="card-home-text">{props.home.address}</p>
				</div>
			</div>
		</div>
	);
};
