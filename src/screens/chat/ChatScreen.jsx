import {useState} from "react";
import MessageComponent from "../../components/chat/messages/MessageComponent"
import SidebarComponent from "../../components/chat/sidebar/SidebarComponent"

const ChatScreen = () => {

	const [isAsideOpen, setIsAsideOpen] = useState(false);

	return (
		<div className="chat-flex">
			<SidebarComponent isAsideOpen={isAsideOpen} setIsAsideOpen={setIsAsideOpen}/>
			<MessageComponent setIsAsideOpen={setIsAsideOpen}/>
		</div>
	)
}

export default ChatScreen
