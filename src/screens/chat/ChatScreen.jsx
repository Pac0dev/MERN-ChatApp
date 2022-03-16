import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {startGettingChannels} from "../../actions/chat";
import MessageComponent from "../../components/chat/messages/MessageComponent"
import SidebarComponent from "../../components/chat/sidebar/SidebarComponent"
import {getFetch} from "../../helper/fetch";
import getChannelsId from "../../helper/getChannelsId";
import useSocket from "../../hooks/useSocket";

const ChatScreen = () => {

	const [isAsideOpen, setIsAsideOpen] = useState(false);
	const socket = useSocket(import.meta.env.VITE_DOMAIN, localStorage.getItem('token') || '');
	const dispatch = useDispatch();
	const {channels} = useSelector(state => state.chat);
	const history = useHistory();
	
	useEffect(() => {
		dispatch(startGettingChannels())
	}, [dispatch]);

	useEffect(() => {
		if(channels.length > 0) {
			const roomsId = getChannelsId(channels);
			socket.emit('room-sent', {roomsId : roomsId});
		}
	}, [channels]);

	return (
		<div className="chat-flex">
			<SidebarComponent isAsideOpen={isAsideOpen} setIsAsideOpen={setIsAsideOpen} socket={socket}/>
			<MessageComponent setIsAsideOpen={setIsAsideOpen} socket={socket}/>
		</div>
	)
}

export default ChatScreen
