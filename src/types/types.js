const types = {
	login: '[AUTH] login',
	register: '[AUTH] register',
	logout: '[AUTH] logout',

	getChannels: '[CHAT] get-channels',
	selectSingleChannel: '[CHAT] select-channel',
	unselectSingleChannel: '[CHAT] unselect-channel',
	updateMessages: '[CHAT] get-update-messages',
	createChannel: '[CHAT] create-channel',
}
export default types;
