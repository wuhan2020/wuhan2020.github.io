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
          title: 'Wuhan Novel Coronavirus Outbreak Prevention Information Collection Platform',
          repoLink:'https://github.com/wuhan2020/wuhan2020',
          description: "Wuhan novel coronavirus outbreak prevention information collection platform",
          link: 'https://wh.opensource-service.cn/',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: '2020 Wuhan Rescue',
          repoLink: 'https://github.com/wuhan2020/data-sync',
          description: 'Our goal is to establish a real-time data service platform with information on hospitals, factories and procurement, allowing anyone with relevant skills to participate in the initiative. We would like to call for anyone who wishes to contribute to the fight against the 2019-nCoV.',
          link: 'https://wuhan2020.kaiyuanshe.cn/',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: 'Wuhan2020 Open Source Community Official Website',
          repoLink: 'https://github.com/wuhan2020/wuhan2020.github.io',
          description: 'Wuhan2020 community calls for volunteers all over the world to establish an open-source information platform and contribute to the fight against the 2019-nCoV',
          link: 'https://community.wuhan2020.org.cn/',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: '2019-nCoV Outbreak Navigation Site',
          repoLink: 'https://github.com/wuhan2020/2019-nCoV-Nav',
          description: '2019-nCoV navigation site provides the public with a convenient and comprehensive information portal with online resources and archival information related to 2019-nCoV.',
          link: 'http://nav.werty.cn',
        },
      ],
    },
  },
  hackathon: {
    barText: 'Hackathon',
    sectionDescription: 'Hack for Wuhan',
    concepts: {
      list: [
        {
          img: '/images/blog/wuhan2020.png',
          description: 'The unexpected outbreak of COVID-19 has such massive influence that it has developed into a public health emergency of international concern (PHEIC). Despite the difficulties, warm-hearted helps are witnessed during this winter: the ongoing and continued dedication of numerous volunteers, the donation of urgent and necessary materials and supplies nationwide and worldwide, the highly-effective medical infrastructure construction of Huoshenshan Hospital and Leishenshan Hospital, and the support of medical teams from the other provinces of China. ',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: 'In this fight against the epidemic, technical support plays an essential role. Chen Yueliang, an official with the Ministry of Civil Affairs, once urged tech companies to develop applications for public welfare, which, to his opinion, is “more helpful than just donating one billion yuan."',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: 'We have endeavored to encourage more people into the development of applications and apply the power of technology into this race against the disease.',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: 'As volunteers and developers of Wuhan2020 community, we would like to invite you to our Hackathon: Hack for Wuhan, on 27th and 28th  February, 2020. Let us hack together against the global crisis.',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: 'We believe hackathon can not only inspire the next billion dollar unicorns, but also help unite mission-driven developers and innovators to combat an international outbreak crisis.',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: 'We are looking forward to the novel designs, prototypes, business or social impact models. We believe that all efforts will make a profound impact.',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: 'We will provide professional technical supports to accompany your inspiration, and you will have the opportunity to work with mentors from Stanford, MIT, Harvard, Andreessen Horowitz, GSR Venture, Google, Facebook, ByteDance and startups in Silicon Valley, China, and India.',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: 'Your every single effort for this fight against COVID-19 wherein all of us could keep the humanitarian spirits and open source values, can compose stories worth telling and precious memories to remember.  ',
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
        key: 'hackathon',
        text: 'HACKATHON',
        link: '/en-us/hackathon/index.html',
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
