export default {
  blog: {
    barText: 'Blog',
    postsTitle: 'Tutti i post',
    list: []
  },
  community: {
    barText: 'Community',
    events: {
      title: 'Eventi e notizie',
      list: [
        {
          img: '/images/blog/wuhan2020.png',
          title: 'Rilascio nuovo processo di progetto di rifornimento di carburante Wuhan',
          content: 'Rilascio nuovo processo di progetto di rifornimento di carburante Wuhan',
          dateStr: 'Jan 29th，2020',
          link: '/it-it/blog/wuhan2020-official-announcement.html',
        },
      ],
    },
    contacts: {
      title: 'Parla con noi',
      desc: 'Non esitate a contattarci tramite il seguente canale.',
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
          link: 'https://github.com/wuhan2020/wuhan2020/blob/master/README_IT.md#navigazione-del-canale-slack',
        },
        {
          img: '/images/channels/weixin_official_account.jpeg',
          imgHover: '/images/channels/weixin_official_account.jpeg',
          title: '@WeChat Official Account',
        }
      ],
    },
    contributorGuide: {
      title: 'Guida per i collaboratori',
      desc: 'YPuoi sempre contribuire a Wuhan2020.',
      list: [
        {
          img: '/images/channels/email_gray.svg',
          title: 'Mailing List',
          content: 'Unisciti alla nostra mailing list.',
          link: ''
        },
        {
          img: '/images/channels/github_gray.svg',
          title: 'Problema',
          content: 'Invia una nuovo issue',
          link: "https://github.com/wuhan2020/wuhan2020/issues/new"
        },
        {
          img: '/images/documents.png',
          title: 'Documentazione',
          content: 'Migliora la documentazione',
          link: "https://github.com/wuhan2020/wuhan2020.github.io"
        },
        {
          img: '/images/pullrequest.png',
          title: 'Richiesta pull',
          content: 'Crea una brillante richiesta pull',
          link: "https://github.com/wuhan2020/wuhan2020/pulls"
        },
      ],
    },
  },
  develop: {
    sidemenu: [
      {
        title: 'Elenco degli sviluppatori',
        children: [

          {
            title: 'Sviluppatori',
            link: '/it-it/docs/developers/developers_dev.html',
          },
        ],
      },
    ],
    barText: 'Sviluppatori',
  },
  docs: {
    sidemenu: [
      {
        title: 'Panoramica',
        children: [
          {
            title: "Di cosa si occupa Wuahan2020? ",
            link: '/it-it/docs/overview/what-is-wuhan2020.html',
          },
          {
            title: 'FAQ (Inglese)',
            link: '/it-it/docs/overview/faq.html',
          }
        ],
      },

      {
        title: 'Doc. Utente',
        children: [
          {
            title: 'Guida alla piattaforma di prevenzione epidemica 2019-nCoV (Inglese)',
            link: '/en-us/docs/user/website-guide.html',
          }
        ],
      },
      {
        title: 'Guida per gli sviluppatori',
        children: [
          {
            title: 'Inizia subito',
            link: '/it-it/docs/dev/quickstart.html',
          },
          {
            title: 'Flusso di lavoro del team (Cinese)',
            link: '/zh-cn/docs/dev/team-workflow.html',
          },
          {
            title: 'Guida alla raccolta dei dati (Inglese)',
            link: '/en-us/docs/dev/information-guide.html',
          },
          {
            title: 'Guida all\'abbonamento della mailing list (Cinese)',
            link: '/zh-cn/docs/dev/mailing-list-guide.html',
          },
          {
            title: "Diagramma dell'architettura (Inglese)",
            link: '/en-us/docs/dev/architecture.html',
          },
          {
            title: 'Guida alla partecipazione (Inglese)',
            link: '/en-us/docs/dev/contributing.html',
          },
          {
            title: 'Gestione del repository su GitHub (Inglese)',
            link: '/en-us/docs/dev/dev-env-setup.html',
          },
        ],
      },
    ],
    barText: 'Documentazione'
  },
  home: {
    brand: {
      brandName: 'Cosa fa la community Wuhan2020?',
      briefIntroduction: "Ciò che stiamo facendo è creare un servizio informazioni, aggiornato in tempo reale, relativo ad ospedali e supporto medico, attività produttive, servizi di approvvigionamento e molto altro. Allo stesso tempo, stiamo reclutando tutti coloro che desiderano dare un contributo alla campagna contro il coronavirus, in modo che tutte le persone che possiedono le adeguate competenze possano contribuire al lavoro di sviluppo nell'ambito delle tematiche ad esse pertinenti e quindi, in accordo con la cultura della comunità Open Source, al raggiungimento del successo attraverso un approccio di cooperazione autogestita.",
      buttons: [
        {
          text: 'Iniziare',
          link: '/it-it/docs/overview/what-is-wuhan2020.html',
          type: 'primary',
        },
        {
          text: 'GitHub',
          link: 'https://github.com/wuhan2020/wuhan2020',
          type: 'normal',
        },
      ],
    },
    features: {
      title: 'Presentazione della community',
      list: [
        {
          icon: 'feature-1',
          title: 'Piattaforma informativa per la prevenzione epidemica del nuovo coronavirus',
          content: 'Sviluppo comunitario di un sistema informativo. Facilitare lo scambio di informazioni tra fornitori di risorse (donatori di risorse mediche e fornitori di supporto medico gratuito, società di servizi logistici, strutture alberghiere e di ristorazione, ecc.) e coloro che hanno bisogno di aiuto (ospedali ed altre strutture sanitarie, persone localizzate nelle zone colpite, ecc), in modo da facilitare ed accelerare il sostegno della popolazione nelle zone colpite.',
        },
        {
          icon: 'feature-2',
          title: 'Community Wuhan2020',
          content: "Ad oggi la community Wuhan2020 ha accolto più di 3000 volontari provenienti da diversi paesi. Ne fanno parte programmatori, product manager, progettisti, project manager, analisti dati, raccoglitori di informazioni, traduttori, operatori di comunicazione, studenti, ecc. Attraverso l'istituzione di un sistema informativo, l'analisi e la predizione dati, la community contribuisce alla lotta contro il nuovo coronavirus.",
        }
      ],
    },
  },
  project: {
    barText: 'I Nostri Risultati',
    sectionDescription: '',
    projects: {
      list: [
        {
          img: '/images/blog/wuhan2020.png',
          title: '新型冠状病毒防疫信息收集平台',
          repoLink:'https://github.com/wuhan2020/wuhan2020',
          description: "Nuova piattaforma di raccolta di informazioni sulla prevenzione dell'epidemia di coronavirus di Wuhan",
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
        text: 'HOME',
        link: '/it-it/index.html',
      },
      {
        key: 'docs',
        text: 'DOCUMENTAZIONE',
        link: '/it-it/docs/overview/what-is-wuhan2020.html',
      },
      {
        key: 'developers',
        text: 'SOSTENITORI',
        link: '/it-it/docs/developers/developers_dev.html',
      },
      {
        key: 'blog',
        text: 'BLOG',
        link: '/it-it/blog/index.html',
      },
      {
        key: 'community',
        text: 'COMMUNITY',
        link: '/it-it/community/index.html',
      },
      {
        key: 'list',
        text: 'RISULTATI',
        link: '/it-it/project/index.html',
      }
      ,
      {
        key: 'mis',
        text: 'PIATTAFORMA INFORMATIVA 2019-NCOV',
        link: 'https://wh.opensource-service.cn/',
      },
    ],
    vision: {
      title: 'Il Nostro Motto',
      content: 'Tutti insieme uniti, ce la faremo !',
    },
    documentation: {
      title: 'Documentazione',
      list: [
        {
          text: "Di cosa si occupa Wuhan2020?",
          link: '/it-it/docs/overview/what-is-wuhan2020.html',
        },
        {
          text: 'Inizia subito',
          link: '/it-it/docs/dev/quickstart.html',
        },
        {
          text: 'Segnala un problema riguardo il documento',
          link: 'https://github.com/wuhan2020/wuhan2020.github.io/issues/new',
        },
        {
          text: 'Modifica questa pagina su GitHub',
          link: 'https://github.com/wuhan2020/wuhan2020.github.io',
        }
      ],
    },
    resources: {
      title: 'Risorse',
      list: [
        {
          text: 'Blog',
          link: '/it-it/blog/index.html',
        },
        {
          text: 'Community',
          link: '/it-it/community/index.html',
        },
      ],
    },
    copyright: 'Copyright © 2020 Wuahan2020',
    projects: {
      title: '社区项目',
      list: [
        {
          text: '新型冠状病毒防疫信息收集平台 ',
          link: 'https://wh.opensource-service.cn/',
          target: '_blank'
        },
        {
          text: '新冠战役信息平台',
          link: 'https://wuhan2020.kaiyuanshe.cn/',
          target: '_blank'
        },
        {
          text: '疫情信息导航',
          link: 'http://nav.werty.cn/',
          target: '_blank'
        }
      ]
    },
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
