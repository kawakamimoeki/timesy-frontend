import { BACKEND } from '$env/static/private';

export const load = async () => {
	const res = await fetch(`${BACKEND}/api/v1/posts/trending`);
	const json = await res.json();
	return {
		posts: json.posts
	};
};
