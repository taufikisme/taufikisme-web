'use client';

import { SliceSimulator } from '@slicemachine/adapter-next/simulator';
import { SliceZone } from '@prismicio/react';

import { components } from '../slices';

const SliceSimulatorPage = () => {
	return <SliceSimulator sliceZone={(props) => <SliceZone {...props} components={components} />} />;
};

// Only include this page in development
export const getStaticProps = async () => {
	if (process.env.NODE_ENV === 'production') {
		return { notFound: true };
	} else {
		return { props: {} };
	}
};

export default SliceSimulatorPage;
