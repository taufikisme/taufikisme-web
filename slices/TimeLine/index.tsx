import React from 'react';
import { Content, isFilled } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import clsx from 'clsx';
import GlassMorphWrapper from '@components/GlassmorphWrapper';
import SectionHeading from '@components/SectionHeading';
import { PrismicRichText } from '@prismicio/react';
import RoundBlur from '@components/assets/RoundBlur';
import GradientSeparator from '@components/GradientSeparator';

/**
 * Props for `TimeLine`.
 */
export type TimeLineProps = SliceComponentProps<Content.TimeLineSlice>;

/**
 * Component for "TimeLine" Slices.
 */
const TimeLine = ({ slice }: TimeLineProps): JSX.Element => {
	const { primary, items } = slice;
	const { subheading, heading, description } = primary;

	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className={clsx('default-wrapper')}
			id="experiences"
		>
			<RoundBlur className="absolute top-1/2 right-8" size={300} color="#D9403F" />
			<RoundBlur className="absolute top-1/4 left-8" size={300} color="#3C8BC6" />
			<GradientSeparator position="top" color="#B4D42A" />
			<GlassMorphWrapper>
				<div className={clsx('container py-24')}>
					<GradientSeparator position="top" />
					<SectionHeading subheading={subheading} heading={heading} body={description} />
					{/* Main Content */}
					<div className={clsx('relative w-full')}>
						{/* Line */}
						<Line />
						<ul className={clsx('w-full py-16')}>
							{items.map((item, i) => (
								<li
									className={clsx(
										'relative flex-col',
										(i + 1) % 2 === 0 ? 'flex' : 'flex-se',
										i < items.length - 1 ? 'mb-20' : ''
									)}
									key={`exp-${i}`}
								>
									<div
										className={clsx(
											'w-full relative flex-bc gap-x-40 mb-5',
											(i + 1) % 2 === 0 ? 'flex-row-reverse' : ''
										)}
									>
										<div className={clsx('w-1/2', (i + 1) % 2 === 0 ? 'flex' : 'flex-es')}>
											<div
												className={clsx(
													'bg-lightgreen bg-opacity-5 border border-lightgreen rounded-full text-lg text-lightgreen px-6 py-3'
												)}
											>
												{item.year}
											</div>
										</div>
										<div className={clsx('w-1/2', (i + 1) % 2 === 0 ? 'flex-es' : '')}>
											<PrismicRichText
												field={item.heading}
												components={{
													heading3: ({ children }) => (
														<h3 className={clsx('font-medium text-2xl w-10/12 text-lightgreen')}>
															{children}
														</h3>
													)
												}}
											/>
										</div>
										{i < items.length - 1 ? <Bullet /> : <Bullet active />}
									</div>

									<div
										className={clsx(
											'w-1/2 flex-col',
											(i + 1) % 2 === 0 ? 'pr-20 flex-se' : 'pl-20'
										)}
									>
										{isFilled.richText(item.description) && (
											<div className={clsx('text-sm w-10/12')}>
												<PrismicRichText
													field={item.description}
													components={{
														list: ({ children }) => (
															<ul className={clsx('list-disc ml-4 [&>li:not(:last-child)]:mb-3')}>
																{children}
															</ul>
														)
													}}
												/>
											</div>
										)}
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</GlassMorphWrapper>
		</section>
	);
};

export default TimeLine;

const Line = () => (
	<div
		className={clsx('absolute top-0 left-1/2 -translate-x-1/2 h-full w-[2px] bg-lightgreen')}
		style={{
			background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, #B4D42A 15% 85%, rgba(0,0,0,0) 100%)'
		}}
	></div>
);

const Bullet = ({ active = false }: { active?: boolean }) => (
	<div className={clsx('absolute left-1/2 -translate-x-1/2 w-12 h-12 flex-cc')}>
		{active && (
			<>
				<div
					className={clsx(
						'absolute w-9 h-9 rounded-full border border-lightgreen border-opacity-30 animate-ping duration-300'
					)}
				></div>
				<div
					className={clsx(
						'absolute w-7 h-7 rounded-full border border-lightgreen animate-ping duration-300'
					)}
				></div>
				<div
					className={clsx(
						'absolute w-5 h-5 rounded-full border border-lightgreen animate-ping duration-300'
					)}
				></div>
			</>
		)}
		<div className={clsx('absolute w-5 h-5 rounded-full bg-lightgreen duration-300')}></div>
	</div>
);
