import { generateSidebar } from "vitepress-sidebar";

// https://vitepress-sidebar.cdget.com/zhHans/introduction
const vitepressSidebarOptions = [
    {
      documentRootPath: "docs",
      scanStartPath: "excerpts",
      resolvePath: "/excerpts/",
      useTitleFromFileHeading: true,
      includeFolderIndexFile: true,
      useTitleFromFrontmatter: true,
      collapsed: true,
    },
    {
      documentRootPath: "docs",
      scanStartPath: "original-articles",
      resolvePath: "/original-articles/",
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      collapsed: true,
    },
    {
      documentRootPath: "docs",
      scanStartPath: "verified-articles",
      resolvePath: "/verified-articles/",
      useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      collapsed: true,
    },
  ];


export default {
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
      plugins: [
      //   AutoSidebar({
      //     ignoreList: ["README.md",".vitepress","public"], // 忽略文件夹
      //     path: "/docs",
      //     ignoreIndexItem: false,
      //     collapsed: false,
      //     deletePrefix: "",
      //     sideBarResolved: (data) => data,
      //     sideBarItemsResolved: (data) => data,
      //     beforeCreateSideBarItems: (data) => data.sort(),
      //     titleFromFile: false,
      // }),
      ],
    },
    ignoreDeadLinks: true,
    themeConfig: {
      logo: '/logo.png',
      nav: [{ text: "home", link: "/" }],
      socialLinks: [
        { icon: 'github', link: 'https://github.com/shixiangw' }
      ],
      sidebar: generateSidebar(vitepressSidebarOptions),
    }
  }

