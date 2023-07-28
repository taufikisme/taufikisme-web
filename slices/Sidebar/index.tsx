import React from 'react';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Sidebar`.
 */
export type SidebarProps = SliceComponentProps<Content.SidebarSlice>;

/**
 * Component for "Sidebar" Slices.
 */
const Sidebar = ({ slice }: SidebarProps): JSX.Element => {
	return (
		<aside data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
			Placeholder component for sidebar (variation: {slice.variation}) Slices
		</aside>
	);
};

export default Sidebar;
