import MessageItemComponent from "./MessageItemComponent"

const MessageListComponent = () => {
	let array = [3,3,3,3,3,3,3];
	return (
		<ul className="messages__list">
			{
				array.map((value, i) => (<MessageItemComponent key={i}/>))
			}
		</ul>
	)
}

export default MessageListComponent
