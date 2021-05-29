import React, { useEffect, useState } from "react";
import "./RoomsGallery.scss";
import { RoomCard } from "../roomcard/RoomCard";
import { FormattedMessage } from "react-intl";

export const RoomsGallery = (props) => {
	const clickRoom = (id) => {
		props.clickRoom(id);
	};

	return (
		<div className="Gallery">
			{props.rooms == null ? (
				<FormattedMessage id="noRooms"></FormattedMessage>
			) : (
				props.rooms.map((room) => (
					<RoomCard key={room.id} room={room} clickRoom={clickRoom}></RoomCard>
				))
			)}
		</div>
	);
};
