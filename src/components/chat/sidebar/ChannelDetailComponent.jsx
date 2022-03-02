import ChannelComponent from "./ChannelComponent";

import backIcon from "../../../assets/icons/backIcon.svg";
const ChannelDetailComponent = () => {
	return (
		<div className="channel">
			<div className="channel__top-bar">
				<img className="channel__back-button" alt="back button" src={backIcon}/>
				<h3 className="title">All Channels</h3>
			</div>
			<div className="channel__container">
				<div className="channel__description">
					<h4>Channel Name</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Doloremque, nostrum enim. Minus, impedit quas sequi quae et
						facilis dolorum veritatis hic obcaecati eos eius error
					</p>
				</div>
				<ul className="channel__members">
					<h4>Members</h4>
					{
						[1,2,3,4,5].map((value) => {
							return (
								<ChannelComponent key={value}/>
							)
						})
					}
				</ul>
			</div>
		</div>
	);
};

export default ChannelDetailComponent;
