import ChannelComponent from "./ChannelComponent"

import searchIcon from "../../../assets/icons/searchIcon.svg";
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
				<div className="channels__input-field">
					<img src={searchIcon} alt="search"/>
					<input
						type="text"
						autoComplete="off"
						placeholder="Search"
						className="channels__input"
					/>
				</div>
				<ul className="channels__list">
					{
						[1,2,3,4,5].map((value ) => (
							<ChannelComponent key={value}/>
						))
					}
				</ul>
			</form>
		</div>
	)
}

export default ChannelListComponent
