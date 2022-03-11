import types from "../types/types"

const selectChannel = (channel) => {
	return {
		type: types.selectSingleChannel,
		payload: channel,
	}
}
const getChannels = (channels) => {
	return {
		type: types.getChannels,
		payload: channels,
	}
}

const unselectChannel = () => ({
	type: types.unselectSingleChannel,
})
export {
	getChannels,
	selectChannel,
	unselectChannel,
}
