import React from 'react';

interface Props {
	className?: string;
	color?: string;
	size?: number;
}

const RoundBlur = ({ className = '', color = '#D9403F', size = 500 }: Props) => {
	return (
		<svg
			className={className}
			width={size}
			height={size}
			viewBox="0 0 502 502"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g filter="url(#filter0_f_124_104)">
				<circle cx="251" cy="251" r="151" fill={color} />
			</g>
			<defs>
				<filter
					id="filter0_f_124_104"
					x="0"
					y="0"
					width="502"
					height="502"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
					<feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_124_104" />
				</filter>
			</defs>
		</svg>
	);
};

export default RoundBlur;
