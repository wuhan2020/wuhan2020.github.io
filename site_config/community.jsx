import React from 'react';

export default {
    'en-us': {
        barText: 'Community',
        events: {
            title: 'Events & News',
            list: [
                {
                    img: '/images/blog/wuhan2020.png',
                    title: 'Wuhan加油项目新流程发布',
                    content: 'Wuhan加油项目新流程发布',
                    dateStr: 'Jan 29th，2020',
                    link: '/en-us/blog/wuhan2020-official-announcement.html',
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
                    link: 'https://wuhan2020.slack.com/archives/CSTGKFRCH',
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
                    content: <span>Join our mailing list.</span>,
                },
                {
                    img: '/images/channels/github_gray.svg',
                    title: 'Issue',
                    content: <span>Submit a <a href="https://github.com/wuhan2020/wuhan2020/issues/new">new issue</a>.</span>,
                },
                {
                    img: '/images/documents.png',
                    title: 'Documents',
                    content: <span>Improve the <a href="https://github.com/wuhan2020/wuhan2020.github.io">documentation</a>.</span>,
                },
                {
                    img: '/images/pullrequest.png',
                    title: 'Pull Request',
                    content: <span>Create a brilliant <a href="https://github.com/wuhan2020/wuhan2020/pulls">pull request</a>.  </span>,
                },
            ],
        },
    },
    'zh-cn': {
        barText: '社区',
        events: {
            title: '事件 & 新闻',
            list: [
                {
                    img: '/images/blog/wuhan2020.png',
                    title: 'Wuhan加油项目新流程发布',
                    content: 'Wuhan加油项目新流程发布',
                    dateStr: 'Jan 29th，2020',
                    link: '/zh-cn/blog/wuhan2020-official-announcement.html',
                },
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
                    link: 'https://wuhan2020.slack.com/archives/CSTGKFRCH',
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
                    content: <span>加入我们的邮件列表。</span>,
                },
                {
                    img: '/images/channels/github_gray.svg',
                    title: '报告问题',
                    content: <span>提交<a href="https://github.com/wuhan2020/wuhan2020/issues/new">新问题</a>。</span>,
                },
                {
                    img: '/images/documents.png',
                    title: '改进文档',
                    content: <span>改进<a href="https://github.com/wuhan2020/wuhan2020.github.io">文档</a>。</span>,
                },
                {
                    img: '/images/pullrequest.png',
                    title: '提交 PR',
                    content: <span>创建一个<a href="https://github.com/wuhan2020/wuhan2020/pulls">PR</a>。</span>,
                },
            ],
        },
    },
};
