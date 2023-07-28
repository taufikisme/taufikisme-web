import React from 'react';
// Prismic
import { Content, isFilled } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import clsx from 'clsx';
// Next
import Image from 'next/image';
import Link from 'next/link';
import GradientSeparator from '@components/GradientSeparator';
import RightLeftShadow from '@components/RightLeftShadow';
import dynamic from 'next/dynamic';
const GlassMorphWrapper = dynamic(() => import('@components/GlassMorphWrapper'));

/**
 * Props for `CompanyList`.
 */
export type CompanyListProps = SliceComponentProps<Content.CompanyListSlice>;

/**
 * Component for "CompanyList" Slices.
 */
const CompanyList = ({ slice }: CompanyListProps): JSX.Element => {
	const { subheading } = slice.primary;
	const { items } = slice;

	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className={clsx('default-wrapper')}
		>
			<GlassMorphWrapper>
				<div className={clsx('relative container py-24 flex-cc')}>
					<GradientSeparator />
					<div className={clsx('w-10/12 text-center')}>
						{isFilled.keyText(subheading) && (
							<div className={clsx('mb-10')}>
								<p className={clsx('')}>{subheading}</p>
							</div>
						)}
						<div className={clsx('relative w-full overflow-hidden h-24')}>
							<div className={clsx('marquee w-[1800px] flex-cc flex-nowrap gap-x-16')}>
								{[...items, ...items, ...items].map(
									({ image, company_url }, i) =>
										isFilled.image(image) && (
											<Link
												key={i}
												href={isFilled.link(company_url) ? company_url.url ?? '#' : '#'}
												className={clsx('block')}
												target="_blank"
												rel="nofollow"
											>
												<Image
													src={image.url}
													width={image.dimensions.width}
													height={image.dimensions.height}
													alt={image.alt ?? 'company'}
													className={clsx(
														image.dimensions.width > 2 * image.dimensions.height
															? 'w-52 h-auto max-h-24'
															: 'h-24 w-auto',
														'object-contain grayscale brightness-[0.5] invert hover:grayscale-0 hover:brightness-100 hover:invert-0 transition-all hover:scale-125'
													)}
													loading="lazy"
												/>
											</Link>
										)
								)}
							</div>
							<RightLeftShadow />
						</div>
					</div>
				</div>
			</GlassMorphWrapper>
		</section>
	);
};

export default CompanyList;
