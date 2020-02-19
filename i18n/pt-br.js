export default {
  blog: {
    barText: 'Blog',
    postsTitle: 'Todos as postagens',
    list: []
  },
  community: {
    barText: 'Comunidade',
    events: {
      title: 'Eventos e Novidades',
      list: [
        {
          img: '/images/blog/wuhan2020.png',
          title: 'Wuhan2020 Anúncio Oficial',
          content: 'Wuhan2020 Anúncio Oficial',
          dateStr: 'Jan 29th，2020',
          link: '/en-us/blog/wuhan2020-official-announcement.html',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: 'Como participar do projeto de código aberto Wuhan2020 e ajudar Wuhan a sobreviver à crise do coronavírus',
          content: 'Como participar do projeto de código aberto Wuhan2020 e ajudar Wuhan a sobreviver à crise do coronavírus ',
          dateStr: 'Feb 1st, 2020',
          link: '/en-us/blog/how-to-join-wuhan2020.html',
        },
      ],
    },
    contacts: {
      title: 'Fale conosco',
      desc: 'Sinta-se livre para nos contactar através de um destes canais.',
      list: [
        {
          img: '/images/channels/mailinglist.png',
          imgHover: '/images/channels/mailinglist_hover.png',
          title: 'Lista de Email',
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
      title: 'Guia do Contribuidor',
      desc: 'Você sempre pode contribuir com Wuhan2020.',
      list: [
        {
          img: '/images/channels/email_gray.svg',
          title: 'Lista de Email',
          content: 'Entre em nossa lista de email',
          link: ''
        },
        {
          img: '/images/channels/github_gray.svg',
          title: 'Problemas',
          content: 'Submeta um novo problema',
          link: "https://github.com/wuhan2020/wuhan2020/issues/new"
        },
        {
          img: '/images/documents.png',
          title: 'Documentation',
          content: 'Melhore nossa documentação',
          link: "https://github.com/wuhan2020/wuhan2020.github.io"
        },
        {
          img: '/images/pullrequest.png',
          title: 'Pull Request',
          content: 'Cria um brilhante pull request',
          link: "https://github.com/wuhan2020/wuhan2020/pulls"
        },
      ],
    },
  },
  develop: {
    sidemenu: [
      {
        title: 'Lista de Desenvolvedores',
        children: [

          {
            title: 'Desenvolvedores',
            link: '/pt-br/docs/developers/developers_dev.html',
          },
        ],
      },
    ],
    barText: 'Desenvolvedores',
  },
  docs: {
    sidemenu: [
      {
        title: 'Visão Geral',
        children: [
          {
            title: 'O que é Wuahan2020?',
            link: '/pt-br/docs/overview/what-is-wuhan2020.html',
          },
          {
            title: 'FAQ',
            link: '/pt-br/docs/overview/faq.html',
          }
        ],
      },

      {
        title: 'Guia do Site',
        children: [
          {
            title: 'Website Guide',
            link: '/pt-br/docs/user/website-guide.html',
          }
        ],
      },
      {
        title: 'Guia do Desenvolvedor',
        children: [
          {
            title: 'Comece agora',
            link: '/pt-br/docs/dev/quickstart.html',
          },
          {
            title: 'Fluxo do time (Chinese)',
            link: '/zh-cn/docs/dev/team-workflow.html', // pt-br is not ready
          },
          {
            title: 'Guia de coleta de dados',
            link: '/pt-br/docs/dev/information-guide.html',
          },
          {
            title: 'Guia de inscrição lista de Email (Chinese)',
            link: '/zh-cn/docs/dev/mailing-list-guide.html', // pt-br is not ready
          },
          {
            title: 'Diagrama de Arquitetura',
            link: '/pt-br/docs/dev/architecture.html',
          },
          {
            title: 'Guia para Contribuição',
            link: '/pt-br/docs/dev/contributing.html',
          },
          {
            title: 'Github processamento do repositório',
            link: '/pt-br/docs/dev/dev-env-setup.html',
          },
        ],
      },
    ],
    barText: 'Documentation'
  },
  home: {
    brand: {
      brandName: 'O que é a comunidade de wuhan2020 ?',
      briefIntroduction: 'O que estamos fazendo agora é: estabelecer um serviço de dados síncrono e em tempo real para hospitais, fábricas, compras e outras informações, e reunir todos aqueles que desejam contribuir com a campanha antivírus, para que todos com habilidades relevantes possam participar do desenvolvimento de tópicos relacionados e concluí-lo de forma auto-organizada e colaborativa com a cultura da comunidade de código aberto.',
      buttons: [
        {
          text: 'Comece agora',
          link: '/en-us/docs/overview/what-is-wuhan2020.html',
          type: 'primary',
        },
        {
          text: 'Github',
          link: 'https://github.com/wuhan2020/wuhan2020',
          type: 'normal',
        },
        {
          text: 'Plataforma de prevenção de epidêmia para Wuhan 2019-nCoV',
          link: 'https://wh.opensource-service.cn/',
          type: 'normal',
        },
      ],
    },
    features: {
      title: 'Introdução a comunidade',
      list: [
        {
          icon: 'feature-1',
          title: '2019-nCov Information Platform',
          content: 'Um sistema de informação desenvolvido pela comunidade. Facilitar a troca de informações entre provedores de recursos (doadores de recursos médicos, empresas de logística, hotéis, recursos clínicos gratuitos) e aqueles que precisam de ajuda (hospitais, pessoas na área do desastre), para facilitar e ajudar rapidamente as pessoas na área do desastre.',
        },
        {
          icon: 'feature-2',
          title: 'Wuhan2020 Community',
          content: 'Atualmente, existem mais de 3000 voluntários de diferentes países na comunidade Wuhan 2020. Existem programadores, gerentes de produto, designers, gerentes de projeto, analistas de dados, coletores de informações, tradutores, profissionais da mídia, estudantes, etc. Através do estabelecimento de sistemas de informação, análise e previsão de dados, contribui para a resistência do novo coronavírus.',
        }
      ],
    },
  },
  project: {
    barText: 'Projetos',
    sectionDescription: "A comunidade lançou os seguintes projetos de código aberto",
    projects: {
      list: [
        {
          img: '/images/blog/wuhan2020.png',
          title: 'Nova plataforma de coleta de informações sobre prevenção de epidemias de coronavírus',
          description: "Wuhan nova plataforma de coleta de informações sobre prevenção de epidemias de coronavírus",
          link: 'https://wh.opensource-service.cn/',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: '2020 aid Wuhan',
          description: 'Estabelecer um serviço de dados para sincronização em tempo real de hospitais, fábricas, compras e outras informações. Ao mesmo tempo, todos aqueles que desejam contribuir para a luta contra o vírus serão convocados para que todos com habilidades relevantes possam participar do desenvolvimento de tópicos relacionados. Cultura comunitária, concluída de forma auto-organizada e colaborativa.',
          link: 'https://wuhan2020.kaiyuanshe.cn/',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: 'Wuhan2020 site oficial da comunidade de código aberto',
          description: 'Atualmente, o site oficial da comunidade Wuhan2020 pede que voluntários de diferentes países e profissões estabeleçam um sistema de informação de código aberto para contribuir com a luta contra o novo coronavírus.',
          link: 'https://community.wuhan2020.org.cn/',
        },
        {
          img: '/images/blog/wuhan2020.png',
          title: '2019-nCoV-Nav Epidemic Information Navigation',
          description: 'O site de navegação de informações sobre epidemias fornece um portal conveniente e abrangente de informações sobre epidemias para o público e organiza canais de rede que cobrem todos os aspectos das informações sobre epidemias.',
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
          description: 'Ninguém esperaria que o impacto do novo vírus da pneumonia da coroa fosse tão grande que agora se transformou em uma emergência global. Embora a situação não seja otimista, também vimos muitas cenas de coração caloroso: a dedicação altruísta de muitos voluntários, a doação de um grande número de materiais e suprimentos, a rápida construção do Hospital Vulcan Mountain e Thunder God Mountain e o apoio de equipes médicas em muitos lugares. Faça este inverno menos frio.',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: 'Por trás da luta nacional contra a epidemia, o suporte técnico também ocupa uma parte importante. Chen Yueliang, diretor do Ministério de Assuntos Civis, uma vez chamado publicamente, apelando às empresas de Internet para desenvolver aplicativos de bem-estar público, e disse que "desenvolver um software útil de bem-estar público vale mais do que doar um bilhão de yuans".',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: 'Como deixar que mais pessoas participem dela e deixar que a tecnologia da informação e outras forças tenham um papel maior?',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: 'Como voluntários e desenvolvedores da comunidade Wuhan2020, lançaremos outro evento: no final de fevereiro de 2020, o hackathon Hack for Wuhan será lançado e convidamos você a usar suas habilidades para contribuir com a luta contra a epidemia!',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: 'Acreditamos que o hackathon não apenas criará a próxima empresa unicórnio, mas também permitirá que mais pessoas se unam, participem da missão e combatam a crise global de saúde pública.',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: 'Esperamos ansiosamente o surgimento de novos projetos, protótipos, modelos de impacto comercial ou social, e estamos convencidos de que todos os esforços terão um impacto profundo.',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: 'Para tornar sua inspiração mais valiosa, forneceremos suporte técnico profissional e você terá a oportunidade de trabalhar com empresas de Stanford, MIT, Harvard, Andreessen Horowitz, Jinshajiang Venture Capital, Google, Facebook, ByteDance e Equipes de mentores destacados de startups no Vale do Silício, China e Índia.',
        },
        {
          img: '/images/blog/wuhan2020.png',
          description: 'A luta contra a nova epidemia de pneumonia da coroa pelas pessoas em todo o país se tornará um pedaço da história, e a inspiração que emana dele certamente continuará a brilhar. Cada evento será um valioso ideias chamar a atenção, para ajudar a combater a epidemia, ao mesmo tempo, vamos criar mais valor compartilhado para a sociedade.',
        },
      ],
    },
  },
  site: {
    pageMenu: [
      {
        key: 'home', // 用作顶部菜单的选中
        text: 'INÍCIO',
        link: '/pt-br/index.html',
      },
      {
        key: 'docs',
        text: 'DOCUMENTOS',
        link: '/pt-br/docs/overview/what-is-wuhan2020.html',
      },
      {
        key: 'developers',
        text: 'CONTRIBUIDORES',
        link: '/pt-br/docs/developers/developers_dev.html',
      },
      {
        key: 'blog',
        text: 'BLOG',
        link: '/pt-br/blog/index.html',
      },
      {
        key: 'community',
        text: 'COMUNIDADE',
        link: '/pt-br/community/index.html',
      },
      {
        key: 'list',
        text: 'PROJETOS',
        link: '/pt-br/project/index.html',
      },
      {
        key: 'hackathon',
        text: 'HACKATHON',
        link: '/pt-br/hackathon/index.html',
      },
      {
        key: 'mis',
        text: '2019-NCOV INFORMATION PLATFORM',
        link: 'https://wh.opensource-service.cn/',
      },
    ],
    vision: {
      title: 'Visão',
      content: 'Unidos para expulsar a praga!',
    },
    documentation: {
      title: 'Documentação',
      list: [
        {
          text: 'O que é Wuhan2020 ?',
          link: '/pt-br/docs/overview/what-is-wuhan2020.html',
        },
        {
          text: 'Começo rápido',
          link: '/pt-br/docs/dev/quickstart.html',
        },
        {
          text: 'Reporte um problema no documento',
          link: 'https://github.com/wuhan2020/wuhan2020.github.io/issues/new',
        },
        {
          text: 'Edite esta página no Github',
          link: 'https://github.com/wuhan2020/wuhan2020.github.io',
        }
      ],
    },
    resources: {
      title: 'Recursos',
      list: [
        {
          text: 'Blog',
          link: '/pt-br/blog/index.html',
        },
        {
          text: 'Comunidade',
          link: '/pt-br/community/index.html',
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
    }
  }
}
