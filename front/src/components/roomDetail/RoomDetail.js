import React from "react";
import "./RoomDetail.scss";
import { useIntl } from "react-intl";

export const RoomDetail = (props) => {
	const intl = useIntl();
	return (
		<div className="roomDetail col-lg-4 md-12 sm-12">
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
									<td>
										{device.id ? device.id : intl.formatMessage({ id: "none" })}
									</td>
									<td>{device.name}</td>
									<td>
										{typeof device.desired.value === typeof "String"
											? device.desired.value
											: JSON.stringify(device.desired.value)}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			)}
		</div>
	);
};
