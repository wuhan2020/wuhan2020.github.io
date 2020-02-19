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
            title: 'Guida alla piattaforma di prevenzione epidemica covid-19 (Inglese)',
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
          title: 'Piattaforma per la raccolta di informazioni sulla vaccinazione del nuovo coronavirus',
          repoLink:'https://github.com/wuhan2020/wuhan2020',
          description: "Wuhan2020信息服务官网，是由程序员和开发者创建的疫情相关的资源对接综合类信息服务平台。以关注数据平台层面为核心，解决极端应急条件下，消息不对等和信息不透明导致的物资供应不足、就诊信息混乱、异地人员无法解决外宿等问题。主要面向政府、公益组织、企事业单位、医疗机构、患者、捐助者等相关机构和人群。开发者们均可以借助技术工具和数字平台，利用数字平台优势，实现供需数字化、提升信息透明度，让各供需方进行分布式自助对接，提升效率。参与wuhan2020 众多开发者们，用自己擅长的技术，做着力所能及的事情，共同应对这场战争。",
          link: 'https://wh.opensource-service.cn/',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: '2020 per aiutare wuhan',
          repoLink: 'https://github.com/wuhan2020/data-sync',
          description: 'Creare un servizio di dati che sincronizzi le informazioni in tempo reale negli ospedali, nelle fabbriche, negli acquisti, ecc. Riunire tutti coloro che desiderano contribuire a questa campagna contro il virus, in modo che tutti coloro che hanno le capacità necessarie possano partecipare allo sviluppo di un tema importante, utilizzando una cultura della comunità open source, da realizzare in modo collaborativo.',
          link: 'https://wuhan2020.kaiyuanshe.cn/',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: 'Wuhan2020, un ufficiale della comunità open-source',
          repoLink: 'https://github.com/wuhan2020/wuhan2020.github.io',
          description: 'Wuhan2020开源社区是在新冠肺炎疫情期间由开发者自主搭建的社区，社区为开发者提供技术交流、实践的平台，用开源的社区文化，以自组织协作的方式完成，帮助武汉自组织救援工作更有效、更准确地开展。社区上线至今吸引了自不同国家的3000多志愿者，通过建立信息系统、数据分析预测等为抵抗新型冠状病毒做贡献；目前已成功孵化“新型冠状病毒防疫信息收集平台”、2020援助武汉”、“Wuhan2020开源社区官网”、“COVID-19-Nav 疫情信息导航”等多个项目。',
          link: 'https://community.wuhan2020.org.cn/',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: 'COVID-19-Nav Navigazione delle informazioni sull’epidemia',
          repoLink: 'https://github.com/wuhan2020/COVID-19-Nav',
          description: 'Il sito web di informazione sull’epidemia offre al pubblico un accesso facile e completo alle informazioni sull’epidemia e raccoglie i canali della rete che coprono tutti gli aspetti dell’informazione sull’epidemia.',
          link: 'http://nav.werty.cn',
        },
      ],
    },
  },
  hackathon: {
    barText: 'Hackathon',
    sectionDescription: 'Hack for Wuhan',
    concepts: {
      list: [
        {
          img: '/images/blog/wuhan2020.png',
          description: 'Nessuno si sarebbe aspettato che l\'impatto del nuovo virus della polmonite corona fosse così grande che ora si è sviluppato in un\'emergenza globale. Sebbene la situazione non sia ottimista, abbiamo anche messo in scena molte scene di buon cuore: la dedizione disinteressata di molti volontari, la donazione di un gran numero di materiali e forniture, la rapida costruzione di Vulcan Mountain e Raytheon Mountain Hospital e il supporto di equipe mediche in molti luoghi. Rendi questo inverno meno freddo.',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: 'Dietro la lotta nazionale contro l\'epidemia, anche il supporto tecnico occupa una parte importante. Chen Yueliang, direttore del Ministero degli affari civili, una volta chiamato pubblicamente, ha invitato le aziende di Internet a sviluppare applicazioni di assistenza pubblica e ha affermato che "sviluppare un utile software di assistenza pubblica vale più di una donazione di un miliardo di yuan".',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: 'Come consentire a più persone di parteciparvi e lasciare che la tecnologia dell\'informazione e altre forze abbiano un ruolo maggiore?',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: 'Come volontari e sviluppatori della comunità Wuhan2020, lanceremo un altro evento: alla fine di febbraio 2020, verrà lanciato l\'hackathon di Hack for Wuhan e ti invitiamo a utilizzare le tue abilità per contribuire alla lotta contro l\'epidemia!',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: 'Riteniamo che l\'hackathon non solo creerà la prossima impresa di unicorno, ma consentirà anche a più persone di unirsi, unirsi alla missione e combattere insieme la crisi globale della salute pubblica.',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: 'Non vediamo l\'ora che emergano nuovi progetti, prototipi, modelli di impatto sociale o aziendale e siamo convinti che tutti gli sforzi avranno un impatto profondo.',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: 'Per rendere la tua ispirazione più preziosa, forniremo supporto tecnico professionale e avrai l\'opportunità di lavorare con aziende di Stanford, MIT, Harvard, Andreessen Horowitz, Jinshajiang Venture Capital, Google, Facebook, ByteDance e Squadre di eccellenti mentori di startup nella Silicon Valley, in Cina e in India.',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: 'La lotta contro la nuova epidemia di polmonite da corona da parte delle persone in tutto il paese diventerà un pezzo di storia e l\'ispirazione che emana da essa continuerà sicuramente a brillare. Ogni preziosa idea dell\'evento sarà valutata e, mentre contribuiamo a combattere l\'epidemia, creiamo un valore più condiviso per la società.',
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
      },
      {
        key: 'hackathon',
        text: 'HACKATHON',
        link: '/it-it/hackathon/index.html',
      },
      {
        key: 'mis',
        text: 'PIATTAFORMA INFORMATIVA COVID-19',
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
