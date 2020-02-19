export default {
  blog: {
    barText: 'Blog',
    postsTitle: 'Tous les articles',
    list: []
  },
  community: {
    barText: 'La communauté',
    events: {
      title: 'Événements et actualités',
      list: [
        {
          img: '/images/blog/wuhan2020.png',
          title: 'Lettre à tous les membres de la communauté open source WUHAN 2020',
          content: 'Lettre à tous les membres de la communauté open source WUHAN 2020',
          dateStr: '28 janvier 2020',
          link: '/fr-fr/blog/to-all-members.html',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: 'Nouvelle procédure pour le projet Wuhan refuelling',
          content: 'Nouvelle procédure pour le projet Wuhan refuelling',
          dateStr: '29 janvier 2020',
          link: '/fr-fr/blog/wuhan2020-official-announcement.html',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: 'Comment participer au projet open source Wuhan2020 et gagner cette guerre sans fumée?',
          content: 'Comment participer au projet open source Wuhan2020 et gagner cette guerre sans fumée?',
          dateStr: '1er février 2020',
          link: '/fr-fr/blog/how-to-join-wuhan2020.html',
        },
        {
          img: '/images/blog/media/banner.webp',
          title: 'Résumé des canaux de communication officiels de WUHAN2020',
          content: 'Résumé des canaux de communication officiels de WUHAN2020',
          dateStr: '7 février 2020',
          link: '/fr-fr/blog/wuhan2020-media-channel.html',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: 'Connaissance des épidémies — lignes directrices pour la protection contre les nouveaux coronavirus',
          content: 'Connaissance des épidémies — lignes directrices pour la protection contre les nouveaux coronavirus',
          dateStr: '9 février 2020',
          link: '/fr-fr/blog/coronavirus-protection-guide.html',
        }
      ],
    },
    contacts: {
      title: 'contactez-nous',
      desc: 'Un problème nécessitant un retour d’information? Veuillez nous contacter par le biais de la messagerie suivante.',
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
        }
      ],
    },
    contributorGuide: {
      title: 'Lignes directrices pour les contributions',
      desc: 'Les contributions à Wuhan2020 sont les bienvenues!',
      list: [
        {
          img: '/images/channels/email_gray.svg',
          title: 'Liste de diffusion',
          content: 'Rejoignez notre liste de diffusion.',
          link: ''
        },
        {
          img: '/images/channels/github_gray.svg',
          title: 'Problèmes de notification',
          content: 'Soumettre de nouvelles questions',
          link: "https://github.com/wuhan2020/wuhan2020/issues/new"
        },
        {
          img: '/images/documents.png',
          title: 'Amélioration de la documentation',
          content: 'Amélioration de la documentation',
          link: "https://github.com/wuhan2020/wuhan2020.github.io"
        },
        {
          img: '/images/pullrequest.png',
          title: 'Présentation PR',
          content: 'Création d’un PR',
          link: "https://github.com/wuhan2020/wuhan2020/pulls"
        },
      ],
    },
  },
  develop: {
    sidemenu: [
      {
        title: 'Liste de développeurs',
        children: [

          {
            title: 'Développeurs',
            link: '/fr-fr/docs/developers/developers_dev.html',
          },
        ],
      },
    ],
    barText: 'Développeurs',
  },
  docs: {
    sidemenu: [
      {
        title: 'Aperçu',
        children: [
          {
            title: 'Qu\'est-ce que Wuhan2020 ?',
            link: '/fr-fr/docs/overview/what-is-wuhan2020.html',
          },
          {
            title: 'FAQ',
            link: '/fr-fr/docs/overview/faq.html',
          }
        ],
      },

      {
        title: 'Document d\'utilisateur',
        children: [
          {
            title: 'Guide de site web',
            link: '/fr-fr/docs/user/website-guide.html',
          }
        ],
      },
      {
        title: 'Guide de développeur',
        children: [
          {
            title: 'Démarrage Rapide',
            link: '/fr-fr/docs/dev/quickstart.html',
          },
          {
            title: 'Guide de collecte de données',
            link: '/fr-fr/docs/dev/information-guide.html',
          },
          {
            title: 'Guide d\'inscription à la liste de diffusion',
            link: '/fr-fr/docs/dev/mailing-list-guide.html',
          },
          {
            title: 'Diagramme d\'architecture',
            link: '/fr-fr/docs/dev/architecture.html',
          },
          {
            title: 'Guide de contribution',
            link: '/fr-fr/docs/dev/contributing.html',
          },
          {
            title: 'Github dépôt procédures',
            link: '/fr-fr/docs/dev/dev-env-setup.html',
          },
        ],
      },
    ],
    barText: 'Documentation'
  },
  home: {
    brand: {
      brandName: 'Qu\'est-ce que Wuhan2020 ?',
      briefIntroduction: 'Ce que nous faisons: mettre en place un service de données en temps réel et synchrone pour les hôpitaux, les usines et les achats, etc., et réunir tous ceux qui veulent contribuer à la campagne anti-virus, afin que toutes les personnes compétentes puissent participer dans le développement de sujets connexes, et le compléter de manière auto-organisée et collaborative avec la culture communautaire open source.',
      buttons: [
        {
          text: 'Démarrage Rapide',
          link: '/fr-fr/docs/overview/what-is-wuhan2020.html',
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
      title: 'Présentation de la communauté',
      list: [
        {
          icon: 'fonctionnalité-1',
          text: 'Plateforme d\'informations anti-épidémiques COVID-19',
          content: 'Un système d\'information développé par la communauté. Faciliter l\'échange d\'informations entre les fournisseurs de ressources (donateurs de ressources médicales, sociétés de services logistiques, hôtels et fournisseurs de soutien médical gratuit, etc.) et ceux qui ont besoin d\'aide (hôpitaux et autres établissements de santé, patients, etc.), afin d\'accélérer le soutien de la population dans les zones touchées.',
        },
        {
          icon: 'fonctionnalité-2',
          title: 'Communauté Wuhan2020',
          content: 'À ce jour, la communauté Wuhan2020 a accueilli plus de 3000 bénévoles de différents pays. Cela inclut les développeurs, les chefs de produit, les web designers, les chefs de projet, les analystes de données, les collecteurs d\'informations, les traducteurs, les gens des médias, les étudiants, etc. Mise en place d\'un système d\'information, l\'analyse des données, la communauté contribue à la lutte contre le coronavirus.',
        }
      ],
    },
  },
  project: {
    barText: 'Projets',
    sectionDescription: 'La communauté a déjà contribué aux projets open-source suivants',
    projects: {
      list: [
        {
          img: '/images/blog/wuhan2020.png',

          title: "Plateforme de collecte d'informations anti-épidémiques COVID-19",
          repoLink:'https://github.com/wuhan2020/wuhan2020',
          description: "Wuhan2020信息服务官网，是由程序员和开发者创建的疫情相关的资源对接综合类信息服务平台。以关注数据平台层面为核心，解决极端应急条件下，消息不对等和信息不透明导致的物资供应不足、就诊信息混乱、异地人员无法解决外宿等问题。主要面向政府、公益组织、企事业单位、医疗机构、患者、捐助者等相关机构和人群。开发者们均可以借助技术工具和数字平台，利用数字平台优势，实现供需数字化、提升信息透明度，让各供需方进行分布式自助对接，提升效率。参与wuhan2020 众多开发者们，用自己擅长的技术，做着力所能及的事情，共同应对这场战争。",
          link: 'https://wh.opensource-service.cn/',
        },
        {
          img: '/images/blog/wuhan2020.png',

          title: '2020 Aider Wuhan',
          repoLink: 'https://github.com/wuhan2020/data-sync',
          description: 'Créer un service de données synchronisées en temps réel sur les informations des hôpitaux, des usines, des achats etc, en même temps de rassembler tous ceux qui souhaitent contribuer à cette lutte contre le virus. Afin que tous ceux qui ont les compétences nécessaire puissent participer au dévéloppement sur les sujets concernés, avec une culture communautaire open-source et en collaboration auto-organisée.',
          link: 'https://wuhan2020.kaiyuanshe.cn/',
        },
        {
          img: '/images/blog/wuhan2020.png',

          title: 'Wuhan2020 Site officiel de la communauté',
          repoLink: 'https://github.com/wuhan2020/wuhan2020.github.io',
          description: "Wuhan2020开源社区是在新冠肺炎疫情期间由开发者自主搭建的社区，社区为开发者提供技术交流、实践的平台，用开源的社区文化，以自组织协作的方式完成，帮助武汉自组织救援工作更有效、更准确地开展。社区上线至今吸引了自不同国家的3000多志愿者，通过建立信息系统、数据分析预测等为抵抗新型冠状病毒做贡献；目前已成功孵化“新型冠状病毒防疫信息收集平台”、2020援助武汉”、“Wuhan2020开源社区官网”、“COVID-19-Nav 疫情信息导航”等多个项目。",
          link: 'https://community.wuhan2020.org.cn/',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: "COVID-19-Nav Navigation sur les informations d'épidémie",
          repoLink: 'https://github.com/wuhan2020/COVID-19-Nav',
          description: "Le site web de navigation des informations d'épidémie offre au public un accès facile et complet aux informations sur l'épidémie, en collationnant les informations de différents aspects sur l'épidémie.",
          link: 'http://nav.werty.cn',
        },
      ],
    },
  },
  site: {
    pageMenu: [
      {
        key: 'home',
        text: 'Accueil',
        link: '/fr-fr/index.html',
      },
      {
        key: 'docs',
        text: 'DOCS',
        link: '/fr-fr/docs/overview/what-is-wuhan2020.html',
      },
      {
        key: 'developers',
        text: 'CONTRIBUTEURS',
        link: '/fr-fr/docs/developers/developers_dev.html',
      },
      {
        key: 'blog',
        text: 'BLOG',
        link: '/fr-fr/blog/index.html',
      },
      {
        key: 'community',
        text: 'COMMUNAUTÉ',
        link: '/fr-fr/community/index.html',
      },
      {
        key: 'list',
        text: 'PRODUIT',
        link: '/fr-fr/project/index.html',
      },
      {
        key: 'mis',
        text: 'Plateforme d\'informations covid-19',
        link: 'https://wh.opensource-service.cn/',
      },
    ],
    vision: {
      title: 'Notre devise',
      content: 'Tous unis, nous le ferons !',
    },
    documentation: {
      title: 'Documentation',
      list: [
        {
          text: 'Qu\'est-ce que Wuhan2020 ?',
          link: '/fr-fr/docs/overview/what-is-wuhan2020.html',
        },
        {
          text: 'Démarrage Rapide',
          link: '/fr-fr/docs/dev/quickstart.html',
        },
        {
          text: 'Signaler un problème avec le document',
          link: 'https://github.com/wuhan2020/wuhan2020.github.io/issues/new',
        },
        {
          text: 'Modifier cette page sur GitHub',
          link: 'https://github.com/wuhan2020/wuhan2020.github.io',
        }
      ],
    },
    resources: {
      title: 'Ressources',
      list: [
        {
          text: 'Blog',
          link: '/fr-fr/blog/index.html',
        },
        {
          text: 'Communauté',
          link: '/fr-fr/community/index.html',
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
