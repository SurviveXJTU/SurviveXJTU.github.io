// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { useData, useRoute, useRouter } from 'vitepress';
import googleAnalytics from 'vitepress-plugin-google-analytics'
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import { init } from '@waline/client';

import { 
  NolebaseEnhancedReadabilitiesMenu, 
  NolebaseEnhancedReadabilitiesPlugin,
  NolebaseEnhancedReadabilitiesScreenMenu, 
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import '@waline/client/style'; // 导入 Waline 的默认样式
import './style.css'

export default {
  extends: DefaultTheme,
  setup() {
    const { frontmatter } = useData();
    const route = useRoute();
    const router = useRouter();
    if (inBrowser) {
      // 延迟初始化 Waline，确保页面内容先加载
      setTimeout(() => {
        init({
          el: '#waline',
          serverURL: 'https://waline.survivexjtu.axi404.top',
          path: route.path,
          reaction: [],
          comment: true,
          pageview: true,
          lang: 'zh-CN',
        });
      }, 500);
      router.onAfterRouteChanged = () => {
        init({
          el: '#waline',
          serverURL: 'https://waline.survivexjtu.axi404.top',
          path: route.path,
          reaction: [],
          comment: true,
          pageview: true,
          lang: 'zh-CN',
        });
      };
    }
  },
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu), 
      // 为较窄的屏幕（通常是小于 iPad Mini）添加阅读增强菜单
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
      'doc-after': () => h('div', { 
        id: 'waline',
        style: 'max-width: 800px; margin: 0 auto; padding: 20px;' // 限制宽度和添加内边距
      })
    });
  },
  enhanceApp({ app, router, siteData }) {
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    }
    googleAnalytics({
      id: 'G-Y4NJEXCBER', //跟踪ID，在analytics.google.com注册即可
    }),
    app.use(NolebaseEnhancedReadabilitiesPlugin, {
      spotlight: {
        defaultToggle: true,
      },
    })
  }
} satisfies Theme
