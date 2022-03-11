import {useDispatch} from "react-redux"
import {selectChannel} from "../../../actions/chat";

const ChannelComponent = ({channel}) => {
	const dispatch = useDispatch();


	const handleChannelSelectClick = () => {
		dispatch(selectChannel(channel));
	}

	return (
		<li className="channel__item" onClick={handleChannelSelectClick}>
			<img className="aside__user-img"/>
			<span className="title fw-bold up-case gray-color">{channel?.name}</span>
		</li>
	)
}

export default ChannelComponent
