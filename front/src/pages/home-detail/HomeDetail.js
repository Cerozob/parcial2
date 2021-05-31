import React, { useEffect, useState } from "react";
import "./HomeDetail.scss";
import { FormattedMessage } from "react-intl";
import { useParams } from "react-router";
import { RoomsGallery } from "../../components/roomsGallery/RoomsGallery";
import { RoomDetail } from "../../components/roomDetail/RoomDetail";
import { Stats } from "../../components/stats/Stats";

export const HomeDetail = () => {
	let { id } = useParams();
	const [state, setState] = useState({ home: [] });
	const [roomState, setRoom] = useState({ room: [] });
	useEffect(() => {
		if (!navigator.onLine) {
			if (localStorage.getItem(`${id}`) == null) setState({ home: [] });
			else setState({ home: JSON.parse(localStorage.getItem(`${id}`)) });
		} else {
			let endpoint = `https://isis3710parcial2smarthome.herokuapp.com/api/homes/${id}`;
			fetch(endpoint)
				.then((res) => {
					return res.json();
				})
				.then((pHome) => {
					setState({ home: pHome });
					localStorage.setItem(`${id}`, JSON.stringify(pHome));
				});
		}
	}, [id]);

	const setCurrentRoom = (roomid) => {
		if (!navigator.onLine) {
			if (localStorage.getItem(`${roomid}`) === null) setRoom({ room: [] });
			else setRoom({ room: JSON.parse(localStorage.getItem(`${roomid}`)) });
		}
		let selectedRoom = state.home.rooms.filter((room) => room._id === roomid);
		setRoom({ room: selectedRoom });
		localStorage.setItem(`${roomid}`, JSON.stringify(selectedRoom));
	};

	return (
		<div className="container home">
			<h1>
				<FormattedMessage id="myrooms"></FormattedMessage>
			</h1>
			<section className="row">
				<RoomsGallery
					rooms={
						state.home == null
							? null
							: state.home.length === 0
							? null
							: state.home.rooms
					}
					clickRoom={setCurrentRoom}
				></RoomsGallery>
				<RoomDetail
					room={
						roomState.room == null
							? null
							: roomState.room.length === 0
							? null
							: roomState.room
					}
				></RoomDetail>
			</section>
			<h1>
				<FormattedMessage id="stats"></FormattedMessage>
			</h1>
			<section className="row" id="visualizationContainer">
				<Stats rooms={state.home.rooms}></Stats>
			</section>
		</div>
	);
};
