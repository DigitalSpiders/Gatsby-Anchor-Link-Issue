/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */
import { GatsbySSR } from 'gatsby';

// You can delete this file if you're not using it
export { wrapPageElement } from './gatsby-browser';

export const onRenderBody: GatsbySSR['onRenderBody'] = ({ setHeadComponents }) => {};
