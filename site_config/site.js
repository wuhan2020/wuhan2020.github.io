﻿// 全局的一些配置
export default {
    rootPath: '',
    port: 8080,
    domain: 'wuhan2020.github.io', // 站点部署域名，无需协议和path等
    // defaultSearch: 'baidu', // 默认搜索引擎，baidu或者google
    langList: [
      { value: 'zh-cn', text: '简体中文' },
      { value: 'en-us', text: 'English' },
      { value: 'ja-jp', text: '日本語' },
      { value: 'it-it', text: 'Italiano' },
      { value: 'fr-fr', text: 'French' },
    ], // 支持的语言列表
    defaultLanguage: 'zh-cn',
    'en-us': {
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
                key: 'download',
                text: 'PRODUCT',
                link: '/en-us/blog/download.html',
            },
            {
                key: 'mis',
                text: '2019-NCOV INFORMATION PLATFORM',
                link: 'https://wuhan2020.kaiyuanshe.cn',
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
        copyright: 'Copyright © 2020 Wuahan2020',
    },
    'it-it': {
        pageMenu: [
            {
                key: 'home', // 用作顶部菜单的选中
                text: 'CASA',
                link: '/it-it/index.html',
            },
            {
                key: 'docs',
                text: 'DOCS',
                link: '/it-it/docs/overview/what-is-wuhan2020.html',
            },
            {
                key: 'developers',
                text: 'CONTRIBUTORI',
                link: '/it-it/docs/developers/developers_dev.html',
            },
            {
                key: 'blog',
                text: 'BLOG',
                link: '/it-it/blog/index.html',
            },
            {
                key: 'community',
                text: 'COMUNITÀ',
                link: '/it-it/community/index.html',
            },
            {
                key: 'download',
                text: 'PRODOTTO',
                link: '/it-it/blog/download.html',
            }
            ,
            {
              key: 'mis',
              text: 'PIATTAFORMA INFORMATIVA 2019-NCOV',
              link: 'https://wuhan2020.kaiyuanshe.cn',
            },
        ],
        vision: {
            title: 'Visione',
            content: 'Unisciti come uno e scaccia la peste!',
        },
        documentation: {
            title: 'Documentazione',
            list: [
                {
                    text: "Che cos'è Wuhan2020?",
                    link: '/it-it/docs/overview/what-is-wuhan2020.html',
                },
                {
                    text: 'Avvio veloce',
                    link: '/it-it/docs/dev/quickstart.html',
                },
                {
                    text: 'Segnala un problema con il documento',
                    link: 'https://github.com/wuhan2020/wuhan2020.github.io/issues/new',
                },
                {
                    text: 'Modifica questa pagina su GitHub',
                    link: 'https://github.com/wuhan2020/wuhan2020.github.io',
                }
            ],
        },
        resources: {
            title: 'risorse',
            list: [
                {
                    text: 'Blog',
                    link: '/it-it/blog/index.html',
                },
                {
                    text: 'Comunità',
                    link: '/it-it/community/index.html',
                },
            ],
        },
        copyright: 'Copyright © 2020 Wuahan2020',
    },
    'ja-jp': {
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
                key: 'download',
                text: '製品',
                link: '/ja-jp/blog/download.html',
            }
            ,
            {
              key: 'mis',
              text: '情報収集プラットフォーム',
              link: 'https://wuhan2020.kaiyuanshe.cn',
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
    },
    'zh-cn': {
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
                key: 'download',
                text: '产品',
                link: '/zh-cn/blog/download.html',
            },
            ,
            {
              key: 'mis',
              text: '新型冠状病毒防疫信息平台',
              link: 'https://wuhan2020.kaiyuanshe.cn',
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
    },
    'fr-fr': {
        pageMenu: [
            {
                key: 'home',
                text: '首页',
                link: '/fr-fr/index.html',
            },
            {
                key: 'docs',
                text: '文档',
                link: '/fr-fr/docs/overview/what-is-wuhan2020.html',
            },
            {
                key: 'developers',
                text: '贡献者',
                link: '/fr-fr/docs/developers/developers_dev.html',
            },
            {
                key: 'blog',
                text: '博客',
                link: '/fr-fr/blog/index.html',
            },
            {
                key: 'community',
                text: '社区',
                link: '/fr-fr/community/index.html',
            },
            {
                key: 'download',
                text: '产品',
                link: '/fr-fr/blog/download.html',
            },
            ,
            {
              key: 'mis',
              text: '新型冠状病毒防疫信息平台',
              link: 'https://wuhan2020.kaiyuanshe.cn',
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
                    link: '/fr-fr/docs/overview/what-is-wuhan2020.html',
                },
                {
                    text: '快速开始',
                    link: '/fr-fr/docs/dev/quickstart.html',
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
                    link: '/fr-fr/blog/index.html',
                },
                {
                    text: '社区',
                    link: '/fr-fr/community/index.html',
                },
            ],
        },
        copyright: 'Copyright © 2020 Wuhan2020',
    },
};
