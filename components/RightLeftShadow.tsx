import clsx from 'clsx';
import React from 'react';

interface Props {
	zIndex?: number;
	width?: string;
	addBottom?: boolean;
}

const RightLeftShadow = ({ zIndex = 1, width = '25%', addBottom = false }: Props) => (
	<>
		<div
			className={clsx(
				'absolute left-0 top-0 h-full bg-gradient-to-r from-dark to-[rgba(0,0,0,0)] pointer-events-none'
			)}
			style={{ zIndex, width }}
		></div>
		<div
			className={clsx(
				'absolute right-0 top-0 h-full bg-gradient-to-l from-dark to-[rgba(0,0,0,0)] pointer-events-none'
			)}
			style={{ zIndex, width }}
		></div>

		{addBottom && (
			<div
				className={clsx(
					'absolute -bottom-2 w-full bg-gradient-to-t from-dark to-[rgba(0,0,0,0)] pointer-events-none'
				)}
				style={{ zIndex, height: width }}
			></div>
		)}
	</>
);

export default RightLeftShadow;
