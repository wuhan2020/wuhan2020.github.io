import React from "react";

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
          title: '武漢給油プロジェクトの新しいプロセスのリリース',
          content: '武漢給油プロジェクトの新しいプロセスのリリース',
          dateStr: 'Jan 29th，2020',
          link: '/ja-jp/blog/wuhan2020-official-announcement.html',
        },
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
          title: '新型冠状病毒防疫信息收集平台',
          repoLink:'https://github.com/wuhan2020/wuhan2020',
          description: '武漢の新しいコロナウイルスの流行予防情報収集プラットフォーム',
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
      }
      ,
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
    }
  }
}
