import React from 'react';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import { ContextType } from '@core/prismic/types';
import { ImageSlice } from '@root/prismicio-types';

const Image = ({ slice }: SliceComponentProps<ImageSlice, ContextType>) => {
	return <PrismicNextImage field={slice.primary.image} />;
};

export default Image;
