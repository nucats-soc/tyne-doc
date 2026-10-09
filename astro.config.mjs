// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/': '/welcome',
  },

  integrations: [
      starlight({
          title: 'NUCATS Knowledge Base',
          favicon: '/favicon.ico',
          logo: { src: './src/assets/nucats.svg', alt: '' },
          components: {
              SiteTitle: './src/components/SiteTitle.astro',
              LastUpdated: './src/components/LastUpdated.astro',
          },
          editLink: { baseUrl: 'https://github.com/nucats-soc/tyne-doc/edit/main/' },
          social: [
              { icon: 'github', label: 'GitHub', href: 'https://github.com/nucats-soc/tyne-doc' },
              { icon: 'discord', label: 'Discord', href: 'https://discord.gg/ehAsNpxQg2' },
              { icon: 'link', label: 'Website', href: 'https://nucats.org' },
              { icon: 'instagram', label: 'Instagram', href: 'https://instagram.com/nucats_' }
          ],
          customCss: [
              './src/styles/global.css',
          ],
          sidebar: [
              {
                  label: 'Guides',
                  items: [{ autogenerate: { directory: 'guides' } }],
              },
              {
                  label: 'Reference',
                  items: [{ autogenerate: { directory: 'reference' } }],
              },
          ],
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});
