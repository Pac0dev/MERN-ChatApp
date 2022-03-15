const getChannelsId = (channels = []) => {
	console.log(channels);
	const ids = channels.map((channel) => {
		return channel._id;
	});
	return ids;
};
export default getChannelsId;
