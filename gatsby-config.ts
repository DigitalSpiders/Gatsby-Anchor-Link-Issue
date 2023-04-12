import dotenv from 'dotenv';
import { GatsbyConfig } from 'gatsby';

if (process.env.CI !== 'true') {
  dotenv.config({ path: '.env.local' });
  dotenv.config({
    path: process.env.DOTENV_PROD === 'true' ? '.env.production' : '.env.development',
  });
}

export default {
  flags: {
    DEV_SSR: process.env.DEV_SSR === 'true',
  },
  trailingSlash: 'always',
  plugins: [].filter(Boolean),
} satisfies GatsbyConfig;
