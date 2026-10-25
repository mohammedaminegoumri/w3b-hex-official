import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
export default defineConfig({
  site: 'https://mohammedaminegoumri.github.io/w3b-hex-official/',
  base: '/w3b-hex-official/',
  integrations: [mdx()],
});
