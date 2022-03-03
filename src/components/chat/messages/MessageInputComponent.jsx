import sendIcon from "../../../assets/icons/sendIcon.svg";
const MessageInputComponent = () => {
	return (
		<form className="message__form">
			<div className="message__form-field">
				<input
					placeholder="Type a message"
					type="text"
					className="message__input"
				/>
				<img src={sendIcon} alt="send message button" className="message__send-button"/>
			</div>
		</form>
	);
};

export default MessageInputComponent;
