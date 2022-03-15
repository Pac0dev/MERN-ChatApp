import menuIcon from "../../../assets/icons/menuIcon.svg";
import MessageInputComponent from "./MessageInputComponent";
import MessageListComponent from "./MessageListComponent";
const MessageComponent = ({setIsAsideOpen, socket}) => {
	return(
		<main className="messages">
			<div className="messages__top-bar">
				<img src={menuIcon} alt="show aside menu button" onClick={() => setIsAsideOpen(isAsideOpen => !isAsideOpen)}/>
				<h3 className="title fw-bold">AlDiabloLosCuyosLlorones</h3>
			</div>
			<div className="messages__messages-container">
				<MessageListComponent/>
			</div>
			<MessageInputComponent socket={socket}/>
		</main>
	)
}

export default MessageComponent
