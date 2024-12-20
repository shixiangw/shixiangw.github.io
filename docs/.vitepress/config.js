// `.vitepress/config.js`
import { withSidebar } from 'vitepress-sidebar';

const vitePressOptions = {
  title: 'shixiangw',
  description: 'Ignorance and weakness are not obstacles to survival, arrogance is',
  sitemap: {
    hostname: 'https://shixiangw.github.io'
  },
  markdown: {
      theme: {
          dark: 'dracula-soft',
          light: 'github-dark',
      }
  },
  vite: {
    plugins: [],
  },
  // ignoreDeadLinks: true,
  themeConfig: {
    logo: '/logo.png',
    nav: [{ text: "home", link: "/" }],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/shixiangw' }
    ],
  }
};

const vitePressSidebarOptions = {
  // VitePress Sidebar's options here...
  documentRootPath: '/docs',
  collapsed: false,
  capitalizeFirst: true,
  useTitleFromFileHeading: true,
  excludePattern: [
    'public/'
  ]
};

export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));


