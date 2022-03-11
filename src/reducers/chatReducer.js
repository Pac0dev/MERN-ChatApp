import types from "../types/types";

const initialState = {
	channels: [],
	messages: [],
	selectedChannel: null,
};
const chatReducer = (state = initialState, action = {}) => {
	switch(action.type) {
		case types.getChannels: 
			return {
				...state,
				channels: action.payload,
			}
		case types.selectSingleChannel: 
			console.log(action.payload);
			return {
				...state,
				selectedChannel: action.payload,
			}
		case types.unselectSingleChannel: 
			return {
				...state,
				selectedChannel: null,
			}
		default: 
			return state;
	}
}

export default chatReducer;
