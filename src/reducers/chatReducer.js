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
			return {
				...state,
				selectedChannel: action.payload,
			}
		case types.unselectSingleChannel: 
			return {
				...state,
				selectedChannel: null,
			}
		case types.updateMessages: 
			return {
				...state, 
				messages: [...state.messages, action.payload]
			}
		case types.createChannel: 
			return {
				...state,
				channels: [...state.channels, action.payload],
			}
		default: 
			return state;
	}
}

export default chatReducer;
