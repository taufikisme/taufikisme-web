import clsx from 'clsx';
import React from 'react';

interface Props {
	position?: 'top' | 'bottom';
	color?: string;
}

const GradientSeparator = ({ position = 'top', color = 'rgba(255,255,255,0.5)' }: Props) => (
	<div
		className={clsx(
			'absolute left-1/2 -translate-x-1/2 h-[1px] w-1/3',
			position === 'top' ? 'top-0' : 'bottom-0'
		)}
		style={{
			backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), ${color}, rgba(0,0,0,0)`
		}}
	></div>
);

export default GradientSeparator;
