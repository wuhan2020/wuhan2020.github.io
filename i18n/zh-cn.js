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
      ],
    },
  },
  hackathon: {
    barText: '黑客松',
    sectionDescription: '黑客马拉松等你来战',
    speakerlist: [
      {
          name:"Huimin Lu",
          img:"Lu_Huimin.jpeg",   
          job:"Microsoft Cloud and AI Strategy Sr Manager",
          introduction:"I worked closely with the product to figure out product roadmap and go to market strategy.",
      },
      {
          name:"Chun Jiang",
          img:"Chun_Jiang.jpeg",  
          job:"Product Design @ Scale AI",
          introduction:"Driven to create unique products that foster connection and innovation, Chun has had experience with consumer-facing product design, machine learning, data design, IoT, design system, and autonomous driving. Chun is now leading 3D annotation & data product design at Scale AI. Previously worked at Uber. Undergraduate & Graduate degrees at Cornell.",
      },
      {
          name:"Jason Gui",
          img:"Jason_Gui.jpeg",
          job:"Vue Glasses CTO",
          introduction:"As founder of Vigo and Vue, Jason has created innovative hardware products and raised over $2 million USD through Kickstarter. Jason brings a background of mechanical and electrical engineering, marketing, production, and business expertise.",
      },
      {
          name:"Zhiyang Wang",
          img:"Zhiyang_Wang.jpeg",
          job:"Facebook Software Engineer",
          introduction:"Let's see how we can help Wuhan by HACKING! Have been hacking in Facebook for 6 years across multiple products on mobile, on web, for users, for advertisers, for creators, from US, from LATAM and also from China! Let's unite everyone everywhere!",
      },
      {
          name:"Claire Li",
          img:"Claire_Li.jpeg",
          job:"Pinterest, Sr.Software Engineer",
          introduction:"Claire is a product builder, open source contributor, and Sr. engineer at Pinterest. She has built a open source project with 500+ stars on GitHub and holds two patents. She has shipped products to millions of users in eCommerce, payment and social media space. Claire also runs a community of aspiring entrepreneurs. She received her bachelor in CS from UC-Berkeley.",
      },
      {
          name:"Matth Zhao",
          img:"Zhao_Matthew.jpeg",
          job:"Google/Software Engineer",
          introduction:"Matt is currently an enginner at Google and previously worked at Snapchat(2015-2019). Matt got his master and bachelor's degrees in CS from  Rice University. He attended various hackathons while in school and is excited to offer technical support for 'Hack for Wuhan'.",
      },
      {   
          name:"Haimo Liu",
          img:"Haimo_Liu.jpeg",   
          job:"Alibaba Cloud, Staff Product Manager",
          introduction:"'We can't help everyone, but everyone can help someone.' Wuhan might not be your home town or home country, but we are all part of this global community. Helping others in this community not only makes this community better, but also makes you feel great in the process.",
      },
      {
          name:"Tianyu Bao",
          img:"Tianyu_Bao.jpeg",  
          job:"Product Manager at Uber",
          introduction:"I'm a product manager at Uber Eats, dedicated to offering a seamless food delivery experience to our users. As a PM, I hope to contribute my efforts to Wuhan by supporting hackers to build better product solutions.",
      },
      {
          name:"Xander Wu",
          img:"Xander_Wu.jpeg",   
          job:"Founder of Hack for Wuhan@wuhan2020",
          introduction:"As the founder of Hack for Wuhan @wuhan2020, Xander is passionate about working with you to align social and commercial value, tailor product-market fit, and seek go-to-market fit.He has achieved many #1 in global 4G and 5G market and advised a number of startups in B2B business growth.",
      },
      {
          name:"Borui Wang",
          img:"Borui_Wang.jpeg",  
          job:"Polarr, Founder and CEO",
          introduction:"Borui started Polarr in 2015 after he graduated from Stanford studying Computer Science. Today Polarr powers millions of creators to craft their own creative styles. The company's apps have won Apple Best of App Store three times over the last four years; its computational photography engine also powers key systems in flagship consumer devices made by Samsung, OPPO, etc.",
      },
      {
          name:"Han Chen",
          img:"Han_Chen.jpeg",    
          job:"Software Engineer/ Blogger",
          introduction:"Han is a Software Tech Lead engineer in one of the Silicon Valley internet company. He had the experience on Monetization solution, ads, SMB business, social media and mobile infra. He is also a Best Seller book writer. His new book The Thinking of Silicon Valley (????) achieved Top 2 New Tech book award, the Korean and English version will be published soon as well.",
      },
      {
          name:"Gordon Cheng",
          img:"Gordon_Cheng.jpeg",    
          job:"Wilson Sonsini, Attorney",
          introduction:"Gordon practices corporate and securities law in the Silicon Valley. He primarily works with tech companies and startups, but has done quite some pro bono legal work as well. He looks forward to providing legal support for the participants.",
      },
      {
          name:"Jaggie Zhu",
          img:"Jaggie_Zhu.jpeg",  
          job:"Ex-Director, AI Product Development, Byte Dance",
          introduction:"Jaggie most recently led investment and the development of AI innovations at Bytedance. Before that, she and three Stanford GSB alumni co-founded a Beijing e-commerce startup dealing with secondhand cars. Chen started her career at P&G as a PM. Her investments range from leading self-driving AI to Craigslist.",
      },
      {
          name:"Tianyu Wu",
          img:"Tianyu_WU.jpeg",   
          job:"Ex-Director, AI Product Development, Byte Dance",
          introduction:"Tianyu believes in the intersection between data and design. Currently working as a Sr Product designer at FB, previously in Spotify and unicorn startups. She has been teaching UX for years and has a mixed background in product and design. She strives to create simple and delightful products to help people solve problems.",
      },
      {
          name:"Jack Duan",
          img:"Jack_Duan.jpeg",   
          job:"Gliding Eagle Inc., Founder and CEO",
          introduction:"Former Sr Technologist (Sun Microsystems) and Big Data Product Manager (Marketing Strategy, Safeway). Dual-cultural in the US and China. BS in CS, Indiana U.; MBA, Berkeley-Haas.",
      },
      {
          name:"Xiaoyin Qu",
          img:"Xiaoyin_Qu.jpeg",  
          job:"CEO, Run The World",
          introduction:"Xiaoyin is CEO of Run The World, a platform that enables live online events. Previously she was a senior Product Manager at Facebook and Instagram, and a bestselling author for Silicon Valley Products, a product management book published in China.",
      },
      {
          name:"Klaus Wang",
          img:"Klaus_Wang.jpeg",  
          job:"Sequoia Capital, VP",
          introduction:"Am working with Sequoia Capital Singapore office covering SEA and Indian market.",
      },
      {
          name:"Peter Qian",
          img:"Peter_Qian.jpeg",  
          job:"covariant.ai, Head of Engineering",
          introduction:"",
      },
      {
          name:"Thomas Reese",
          img:"nobody.jpeg",  
          job:"Run The World",
          introduction:"Thomas led engineering products in Video for Facebook and co-founded FlipWord. He attained a CS Masters from the University of Illinois. He is currently the tech lead of Run the World.",
      },
      {
          name:"Anna Fang",
          img:"Anna_Fang.jpeg",   
          job:"Founding Partner & CEO at ZhenFund",
          introduction:"Anna Fang is CEO and Partner of ZhenFund, an early stage venture capital firm in China focused on consumer Internet and technologies enabled compaines. In her role as CEO, Anna leads Zhenfund's investments, portfolio management, and operations. Anna led ZhenFund's investments in unicorns such as RED (XiaoHongShu), Perfect Diary, Mia, Club Factory, Yitu, Mobvoi, Horizon Robotics, and VIPKID.",
      },
      {
          name:"Eva Woo",
          img:"Eva_Woo.jpeg", 
          job:"China Program Manager",
          introduction:"Eva is the China Program Manager at Stanford PACS. Prior to joining PACS, Eva spent 15 years as a journalist and entrepreneur focused on U.S.-China innovation and impact. A financial journalist by training, she worked as a business and economics reporter at Bloomberg, Caixin, South China Morning Post, and the Washington Post.",
      },
      {
          name:"Big Joe",
          img:"Big_Joe.jpeg", 
          job:"Product Manager?Google",
          introduction:"Joe is an experienced product manager at Google on ads, enterprise software, and video streaming products. He was innovative in measuring ads effectiveness for SMB advertisers and filed a patent in that field. Meanwhile, Joe is a frequent speaker and trainer at top MBA programs such as Wharton at UPenn and mentors many Chinese MBA students. Joe has double bachelor's degrees in CS and English from Huazhong University of Science and Technology, a Master?s degree in CS from Peking University and an MBA from Emory University.",
      },
      {
          name:"Kate Jia",
          img:"Kate_Jia.jpeg",    
          job:"Sr Product Designer  @devicebook Product Lead of Wuhan 2020",
          introduction:"Leading the design for most pioneer IoT products for more than 5 years. Since Jan 2020, Kate has been leading the volunteers in Wuhan2020 product team to craft the most meaningful product for this global public health situations. Graduate from Tsinghua University.",
      },
      {
          name:"Xuan Jiang",
          img:"nobody.jpeg",  
          job:"Co-founder & CTO at Run The World",
          introduction:"",
      },
      {
          name:"Weili Dong",
          img:"nobody.jpeg",  
          job:"CEO, President",
          introduction:"",
      },
      {
          name:"Cindy Cao",
          img:"nobody.jpeg",  
          job:"Didi?Senior Software Engineer",
          introduction:"",
      },
      {
          name:"Wen Han",
          img:"Wen_Han.jpeg", 
          job:"GSR Ventures, Investor",
          introduction:"GSR Ventures ????? was the first and biggest investor in Didi ($56bn), Eleme ($9bn), Qunar ($11bn), Xiaohongshu ($3bn), amongst other transformative companies.",
      },
      {
          name:"Xi Fang",
          img:"nobody.jpeg",  
          job:"Founding Partner of Button",
          introduction:"Dr Xi Fang is Founding Partner of Button",
      },
      {
          name:"Rick Zhuang",
          img:"nobody.jpeg",  
          job:"",
          introduction:"",
      },
      {
          name:"Huan Xu",
          img:"Huan_Xu.jpeg", 
          job:"Serial Entrepreneur",
          introduction:"",
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
