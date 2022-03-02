import { useState } from "react";
import ChannelDetailComponent from "./ChannelDetailComponent";
import ChannelListComponent from "./ChannelListComponent";

const SidebarComponent = () => {

	const [isChannelSelected, setIsChannelSelected] = useState(false);

	const renderComponentByFlag = () => {
		return isChannelSelected === true ? <ChannelDetailComponent/> : <ChannelListComponent/>;
	}

	return (
		<aside className="aside">
			{renderComponentByFlag()}
		</aside>
	)
}

export default SidebarComponent
