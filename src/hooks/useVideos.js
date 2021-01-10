import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm ) => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		search(defaultSearchTerm);
	}, [defaultSearchTerm]);

	const search = async term => {
		const response = await youtube.get('/search', {
			params: {
				q:term
			}
		});
		
		setVideos(response.data.items);
	};

	// Can use any of the options below
	return [videos, search];			// Common practice in React
	// return { videos, search };		//Common practice in JS
};

export default useVideos;