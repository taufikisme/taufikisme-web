import { KeyTextField, RichTextField, isFilled } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';
import clsx from 'clsx';
import React from 'react';

interface Props {
	subheading: KeyTextField;
	heading: RichTextField;
	body: RichTextField;
}

const SectionHeading = ({ subheading, heading, body }: Props) => (
	<div className={clsx('w-[60%] mx-auto text-center mb-16')}>
		{isFilled.keyText(subheading) && (
			<div
				className={clsx(
					'inline-block mx-auto py-2 px-6 rounded-full bg-lightgreen bg-opacity-10 mb-3 text-xs text-lightgreen'
				)}
			>
				{subheading}
			</div>
		)}

		<PrismicRichText
			field={heading}
			components={{
				heading2: ({ children }) => (
					<h2 className={clsx('text-[40px] font-medium leading-tight text-lightgreen mb-5')}>
						{children}
					</h2>
				)
			}}
		/>

		{isFilled.richText(body) && (
			<div className={clsx('[&>p:not(:last-child)]:mb-4 leading-relaxed')}>
				<PrismicRichText field={body} />
			</div>
		)}
	</div>
);

export default SectionHeading;
