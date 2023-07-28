import React from 'react';
import { ImageField } from '@prismicio/client';
import Image from 'next/image';

interface Props {
	field: ImageField;
	className?: string;
}

const PrismicNextImage = ({ field, className = '' }: Props) => {
	const { url, dimensions, alt } = field;

	return (
		<Image
			src={url ?? '#'}
			width={dimensions?.width}
			height={dimensions?.height}
			alt={alt ?? ''}
			className={className}
			loading="lazy"
		/>
	);
};

export default PrismicNextImage;
