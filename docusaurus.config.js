module.exports = {
  title: 'Hola, welcome to my Tech Blog',
  tagline: 'Stay hungry Stay foolish',
  url: 'https://dipjyotimetia.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dipjyotimetia',
  projectName: 'dipjyotimetia.github.io',
  themeConfig: {
    navbar: {
      title: 'Dipjyoti`s Blog',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Projects',
          position: 'left',
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'left'
        },
        {
          to: 'docs/snippets/overview',
          label: 'Snippets',
          position: 'left'
        },
        {
          href: 'https://github.com/dipjyotimetia',
          label: 'GitHub',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Projects',
          items: [
            {
              label: 'Hybrid Test Framework',
              to: 'docs/',
            },
            {
              label: 'Mobile Test Framework',
              to: 'docs/projects/mobiletestframework',
            },
            {
              label: 'Cypress Test Framework',
              to: 'docs/projects/cypress',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/users/6189229/dipjyoti-metia',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/UXNmcyGuj2',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/dipjyoti_metia',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/dipjyotimetia',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dipjyoti Metia`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/dipjyotimetia/Docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/dipjyotimetia/blog/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
