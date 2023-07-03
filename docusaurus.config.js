// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Transeptor',
  tagline: 'Unlock the Full Potential of Account Abstraction', 
  favicon: 'img/brand/logo-2.png',
  staticDirectories: ['public', 'static'],

  // Set the production url of your site here
  url: 'https://transeptor.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'transeptor', // Usually your GitHub org/user name.
  projectName: 'transeptor-docs', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'bundler',
          routeBasePath: "bundler",
          breadcrumbs: true,
          sidebarPath: require.resolve('./bundler-sidebar.js'),
          editUrl: "https://github.com/transeptorlabs/transeptor-docs/edit/main/",
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-Z83JPJWN1C',
          anonymizeIP: true,
        },
      }),
      
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      ({
        id: "snap",
        path: "snap",
        routeBasePath: "snap",
        editUrl: "https://github.com/transeptorlabs/transeptor-docs/edit/main/",
        sidebarPath: require.resolve("./snap-sidebar.js"),
        breadcrumbs: true,
      }),
    ],
    [
      "@docusaurus/plugin-content-docs",
      ({
        id: "learn",
        path: "learn",
        routeBasePath: "learn",
        editUrl: "https://github.com/transeptorlabs/transeptor-docs/edit/main/",
        sidebarPath: require.resolve("./learn-sidebar.js"),
        breadcrumbs: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/transeptor.jpg',
      metadata: [{name: 'keywords', content: 'bundler, erc-4337, account abstraction, smart contract account, ethereum'}],
      navbar: {
        title: 'Transeptor Labs',
        logo: {
          alt: 'Transeptor labs Logo',
          src: 'img/brand/logo-2.png',
        },
        items: [
          {
            to:'bundler',
            position: 'left',
            label: 'Bundler',
          },
          {
            to:'snap',
            position: 'left',
            label: 'Snap',
          },
          {
            to:'learn',
            position: 'left',
            label: 'Learn',
          },
          {
            label: 'Join our Community',
            href: 'https://t.me/+eUGda3KIND4zMjRh',
            position: 'right',
          },
          {
            href: 'https://github.com/transeptorlabs/transeptor-bundler',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Bundler',
                to: 'bundler',
              },
              {
                label: 'Snap',
                to: 'snap',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/+eUGda3KIND4zMjRh',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/transeptorlabs',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/transeptorlabs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Transeptor Labs`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
