export default {
  blog: {
    barText: 'ブログ',
    postsTitle: 'すべての投稿',
    list: []
  },
  community: {
    barText: 'コミュニティ',
    events: {
      title: 'イベントとニュース',
      list: [
        {
          img: '/images/blog/wuhan2020.png',
          title: '武漢給油オープンソースのメンバー全員への手紙です',
          content: '武漢給油オープンソースのメンバー全員への手紙です',
          dateStr: '2020年1月28日',
          link: '/ja-jp/blog/to-all-members.html',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: '武漢給油プロジェクトの新しいプロセスのリリース',
          content: '武漢給油プロジェクトの新しいプロセスのリリース',
          dateStr: '2020年1月29日',
          link: '/ja-jp/blog/wuhan2020-official-announcement.html',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: '武漢加油のオープンソースにどのように参加して、砲煙のない戦争に勝つか?',
          content: '武漢加油のオープンソースにどのように参加して、砲煙のない戦争に勝つか?',
          dateStr: '2020年2月1日',
          link: '/ja-jp/blog/how-to-join-wuhan2020.html',
        },
        {
          img: '/images/blog/media/banner.webp',
          title: '武漢加油官宣ルートまとめ',
          content: '武漢加油官宣ルートまとめ',
          dateStr: '2020年2月7日',
          link: '/ia-jp/blog/wuhan2020-media-channel.html',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: '疫学知識——新型コロナウイルス防護指針',
          content: '疫学知識——新型コロナウイルス防護指針',
          dateStr: '2020年2月9日',
          link: '/ia-jp/blog/coronavirus-protection-guide.html',
        }
      ],
    },
    contacts: {
      title: '私たちに話してください',
      desc: '次のチャネルからお気軽にお問い合わせください。',
      list: [
        {
          img: '/images/channels/mailinglist.png',
          imgHover: '/images/channels/mailinglist_hover.png',
          title: 'メーリングリスト',
          link: 'mailto:wuhan2020+subscribe@googlegroups.com'
        },
        {
          img: '/images/channels/slack_gray.svg',
          imgHover: '/images/channels/slack_green.svg',
          title: '@Slack',
          link: 'https://github.com/wuhan2020/wuhan2020/blob/master/README_JP.md#slack%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB%E3%83%8A%E3%83%93%E3%82%B2%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3',
        },
        {
          img: '/images/channels/weixin_official_account.jpeg',
          imgHover: '/images/channels/weixin_official_account.jpeg',
          title: '@WeChat Official Account',
        }
      ],
    },
    contributorGuide: {
      title: '貢献者ガイド',
      desc: 'いつでもWuhan2020に貢献できます。',
      list: [
        {
          img: '/images/channels/email_gray.svg',
          title: 'メーリングリスト',
          content: 'メーリングリストに参加してください。',
          link: ''
        },
        {
          img: '/images/channels/github_gray.svg',
          title: '発行',
          content: '新しい問題を送信する',
          link: "https://github.com/wuhan2020/wuhan2020/issues/new"
        },
        {
          img: '/images/documents.png',
          title: 'ドキュメンテーション',
          content: 'ドキュメントを改善する',
          link: "https://github.com/wuhan2020/wuhan2020.github.io"
        },
        {
          img: '/images/pullrequest.png',
          title: 'プルリクエスト',
          content: '素晴らしいプルリクエストtを作成する',
          link: "https://github.com/wuhan2020/wuhan2020/pulls"
        },
      ],
    },
  },
  develop: {
    sidemenu: [
      {
        title: '開発者リスト',
        children: [

          {
            title: '開発者',
            link: '/ja-jp/docs/developers/developers_dev.html',
          },
        ],
      },
    ],
    barText: '開発者',
  },
  docs: {
    sidemenu: [
      {
        title: '概要',
        children: [
          {
            title: 'Wuahan2020とは?',
            link: '/ja-jp/docs/overview/what-is-wuhan2020.html',
          },
          {
            title: 'FAQ',
            link: '/ja-jp/docs/overview/faq.html',
          }
        ],
      },

      {
        title: 'ユーザードキュメント',
        children: [
          {
            title: 'ウェブサイトガイド',
            link: '/ja-jp/docs/user/website-guide.html',
          }
        ],
      },
      {
        title: '開発者ガイド',
        children: [
          {
            title: 'クイックスタート',
            link: '/ja-jp/docs/dev/quickstart.html',
          },
          {
            title: 'データ収集ガイド',
            link: '/en-us/docs/dev/information-guide.html',
          },
          {
            title: 'アーキテクチャ図',
            link: '/en-us/docs/dev/architecture.html',
          },
          {
            title: '貢献の手引き',
            link: '/ja-jp/docs/dev/contributing.html',
          },
          {
            title: 'Githubリポジトリ処理',
            link: '/en-us/docs/dev/dev-env-setup.html',
          },
        ],
      },
    ],
    barText: 'ドキュメンテーション'
  },
  home: {
    brand: {
      brandName: 'Wuhan 2020コミュニティは何をしていますか？',
      briefIntroduction: '現在私たちがしていることは、（１）2020年初、武漢市に発生した新型コロナウイルス関連肺炎に対し、各病院、ホテル、工場、物流、寄贈、寄付金、予防、治療、活動などを統一収集又は公表、お互いに情報共有、又は有効に社会資源を上手く利用する出来るようにすることを目的とし、（２）関連するスキルを持つすべての人が 関連トピックの開発に参加し、オープンソースのコミュニティ文化と自己組織化された共同の方法でそれを完了します。',
      buttons: [
        {
          text: '始めましょう',
          link: '/ja-jp/docs/overview/what-is-wuhan2020.html',
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
      title: 'コミュニティの紹介',
      list: [
        {
          icon: 'feature-1',
          title: '武漢の新型の冠状ウイルス防疫情報プラットフォーム',
          content: 'コミュニティ開発の情報システムです。資源提供者（医療資源提供者、物流会社、ホテル、義診資源）と協力者（病院、被災地の大衆）との間で情報を交換し、被災者の救助を迅速に行う。',
        },
        {
          icon: 'feature-2',
          title: 'Wuhan 2020コミュニティ',
          content: '現在Wuhan 2020コミュニティには様々な国から3000人以上のボランティアが集まっています。プログラマ、プロダクトマネージャー、デザイナー、プロジェクトマネージャー、データアナリスト、情報収集者、翻訳、メディア関係者、学生などがいます。情報システムの構築、データ解析予測などにより、新型冠状ウイルスへの抵抗に貢献します。',
        }
      ],
    },
  },
  project: {
    barText: 'オンラインのウェブサイト',
    sectionDescription: '',
    projects: {
      list: [
        {
          img: '/images/blog/wuhan2020.png',
          title: '新型コロナウイルス防疫情報収集プラットフォーム',
          repoLink:'https://github.com/wuhan2020/wuhan2020',
          description: 'Wuhan2020信息服务官网，是由程序员和开发者创建的疫情相关的资源对接综合类信息服务平台。以关注数据平台层面为核心，解决极端应急条件下，消息不对等和信息不透明导致的物资供应不足、就诊信息混乱、异地人员无法解决外宿等问题。主要面向政府、公益组织、企事业单位、医疗机构、患者、捐助者等相关机构和人群。开发者们均可以借助技术工具和数字平台，利用数字平台优势，实现供需数字化、提升信息透明度，让各供需方进行分布式自助对接，提升效率。参与wuhan2020 众多开发者们，用自己擅长的技术，做着力所能及的事情，共同应对这场战争。',
          link: 'https://wh.opensource-service.cn/',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: '2020武漢',
          repoLink: 'https://github.com/wuhan2020/data-sync',
          description: '病院、工場、購買などの情報をリアルタイムに同期させたデータサービスを構築し、同時に、このアンチウイルス戦に貢献したいすべての人を召集し、関連する技能を持っている人はすべて関連するテーマの開発に参与することができ、オープンソースのコミュニティ文化で、自己組織的な協力方式で完成した。',
          link: 'https://wuhan2020.kaiyuanshe.cn/',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: 'Wuhan2020オープンソース',
          repoLink: 'https://github.com/wuhan2020/wuhan2020.github.io',
          description: 'Wuhan2020开源社区是在新冠肺炎疫情期间由开发者自主搭建的社区，社区为开发者提供技术交流、实践的平台，用开源的社区文化，以自组织协作的方式完成，帮助武汉自组织救援工作更有效、更准确地开展。社区上线至今吸引了自不同国家的3000多志愿者，通过建立信息系统、数据分析预测等为抵抗新型冠状病毒做贡献；目前已成功孵化“新型冠状病毒防疫信息收集平台”、2020援助武汉”、“Wuhan2020开源社区官网”、“COVID-19-Nav 疫情信息导航”等多个项目。',
          link: 'https://community.wuhan2020.org.cn/',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: '2019−nCoV−Nav疫学情報ナビゲーション',
          repoLink: 'https://github.com/wuhan2020/COVID-19-Nav',
          description: '疫学情報ナビゲーションサイトは公衆に便利で全面的な疫学情報の入り口を提供し、疫学情報の各方面をカバーするネットワーク通路を整理した。',
          link: 'http://nav.werty.cn',
        },
      ],
    },
  },
  hackathon: {
    barText: 'ハッカソン',
    speakerTitle: '',
    speakerlist: [],
    sectionDescription: 'ハッカソンがあなたを待っています',
    concepts: {
      list: [
        {
          img: '/images/blog/wuhan2020.png',
          description: '新しいクラウン肺炎ウイルスの影響が非常に大きいため、今や世界的な緊急事態に発展しているとは誰も予想していなかったでしょう。状況は楽観的ではありませんが、多くの温かい情景が上演されています：多くのボランティアの献身的な献身、大量の材料と物資の寄付、バルカン山とサンダーゴッドマウンテン病院の迅速な建設、多くの場所での医療チームの支援この冬の寒さを減らします。',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: '全国的な流行との戦いの背後では、技術サポートも重要な部分を占めています。民務省の長官であるChen Yueliangは、かつて公に声をかけ、インターネット企業に厚生アプリケーションの開発を呼びかけ、「有用な厚生ソフトウェアの開発は10億元以上の寄付に値する」と語った。',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: 'より多くの人々がそれに参加し、情報技術や他の力がより大きな役割を果たすようにする方法は？',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: 'Wuhan2020コミュニティのボランティアおよび開発者として、別のイベントを開始します：2020年2月末に、Hack for Wuhanハッカソンが開始されます。流行との戦いに貢献するためにあなたのスキルを使用することをお勧めします。',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: 'ハッカソンは次のユニコーン企業を作るだけでなく、より多くの人々が団結し、ミッションに参加し、世界の公衆衛生危機と一緒に戦えるようになると信じています。',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: '新しいデザイン、プロトタイプ、ビジネスまたは社会的影響モデルの出現を楽しみにしており、すべての努力が大きな影響を与えると確信しています。',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: 'あなたのインスピレーションをより価値あるものにするために、専門的な技術サポートを提供し、スタンフォード、MIT、ハーバード、アンドリーセンホロウィッツ、金沙江ベンチャーキャピタル、Google、Facebook、ByteDance、シリコンバレー、中国、インドの新興企業の優秀なメンターチーム。',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: '全国の人々による新しいクラウン肺炎の流行との戦いは歴史の一部となり、そこから発せられるインスピレーションは確実に輝き続けます。このイベントでの貴重なアイデアはすべて評価されます。',
        },
      ],
    },
    participant: {
      name: '',
      person: '',
      person_description_1: '',
      person_description_2: '',
      person_description_3: '',
      audience: '',
      audience_description_1: '',
      audience_description_2: '',
      audience_description_3: '',
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
        text: 'ホーム',
        link: '/ja-jp/index.html',
      },
      {
        key: 'docs',
        text: 'DOCS',
        link: '/ja-jp/docs/overview/what-is-wuhan2020.html',
      },
      {
        key: 'developers',
        text: '寄稿者',
        link: '/ja-jp/docs/developers/developers_dev.html',
      },
      {
        key: 'blog',
        text: 'ブログ',
        link: '/ja-jp/blog/index.html',
      },
      {
        key: 'community',
        text: 'コミュニティ',
        link: '/ja-jp/community/index.html',
      },
      {
        key: 'list',
        text: '製品',
        link: '/ja-jp/project/index.html',
      },
      {
        key: 'hackathon',
        text: 'ハッカソン',
        link: '/ja-jp/hackathon/index.html',
      },
      {
        key: 'mis',
        text: '情報収集プラットフォーム',
        link: 'https://wh.opensource-service.cn/',
      },
    ],
    vision: {
      title: 'ビジョン',
      content: 'Unite as one and drive out the plague! ',
    },
    documentation: {
      title: 'ドキュメンテーション',
      list: [
        {
          text: '武漢2020とは何ですか？',
          link: '/ja-jp/docs/overview/what-is-wuhan2020.html',
        },
        {
          text: 'クイックスタート',
          link: '/ja-jp/docs/dev/quickstart.html',
        },
        {
          text: 'ドキュメントの問題を報告する',
          link: 'https://github.com/wuhan2020/wuhan2020.github.io/issues/new',
        },
        {
          text: 'GitHubでこのページを編集',
          link: 'https://github.com/wuhan2020/wuhan2020.github.io',
        }
      ],
    },
    resources: {
      title: '資源',
      list: [
        {
          text: 'ブログ',
          link: '/ja-jp/blog/index.html',
        },
        {
          text: 'コミュニティ',
          link: '/ja-jp/community/index.html',
        },
      ],
    },
    copyright: 'Copyright © 2020 Wuahan2020',
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
