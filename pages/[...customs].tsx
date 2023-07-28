import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { LayoutContentType, PageParams, PageProps, queryByRoute } from '@core/prismic/client';
import DynamicLayout from '@components/_layouts/DynamicLayout';
import { SliceZone } from '@prismicio/react';
import { components } from '@slices/index';
import { isLayoutData, notEmpty } from '@core/utils/check';
import { isFilled } from '@prismicio/client';
import { createClient } from '@root/prismicio';

const CustomPage = ({ content, layout_content }: PageProps): JSX.Element => {
	const router = useRouter();

	return (
		<DynamicLayout content={layout_content} title={content.html_title} key={router.asPath}>
			<SliceZone slices={content.slices} components={components} />
		</DynamicLayout>
	);
};

export const getStaticProps: GetStaticProps<PageProps, PageParams> = async ({
	params,
	previewData
}) => {
	try {
		if (!params) throw new Error('Missing parameter');
		const { customs } = params;
		const route = '/' + customs.join('/');
		const client = createClient({ previewData: previewData });
		const PageDoc = await queryByRoute(client, route);
		const content = PageDoc.data;

		if (!isFilled.contentRelationship(content.layout) || !isLayoutData(content.layout.data))
			throw new Error('Mising layout');

		const layout_content: LayoutContentType = content.layout.data;

		if (previewData) layout_content.isPreview = true;

		return {
			props: { content, layout_content }
		};
	} catch (error) {
		console.log(error);

		return {
			notFound: true
		};
	}
};

export const getStaticPaths: GetStaticPaths<PageParams> = async () => {
	const client = createClient();
	const docs = await client.getAllByType('pages').then((res) => res);

	const paths = docs
		.filter((doc) => doc.data.route !== '/')
		.map((doc) => {
			const { route } = doc.data;
			if (!route) return null;
			const customs = route.split('/').filter((item: any) => item);
			return { params: { customs } };
		})
		.filter(notEmpty);

	return {
		paths: paths,
		fallback: false
	};
};

export default CustomPage;
