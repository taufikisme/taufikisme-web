import clsx from 'clsx';
import React from 'react';

interface Props {
	children: JSX.Element;
}

const GlassMorphWrapper = ({ children }: Props) => (
	<div className={clsx('w-full bg-dark bg-opacity-75 backdrop-blur-3xl')}>{children}</div>
);

export default GlassMorphWrapper;
