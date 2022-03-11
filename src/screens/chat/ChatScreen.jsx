import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getChannels} from "../../actions/chat";
import MessageComponent from "../../components/chat/messages/MessageComponent"
import SidebarComponent from "../../components/chat/sidebar/SidebarComponent"
import {getFetch} from "../../helper/fetch";

const ChatScreen = () => {

	const [isAsideOpen, setIsAsideOpen] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		const token = localStorage.getItem('token') || '';
		console.log(token);
		getFetch('/chat/get-channels', token)
			.then((result) => {
				if(result.channels === undefined || result.channels === null) {
					localStorage.setItem('token', '');
					history.back();
				} else {
					console.log(result.channels);
					dispatch(getChannels(result.channels));
				}
			})
			.catch(console.warn);
	}, [dispatch]);

	return (
		<div className="chat-flex">
			<SidebarComponent isAsideOpen={isAsideOpen} setIsAsideOpen={setIsAsideOpen}/>
			<MessageComponent setIsAsideOpen={setIsAsideOpen}/>
		</div>
	)
}

export default ChatScreen
