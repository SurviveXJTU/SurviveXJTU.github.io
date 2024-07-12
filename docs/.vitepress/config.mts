import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    image: {
      lazyLoading: true
    },
    math: true
  },
  vite: { 
    optimizeDeps: {
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client', 
      ], 
    },
    ssr: { 
      noExternal: [ 
        // 如果还有别的依赖需要添加的话，并排填写和配置到这里即可
        '@nolebase/vitepress-plugin-enhanced-readabilities', 
      ], 
    }, 
  }, 
  lastUpdated: true,
  lang: 'zh-CN',
  base: '/',
  title: "SurviveXJTU",
  description: "西安交大生存指南，更适合西交大学子的生存指南。",
  themeConfig: {
    sidebarMenuLabel:'目录', 
    returnToTopLabel:'返回顶部', 
    lastUpdated: {
      text: '上次更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      },
    },
    footer: { 
      message: 'Released under the MIT License.', 
      copyright: 'Copyright © 2023-2024present AXi', 
    }, 
    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    }, 
    editLink: { 
      pattern: 'https://github.com/SurviveXJTU/SurviveXJTU.github.io/edit/main/docs/:path', // 改成自己的仓库
      text: '在GitHub编辑本页'
    }, 
    outline: {
      level: 'deep', // 显示2-6级标题
      label: '目录' // 文字显示
    },
    search: { 
      provider: 'local'
    }, 
    logo: {
      src: '/logo.svg',
      alt: 'Logo: XiStudyGroup',
    },
    siteTitle: false, //标题隐藏
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '前言', link: '/前言/' },
      { text: '贡献指南', link: '/前言/贡献指南' },
      { text: '人生篇', link: '/人生篇/' },
      { text: '入学篇', link: '/入学篇/' },
      { text: '研学篇', link: '/研学篇/' },
      { text: '路线篇', link: '/路线篇/' },
      { text: '保研篇', link: '/保研篇/' },
      { text: '备考篇', link: '/备考篇/' },
      { text: '生活篇', link: '/生活篇/' },
      { text: '社团篇', link: '/社团篇/' }
    ],

    sidebar: [
      {
        text: '前言',
        link: '/前言/',
        collapsed: true,
        items: [
          { text: '笔者的话', link: '/前言/笔者的话' },
          { text: '创作者说', link: '/前言/创作者说' },
          { text: '贡献指南', link: '/前言/贡献指南' },
        ]
      },
      {
        text: '人生篇',
        link: '/人生篇/',
        collapsed: true,
        items: [
          { text: '关于西交', link: '/人生篇/关于西交' },
          { text: '你想要成为什么样的人', link: '/人生篇/你想要成为什么样的人' },
          { text: '种一棵树', link: '/人生篇/种一棵树' },
          { text: '开源精神', link: '/人生篇/开源精神' },
        ]
      },
      {
        text: '入学篇',
        link: '/入学篇/',
        collapsed: true,
        items: [
          { text: '学生群', link: '/入学篇/学生群' },
          { text: '开学携带的东西', link: '/入学篇/开学携带的东西' },
          { text: '报道相关', link: '/入学篇/报道相关' },
          { text: '推荐与不推荐做的事情', link: '/入学篇/推荐与不推荐做的事情' },
          { text: '开学考', link: '/入学篇/开学考' },
        ]
      },
      {
        text: '研学篇',
        link: '/研学篇/',
        collapsed: true,
        items: [
          { text: '课程的分类', link: '/研学篇/课程的分类' },
          { text: '四种学生与四种学生', link: '/研学篇/四种学生与四种学生' },
          { text: '两种自学目标', link: '/研学篇/两种自学目标' },
          { text: '规避教材有罪论', link: '/研学篇/规避教材有罪论' },
          { text: '规划你的时间', link: '/研学篇/规划你的时间' },
          { text: '记笔记是一种正反馈', link: '/研学篇/记笔记是一种正反馈' },
          { 
            text: '竞赛与科研', 
            link: '/研学篇/竞赛与科研/',
            collapsed: true,
            items: [
              { text: '识破竞赛真面目', link: '/研学篇/竞赛与科研/识破竞赛真面目' },
              { text: '认识竞赛的价值', link: '/研学篇/竞赛与科研/认识竞赛的价值' },
              { text: '推荐参与的竞赛', link: '/研学篇/竞赛与科研/推荐参与的竞赛' },
              { text: '为了什么而科研', link: '/研学篇/竞赛与科研/为了什么而科研' },
              { text: '科研节奏与选择', link: '/研学篇/竞赛与科研/科研节奏与选择' },
            ]
          },
        ]
      },
      {
        text: '路线篇',
        link: '/路线篇/',
        collapsed: true,
        items: [
          { 
            text: '人工智能学习路线', 
            link: '/路线篇/人工智能学习路线/',
            collapsed: true,
            items: [
              { text: '数学基础', link: '/路线篇/人工智能学习路线/数学基础' },
              { text: '计算机基础', link: '/路线篇/人工智能学习路线/计算机基础' },
              { text: '深度学习基础', link: '/路线篇/人工智能学习路线/深度学习基础' },
              { text: '递归学习', link: '/路线篇/人工智能学习路线/递归学习' },
            ]
          },
        ]
      },
      {
        text: '保研篇',
        link: '/保研篇/',
        collapsed: true,
        items: [
          { text: '概念辨析', link: '/保研篇/概念辨析' },
          { text: '推免资格获取', link: '/保研篇/推免资格获取' },
          { text: '成绩是保研的基石', link: '/保研篇/成绩是保研的基石' },
          { text: '竞赛是加分的来源', link: '/保研篇/竞赛是加分的来源' },
          { text: '科研是唯一的含金量', link: '/保研篇/科研是唯一的含金量' },
          { text: '保研外校', link: '/保研篇/保研外校' },
        ]
      },
      {
        text: '备考篇',
        link: '/备考篇/',
        collapsed: true,
        items: [
          { text: '大学英语', link: '/备考篇/大学英语' },
        ]
      },
      {
        text: '生活篇',
        link: '/生活篇/',
        collapsed: true,
        items: [
          { text: '食在交大', link: '/生活篇/食在交大' },
        ]
      },
      {
        text: '社团篇',
        link: '/社团篇/',
        collapsed: true,
        items: [
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SurviveXJTU/SurviveXJTU.github.io' }
    ]
  }
})
