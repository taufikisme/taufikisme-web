import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Portfolio`.
 */
export type PortfolioProps = SliceComponentProps<Content.PortfolioSlice>;

/**
 * Component for "Portfolio" Slices.
 */
const Portfolio = ({ slice }: PortfolioProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      Placeholder component for portfolio (variation: {slice.variation}) Slices
    </section>
  );
};

export default Portfolio;
