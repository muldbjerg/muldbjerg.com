import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	
	var rss = {
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.slug}/`,
		})),
	}

	return new Response(
		JSON.stringify(rss), {
		status: 200,
		headers: {
			"Content-Type": "application/json"
		}
		}
	);
}
