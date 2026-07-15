import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'mq',
  tagline: 'Simple querying for markdown.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://NutshellEngineering.github.io',
  baseUrl: '/markdown-query/',

  // GitHub pages deployment config.
  organizationName: 'NutshellEngineering',
  projectName: 'markdown-query',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: '../doc/user',
          routeBasePath: '/docs',
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/NutshellEngineering/markdown-query/edit/main/doc/user/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'markdown-query',
      style: 'primary',
      items: [
        {
          to: '/docs/',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/NutshellEngineering/markdown-query',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Introduction', to: '/docs/'},
            {label: 'Query Language', to: '/docs/query-language'},
            {label: 'Examples', to: '/docs/examples'},
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/NutshellEngineering/markdown-query',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nutshell.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
