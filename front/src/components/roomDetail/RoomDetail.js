import React from "react";
import "./RoomDetail.scss";
import { useIntl } from "react-intl";
import { FormattedMessage } from "react-intl";

export const RoomDetail = (props) => {
	const intl = useIntl();
	return (
		<div className="Gallery col-lg-4 md-12 sm-12">
			{props.room == null ? (
				<h5>{intl.formatMessage({ id: "noRoomSelected" })}</h5>
			) : (
				<table className="table">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">ID</th>
							<th scope="col">{intl.formatMessage({ id: "device" })}</th>
							<th scope="col">{intl.formatMessage({ id: "value" })}</th>
						</tr>
					</thead>
					<tbody>
						{props.room[0].devices.map((device, index) => {
							return (
								<tr key={device.id}>
									<th scope="row">{index + 1}</th>
									<td>{device.id}</td>
									<td>{device.name}</td>
									<td>{device.desired.value}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			)}
		</div>
	);
};
