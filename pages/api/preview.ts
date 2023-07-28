import { NextApiRequest, NextApiResponse } from 'next';
import { setPreviewData, redirectToPreviewURL } from '@prismicio/next';

import { createClient } from '@root/prismicio';

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const client = createClient({ req });

	await setPreviewData({ req, res });

	await redirectToPreviewURL({ req, res, client });
};
