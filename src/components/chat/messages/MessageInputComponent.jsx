import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import moment from 'moment';
import {updateMessages} from "../../../actions/chat";
import sendIcon from "../../../assets/icons/sendIcon.svg";
const MessageInputComponent = ({socket}) => {
	const [message, setMessage] = useState('');
	const dispatch = useDispatch();

	const {chat, auth} = useSelector(state => state);

	const handleSendMessage = () => {
		if(chat.selectedChannel) {
			console.log('enviando');
			const date = moment().format('D. MMM. YYYY')
			socket.emit('message-sent', {text: message, roomId: chat.selectedChannel._id, date, username: auth.username })
			setMessage('');
		}
	}
	useEffect(() => {
		socket.on('message-sent', (message) => {
			dispatch(updateMessages(message));
		});
	}, []);

	return (
		<form className="message__form" onSubmit={(e) => e.preventDefault()}>
			<div className="message__form-field">
				<input
					placeholder="Type a message"
					type="text"
					className="message__input"
					name="message"
					onChange={(e) => setMessage(e.target.value)}
					onKeyPress={(e) => e.code === 'Enter' && handleSendMessage()}
					value={message}
				/>
				<img src={sendIcon} alt="send message button" className="message__send-button" onClick={() => handleSendMessage()}/>
			</div>
		</form>
	);
};

export default MessageInputComponent;
