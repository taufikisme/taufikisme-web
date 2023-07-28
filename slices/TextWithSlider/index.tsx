import React from 'react';
// Prismic
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import clsx from 'clsx';
import GradientSeparator from '@components/GradientSeparator';

import RoundBlur from '@components/assets/RoundBlur';
import Slider from './components/Slider';
import SectionHeading from '@components/SectionHeading';
import dynamic from 'next/dynamic';

const GlassMorphWrapper = dynamic(() => import('@components/GlassMorphWrapper'));

/**
 * Props for `TextWithSlider`.
 */
export type TextWithSliderProps = SliceComponentProps<Content.TextWithSliderSlice>;

/**
 * Component for "TextWithSlider" Slices.
 */
const TextWithSlider = ({ slice }: TextWithSliderProps): JSX.Element => {
	const { primary, items } = slice;
	const { subheading, heading, body } = primary;

	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className={clsx('default-wrapper')}
			id="about"
		>
			<RoundBlur
				className="absolute bottom-2 left-1/2 -translate-x-1/2"
				size={500}
				color="#3C8BC6"
			/>
			<GradientSeparator color="#D9403F" />
			<GlassMorphWrapper>
				<div className={clsx('container pt-24 pb-32')}>
					<GradientSeparator />
					<SectionHeading subheading={subheading} heading={heading} body={body} />
					<Slider items={items} />
				</div>
			</GlassMorphWrapper>
		</section>
	);
};

export default TextWithSlider;
