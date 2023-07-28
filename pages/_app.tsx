import React from 'react';
import { AppProps } from 'next/app';
import ProgressBar from 'nextjs-progressbar';
import ContextProvider from '@core/contexts';

import '@core/styles/tailwind.css';
import { LinkProps, PrismicProvider } from '@prismicio/react';
import Link from 'next/link';
import { PrismicPreview } from '@prismicio/next';
import { linkResolver } from '@core/prismic/utils/linkResolver';
import { Poppins } from 'next/font/google';
import clsx from 'clsx';
import config from '../slicemachine.config.json';

const poppins = Poppins({
	weight: ['400', '500', '600', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap'
});

const internalLinkComponent: React.ElementType<LinkProps> = ({ href, children, ...props }) => (
	<Link href={href}>
		<a {...props}>{children}</a>
	</Link>
);

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<>
			<ProgressBar
				color="#B4D42A"
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
				options={{ showSpinner: false }}
			/>

			<PrismicProvider internalLinkComponent={internalLinkComponent} linkResolver={linkResolver}>
				<PrismicPreview repositoryName={config.repositoryName}>
					<ContextProvider>
						<div className={clsx(poppins.className)}>
							<Component {...pageProps} />
						</div>
					</ContextProvider>
				</PrismicPreview>
			</PrismicProvider>
		</>
	);
};

export default App;
