import React from 'react';
import { SliceComponentProps } from '@prismicio/react';
import { ContextType } from '@core/prismic/types';
import { FooterMainSlice } from '@root/prismicio-types';
import clsx from 'clsx';

const FooterMain = ({
	context: { lowerRef }
}: SliceComponentProps<FooterMainSlice, ContextType>) => {
	return (
		<footer ref={lowerRef} className={clsx('w-full')}>
			<div className={clsx('container flex-cc text-center text-sm py-5')}>
				Copyright © 2023. taufikisme. All rights reserved.
			</div>
		</footer>
	);
};

export default FooterMain;
