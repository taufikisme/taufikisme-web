import * as prismic from '@prismicio/client';

export const queryByRoute = async (
	client: prismic.Client,
	route: string,
	params: Partial<prismic.BuildQueryURLArgs> = {}
): Promise<prismic.Content.PagesDocument> => {
	return client.getSingle('pages', {
		...params,
		predicates: [prismic.filter.at('my.pages.route', route)],
		fetchLinks: ['layouts.slices', 'pages.route']
	});
};

export const queryByUID = async <
	TDocuments extends prismic.PrismicDocument = prismic.PrismicDocument
>(
	client: prismic.Client,
	type: string,
	uid: string,
	params: Partial<prismic.BuildQueryURLArgs> = {}
): Promise<TDocuments> => {
	return client.getByUID<TDocuments>(type, uid, params);
};

export const queryLayout = async (
	client: prismic.Client,
	uid: string,
	params: Partial<prismic.BuildQueryURLArgs> = {}
): Promise<prismic.Content.LayoutsDocument['data']> => {
	const defaultFetchLinks: string[] = [];
	return client
		.getByUID<prismic.Content.LayoutsDocument>('layouts', uid, {
			fetchLinks: defaultFetchLinks,
			...params
		})
		.then((res) => res.data);
};
