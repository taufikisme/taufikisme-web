import React from 'react';
import { Content, isFilled } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import clsx from 'clsx';
import RoundBlur from '@components/assets/RoundBlur';
import { PrismicRichText } from '@prismicio/react';
import Link from 'next/link';
import GradientSeparator from '@components/GradientSeparator';
import GlassMorphWrapper from '@components/GlassmorphWrapper';

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
	const { heading, description, button_1_text, button_1_link, button_2_text, button_2_link } =
		slice.primary;

	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className={clsx('default-wrapper')}
		>
			<RoundBlur className="absolute top-4 left-10 animate-down-up" size={400} color="#3C8BC6" />
			<RoundBlur
				className="absolute bottom-4 right-10 animate-up-down"
				size={400}
				color="#D9403F"
			/>
			<GradientSeparator position="bottom" color="#B4D42A" />
			<GlassMorphWrapper>
				<div className={clsx('container pt-40 pb-28')}>
					<div className={clsx('w-[75%] mx-auto text-center')}>
						{isFilled.richText(heading) && (
							<PrismicRichText
								field={heading}
								components={{
									heading1: () => (
										<h1 className={clsx('text-[52px] font-medium leading-tight')}>
											<span className={clsx('text-lightgreen')}>Welcome!</span>{' '}
											<span className={clsx('text-gradient-green')}>
												This is where I share my passions and experiences with the world
											</span>
										</h1>
									)
								}}
							/>
						)}

						{isFilled.richText(description) && (
							<PrismicRichText
								field={description}
								components={{
									paragraph: ({ children }) => (
										<p className={clsx('text-lg mt-4 w-[95%] mx-auto leading-relaxed')}>
											{children}
										</p>
									)
								}}
							/>
						)}

						<div className={clsx('flex-cc gap-x-6 mt-8')}>
							<Link
								href={isFilled.link(button_1_link) ? button_1_link.url ?? '#' : '#'}
								target="_blank"
							>
								<button
									className={clsx(
										'px-8 py-4 font-medium text-dark rounded-full transition-transform hover:scale-105 shadow-glow-lightgreen bg-lightgreen'
									)}
								>
									{button_1_text}
								</button>
							</Link>

							<Link
								href={isFilled.link(button_2_link) ? button_2_link.url ?? '#' : '#'}
								target="_blank"
							>
								<button
									className={clsx(
										'px-8 py-4 font-medium text-dark bg-white rounded-full transition-transform hover:scale-105'
									)}
								>
									{button_2_text}
								</button>
							</Link>
						</div>
					</div>
				</div>
			</GlassMorphWrapper>
		</section>
	);
};

export default Hero;
