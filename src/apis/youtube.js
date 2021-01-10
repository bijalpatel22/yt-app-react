import axios from 'axios';

const KEY = 'AIzaSyCiU7gqT8JL4sn38Je8hJ_9NH4qpbuhJqs';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY
	}
});