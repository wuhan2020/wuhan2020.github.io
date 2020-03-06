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
          title: 'wuhan2020开源项目协作流程发布 & 征集专家人士',
          content: 'wuhan2020开源项目协作流程发布 & 征集专家人士',
          dateStr: '2020年1月26日',
          link: '/zh-cn/blog/collaborative-process-publishing.html',
        },
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
          img: '/images/blog/wuhan2020.png',
          title: 'WUHAN 2020：新型冠状病毒防疫开源信息收集平台',
          content: 'WUHAN 2020：新型冠状病毒防疫开源信息收集平台',
          dateStr: '2020年2月2日',
          link: '/zh-cn/blog/wuhan2020-intro.html',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: '为改善疫情助力，急需你的问卷反馈！用更透明的数据提升公共卫生治理能力',
          content: '为改善疫情助力，急需你的问卷反馈！用更透明的数据提升公共卫生治理能力',
          dateStr: '2020年2月3日',
          link: '/zh-cn/blog/need-questionnaire.html',
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
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: '开源共抗：疫情信息导航站点正式入驻wuhan2020开源社区',
          content: '开源共抗：疫情信息导航站点正式入驻wuhan2020开源社区',
          dateStr: '2020年2月10日',
          link: '/zh-cn/blog/nav-project-introduced.html',
        }
      ]
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
        title: '贡献者列表',
        children: [
          {
            title: '贡献者',
            link: '/zh-cn/docs/developers/developers_dev.html',
          },
        ],
      },
      {
        title: '工作报表',
        children: [
          {
            title: '社区办公室',
            link: '/zh-cn/docs/developers/workreport-pmo_dev.html',
          },
          {
            title: '宣传组',
            link: '/zh-cn/docs/developers/workreport-media_dev.html',
          }
          ,
          {
            title: '数据组',
            link: '/zh-cn/docs/developers/workreport-data_dev.html',
          }
          ,

          {
            title: '技术开发组',
            link: '/zh-cn/docs/developers/workreport-rd_dev.html',
          }
          ,
          {
            title: '产品设计组',
            link: '/zh-cn/docs/developers/workreport-product_dev.html',
          },
          {
            title: '协调组',
            link: '/zh-cn/docs/developers/workreport-communicate_dev.html',
          }
          ,
          {
            title: '项目管理',
            children: [
              {
                title: '项目管理',
                link: '/zh-cn/docs/developers/workreport-pm_dev.html',
              },
              {
                title: '黑客松项目组',
                link: '/zh-cn/docs/developers/workreport-hackathon_dev.html',
              }
            ],
          }
        ]
      },
    ],
    barText: '贡献者',
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
            title: '项目入驻社区指南',
            link: '/zh-cn/docs/dev/project-donate-guide.html',
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
            title: 'Slack Channel 列表',
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
          description: 'Wuhan2020信息服务官网，是由程序员和开发者创建的疫情相关的资源对接综合类信息服务平台。以关注数据平台层面为核心，解决极端应急条件下，消息不对等和信息不透明导致的物资供应不足、就诊信息混乱、异地人员无法解决外宿等问题。主要面向政府、公益组织、企事业单位、医疗机构、患者、捐助者等相关机构和人群。开发者们均可以借助技术工具和数字平台，利用数字平台优势，实现供需数字化、提升信息透明度，让各供需方进行分布式自助对接，提升效率。参与wuhan2020 众多开发者们，用自己擅长的技术，做着力所能及的事情，共同应对这场战争。',
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
          description: 'Wuhan2020开源社区是在新冠肺炎疫情期间由开发者自主搭建的社区，社区为开发者提供技术交流、实践的平台，用开源的社区文化，以自组织协作的方式完成，帮助武汉自组织救援工作更有效、更准确地开展。社区上线至今吸引了自不同国家的3000多志愿者，通过建立信息系统、数据分析预测等为抵抗新型冠状病毒做贡献；目前已成功孵化“新型冠状病毒防疫信息收集平台”、2020援助武汉”、“Wuhan2020开源社区官网”、“COVID-19-Nav 疫情信息导航”等多个项目。',
          link: 'https://community.wuhan2020.org.cn/',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: 'COVID-19-Nav 疫情信息导航',
          repoLink: 'https://github.com/wuhan2020/COVID-19-Nav',
          description: '疫情信息导航网站为公众提供一个便利而全面的疫情信息入口，整理了涵盖疫情信息的各个方面的网络通道。',
          link: 'http://nav.werty.cn',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: '黑客松',
          repoLink:'https://github.com/wuhan2020/Hackathon',
          description: '黑客松活动是社区举办的创意设计大赛。为了呼吁更多人参与、创造包括产品原型，编码，用户体验设计以及业务/社会影响模型等形式的作品，以对抗新冠病毒疫情。此外，鼓励社会创新，以开源协作来帮助对抗疫情，并在志愿者，机构，企业和平台之间创造共享价值。',
          link: 'https://community.wuhan2020.org.cn/zh-cn/hackathon/index.html',
        },
      ],
    },
  },
  hackathon: {
    barText: '黑客松',
    starter: '线上开跑',
    slogan: '开发一个有用的公益软件，<br> 比捐款十个亿还管用。',
    speakerTitle: '演讲人和评委',
    sectionDescription: '黑客马拉松等你来战',
    speakerlist: [
      {
          name:"逯慧敏",
          img:"Lu_Huimin.jpeg",
          job:"微软云和AI战略高级经理",
          introduction:"Huimin在微软总部担任云及AI战略高级经理。她与产品团队紧密合作制定产品路标及市场进入及推广策略。",
      },
      {
          name:"蒋寸寸",
          img:"Chun_Jiang.jpeg",
          job:"产品设计师@Scale AI",
          introduction:"蒋寸寸是Scale AI的产品设计师。她致力于创建促进连接和创新的独特产品，在面向消费者的产品设计，机器学习，数据设计，物联网，设计系统和自动驾驶方面拥有丰富的经验。 Chun现在Scale AI领导3D标注和数据产品设计。 之前在优步工作。 康奈尔大学本科和研究生学位。",
      },
      {
          name:"桂家勋",
          img:"Jason_Gui.jpeg",
          job:"Vue Glasses CTO",
          introduction:"作为Vigo和Vue的创始人，Jason开发了创新的硬件产品，并通过Kickstarter筹集了超过200万美元资金。 Jason拥有机械和电气工程，市场营销，生产和商科专业背景。",
      },
      {
          name:"Zhiyang Wang",
          img:"Zhiyang_Wang.jpeg",
          job:"Facebook软件工程师",
          introduction:"让我们通过HACKING帮助武汉！ Sean在Facebook \"Hack\"了六年，横跨移动端、网页端产品，面向用户、广告商、创作者，他们来自美国，拉美，还有中国。让我们联合抗\“疫\”！",
      },
      {
          name:"Claire Li",
          img:"Claire_Li.jpeg",
          job:"Pnterest 高级软件工程师",
          introduction:"Claire是Pinterest的产品构建者、开源贡献者和高级工程师。 她在GitHub上建立的开源项目有500多颗星并拥有两项专利。 她的产品拥有数百万电商、支付、社交媒体的用户。Claire还运营创业者社区。 获加州大学伯克利分校计算机科学学士学位。",
      },
      {
          name:"Matth Zhao",
          img:"Zhao_Matthew.jpeg",
          job:"Google 软件工程师",
          introduction:"Matt是Google的工程师，于2015-2019在Snapchat工作。 Matt获莱斯大学CS硕士学位和学士学位。 他在校期间参加过各种黑客松比赛，并很高兴为“ Hack for Wuhan”提供技术支持。",
      },
      {
          name:"Haimo Liu",
          img:"Haimo_Liu.jpeg",
          job:"阿里云主任产品经理",
          introduction:"“我们不能帮助所有人，但每个人都可以帮助某人。” 武汉可能不是您的故乡，但我们都是全球社区的一分子。 帮助他人不仅让社区变得更好，也让我们在此过程中感觉良好。",
      },
      {
          name:"Tianyu Bao",
          img:"Tianyu_Bao.jpeg",
          job:"Uber产品经理",
          introduction:"我是Uber Eats的产品经理，致力于为用户提供无缝的送餐体验。 作为产品经理，我希望通过支持开发者构建更好的产品解决方案，为武汉做出自己的努力。",
      },
      {
          name:"吴雪",
          img:"Xander_Wu.jpeg",
          job:"Hack for Wuhan发起人，wuhan2020成员",
          introduction:"作为Hack for Wuhan的发起人和组织者，吴雪致力于探索社会价值和商业价值的结合，并且在寻找产品/市场契合度和市场推广方面有丰富经验。他在全球4G和5G领域取得了多项业界第一，并为初创公司担任B2B业务增长方面的顾问。",
      },
      {
          name:"Borui Wang",
          img:"Borui_Wang.jpeg",
          job:"泼辣修图，创始人、CEO",
          introduction:"Borui毕业于斯坦福大学计算机科学专业。他于2015年创立了Polarr，其使命是将人们与美学联系起来。 如今，Polarr推动着数百万创作者制定自己的创作风格。 该公司的应用程序在过去四年中三度获得了Apple Best of App Store的称号； 其计算摄影引擎被三星、OPPO等厂商的旗舰机采用。",
      },
      {
          name:"Han Chen",
          img:"Han_Chen.jpeg",
          job:"硅谷大厂软件工程师，大V博主",
          introduction:"Han是硅谷一家互联网公司的软件技术主管工程师。 他在变现、广告、中小企业业务、社交媒体和移动基础设施方面拥有丰富的经验。 他还是畅销书作家。 他的新书《硅谷思维》获得了Top 2 New Tech图书奖，其韩文和英文版本也将很快出版。",
      },
      {
          name:"Gordon Cheng",
          img:"Gordon_Cheng.jpeg",
          job:"Wilson Sonsini, 律师",
          introduction:"Gordon在硅谷从事公司法和证券法。 他主要与科技公司和初创公司合作，也做过很多公益法律工作。 他期待为参与者提供法律支持。",
      },
      {
          name:"朱辰",
          img:"Jaggie_Zhu.jpeg",
          job:"前投资与AI产品总监，字节跳动",
          introduction:"Jaggie曾在字节跳动主管投资和AI创新的开发。在此之前，她与斯坦福GSB的三位校友共同创立了一家北京二手电商创业公司。 她曾在宝洁（P＆G）担任项目经理。 她的投资范围从领先的自动驾驶AI到Craigslist。",
      },
      {
          name:"Tianyu Wu",
          img:"Tianyu_WU.jpeg",
          job:"Facebook",
          introduction:"天宇相信数据与设计之间的交集。 她目前在FB担任高级产品设计师，之前在Spotify和独角兽初创公司工作。 她已经教了UX多年，并且在产品和设计方面有着混合的背景。 她致力于创造简单有趣的产品来帮助人们解决问题。",
      },
      {
          name:"段一鸣",
          img:"Jack_Duan.jpeg",
          job:"翔鹰，创始人、CEO",
          introduction:"Jack是Sun的前高级技术员和Safeway的市场策略和大数据产品经理。他熟悉美国和中国的双重文化。获美国印第安纳州CS的学士学位； 伯克利·哈斯（MBA）学位。",
      },
      {
          name:"曲晓音",
          img:"Xiaoyin_Qu.jpeg",
          job:"CEO, Run The World",
          introduction:"Xiaoyin是实时在线活动平台Run The World的首席执行官。 此前，她曾是Facebook和Instagram的高级产品经理，并且是畅销书《硅谷产品》（在中国发行的产品管理书）的作者。",
      },
      {
          name:"Klaus Wang",
          img:"Klaus_Wang.jpeg",
          job:"红杉资本，VP",
          introduction:"我在红杉资本新加坡办公室，负责东南亚和印度市场。",
      },
      {
          name:"Peter Qian",
          img:"Peter_Qian.jpeg",
          job:"covariant.ai, 研发主管",
          introduction:"",
      },
      {
          name:"Thomas Reese",
          img:"Thomas_Reese.jpeg",
          job:"Run The World",
          introduction:"Thomas领导了Video for Facebook的工程产品，并共同创立了FlipWord。 他获得了伊利诺伊大学的CS硕士学位。 他目前是Run the World的技术负责人。",
      },
      {
          name:"方爱之",
          img:"Anna_Fang.jpeg",
          job:"真格基金创始合伙人兼首席执行官",
          introduction:"方爱之女士是真格基金创始合伙人兼CEO，负责真格基金的投资、投资组合管理及基金的整体运营，她领导投资了小红书、完美日记、蜜芽、Club Factory、依图科技、出门问问、地平线机器人，及VIPKID在内的众多独角兽项目。",
      },
      {
          name:"吴莹",
          img:"Eva_Woo.jpeg",
          job:"China Program Manager",
          introduction:"Eva是斯坦福PACS的中国项目经理。 在加入PACS之前，Eva从事新闻工作者和企业家工作长达15年，专注于中美的创新和影响力。作为一名接受过培训的财经记者，她曾在彭博社、财新、南华早报和华盛顿邮报担任商务和经济记者。",
      },
      {
          name:"硅谷大舅",
          img:"Big_Joe.jpeg",
          job:"Google产品经理",
          introduction:"谷歌产品经理，在硅谷人称\"大舅\"。现湾区MBA俱乐部管理员。毕业于北京大学计算机专业，有七年Google产品经理经验，是MBA毕业后去Google总部做产品经理的第一位华人。",
      },
      {
          name:"Kate Jia",
          img:"Kate_Jia.jpeg",
          job:"Wuhan 2020高级产品设计师",
          introduction:"致力于物联网创新产品设计多年。从2020年1月开始，带领wuhan2020 的产品志愿者团队开发最有温度和深度的疫情数据产品。毕业于清华大学。",
      },
      {
          name:"蒋璇",
          img:"nobody.jpeg",
          job:"Run The World联合创始人兼CTO",
          introduction:"前Facebook软件工程师，现Run The World联合创始人兼CTO。",
      },
      {
          name:"董韦利",
          img:"Weili_Dong.jpeg",
          job:"华人创业者协会 会长，斯坦福 MBA2",
          introduction:"华尔街摸爬滚打过年，从零创办集团全球电子交易系统。在硅谷成立华人创业者协会孵化器，擅长帮助前沿科技落地包括金融在内的传统行业。作为新手妈妈，十分关注女性创业。",
      },
      {
          name:"Cindy Cao",
          img:"nobody.jpeg",
          job:"滴滴，高级软件工程师",
          introduction:"",
      },
      {
          name:"韩文",
          img:"Wen_Han.jpeg",
          job:"金沙江创业投资，投资人",
          introduction:"斯坦福大学MBA，金沙江创业投资，投资人。金沙江创投是滴滴（560亿美元），Eleme（90亿美元），去哪儿（110亿美元），Xiaohongshu（30亿美元）以及其他转型公司的最大投资者。",
      },
      {
          name:"方晰",
          img:"Xi_Fang.jpeg",
          job:"Button创始合伙人",
          introduction:"方晰博士是Button资本的创始合伙人",
      },
      {
          name:"庄子明",
          img:"Rick_Zhuang.jpeg",
          job:"前CTO，阿里巴巴天猫新零售",
          introduction:"Rick现在是斯坦福大学商学院的斯隆学者，同时也是一家初创企业的联合创始人。他在硅谷和中国的互联网行业工作了超过10年，参与并见证了移动互联网社交和电商的崛起。之前他领导了阿里巴巴天猫新零售的研发，并从零到一建立了淘宝内容电商生态的平台。在996之余，他喜欢阅读、搭乐高、长距离越野跑、和吃一碗热干面。",
      },
      {
          name:"许欢",
          img:"Huan_Xu.jpeg",
          job:"连续创业者",
          introduction:"毕业于北京航空航天大学应用数学专业，连续的互联网创业者。折800（10亿美金）联合创始人。对互联网流量、产品和运营有通透的了解。",
      },
	  {
	      name:"李扬",
	      img:"Yang_Li.jpeg",
	      job:"wuhan2020创始人之一，AI工程师",
	      introduction:"wuhan2020创始人之一。 控制工程硕士毕业，目前在医疗企业担任AI工程师，之前在物联网准独角兽公司工作，精通多项编程语言并发表多项核心论文及相关科研专利，有工业与互联网结合背景。“从技术出发，但远不止于技术”是他的理念。",
	  },
	  {
	      name:"",
	      img:"Xuwen_Cao.jpeg",
	      job:"奇迹创坛合伙人",
	      introduction:"奇绩创坛创业营合伙人，投资早期技术项目，并帮助他们从0到1加速成长。此前曹勖文毕业于斯坦福大学计算机系，曾在硅谷创业多年，两次被YCombinator选中孵化，最后项目回声锁屏被微软于2015年收购。",
	  }
    ],
    concepts: {
      list: [
        {
          img: '/images/blog/wuhan2020.png',
          description: '谁也不会预计到，新冠肺炎病毒的影响如此巨大，目前它已经发展为全球性紧急事件。虽然形势不容乐观，但我们也看到很多暖心的一幕幕在上演：众多志愿者的无私奉献，大量物资用品的捐赠，火神山、雷神山医院的火速建成，多地医疗队伍的驰援，都让这个冬天变的不那么寒冷。',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: '而在全国对抗疫情的背后，技术支持也占据了重要的一环。民政部司长陈越良就曾公开喊话，呼吁互联网企业开发公益应用，并说到“开发一个有用的公益软件，比捐款十个亿还管用。”',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: '怎么样让更多人参与其中，让信息科技等力量发挥更大的作用？',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: '作为Wuhan2020社区的志愿者和开发人员，我们将发起另一场活动：在 2020年2月底，启动Hack for Wuhan黑客马拉松，在此诚邀您利用自己的技能，为抗击疫情贡献一份力量！',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: '我们相信黑客马拉松不仅能创造出下一个独角兽企业，还能让更多人精诚团结、共赴使命、携手抗击世界性公共卫生危机。',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: '我们期待这样的形式出现：新的构想设计、产品原型、业务或社会影响模型，我们深信所有的努力都将会产生深远的影响。',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: '让你的灵感产生更大的价值，我们会提供专业的技术支持，你将有机会与包括来自斯坦福大学、麻省理工学院、哈佛大学、Andreessen Horowitz、金沙江创业投资、Google、Facebook、ByteDance以及硅谷、中国和印度的初创公司的优秀导师团队互动。',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: '全国人民共同对抗新冠肺炎疫情的种种，将会成为一段历史，而由此而迸发出的灵感，一定还会持续闪耀。活动中每一个有价值的想法都会得到重视，在帮助抗击疫情的同时，让我们为社会创作更多的共享价值。',
        },
      ],
    },
    participant: {
      name: '参赛人员',
      person: '参赛选手',
      person_description_1: '来自开源社区（例如Wuhan2020和GitHub上其他社区）的开发人员，有出色的想法和原型，能解决当下的挑战并创造共享价值；',
      person_description_2: '希望通过开源方式来提高社会影响力的志愿者；',
      person_description_3: '积极应对COVID-19挑战以及社会紧急危机的企业家、创业者.',
      audience: '观众',
      audience_description_1: 'Hackathon参赛个人及团队',
      audience_description_2: '受邀人-评委，导师，专业人员（企业家，社会创新者，风险投资人等）',
      audience_description_3: '任何对此活动感兴趣并想要观摩学习的人。',
    },
    subject: {
      name: '赛题范围和形式',
      subject_name: '可选的主题包括',
      subject: ['针对疫情的标注数据','相关技术的创新应用', '社会公益和科普宣传',
          '应对本次公共危机下出现的各类社会挑战的解决方案'],
      form_name: '表现方式（不限于）',
      form: ['视频、动画等艺术设计作品', '动态网页', '开源数据', '数据的分析预测模型',
        '可视化平台', '网站', '针对疫情的产品应用', '分析调查报告、策划书']
    },
    activity: {
      detail: '活动详情',
      activityList: [{
        image_name: 'activity1.png',
        class_name: 'a1',
        name: '时间',
        content: '2020年3月6号~3月8号'
      },{
        image_name: 'activity2.png',
        class_name: 'a2',
        name: '方式',
        content: '完全线上进行，鼓励分布式协作的方式'
      },{
        image_name: 'activity3.png',
        class_name: 'a3',
        name: '内容',
        content: '根据“武汉2020”提供的数据进行设计和开发比赛，完成作品提交以及介绍视频（创意、作品简介以及意义）。'
      },{
        image_name: 'activity4.png',
        class_name: 'a4',
        name: '奖励',
        content: '评委和社区对参与者和项目进行评选排名，向优胜者颁发奖励。'
      },
      ]
    },
    holder: {
      main: '主办方',
      co: '协办方',
      support: '平台支持',
      resource: '资源提供',
      media: '媒体合作',
      community: '社区合作'
    },
    application: {
      application: '立即报名',
      waiting: '敬请期待'
    }
  },
  certification: {
    formText: {
      header: '志愿者证书领取',
      emailLabel: '邮箱地址',
      nicknameLabel: '昵称',
      nicknameDescription: '昵称将填写在证书上',
      action: '提交验证',
    },
    alertMsgs: {
      successful: '恭喜！您所提交的信息已经审核通过。',
      error: '输入信息不正确，请稍后再试。',
      userError: '用户不存在，请稍后再试。',
      emailError: '邮箱错误，请稍后再试。',
      appliedWarn: '您所提交的信息已领取，请重新输入。',
      notfoundWarn: '暂时没有您的信息，请耐心等待。',
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
        key: 'hackathon',
        text: '黑客松',
        link: '/zh-cn/hackathon/index.html',
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
    },
    statistics: {
      title: '访问统计',
      page_pv: '本文总访问量：',
      site_pv: '本站总访问量：',
      site_uv: '本站总访客量：'
    }
  }
}
