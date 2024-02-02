import { defineConfig4CustomTheme, UserPlugins } from "vuepress/config";
module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Front-end',
      description: '前端编码规范工程化',
    },
  },
  base: '/fe-spec/',
  host: '127.0.0.1',
  port: 8088,

  themeConfig: {
    nav: [
      { text: '首页', link: '/index.md' },
      {
        text: '编码规范',
        items: [
          { text: 'HTML 编码规范', link: '/coding/html.md' },
          { text: 'CSS 编码规范', link: '/coding/css.md' },
          { text: 'JavaScript 编码规范', link: '/coding/javascript.md' },
          { text: 'Typescript 编码规范', link: '/coding/typescript.md' },
          { text: 'Node 编码规范', link: '/coding/node.md' },
        ],
      },
      {
        text: '工程规范',
        items: [
          { text: 'Git 规范', link: '/engineering/git.md' },
          { text: '文档规范', link: '/engineering/doc.md' },
          { text: 'CHANGELOG 规范', link: '/engineering/changelog.md' },
        ],
      },
      {
        text: 'NPM包',
        items: [
          { text: 'fe-eslint-config', link: '/npm/eslint.md' },
          { text: 'fe-stylelint-config', link: '/npm/stylelint.md' },
          { text: 'fe-commitlint-config', link: '/npm/commitlint.md' },
          { text: 'fe-markdownlint-config', link: '/npm/markdownlint.md' },
          { text: 'fe-eslint-plugin', link: '/npm/eslint-plugin.md' },
        ],
      },
      {
        text: '脚手架',
        items: [{ text: 'fe-encode-lint', link: '/cli/fe-encode-lint.md' }],
      },
    ],
    sidebar: [
      {
        title: '编码规范',
        children: [
          {
            title: 'HTML 编码规范',
            path: '/coding/html.md',
          },
          {
            title: 'CSS 编码规范',
            path: '/coding/css.md',
          },
          {
            title: 'JavaScript 编码规范',
            path: '/coding/javascript.md',
          },
          {
            title: 'Typescript 编码规范',
            path: '/coding/typescript.md',
          },
          {
            title: 'Node 编码规范',
            path: '/coding/node.md',
          },
        ],
      },
      {
        title: '工程规范',
        children: [
          {
            title: 'Git 规范',
            path: '/engineering/git.md',
          },
          {
            title: '文档规范',
            path: '/engineering/doc.md',
          },
          {
            title: 'CHANGELOG 规范',
            path: '/engineering/changelog.md',
          },
        ],
      },
      {
        title: 'NPM包',
        children: [
          { title: 'fe-eslint-config', path: '/npm/eslint.md' },
          { title: 'fe-stylelint-config', path: '/npm/stylelint.md' },
          { title: 'fe-commitlint-config', path: '/npm/commitlint.md' },
          { title: 'fe-markdownlint-config', path: '/npm/markdownlint.md' },
          { title: 'fe-eslint-plugin', path: '/npm/eslint-plugin.md' },
        ],
      },
      {
        title: '脚手架',
        children: [{ title: 'fe-encode-lint', path: '/cli/fe-encode-lint.md' }],
      },
    ],
    logo: '/img/logo.png',
    repo: 'BrookZhao/frontend-spec',
    searchMaxSuggestions: 10,
    docsDir: 'docs',
    footer: {
      createYear: 2023,
      copyrightInfo:
        'encode studio | <a href="https://github.com/BrookZhao/frontend-spec" target="_blank">github</a>',
    },

    extendFrontmatter: {
      author: {
        name: 'BrookZhao',
        link: 'https://github.com/BrookZhao/frontend-spec',
      },
    },
  },

  head: [
    ['link', { rel: 'icon', href: '/img/logo.png' }],
    [
      'meta',
      {
        name: 'keywords',
        content: '前端编码规范|工程化',
      },
    ],
  ],

  plugins: <UserPlugins>[
    [
      'one-click-copy',
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
        copyMessage: '复制成功',
        duration: 1000,
        showInMobile: false,
      },
    ],

    [
      'vuepress-plugin-zooming',
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
  ],

  extraWatchFiles: ['.vuepress/config.ts'],
}