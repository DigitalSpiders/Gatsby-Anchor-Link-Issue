/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from 'react';

import { GatsbyBrowser } from 'gatsby';
import { LocationContext } from './src/contexts/LocationContext';
import { GlobalStateProvider } from './src/state/globalStateContext';

// You can delete this file if you're not using it
// export const onClientEntry = () => {
//     // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
//     if (!(`IntersectionObserver` in window)) {
//       import(`intersection-observer`);
//     }
//   };
// import { I18nextProvider } from 'react-i18next';

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => {
  return (
    /* <I18nextProvider i18n={i18n}> */
    <GlobalStateProvider>
      <LocationContext.Provider value={props.location}>{element}</LocationContext.Provider>
    </GlobalStateProvider>
    /* </I18nextProvider> */
  );
};

export const onClientEntry: GatsbyBrowser['onClientEntry'] = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`);
  }
};
