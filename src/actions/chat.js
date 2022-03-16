import { getFetch, postFetch } from "../helper/fetch";
import types from "../types/types";
import {logout} from "./auth";

const startToCreatingChannel = (channel) => {
	return (dispatch) => {
		postFetch(channel, "/chat/create-channel")
			.then((res) => {
				console.log(res);
			})
			.catch((error) => {
				console.warn(error);
			});
	};
};

const startGettingChannels = () => {
	return (dispatch) => {
		getFetch("/chat/get-channels")
			.then((result) => {
				if (result.status === 400 || result.status === 500) {
					localStorage.removeItem("token");
					dispatch(logout());
				} else {
					console.log(result);
					dispatch(getChannels(result.channels));
				}
			})
			.catch(console.warn);
	};
};
const selectChannel = (channel) => {
	return {
		type: types.selectSingleChannel,
		payload: channel,
	};
};
const getChannels = (channels) => {
	return {
		type: types.getChannels,
		payload: channels,
	};
};

const updateMessages = (message = "") => ({
	type: types.updateMessages,
	payload: message,
});

const unselectChannel = () => ({
	type: types.unselectSingleChannel,
});
const createChannel = (channel) => ({
	type: types.createChannel,
	payload: channel,
});
export {
	startGettingChannels,
	startToCreatingChannel,
	getChannels,
	selectChannel,
	unselectChannel,
	updateMessages,
};
