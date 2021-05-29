import React from "react";
import { Link } from "react-router-dom";
import "./RoomCard.scss";
import { useIntl } from "react-intl";
export const RoomCard = (props) => {
	const intl = useIntl();

	const buttonPress = () => {
		props.clickRoom(props.room._id);
	};

	return (
		<div className="card room-card-home">
			<h3 className="card-home-title">{props.room.name}</h3>
			<Link className="card-home-img-link" onClick={buttonPress}>
				{props.room.type === "room" ? (
					<img
						src="/living-room.png"
						className="room-card-home-img-top room"
						alt={intl.formatMessage({ id: "roomicon" })}
					/>
				) : (
					<img
						src="/kitchen.png"
						className="room-card-home-img-top kitchen"
						alt={intl.formatMessage({ id: "kitchenicon" })}
					/>
				)}
			</Link>
		</div>
	);
};
