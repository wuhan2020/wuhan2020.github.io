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
          title: 'Respected all engineers who are fighting the Novel Coronavirus (COVID-19) pandemic behind the screen.',
          content: 'Respected all engineers who are fighting the Novel Coronavirus (COVID-19) pandemic behind the screen.',
          dateStr: 'Jan 30th, 2020',
          link: '/en-us/blog/respected-all-engineers.html',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: 'How to Join Wuhan2020 Open Source Project, and Help Wuhan Survive the Coronavirus Crisis',
          content: 'How to Join Wuhan2020 Open Source Project, and Help Wuhan Survive the Coronavirus Crisis ',
          dateStr: 'Feb 1st, 2020',
          link: '/en-us/blog/how-to-join-wuhan2020.html',
        }
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
          text: 'Platform for Wuhan COVID-19 Epidemic Prevention',
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
          title: 'COVID-19 Information Platform',
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
          description: "Wuhan2020 information service website is a comprehensive information service platform for connecting resources related to the epidemic created by programmers and developers. With the focus on the data platform as the core, it can solve the problems such as the shortage of supplies, the confusion of medical information and the inability of people in different places to solve the problems caused by uneven information and opaque information under extreme emergency conditions. Mainly for the government, public welfare organizations, enterprises and institutions, medical institutions, patients, donors and other relevant institutions and groups. With the help of technical tools and digital platforms, developers can make use of the advantages of digital platforms to realize the digitalization of supply and demand, improve information transparency, and enable the supply and demand parties to conduct distributed self-service docking to improve efficiency. Many developers involved in wuhan2020 are doing what they can with their own technologies to cope with this war.",
          link: 'https://wh.opensource-service.cn/',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: '2020 Wuhan Rescue',
          repoLink: 'https://github.com/wuhan2020/data-sync',
          description: 'Our goal is to establish a real-time data service platform with information on hospitals, factories and procurement, allowing anyone with relevant skills to participate in the initiative. We would like to call for anyone who wishes to contribute to the fight against the COVID-19.',
          link: 'https://wuhan2020.kaiyuanshe.cn/',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: 'Wuhan2020 Open Source Community Official Website',
          repoLink: 'https://github.com/wuhan2020/wuhan2020.github.io',
          description: 'Wuhan2020 open source community is a community independently built by developers during the outbreak of COVID-19. The community provides a platform for technical exchange and practice for developers. The community culture of open source is completed in a way of self-organization and collaboration, helping wuhan to carry out self-organization rescue work more effectively and accurately. Since its launch, the community has attracted more than 3,000 volunteers from different countries and made contributions to the resistance against the new coronavirus through the establishment of information system, data analysis and prediction. So far, several projects have been successfully incubated, including "new coronavirus epidemic prevention information collection platform", "2020 assistance to wuhan", "Wuhan2020 open source community website", and "covid-19-nav epidemic information navigation".',
          link: 'https://community.wuhan2020.org.cn/',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: 'COVID-19 Outbreak Navigation Site',
          repoLink: 'https://github.com/wuhan2020/COVID-19-Nav',
          description: 'COVID-19 navigation site provides the public with a convenient and comprehensive information portal with online resources and archival information related to COVID-19.',
          link: 'http://nav.werty.cn',
        },
      ],
    },
  },
  hackathon: {
    barText: 'Hackathon',
    sectionDescription: 'Hack for Wuhan',
    speakerTitle: 'Speakers and judges',
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
    participant: {
      name: 'participant',
      person: 'competitor',
      person_description_1: 'Developers from open source communities, such as Wuhan2020 and other communities on GitHub, have great ideas and prototypes that can solve current challenges and create shared value;',
      person_description_2: 'Volunteers who want to improve their social impact through open source;',
      person_description_3: 'Entrepreneurs who actively respond to the covid-19 challenge and other social emergency crisis.',
      audience: 'audience',
      audience_description_1: 'Individuals and teams who participate in Hackathon',
      audience_description_2: 'Invitees - judges, mentors, professionals (entrepreneurs, social innovators, venture capitalists, etc.)',
      audience_description_3: 'Anyone who is interested in this activity and would like to watch and learn.',
    },
    subject: {
      name: '',
      subject_name: '',
      subject: [],
      form_name: '',
      form: []
    },
    activity: {
      detail: '',
      activityList: []
    },
    holder: {
      main: '',
      co: '',
      support: '',
      resource: '',
      media: '',
      community: ''
    },
    application: {
      application: '',
      waiting: ''
    }
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
        text: 'COVID-19 INFORMATION PLATFORM',
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
    },
    statistics: {
      title: 'Statistics',
      page_pv: 'Total Visits to This Page: ',
      site_pv: 'Total Visits to This Site: ',
      site_uv: 'Total Guests to This Site: '
    }
  }
}
