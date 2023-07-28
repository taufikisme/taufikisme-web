import React, { useState } from 'react';
// Swiper
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import 'swiper/css';
// Prismic
import { PrismicRichText } from '@prismicio/react';
import { TextWithSliderSliceDefaultItem } from '@root/prismicio-types';

import RoundBlur from '@components/assets/RoundBlur';
import RightLeftShadow from '@components/RightLeftShadow';
import clsx from 'clsx';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Tilt from 'react-parallax-tilt';

interface Props {
	items: TextWithSliderSliceDefaultItem[];
}

const Slider = ({ items }: Props) => {
	const [swiperInstance, setSwiperInstance] = useState<SwiperClass>();
	const [activeIndex, setActiveIndex] = useState<number>(0);

	const handleSlideChange = (swiper: SwiperClass) => {
		setActiveIndex(swiper.realIndex);
	};

	const nextSlide = () => swiperInstance?.slideNext();
	const prevSlide = () => swiperInstance?.slidePrev();

	return (
		<div className={clsx('relative w-full')}>
			<RightLeftShadow zIndex={2} width="20%" />
			<SliderNavigation nextSlide={nextSlide} prevSlide={prevSlide} />
			<Swiper
				spaceBetween={80}
				slidesPerView="auto"
				centeredSlides
				onSwiper={(swiper) => setSwiperInstance(swiper)}
				onSlideChange={(swiper) => handleSlideChange(swiper)}
				loop
				className={clsx('!overflow-y-visible [&>.swiper-wrapper>.swiper-slide-active]:scale-110')}
			>
				{[...items, ...items].map((item, i) => (
					<SwiperSlide className={clsx('!w-7/12 min-h-[252px]')} key={i}>
						<Tilt
							tiltEnable={activeIndex === i}
							className={clsx(
								'relative w-full h-full !rounded-3xl overflow-hidden p-[2px] transition-transform parallax-effect'
							)}
							style={{
								backgroundImage:
									'linear-gradient(135deg, rgba(255,255,255,0.5) -10%, rgba(0,0,0,0))'
							}}
						>
							<RoundBlur color="#B4D42A" className="absolute bottom-0 -left-40" />
							<RoundBlur color="#3C8BC6" className="absolute top-0 -right-40" />
							<div
								className={clsx(
									'bg-dark bg-opacity-80 backdrop-blur-3xl min-h-[250px] py-6 px-10 !rounded-[23px]'
								)}
								style={{ transformStyle: 'preserve-3d' }}
							>
								<div style={{ transform: 'translateZ(60px)' }}>
									<PrismicRichText
										field={item.heading}
										components={{
											heading3: ({ children }) => (
												<h3
													className={clsx(
														'text-3xl font-medium bg-as-text-color bg-gradient-to-r from-lightgreen to-white mb-4'
													)}
												>
													{children}
												</h3>
											)
										}}
									/>
									<PrismicRichText
										field={item.body}
										components={{
											paragraph: ({ children }) => <p className={clsx('')}>{children}</p>
										}}
									/>
								</div>
							</div>
						</Tilt>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Slider;

const SliderNavigation = ({ prevSlide, nextSlide }: { prevSlide(): void; nextSlide(): void }) => (
	<div className={clsx('absolute w-full h-full pointer-events-none flex-bc z-10')}>
		<NavButton action={prevSlide}>
			<MdChevronLeft color="black" size={24} />
		</NavButton>
		<NavButton action={nextSlide}>
			<MdChevronRight color="black" size={24} />
		</NavButton>
	</div>
);

const NavButton = ({ children, action }: { children: JSX.Element; action(): void }) => (
	<button
		onClick={action}
		className={clsx(
			'pointer-events-auto h-10 w-10 rounded-full bg-lightgreen flex-cc shadow-glow-lightgreen transition-transform hover:scale-110 active:scale-100'
		)}
	>
		{children}
	</button>
);
