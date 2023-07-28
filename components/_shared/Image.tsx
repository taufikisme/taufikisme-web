import React from 'react';
import NextImage, { ImageProps } from 'next/image';

const Image = ({
	src,
	alt,
	className,
	style,
	blurDataURL,
	loader,
	quality,
	priority,
	loading,
	unoptimized,
	width,
	height
}: ImageProps): JSX.Element => (
	<div className={['relative', className].join(' ')} style={{ ...style, width, height }}>
		<NextImage
			src={src}
			alt={alt}
			blurDataURL={blurDataURL}
			loader={loader}
			quality={quality}
			priority={priority}
			loading={loading}
			unoptimized={unoptimized}
		/>
	</div>
);

export default Image;
