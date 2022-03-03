const MessageItemComponent = () => {
	return (
		<li className="messages__item">
			<div className="message">
				<img className="message__img"/>
				<div className="message__content">
					<div className="message__top gray-color">
						<span className="message__sender">
							Gabriel
						</span>
						<span className="message__date">
							 12. may. 2022
						</span>
					</div>
					<div className="message__text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Saepe quisquam earum tenetur quidem dicta est assumenda,
						veniam fugiat quis aliquid fugit quam illum aspernatur
						molestias. Voluptates vero pariatur eligendi recusandae?
					</div>
				</div>
			</div>
		</li>
	);
};

export default MessageItemComponent;
