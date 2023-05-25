// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Transeptor',
  tagline: 'A modular Typescript ERC-4337 Open Source Bundler, designed with a strong emphasis on performance', 
  favicon: 'img/brand/favicon.png',
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
          breadcrumbs: true,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:'https://github.com/secureauth3',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/transeptor.jpg',
      metadata: [{name: 'keywords', content: 'bundler, erc-4337, account abstraction, smart contract account, ethereum'}],
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/brand/transeptor.png',
        },
        items: [
          {
            to: '/about',
            position: 'left',
            label: 'About',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://hackmd.io/@V00D00-child/SyXKL6Kmn',
            label:'Our Proposal',
            position: 'right',
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
                label: 'Introduction',
                to: '/docs/intro',
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
                href: 'https://github.com/transeptor',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Transeptor`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
