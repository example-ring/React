import React from "react";
import Notification from "./Notification";

const reservedNotifications = [

	{
		message: "안녕하세요, 반가워요!",
	},
	{
		message: "또 만났군요!",
	},
	{
		message: "다음에 또 봐요!",
	},

]

var timer;

class NotificationList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notifications: [],
		};
	};

	componentDidMount() {
		const { notifications } = this.state;
		timer = setInterval(() => {
			if (notifications.length < reservedNotifications.length) {
				const index = notifications.length;
				notifications.push(reservedNotifications[index]);
				this.setState( {
					notifications: notifications,
				});

			} else {
				clearInterval(timer);
			}
		}, 3000);

	}

	render () {

		return (

			<div>
				{this.state.notifications.map((notification) => {
					return <Notification message = {notification.message}></Notification>;
				})}
			</div>

		);

	}


}

export default NotificationList;

