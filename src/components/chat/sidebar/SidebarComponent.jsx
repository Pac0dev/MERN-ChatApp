import { useState } from "react";
import ChannelDetailComponent from "./ChannelDetailComponent";
import ChannelListComponent from "./ChannelListComponent";
import downIcon from "../../../assets/icons/downIcon.svg";
const SidebarComponent = ({isAsideOpen, setIsAsideOpen}) => {

	const [isChannelSelected, setIsChannelSelected] = useState(true);

	const renderComponentByFlag = () => {
		return isChannelSelected === true ? <ChannelDetailComponent/> : <ChannelListComponent/>;
	}

	return (
		<>
			<aside className={`aside ${isAsideOpen === false ? 'aside--hidden' : ''}`}>
				{renderComponentByFlag()}
				<div className="aside__user">
					<div className="aside__user-info">
						<img className="aside__user-img"/>
						<span>
							User Name
						</span>
					</div>
					<img src={downIcon} alt="show-more-user" className="aside__user-img"/>
				</div>
			</aside>

			{
				isAsideOpen === true && (
					<button 
						className="btn close-aside fw-bold"
						onClick={() => setIsAsideOpen(!isAsideOpen)}
					>
						X
					</button>
				)
			}
		</>
	)
}

export default SidebarComponent
