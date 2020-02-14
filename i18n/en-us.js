export default {
  blog: {
    barText: 'Blog',
    postsTitle: 'All posts',
    list: []
  },
  community: {
    barText: 'Community',
    events: {
      title: 'Events & News',
      list: [
        {
          img: '/images/blog/wuhan2020.png',
          title: 'Wuhan2020 Official Announcement',
          content: 'Wuhan2020 Official Announcement',
          dateStr: 'Jan 29th，2020',
          link: '/en-us/blog/wuhan2020-official-announcement.html',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: 'How to Join Wuhan2020 Open Source Project, and Help Wuhan Survive the Coronavirus Crisis',
          content: 'How to Join Wuhan2020 Open Source Project, and Help Wuhan Survive the Coronavirus Crisis ',
          dateStr: 'Feb 1st, 2020',
          link: '/en-us/blog/how-to-join-wuhan2020.html',
        },
      ],
    },
    contacts: {
      title: 'Talk To Us',
      desc: 'Feel free to contact us via the following channel.',
      list: [
        {
          img: '/images/channels/mailinglist.png',
          imgHover: '/images/channels/mailinglist_hover.png',
          title: 'Mailing List',
          link: 'mailto:wuhan2020+subscribe@googlegroups.com'
        },
        {
          img: '/images/channels/slack_gray.svg',
          imgHover: '/images/channels/slack_green.svg',
          title: '@Slack',
          link: 'https://github.com/wuhan2020/wuhan2020/blob/master/README_EN.md#slack-channel-navigation',
        },
        {
          img: '/images/channels/weixin_official_account.jpeg',
          imgHover: '/images/channels/weixin_official_account.jpeg',
          title: '@WeChat Official Account',
        }
      ],
    },
    contributorGuide: {
      title: 'Contributor Guide',
      desc: 'You can always contribute to Wuhan2020.',
      list: [
        {
          img: '/images/channels/email_gray.svg',
          title: 'Mailing List',
          content: 'Join our mailing list.',
          link: ''
        },
        {
          img: '/images/channels/github_gray.svg',
          title: 'Issue',
          content: 'Submit a new issue',
          link: "https://github.com/wuhan2020/wuhan2020/issues/new"
        },
        {
          img: '/images/documents.png',
          title: 'Documentation',
          content: 'Improve the documentation',
          link: "https://github.com/wuhan2020/wuhan2020.github.io"
        },
        {
          img: '/images/pullrequest.png',
          title: 'Pull Request',
          content: 'Create a brilliant pull request',
          link: "https://github.com/wuhan2020/wuhan2020/pulls"
        },
      ],
    },
  },
  develop: {
    sidemenu: [
      {
        title: 'Developers List',
        children: [

          {
            title: 'Developers',
            link: '/en-us/docs/developers/developers_dev.html',
          },
        ],
      },
    ],
    barText: 'Developers',
  },
  docs: {
    sidemenu: [
      {
        title: 'Overview',
        children: [
          {
            title: 'What is Wuahan2020?',
            link: '/en-us/docs/overview/what-is-wuhan2020.html',
          },
          {
            title: 'FAQ',
            link: '/en-us/docs/overview/faq.html',
          }
        ],
      },

      {
        title: 'User Doc',
        children: [
          {
            title: 'Website Guide',
            link: '/en-us/docs/user/website-guide.html',
          }
        ],
      },
      {
        title: 'Developer Guide',
        children: [
          {
            title: 'Quick Start',
            link: '/en-us/docs/dev/quickstart.html',
          },
          {
            title: 'Team Workflow (Chinese)',
            link: '/zh-cn/docs/dev/team-workflow.html', // en-us is not ready
          },
          {
            title: 'Data Collection Guide',
            link: '/en-us/docs/dev/information-guide.html',
          },
          {
            title: 'Mailing List Subscription Guide (Chinese)',
            link: '/zh-cn/docs/dev/mailing-list-guide.html', // en-us is not ready
          },
          {
            title: 'Architecture Diagram',
            link: '/en-us/docs/dev/architecture.html',
          },
          {
            title: 'Guide For contribution',
            link: '/en-us/docs/dev/contributing.html',
          },
          {
            title: 'Github Repo processing',
            link: '/en-us/docs/dev/dev-env-setup.html',
          },
        ],
      },
    ],
    barText: 'Documentation'
  },
  home: {
    brand: {
      brandName: 'What is the community of wuhan2020 ?',
      briefIntroduction: 'What we are doing now is: to establish a real-time and synchronous data service for hospitals, factories, procurement and other information, and to convene all those who want to contribute to the anti-virus campaign, so that everyone with relevant skills can participate in the development of related topics, and complete it in a self-organized and collaborative way with open source community culture.',
      buttons: [
        {
          text: 'Get Started',
          link: '/en-us/docs/overview/what-is-wuhan2020.html',
          type: 'primary',
        },
        {
          text: 'Github',
          link: 'https://github.com/wuhan2020/wuhan2020',
          type: 'normal',
        },
        {
          text: 'Platform for Wuhan 2019-nCoV Epidemic Prevention',
          link: 'https://wh.opensource-service.cn/',
          type: 'normal',
        },
      ],
    },
    features: {
      title: 'Community Introduction',
      list: [
        {
          icon: 'feature-1',
          title: '2019-nCov Information Platform',
          content: 'An information system developed by the community. Facilitate the information exchange between resource providers (medical resource donors, logistics companies, hotels, free clinic resources) and those who need help (hospitals, people in the disaster area), so as to facilitate and quickly help the people in the disaster area.',
        },
        {
          icon: 'feature-2',
          title: 'Wuhan2020 Community',
          content: 'At present, there are more than 3000 volunteers from different countries in Wuhan 2020 community. There are programmers, product managers, designers, project managers, data analysts, information collectors, translators, media workers, students, etc. Through the establishment of information system, data analysis and prediction, it makes contribution to the resistance of new coronavirus.',
        }
      ],
    },
  },
  project: {
    barText: 'Projects',
    sectionDescription: "The community has released the following open-sourced projects",
    projects: {
      list: [
        {
          img: '/images/blog/wuhan2020.png',
          title: '新型冠状病毒防疫信息收集平台',
          repoLink:'https://github.com/wuhan2020/wuhan2020',
          description: "Wuhan new coronavirus epidemic prevention information collection platform",
          link: 'https://wh.opensource-service.cn/',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: '2020援助武汉',
          repoLink: 'https://github.com/wuhan2020/data-sync',
          description: '建立一个医院、工厂、采购等信息实时同步的数据服务，同时召集所有希望对这次抗击病毒战役进行贡献的人，让每个具有相关技能的人都可以参与相关主题的开发工作，用开源的社区文化，以自组织协作的方式完成。',
          link: 'https://wuhan2020.kaiyuanshe.cn/',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: 'Wuhan2020开源社区官网',
          repoLink: 'https://github.com/wuhan2020/wuhan2020.github.io',
          description: '目前Wuhan2020社区官方网站，召集不同国家不同职业的志愿者，建立开源信息系统，为抵抗新型冠状病毒做贡献。',
          link: 'https://community.wuhan2020.org.cn/',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: '2019-nCoV-Nav 疫情信息导航',
          repoLink: 'https://github.com/wuhan2020/2019-nCoV-Nav',
          description: '疫情信息导航网站为公众提供一个便利而全面的疫情信息入口，整理了涵盖疫情信息的各个方面的网络通道。',
          link: 'http://nav.werty.cn',
        },
      ],
    },
  },
  site: {
    pageMenu: [
      {
        key: 'home', // 用作顶部菜单的选中
        text: 'HOME',
        link: '/en-us/index.html',
      },
      {
        key: 'docs',
        text: 'DOCS',
        link: '/en-us/docs/overview/what-is-wuhan2020.html',
      },
      {
        key: 'developers',
        text: 'CONTRIBUTORS',
        link: '/en-us/docs/developers/developers_dev.html',
      },
      {
        key: 'blog',
        text: 'BLOG',
        link: '/en-us/blog/index.html',
      },
      {
        key: 'community',
        text: 'COMMUNITY',
        link: '/en-us/community/index.html',
      },
      {
        key: 'list',
        text: 'PROJECTS',
        link: '/en-us/project/index.html',
      },
      {
        key: 'mis',
        text: '2019-NCOV INFORMATION PLATFORM',
        link: 'https://wh.opensource-service.cn/',
      },
    ],
    vision: {
      title: 'Vision',
      content: 'Unite as one and drive out the plague!',
    },
    documentation: {
      title: 'Documentation',
      list: [
        {
          text: 'What is Wuhan2020 ?',
          link: '/en-us/docs/overview/what-is-wuhan2020.html',
        },
        {
          text: 'Quick Start',
          link: '/en-us/docs/dev/quickstart.html',
        },
        {
          text: 'Report a doc issue',
          link: 'https://github.com/wuhan2020/wuhan2020.github.io/issues/new',
        },
        {
          text: 'Edit This Page on GitHub',
          link: 'https://github.com/wuhan2020/wuhan2020.github.io',
        }
      ],
    },
    resources: {
      title: 'Resources',
      list: [
        {
          text: 'Blog',
          link: '/en-us/blog/index.html',
        },
        {
          text: 'Community',
          link: '/en-us/community/index.html',
        },
      ],
    },
    copyright: 'Copyright © 2020 Wuhan2020',
    sponsors: {
      title: 'Sponsors',
      list: [
        {
          text: 'Slack',
          link: 'https://slack.com/',
          target: '_blank'
        },
        {
          text: 'Shimo',
          link: 'https://shimo.im/',
          target: '_blank'
        }
      ]
    }
  }
}
