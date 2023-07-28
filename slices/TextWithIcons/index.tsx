import React from 'react';
import { Content, isFilled } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import clsx from 'clsx';
import GradientSeparator from '@components/GradientSeparator';
import SectionHeading from '@components/SectionHeading';
import RoundBlur from '@components/assets/RoundBlur';
import Link from 'next/link';
import RightLeftShadow from '@components/RightLeftShadow';
import PrismicNextImage from '@components/_shared/PrismicNextImage';
import dynamic from 'next/dynamic';

const GlassMorphWrapper = dynamic(() => import('@components/GlassMorphWrapper'));

/**
 * Props for `TextWithIcons`.
 */
export type TextWithIconsProps = SliceComponentProps<Content.TextWithIconsSlice>;

/**
 * Component for "TextWithIcons" Slices.
 */
const TextWithIcons = ({ slice }: TextWithIconsProps): JSX.Element => {
	const { primary, items } = slice;
	const { subheading, heading, description } = primary;

	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className={clsx('default-wrapper')}
			id="stacks"
		>
			<RoundBlur className="absolute top-10 right-16" size={250} color="#3C8BC6" />
			<RoundBlur className="absolute top-10 left-16" size={250} color="#D9403F" />
			<GradientSeparator position="top" color="#B4D42A" />
			<GlassMorphWrapper>
				<div className={clsx('container py-24')}>
					<GradientSeparator position="top" />
					<SectionHeading subheading={subheading} heading={heading} body={description} />
					<div
						className={clsx(
							'relative overflow-x-clip overflow-y-visible w-full flex-cc flex-wrap gap-8 py-6'
						)}
					>
						<RightLeftShadow width="25%" addBottom />
						{items.map(
							(item, i) =>
								isFilled.image(item.icon) && (
									<Link
										key={i}
										href={isFilled.link(item.link) ? item.link.url ?? '#' : '#'}
										target="_blank"
										rel="nofollow"
										className={clsx(
											'block w-24 aspect-[1/1] border border-[rgba(180,212,42,0.5)] rounded-[32px] bg-lightgreen bg-opacity-[0.08] backdrop-blur p-4 flex-cc transition-all hover:scale-105 hover:shadow-glow-lightgreen'
										)}
									>
										<PrismicNextImage
											field={item.icon}
											className={clsx('object-contain object-center')}
										/>
									</Link>
								)
						)}
					</div>
				</div>
			</GlassMorphWrapper>
		</section>
	);
};

export default TextWithIcons;
