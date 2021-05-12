import { defineConfig } from 'umi';

export default defineConfig({
  exportStatic: {},
  ssr: {},
  nodeModulesTransform: {
    type: 'none',
  },
  links: [{ rel: 'icon', href: 'favicon.png' }],
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/game', component: '@/pages/Game' },
    { path: '/app', component: '@/pages/App' },
    { path: '/search', component: '@/pages/Search' },
    { path: '/details', component: '@/pages/DetailPage' },
    { path: '/details2', component: '@/pages/DetailPage2' },
    { path: '/comments', component: '@/pages/Comment' },
    { path: '/list', component: '@/pages/AppList' },
    { path: '/category', component: '@/pages/AllCategory' },
    { path: '/bulletsPage', component: '@/pages/BulletsPage' },
    { path: '/videoPage', component: '@/pages/VideoPage' },
    { path: '/cardPage', component: '@/pages/CardPage' },
    { path: '/topTen', component: '@/pages/TopTen' },
  ],
  fastRefresh: {},
});
