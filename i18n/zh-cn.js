export default {
  blog: {
    barText: '博客',
    postsTitle: '所有文章',
    list: []
  },
  community: {
    barText: '社区',
    events: {
      title: '事件 & 新闻',
      list: [
        {
          img: '/images/blog/wuhan2020.png',
          title: '致 WUHAN2020 开源社区全体成员的一封信',
          content: '致 WUHAN 2020 开源社区全体成员的一封信',
          dateStr: '2020年1月28日',
          link: '/zh-cn/blog/to-all-members.html',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: 'Wuhan加油项目新流程发布',
          content: 'Wuhan加油项目新流程发布',
          dateStr: '2020年1月29日',
          link: '/zh-cn/blog/wuhan2020-official-announcement.html',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: '如何加入到 Wuhan2020 开源项目，打赢这场没有硝烟的战争？',
          content: '如何加入到 Wuhan2020 开源项目，打赢这场没有硝烟的战争？',
          dateStr: '2020年2月1日',
          link: '/zh-cn/blog/how-to-join-wuhan2020.html',
        },
        {
          img: '/images/blog/media/banner.webp',
          title: 'WUHAN2020官宣渠道汇总',
          content: 'WUHAN2020官宣渠道汇总',
          dateStr: '2020年2月7日',
          link: '/zh-cn/blog/wuhan2020-media-channel.html',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: '疫情知识 -- 新型冠状病毒防护指南',
          content: '疫情知识 -- 新型冠状病毒防护指南',
          dateStr: '2020年2月9日',
          link: '/zh-cn/blog/coronavirus-protection-guide.html',
        }
      ],
    },
    contacts: {
      title: '联系我们',
      desc: '有问题需要反馈？请通过一下方式联系我们。',
      list: [
        {
          img: '/images/channels/mailinglist.png',
          imgHover: '/images/channels/mailinglist_hover.png',
          title: '邮件列表',
          link: 'mailto:wuhan2020+subscribe@googlegroups.com'
        },
        {
          img: '/images/channels/slack_gray.svg',
          imgHover: '/images/channels/slack_green.svg',
          title: '@Slack',
          link: 'https://github.com/wuhan2020/wuhan2020#slack%E9%A2%91%E9%81%93%E5%AF%BC%E8%88%AA',
        },
        {
          img: '/images/channels/weixin_official_account.jpeg',
          imgHover: '/images/channels/weixin_official_account.jpeg',
          title: '微信公众号',
        }
      ],
    },
    contributorGuide: {
      title: '贡献指南',
      desc: '欢迎为 Wuhan2020 做贡献！',
      list: [
        {
          img: '/images/channels/email_gray.svg',
          title: '邮件列表',
          content: '加入我们的邮件列表。',
          link: ''
        },
        {
          img: '/images/channels/github_gray.svg',
          title: '报告问题',
          content: '提交新问题',
          link: "https://github.com/wuhan2020/wuhan2020/issues/new"
        },
        {
          img: '/images/documents.png',
          title: '改进文档',
          content: '改进文档',
          link: "https://github.com/wuhan2020/wuhan2020.github.io"
        },
        {
          img: '/images/pullrequest.png',
          title: '提交 PR',
          content: '创建一个PR',
          link: "https://github.com/wuhan2020/wuhan2020/pulls"
        },
      ],
    }
  },
  develop: {
    sidemenu: [
      {
        title: '开发者列表',
        children: [
          {
            title: '开发人员',
            link: '/zh-cn/docs/developers/developers_dev.html',
          }
        ],
      },
    ],
    barText: '开发者',
  },
  docs: {
    sidemenu: [
      {
        title: '概述',
        children: [
          {
            title: 'Wuhan2020 是做什么的？',
            link: '/zh-cn/docs/overview/what-is-wuhan2020.html',
          },
          {
            title: 'FAQ',
            link: '/zh-cn/docs/overview/faq.html',
          }
        ],
      },
      {
        title: '用户文档',
        children: [
          {
            title: '新型冠状病毒防疫信息平台指南',
            link: '/zh-cn/docs/user/website-guide.html',
          }
        ],
      },

      {
        title: '贡献者指南',
        children: [
          {
            title: '快速开始',
            link: '/zh-cn/docs/dev/quickstart.html',
          },
          {
            title: '团队工作流程',
            link: '/zh-cn/docs/dev/team-workflow.html',
          },
          {
            title: '信息收集指南',
            link: '/zh-cn/docs/dev/information-guide.html',
          },
          {
            title: '邮件列表订阅向导',
            link: '/zh-cn/docs/dev/mailing-list-guide.html',
          },
          {
            title: '架构图',
            link: '/zh-cn/docs/dev/architecture.html',
          },
          {
            title: 'Slack Channle 列表',
            link: '/zh-cn/docs/dev/slack-channels.html',
          },
          {
            title: '贡献指南',
            link: '/zh-cn/docs/dev/contributing.html',
          },
          {
            title: 'Github Repo 流程',
            link: '/zh-cn/docs/dev/dev-env-setup.html',
          },
        ],
      },
    ],
    barText: '文档',
  },
  home: {
    brand: {
      brandName: 'Wuhan2020 社区是做什么的?',
      briefIntroduction: '我们当前在做的事是：建立一个医院、工厂、采购等信息实时同步的数据服务，同时召集所有希望对这次抗击病毒战役进行贡献的人，让每个具有相关技能的人都可以参与相关主题的开发工作，用开源的社区文化，以自组织协作的方式完成。',
      buttons: [
        {
          text: '快速开始',
          link: '/zh-cn/docs/overview/what-is-wuhan2020.html',
          type: 'primary',
        },
        {
          text: 'Github',
          link: 'https://github.com/wuhan2020/wuhan2020',
          type: 'normal',
        },
      ],
    },
    features: {
      title: '社区介绍',
      list: [
        {
          icon: 'feature-1',
          title: '新型冠状病毒防疫信息平台',
          content: '社区研发的一个信息系统。方便资源提供者(医疗资源捐献者、物流公司、酒店、义诊资源)和需要帮助者（医院、灾区群众）之间信息互通，以方便快速地使灾区人民得到救助',
        },
        {
          icon: 'feature-2',
          title: 'Wuhan2020社区',
          content: '目前Wuhan2020社区有来自不同国家的3000多志愿者组成。有程序员、产品经理、设计师、项目经理、数据分析师、信息采集者、翻译、媒体工作者、学生等。通过建立信息系统、数据分析预测等为抵抗新型冠状病毒做贡献。',
        }
      ],
    },
  },
  project: {
    barText: '项目列表',
    sectionDescription: '目前社区孵化的项目/活动',
    projects: {
      list: [
        {
          img: '/images/blog/wuhan2020.png',
          title: '新型冠状病毒防疫信息收集平台',
          repoLink:'https://github.com/wuhan2020/wuhan2020',
          description: '社区研发的一个信息系统。方便资源提供者(医疗资源捐献者、物流公司、酒店、义诊资源)和需要帮助者（医院、灾区群众）之间信息互通，以方便快速地使灾区人民得到救助。',
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
        key: 'home',
        text: '首页',
        link: '/zh-cn/index.html',
      },
      {
        key: 'docs',
        text: '文档',
        link: '/zh-cn/docs/overview/what-is-wuhan2020.html',
      },
      {
        key: 'developers',
        text: '贡献者',
        link: '/zh-cn/docs/developers/developers_dev.html',
      },
      {
        key: 'blog',
        text: '博客',
        link: '/zh-cn/blog/index.html',
      },
      {
        key: 'community',
        text: '社区',
        link: '/zh-cn/community/index.html',
      },
      {
        key: 'list',
        text: '项目列表',
        link: '/zh-cn/project/index.html',
      },
      {
        key: 'mis',
        text: '新型冠状病毒防疫信息平台',
        link: 'https://wh.opensource-service.cn/',
      },
    ],
    vision: {
      title: '愿景',
      content: '众志成城，共克时艰！',
    },
    documentation: {
      title: '文档',
      list: [
        {
          text: 'Wuhan2020 项目是干什么的？',
          link: '/zh-cn/docs/overview/what-is-wuhan2020.html',
        },
        {
          text: '快速开始',
          link: '/zh-cn/docs/dev/quickstart.html',
        },
        {
          text: '报告文档问题',
          link: 'https://github.com/wuhan2020/wuhan2020.github.io/issues/new',
        },
        {
          text: '在Github上编辑此文档',
          link: 'https://github.com/wuhan2020/wuhan2020.github.io',
        }
      ],
    },
    resources: {
      title: '资源',
      list: [
        {
          text: '博客',
          link: '/zh-cn/blog/index.html',
        },
        {
          text: '社区',
          link: '/zh-cn/community/index.html',
        },
      ],
    },
    copyright: 'Copyright © 2020 Wuhan2020',
    sponsors: {
      title: '赞助商',
      list: [
        {
          text: 'Slack',
          link: 'https://slack.com/',
          target: '_blank'
        },
        {
          text: '石墨文档',
          link: 'https://shimo.im/',
          target: '_blank'
        }
      ]
    }
  }
}
