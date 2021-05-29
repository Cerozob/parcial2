import React, { useEffect, useState } from "react";
import "./HomeDetail.scss";
import { FormattedMessage } from "react-intl";
import { useParams } from "react-router";
import { RoomsGallery } from "../../components/roomsGallery/RoomsGallery";

export const HomeDetail = () => {
	let { id } = useParams();
	const [state, setState] = useState({ home: [] });
	useEffect(() => {
		if (!navigator.onLine) {
			if (localStorage.getItem(`${id}`) === null) setState({ home: [] });
			else setState({ home: localStorage.getItem(`${id}`) });
		}

		let endpoint = `http://localhost:3000/api/homes/${id}`;
		fetch(endpoint)
			.then((res) => {
				return res.json();
			})
			.then((pHome) => {
				setState({ home: pHome });
				localStorage.setItem(`${id}`, pHome);
			});
	}, [id]);

	const setCurrentRoom = (roomid) => {
		let room = state.home.rooms.filter((room) => room._id === roomid);
		console.log(room);
	};
	return (
		<div className="container home">
			<h1>
				<FormattedMessage id="myrooms"></FormattedMessage>
			</h1>
			<RoomsGallery
				rooms={state.home.rooms}
				clickRoom={setCurrentRoom}
			></RoomsGallery>
		</div>
	);
};
