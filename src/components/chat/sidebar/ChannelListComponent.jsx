import { useState } from "react";
import ChannelComponent from "./ChannelComponent";

import searchIcon from "../../../assets/icons/searchIcon.svg";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../../modal/Modal";
import useForm from "../../../hooks/useForm";
import {startToCreatingChannel} from "../../../actions/chat";
const ChannelListComponent = () => {
	const channels = useSelector((state) => state.chat.channels);
	const dispatch = useDispatch();
	const [isVisibleModal, setIsVisibleModal] = useState(true);
	const [formValues, handleInputChange, reset] = useForm({
		name: '',
		desc: '',
	});

	const renderChannels = () => {
		if (channels?.length > 0 && channels !== undefined) {
			return channels.map((channel) => (
				<ChannelComponent key={channel._id} channel={channel} />
			));
		}
		return <h3>No channels created yet</h3>;
	};

	const handleAddChannel = () => {
		setIsVisibleModal(!isVisibleModal);
	};

	const handleSaveGroup = (e) => {
		e.preventDefault();
		const {name, desc} = formValues;

		const channel = {
			name, 
			desc,
		}

		if(name.trim().length > 2 && desc.trim().length > 4) {
			dispatch(startToCreatingChannel(channel));
			reset();
		}
	}
	return (
		<div className="channels">
			<div className="channels__top-bar">
				<h3 className="title">Channels</h3>
				<button
					className="channels__add-channel btn"
					onClick={handleAddChannel}
				>
					+
				</button>
			</div>
			<form className="channels__form">
				<div className="channels__input-field">
					<img src={searchIcon} alt="search" />
					<input
						type="text"
						autoComplete="off"
						placeholder="Search"
						className="channels__input"
					/>
				</div>
				<ul className="channels__list">{renderChannels()}</ul>
			</form>
			<Modal>
				<form className="portal__form" onSubmit={handleSaveGroup}>
					<legend className="portal__form-title">new channel</legend>
					<div className="portal__form-field">
						<input type="text" placeholder="Channel's Name" onChange={handleInputChange} value={formValues.name}/>
					</div>
					<div className="portal__form-field">
						<textarea placeholder="Channel's Description" onChange={handleInputChange} value={formValues.desc}>
						</textarea>
					</div>
					<div className="portal__form-field">
						<input type="submit" value="Save" />
					</div>
				</form>
			</Modal>
		</div>
	);
};

export default ChannelListComponent;
