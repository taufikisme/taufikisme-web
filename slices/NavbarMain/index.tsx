import Logo from '@components/icons/Logo';
import { ContextType } from '@core/prismic/types';
import { isFilled } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { NavbarMainSlice } from '@root/prismicio-types';
import clsx from 'clsx';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const NavbarMain = ({
	slice,
	context: { upperRef }
}: SliceComponentProps<NavbarMainSlice, ContextType>) => {
	const { items } = slice;
	const [onTop, setOnTop] = useState<boolean>(true);
	const [scrollPos, setScrollPos] = useState<number>(0);

	const isInsideTheSection = (id: string) => {
		if (typeof document !== 'undefined') {
			const elem = document.getElementById(id);

			if (elem) {
				return (
					scrollPos >= elem.offsetTop - 100 && scrollPos <= elem.offsetTop - 100 + elem.offsetHeight
				);
			} else {
				return false;
			}
		}
	};

	const getSectionPos = (id: string) => {
		if (typeof document !== 'undefined') {
			const elem = document.getElementById(id);

			if (elem) {
				return elem.offsetTop - 100;
			} else {
				return 0;
			}
		} else {
			return 0;
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop < 30) {
				setOnTop(true);
			} else {
				setOnTop(false);
			}

			setScrollPos(scrollTop);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header className={clsx('')} ref={upperRef}>
			<nav
				className={clsx(
					'fixed top-0 z-50 w-full bg-dark transition-all duration-300',
					onTop ? 'bg-opacity-0' : 'bg-opacity-75 backdrop-blur-md'
				)}
			>
				<div className={clsx('container relative flex-bc py-6')}>
					<Link href="/" className={clsx('block')}>
						<div aria-label="Brand" className={clsx('flex-sc')}>
							<Logo size={30} />
							<span className={clsx('ml-2 text-2xl')}>Taufikisme</span>
						</div>
					</Link>

					<ul className={clsx('absolute left-1/2 -translate-x-1/2 flex-cc')}>
						{items.map(
							(nav, i) =>
								isFilled.keyText(nav.text) && (
									<li key={i}>
										<button
											onClick={() =>
												window.scrollTo(0, getSectionPos((nav.text as string).toLowerCase()) + 1)
											}
											className={clsx(
												'text-sm py-3 px-5 transition-all hover:text-lightgreen',
												isInsideTheSection(nav.text.toLowerCase())
													? 'text-lightgreen bg-lightgreen bg-opacity-10 rounded-full'
													: ''
											)}
										>
											{nav.text}
										</button>
									</li>
								)
						)}
					</ul>

					<div className={clsx('')}>
						<Link
							href="https://www.linkedin.com/in/moh-taufik-afandi/"
							target="_blank"
							className={clsx(
								'px-6 py-2.5 font-medium text-dark rounded-full transition-transform hover:scale-105 shadow-glow-lightgreen text-sm bg-lightgreen'
							)}
						>
							Connect
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default NavbarMain;
