import {useSelector} from "react-redux";
import MessageItemComponent from "./MessageItemComponent"

const MessageListComponent = () => {
	const messages = useSelector(state => state.chat.messages);
	return (
		<ul className="messages__list">
			{
				messages?.map((message, i) => (<MessageItemComponent key={i} message={message}/>))
			}
		</ul>
	)
}

export default MessageListComponent
