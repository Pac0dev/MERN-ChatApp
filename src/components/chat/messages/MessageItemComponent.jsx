const MessageItemComponent = ({message}) => {
	const {text, date, username} = message;
	return (
		<li className="messages__item">
			<div className="message">
				<img className="message__img"/>
				<div className="message__content">
					<div className="message__top gray-color">
						<span className="message__sender">
							{username}
						</span>
						<span className="message__date">
							{date}
						</span>
					</div>
					<div className="message__text">
						{text}
					</div>
				</div>
			</div>
		</li>
	);
};

export default MessageItemComponent;
