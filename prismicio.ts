import * as prismic from '@prismicio/client';
import * as prismicNext from '@prismicio/next';
import config from './slicemachine.config.json';

/**
 * The project's Prismic repository name.
 */
export const repositoryName = config.repositoryName;

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = (config: prismicNext.CreateClientConfig = {}) => {
	const client = prismic.createClient(repositoryName, {
		...config
	});

	prismicNext.enableAutoPreviews({
		client,
		previewData: config.previewData,
		req: config.req
	});

	return client;
};
