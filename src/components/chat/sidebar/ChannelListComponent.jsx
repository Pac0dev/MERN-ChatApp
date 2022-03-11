import ChannelComponent from "./ChannelComponent"

import searchIcon from "../../../assets/icons/searchIcon.svg";
import {useSelector} from "react-redux";
const ChannelListComponent = () => {
	const channels = useSelector(state => state.chat.channels);

	const renderChannels = () => {
		if(channels.length > 0) {
			return channels.map((channel) => (<ChannelComponent key={channel._id} channel={channel}/>))
		}
		return <h3>No channels created yet</h3>
	}
	return (
		<div className="channels">
			<div className="channels__top-bar">
				<h3 className="title">Channels</h3>
				<button className="channels__add-channel btn">
					+
				</button>
			</div>
			<form className="channels__form">
				<div className="channels__input-field">
					<img src={searchIcon} alt="search"/>
					<input
						type="text"
						autoComplete="off"
						placeholder="Search"
						className="channels__input"
					/>
				</div>
				<ul className="channels__list">
					{
						renderChannels()
					}
				</ul>
			</form>
		</div>
	)
}

export default ChannelListComponent
