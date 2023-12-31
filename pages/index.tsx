import CustomPage from './[...customs]';
import { GetStaticProps } from 'next';
import { LayoutContentType, PageParams, PageProps, queryByRoute } from '@core/prismic/client';
import { isLayoutData } from '@core/utils/check';
import { isFilled } from '@prismicio/client';
import { createClient } from '@root/prismicio';

export const getStaticProps: GetStaticProps<PageProps, PageParams> = async ({ previewData }) => {
	try {
		const client = createClient({ previewData });
		const PageDoc = await queryByRoute(client, '/');
		const content = PageDoc.data;

		if (!isFilled.contentRelationship(content.layout) || !isLayoutData(content.layout.data))
			throw new Error('Mising layout');
		const layout_content: LayoutContentType = content.layout.data;

		if (previewData) layout_content.isPreview = true;
		return {
			props: { content, layout_content }
		};
	} catch (err) {
		return {
			notFound: true
		};
	}
};

export default CustomPage;
