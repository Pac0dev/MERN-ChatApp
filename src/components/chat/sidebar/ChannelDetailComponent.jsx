import backIcon from "../../../assets/icons/backIcon.svg";
import {useDispatch, useSelector} from "react-redux";
import UserComponent from "./UserComponent";
import {unselectChannel} from "../../../actions/chat";
const ChannelDetailComponent = () => {
	const selectedChannel = useSelector(s => s.chat.selectedChannel);
	const dispatch = useDispatch();
	const handleBackClick = () => {
		dispatch(unselectChannel())
	};
	return (
		<div className="channel">
			<div className="channel__top-bar">
				<img className="channel__back-button" alt="back button" src={backIcon} onClick={handleBackClick}/>
				<h3 className="title">All Channels</h3>
			</div>
			<div className="channel__container">
				<div className="channel__description">
					<h4>{selectedChannel?.name}</h4>
					<p>
						{selectedChannel?.channelDescription}
					</p>
				</div>
				<ul className="channel__members">
					<h4>Members</h4>
					{
						selectedChannel.users?.map((user) => (
							<UserComponent key={user._id} user={user}/>
						))
					}
				</ul>
			</div>
		</div>
	);
};

export default ChannelDetailComponent;
