// 全局的一些配置
export default {
    rootPath: '',
    port: 8080,
    domain: 'wuhan2020.github.io', // 站点部署域名，无需协议和path等
    // defaultSearch: 'baidu', // 默认搜索引擎，baidu或者google
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
            }
        ],
        vision: {
            title: 'Vision',
            content: 'Unite as one and drive out the plague! ',
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
        ],
        vision: {
            title: '愿景',
            content: '众志成城，驱除瘟疫！',
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
};
