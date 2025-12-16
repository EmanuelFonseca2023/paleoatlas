// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'PaleoAtlas',
      description: 'Enciclopedia de la vida prehistórica',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/tu-usuario/paleoatlas',
        },
      ],
    }),
  ],
});
