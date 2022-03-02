import ChannelComponent from "./ChannelComponent"

const ChannelListComponent = () => {
	return (
		<div className="channels">
			<div className="channels__top-bar">
				<h3 className="title">Channels</h3>
				<button className="channels__add-channel btn">
					+
				</button>
			</div>
			<form className="channels__form">
				<input
					type="text"
					autoComplete="off"
					placeholder="Search"
					className="channels__input"
				/>
				<ul className="channels__list">
					{
						[1,2,3,4,5].map((value, i) => (
							<ChannelComponent key={i}/>
						))
					}
				</ul>
			</form>
		</div>
	)
}

export default ChannelListComponent
