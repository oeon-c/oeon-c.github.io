import { defineConfig } from 'astro/config';
import mermaid from 'astro-mermaid';

export default defineConfig({
  site: 'https://oeon-c.github.io',
  integrations: [mermaid()],
});