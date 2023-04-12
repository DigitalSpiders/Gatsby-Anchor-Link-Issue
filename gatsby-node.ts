import fs from 'fs';
import { GatsbyNode } from 'gatsby';
import path from 'path';

export const createPages: GatsbyNode['createPages'] = async ({ actions }) => {
  const { createPage } = actions;

  const pageTemplatesSlugs = fs
    .readdirSync('./src/templates/pages')
    .filter(file => file.endsWith('.tsx'))
    .map(file => file.substring(0, file.length - 4));

  for (const pageTemplateSlug of pageTemplatesSlugs) {
    if (!pageTemplateSlug.startsWith('_') || process.env.NODE_ENV === 'development') {
      createPage({
        path: '/' + pageTemplateSlug,
        component: path.resolve(`./src/templates/pages/${pageTemplateSlug}.tsx`),
        context: {},
      });
    }
  }
};

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
