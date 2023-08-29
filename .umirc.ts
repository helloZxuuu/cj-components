import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'CJC',
  description: 'CJ Components',
  favicon: 'https://sitecdn.zcycdn.com/f2e-assets/1d3f1a9f-6fc3-4f16-a72f-4014e55174c8.png',
  logo: 'https://sitecdn.zcycdn.com/f2e-assets/1d3f1a9f-6fc3-4f16-a72f-4014e55174c8.png',
  outputPath: 'docs-dist',
  // more config: https://d.umijs.org/config
  mode: 'site',
  navs: [
    // null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '指南',
      path: '/guide',
    },
    {
      title: '组件库',
      path: '/components',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/umijs/dumi',
    },
  ],
  menus: {
    // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
    '/guide': [
      {
        title: '介绍',
        path: '/guide',
        children: ['/guide/what'],
      },
    ],
    '/components': [
      {
        title: '组件库',
        path: '/components',
        children: ['/components/Foo', '/components/Button'],
      },
    ],
  },
});
