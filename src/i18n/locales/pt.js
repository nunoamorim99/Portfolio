export default {
  nav: {
    home: 'Início',
    projects: 'Projetos',
    courses: 'Cursos',
    personal: 'Pessoal',
  },
  lang: {
    en: 'English',
    pt: 'Português',
  },
  hero: {
    role: 'Gestor de Produto',
    shortBio:
      'Construo produtos que importam - combinando experiência técnica com empatia pelo utilizador para criar experiências digitais significativas.',
    viewProjects: 'Ver Projetos',
    downloadCv: 'Descarregar CV',
    bgWord: 'PRODUTO',
  },
  stats: {
    products: 'Produtos e módulos lançados',
    aiProjects: 'Projetos pessoais com IA',
    roles: 'Funções em 2 anos',
    certificates: 'Certificados profissionais',
    courses: 'Cursos concluídos',
  },
  caseStudy: {
    back: 'Voltar aos projetos',
    visit: 'Visitar movize.pt',
    movize: {
      label: 'Caso de Estudo',
      title: 'Movize',
      tagline:
        'Centralizar os transportes urbanos de Portugal - e dar aos operadores as ferramentas para se digitalizarem.',
      role: 'Gestor de Produto · Product Owner',
      period: '2024 – Presente',
      overview:
        'O Movize começou como uma app para reunir todos os operadores de transporte portugueses num só lugar. Tornou-se algo maior - um ecossistema completo que permite aos operadores digitalizar e gerir as suas próprias redes. Liderei o produto desde o primeiro wireframe até uma mudança estratégica para uma plataforma multi-módulo.',
      problem: {
        kicker: '01 — O problema',
        title: 'Sem um único lugar para os transportes em Portugal',
        body: 'Portugal não tinha uma app nativa que reunisse todos os operadores de transporte urbano. Os passageiros recorriam a fontes dispersas - ou ficavam sem informação - só para planear uma viagem entre operadores e modos.',
      },
      v1: {
        kicker: '02 — Começar pelo passageiro',
        title: 'Uma app para todos os operadores',
        body: 'Lançámos o Movize como uma app móvel para centralizar a informação de transportes, para que os passageiros vissem rotas, paragens e horários de todos os operadores num só lugar. O plano era simples: estabelecer parcerias com operadores e integrar os seus dados GTFS.',
      },
      pivot: {
        kicker: '03 — A mudança',
        title: 'O problema não era a app - era que os operadores não tinham forma de se digitalizar.',
        body: 'Integrar os operadores revelou um problema mais profundo. A maioria dos operadores portugueses, sobretudo os mais pequenos, não tinha qualquer ferramenta digital - e não tinha como pagar a grandes empresas para digitalizar os seus dados e chegar aos passageiros. A verdadeira oportunidade não era uma app melhor. Era dar aos operadores uma forma de se digitalizarem. Assim, o Movize cresceu de uma app para um ecossistema.',
      },
      ecosystem: {
        kicker: '04 — De uma app a um ecossistema',
        title: 'Movize Connect',
        body: 'O Movize Connect é a plataforma de back-office por trás da app. Permite a operadores, promotores de eventos e proprietários de infraestrutura gerir os seus próprios dados - e enviá-los diretamente para os passageiros. Construímo-lo módulo a módulo.',
        inDev: 'Em desenvolvimento',
      },
      modules: {
        gtfs: {
          name: 'Gestão de GTFS',
          body: 'Os operadores criam e digitalizam os seus dados de transporte - construindo feeds GTFS de raiz, para que até redes não digitalizadas possam entrar online.',
        },
        networkMap: {
          name: 'Mapa de Rede',
          body: 'Desenhar e manter o mapa de rede que os passageiros veem na app.',
        },
        news: {
          name: 'Notícias',
          body: 'Os operadores publicam atualizações de serviço e notícias diretamente para os passageiros do Movize.',
        },
        events: {
          name: 'Eventos',
          body: 'Os promotores de eventos publicam eventos juntamente com as rotas e autocarros dedicados que os servem - transformando transporte pontual em informação acessível.',
        },
        sensors: {
          name: 'Mobiliário Urbano & Sensores',
          body: 'Os proprietários de infraestrutura localizam e gerem ativos físicos - abrigos, paragens, sensores instalados - e veem os dados que esses sensores recolhem.',
        },
        drivers: {
          name: 'Motoristas',
          body: 'Gestão de frota e motoristas para operadores, com uma app de motorista dedicada.',
        },
      },
      decisionsTitle: '05 — Decisões-chave',
      decisions: {
        feedback: {
          title: 'Integrar feedback no produto',
          body: 'Ligámos passageiros, operadores e administradores diretamente, para que os problemas reais surjam depressa e sejam respondidos - e não se percam num backlog.',
        },
        ecosystem: {
          title: 'Apostar no ecossistema, não só na app',
          body: 'Capacitar os pequenos operadores para se digitalizarem foi a chave tanto para a cobertura como para um modelo de negócio sustentável.',
        },
        events: {
          title: 'Lançar Eventos como aposta de crescimento',
          body: 'Os eventos já tinham transporte dedicado, mas não tinham onde o anunciar. O módulo gera utilização real e mantém a app cheia de conteúdo atual.',
        },
        portal: {
          title: 'Priorizar o portal dos operadores',
          body: 'Concentrámos esforço no Movize Connect - o back-office é onde o valor do ecossistema, e o seu caminho para a receita, realmente está.',
        },
      },
      validation: {
        kicker: '06 — Validação',
        quote: 'Exatamente o que Portugal precisa.',
        body: 'O Movize está no ar e em desenvolvimento ativo, com forte validação qualitativa de passageiros e operadores à medida que novos módulos são lançados.',
      },
      ctaTitle: 'Ver ao vivo',
      ctaBody: 'O Movize está em desenvolvimento ativo e já disponível.',
    },
    astroHop: {
      label: 'Caso de Estudo',
      title: 'Astro Hop',
      tagline:
        'Um jogo de plataformas 2D feito de raiz - criado para explorar o modelo Fable 5 e lançar algo real com IA.',
      badgeContext: 'Projeto solo',
      badgeAi: 'Construído com Fable 5',
      overview:
        'O Astro Hop é um jogo de plataformas 2D ao estilo retro do Mario - jogável em computador e telemóvel a partir do mesmo URL. Construí-o de raiz como forma prática de explorar o modelo Fable 5: em parceria com IA para desenhar os sistemas, escrever a lógica do jogo e lançar uma experiência completa e polida - e para aprofundar o meu próprio conhecimento de engenharia pelo caminho.',
      approach: {
        kicker: '01 — Abordagem',
        title: 'Construir com IA, para aprender a construir',
        body: 'Em vez de apenas ler sobre um novo modelo, lancei com ele. O Astro Hop foi uma exploração deliberada do Fable 5 - usando-o como parceiro de desenvolvimento para arquitetar o jogo, resolver a matemática da física arcade e depurar casos extremos reais. O objetivo era duplo: produzir algo genuinamente jogável e polido, e construir um entendimento sólido e em primeira mão de como construir eficazmente com IA.',
      },
      highlightsKicker: '02 — Por dentro',
      highlightsTitle: 'O que está lá dentro',
      features: {
        physics: {
          title: 'Física arcade e sensação de jogo',
          body: 'Aceleração, atrito e altura de salto variável que responde ao tempo que se mantém o botão premido - afinado para a sensação, não para o realismo.',
        },
        powerups: {
          title: 'Máquina de estados de power-ups',
          body: 'Uma máquina de estados limpa conduz a progressão clássica pequeno → grande → fogo e as suas transições.',
        },
        world: {
          title: 'Um mundo vivo',
          body: 'Inimigos que se eliminam ao saltar em cima, tijolos destrutíveis e áreas secretas escondidas para os jogadores descobrirem.',
        },
        loop: {
          title: 'Ciclo de jogo completo',
          body: 'Ecrã inicial, vidas, cronómetro, pausa, fim de jogo e um recorde que persiste entre sessões.',
        },
      },
      audio: {
        kicker: 'Som',
        statement:
          'Todos os efeitos sonoros e músicas são sintetizados ao vivo com a Web Audio API - zero ficheiros de áudio.',
      },
      platform: {
        kicker: '03 — Corre em qualquer lado',
        title: 'Um URL, computador e telemóvel',
        body: 'Os níveis são grelhas de texto orientadas a dados, por isso criar novos é trivial. O jogo é totalmente responsivo, com controlos multitoque no ecrã para telemóvel, e cada push faz deploy automático para o GitHub Pages via GitHub Actions.',
      },
      techTitle: 'Construído com',
      ctaTitle: 'Joga',
      ctaBody: 'O Astro Hop corre no teu browser - computador ou telemóvel, o mesmo link.',
    },
    nibble: {
      label: 'Caso de Estudo',
      title: 'Nibble',
      tagline:
        'O clássico jogo da cobra, redesenhado - uma segunda exploração profunda do Fable 5, com novos modos de jogo, uma economia e um leaderboard.',
      badgeContext: 'Projeto solo',
      badgeAi: 'Construído com Fable 5',
      overview:
        'O Nibble é um remake moderno e instalável do clássico jogo da cobra da era Nokia. Depois do Astro Hop, quis uma segunda ronda, mais ambiciosa, com o modelo Fable 5 - desta vez não apenas a recriar um clássico, mas a redesenhá-lo: um novo modo de jogo por níveis, modificadores de desafio combináveis, uma economia de cosméticos e aquilo que mais queria aprender - como funciona realmente um leaderboard, das pontuações locais a um backend global.',
      approach: {
        kicker: '01 — Abordagem',
        title: 'Segunda ronda com o Fable 5 - desta vez com uma arquitetura',
        body: 'Se o Astro Hop foi sobre lançar um jogo completo com IA, o Nibble foi sobre disciplina de engenharia. O jogo foi construído com o Claude Code usando oito subagentes especializados, cada um responsável por uma camada da arquitetura - engine, renderer, temas, níveis, persistência - com um invariante: o engine não depende de nada acima dele. O resultado é um núcleo puro e determinístico, totalmente testado com Vitest, com rendering, temas e armazenamento em camadas limpas por cima.',
      },
      highlightsKicker: '02 — Por dentro',
      highlightsTitle: 'O que está lá dentro',
      features: {
        modes: {
          title: 'Duas formas de jogar',
          body: 'O modo Clássico persegue o recorde infinito; o modo Níveis adiciona objetivos progressivos de maçãs, obstáculos e novas mecânicas nível a nível.',
        },
        challenges: {
          title: 'Modificadores de desafio combináveis',
          body: 'Velocidade a dobrar, paredes atravessáveis ou letais, labirintos de obstáculos - flags de dificuldade que os jogadores combinam livremente, em vez de presets fixos.',
        },
        economy: {
          title: 'Moedas, temas & skins',
          body: 'As partidas rendem moedas que desbloqueiam temas visuais e skins da cobra - do pixel monocromático ao néon futurista.',
        },
        leaderboard: {
          title: 'Leaderboard local-first',
          body: 'As pontuações persistem em IndexedDB e sincronizam com um leaderboard global opcional no Supabase - construído precisamente para aprender a lógica dos sistemas de ranking.',
        },
      },
      architecture: {
        kicker: 'Arquitetura',
        statement:
          'Um engine de jogo determinístico que não depende de nada acima dele - lógica pura, totalmente testada, com rendering e armazenamento como camadas substituíveis.',
      },
      platform: {
        kicker: '03 — Instala em qualquer lado',
        title: 'Uma PWA que funciona totalmente offline',
        body: 'O Nibble instala-se no ecrã inicial em desktop, Android e iOS, e depois de instalado corre totalmente offline. Cada push para main corre os testes, faz o build e o deploy automático para o GitHub Pages.',
      },
      techTitle: 'Construído com',
      ctaTitle: 'Joga',
      ctaBody: 'O Nibble corre no teu browser - instala-o e continua a funcionar offline.',
    },
    skills: {
      label: 'Caso de Estudo',
      title: 'Skills de Claude Code',
      tagline:
        'Três skills personalizadas que transformam o Claude Code no meu toolkit de gestão de produto - construídas para otimizar o meu dia-a-dia como PM.',
      badgeContext: 'Projeto pessoal',
      badgeAi: 'Construído com Claude Code',
      overview:
        'Como Product Manager, passo os dias a capturar ideias, gerir sprints e manter os stakeholders informados. Construí três skills de Claude Code - Idea Ledger, Agile Ledger e Cartographer - para trazer esse trabalho para o mesmo lugar onde vive o código. Para além do ganho de produtividade, o objetivo era aprender: desenhar skills de ponta a ponta levou-me a fundo em como o Claude funciona, como se desenham fluxos de agentes e como a IA pode realmente mudar o toolkit de um PM.',
      why: {
        kicker: '01 — Porquê construir as minhas ferramentas',
        title: 'O trabalho de PM vive em demasiadas abas',
        body: 'A gestão de produto está espalhada por ferramentas - um board aqui, documentos ali, o código noutro lugar. Cada skill ataca uma parte dessa fragmentação: capturar e versionar ideias, gerir um processo ágil completo e gerar documentação para stakeholders - tudo em Markdown simples que vive ao lado do código, sem ferramentas externas e sem lock-in.',
      },
      items: {
        'idea-ledger': {
          name: 'Idea Ledger',
          tagline: 'Nunca perder uma ideia - nem a sua história',
          body: 'Uma skill de gestão de produto leve e sem base de dados, construída inteiramente sobre dois ficheiros Markdown. As ideias são capturadas com um único comando sem quebrar o fluxo de trabalho, triadas para um backlog e versionadas à medida que são entregues - sob uma regra: nada é apagado. Foi a prova de conceito de que Markdown simples aguenta um fluxo de produto real.',
          highlights: {
            capture: 'Captura instantânea com /idea, segura a meio de outra tarefa, com deteção de duplicados na triagem.',
            versioning: 'Histórico de versões por ideia, mais versionamento semântico real para releases.',
            audit: 'Bloqueio por dependências e um comando /ledger-check que audita a consistência do próprio ledger.',
          },
        },
        'agile-ledger': {
          name: 'Agile Ledger',
          tagline: 'Todo o fluxo de trabalho de PM em Markdown simples',
          body: 'O sucessor em grande escala do Idea Ledger: oito ficheiros Markdown geridos e mais de 30 slash commands que cobrem todo o ciclo de vida do produto - ideias, épicos, user stories, bugs, planeamento e execução de sprints, e releases. Os itens descartados guardam o motivo, o trabalho reconstruído a partir do git é sempre marcado para confirmação humana, e tudo permanece legível em qualquer editor.',
          highlights: {
            lifecycle: 'O fluxo completo, de /idea e /bug a /triage, /plan-sprint, /start-us, /review e /release.',
            traceability: 'Os IDs das user stories funcionam como chaves de ligação entre branches, commits e PRs.',
            workspace: 'Um orquestrador opcional que descobre, sincroniza e propõe alterações em múltiplos repositórios.',
          },
        },
        cartographer: {
          name: 'Cartographer',
          tagline: 'Documentação que os stakeholders realmente leem',
          body: 'Uma skill que analisa os repositórios de uma organização e gera documentação para stakeholders adaptada à audiência - o que cada produto faz e porque importa, não como foi construído. Um passo /assess propõe um mapa de produtos para confirmação; /generate produz os documentos em Markdown e PDF polido; /doc-status sinaliza documentação desatualizada e repositórios sem cobertura.',
          highlights: {
            assess: 'Descoberta read-only que classifica repositórios, mapeia produtos e reporta maturidade antes de escrever uma palavra.',
            output: 'Uma visão geral do ecossistema mais documentos por produto, em Markdown e PDF pronto a imprimir com tipografia incluída.',
            audiences: 'Outputs separados para marketing e gestão, com âmbito e idioma configuráveis.',
          },
        },
      },
      learned: {
        kicker: '05 — O que me ensinou',
        statement:
          'Construir as minhas próprias ferramentas transformou a IA de algo sobre o qual lia em algo com que faço engenharia - e estas skills gerem hoje o meu dia-a-dia como PM.',
      },
      ctaTitle: 'Explora as skills',
      ctaBody:
        'As três são open source sob licença MIT - instala-as no Claude Code e torna-as tuas.',
    },
  },
  about: {
    title: 'Sobre Mim',
    bio: 'De engenheiro a Product Manager - a trabalhar no cruzamento entre estratégia, design e código. Gosto de desafios onde enquadro o problema, esboço o primeiro wireframe e moldo ideias em produtos que as equipas conseguem construir e os utilizadores querem usar. Acompanho de perto a evolução da IA e, à medida que aprofundo conhecimento na área, cresce o interesse em construir produtos onde a IA potencia ou agrega valor real.',
  },
  interests: {
    title: 'Interesses Profissionais',
    subtitle: 'O que motiva o meu trabalho todos os dias',
    items: {
      productInnovation: {
        title: 'Inovação e Descoberta de Produto',
        description:
          'Apaixonado por identificar necessidades não satisfeitas dos utilizadores e transformá-las em oportunidades de produto com impacto - desde a pesquisa inicial e ideação até à definição detalhada de funcionalidades e validação de mercado.',
      },
      uxAndDesign: {
        title: 'UX & Design de Interfaces',
        description:
          'Fazer a ponte entre o pensamento de produto e a execução de design - desde wireframes a mockups de alta fidelidade - com uma formação em engenharia front-end que permite uma colaboração profunda com equipas de design e desenvolvimento.',
      },
      agileDelivery: {
        title: 'Entrega Ágil & Alinhamento de Equipas',
        description:
          'Comprometido em manter as equipas focadas e informadas através de práticas Agile estruturadas, documentação clara e comunicação cross-funcional forte - garantindo que cada sprint faz o produto avançar com propósito.',
      },
      aiAndEmergingTech: {
        title: 'IA & Tecnologias Emergentes',
        description:
          'A explorar ativamente como ferramentas de IA e tecnologias emergentes podem melhorar os fluxos de trabalho de produto e desbloquear novo valor para os utilizadores - combinando experimentação prática com uma mentalidade crítica para separar impacto real de hype.',
      },
    },
  },
  education: {
    title: 'Educação',
    items: {
      msc: {
        degree: 'Mestrado em Engenharia e Gestão de Sistemas de Informação',
        institution: 'Universidade do Minho',
        description:
          'Foco em design de sistemas de informação, gestão de projetos e a interseção entre tecnologia e estratégia de negócio.',
      },
    },
  },
  experience: {
    title: 'Experiência Profissional',
    subtitle: 'O meu percurso profissional e crescimento na carreira',
    companies: {
      'foco-criativo': {
        name: 'Foco Criativo',
        location: 'Póvoa de Lanhoso, Braga, Portugal · Híbrido',
      },
      'cmpl-lifeguard': {
        name: 'Câmara Municipal da Póvoa de Lanhoso',
        location: 'Póvoa de Lanhoso, Braga, Portugal · Presencial',
      },
      'diver-lifeguard': {
        name: 'Diver Lanhoso',
        location: 'Póvoa de Lanhoso, Braga, Portugal · Presencial',
      },
      zara: {
        name: 'Zara',
        location: 'Braga, Portugal · Presencial',
      },
    },
    positions: {
      'product-manager': {
        title: 'Gestor de Produto',
        type: 'Tempo inteiro',
        description:
          'Atualmente, trabalho como Gestor de Produto no Movize, onde lidero a estratégia de produto e supervisiono o seu desenvolvimento e crescimento contínuos. As minhas responsabilidades incluem definir a visão do produto, identificar oportunidades de melhoria e alinhar equipas cross-funcionais em torno de objetivos estratégicos. Colaboro com stakeholders, designers e equipas de engenharia para moldar o roadmap do produto, priorizar iniciativas e garantir que o produto evolui de acordo com as necessidades do mercado e os insights dos utilizadores. O meu foco é entregar funcionalidades de alto valor, melhorar a experiência do utilizador e aproveitar dados e pesquisa para orientar decisões de produto e maximizar o impacto do Movize.',
      },
      'product-owner': {
        title: 'Product Owner',
        type: 'Tempo inteiro',
        description:
          'Como Product Owner, tornei-me responsável pelo desenvolvimento e evolução do Movize, gerindo o backlog do produto e garantindo o alinhamento entre objetivos de negócio, necessidades dos utilizadores e implementação técnica. A minha função envolveu definir requisitos de produto, priorizar funcionalidades e traduzir objetivos estratégicos em histórias de utilizador claras para a equipa de desenvolvimento. Trabalhei em estreita colaboração com designers, programadores e stakeholders para garantir que o produto entregasse valor, mantendo sempre um forte foco na experiência do utilizador e na qualidade do produto. Através da gestão do backlog, planeamento de sprints e ciclos contínuos de feedback, ajudei a orientar o roadmap do produto e assegurei que a equipa entregasse funcionalidades significativas e impactantes para o Movize.',
      },
      'software-engineer': {
        title: 'Engenheiro de Software',
        type: 'Tempo inteiro',
        description:
          'Durante este período, trabalhei principalmente como Engenheiro de Software Front-End, focado no desenvolvimento de funcionalidades voltadas para o utilizador e na melhoria da experiência de utilização dos produtos digitais da empresa. As minhas responsabilidades incluíram implementar interfaces responsivas, desenvolver componentes reutilizáveis e colaborar de perto com equipas de design e produto para traduzir wireframes e protótipos em aplicações funcionais. Trabalhei principalmente com tecnologias front-end modernas como JavaScript, React Native, HTML5 e CSS, garantindo desempenho, usabilidade e manutenibilidade. Adicionalmente, participei em processos de desenvolvimento Agile, contribuindo para o planeamento de sprints, revisões de código e melhorias contínuas na interface e design de interação do produto.',
      },
      intern: {
        title: 'Estagiário',
        type: 'Estágio',
        description:
          'O principal objetivo deste estágio foi desenvolver a minha dissertação para o Mestrado em Engenharia e Gestão de Sistemas de Informação. A dissertação, intitulada "Design e otimização de processos logísticos e de produção", consistiu num levantamento dos processos logísticos e de produção da empresa Foco Criativo e na sua análise. O objetivo foi desenvolver uma proposta de otimização para ajudar a empresa a tornar-se mais eficiente.',
      },
      'lifeguard-cmpl': {
        title: 'Nadador Salvador',
        type: 'Sazonal',
        description:
          'Trabalhei como Nadador Salvador na Praia Fluvial de Verim e nas Piscinas Municipais da Póvoa de Lanhoso, garantindo a segurança e o bem-estar dos visitantes em ambientes aquáticos. As minhas responsabilidades incluíram monitorizar zonas de banho, fazer cumprir regulamentos de segurança e responder rapidamente a emergências quando necessário. Para além da vigilância e prontidão para resgate, prestei assistência e orientação aos visitantes, ajudando a manter um ambiente seguro, organizado e acolhedor. Esta função exigiu forte responsabilidade, atenção, comunicação e trabalho em equipa, especialmente durante os períodos de verão com grande afluência de visitantes.',
      },
      'lifeguard-diver': {
        title: 'Nadador Salvador',
        type: 'Sazonal',
        description:
          'No Diver Lanhoso, trabalhei como nadador salvador responsável por supervisionar atividades aquáticas e garantir a segurança dos participantes em ambientes recreativos. A minha função envolveu monitorização contínua das zonas aquáticas, prevenção de situações de risco e intervenção quando necessário para assegurar condições seguras para todos os visitantes. Trabalhar num ambiente exterior dinâmico exigiu tomada de decisão rápida, consciência situacional e comunicação clara com visitantes e membros da equipa para manter uma experiência segura e agradável.',
      },
      cashier: {
        title: 'Assistente de Caixa',
        type: 'Contrato',
        description:
          'Trabalhei como Assistente de Caixa na Zara, onde fui responsável pela gestão de transações de clientes e por proporcionar uma experiência positiva em loja. A minha função envolveu processar pagamentos, assistir clientes durante o checkout e garantir precisão e eficiência em todas as transações. Para além das funções de caixa, apoiei a equipa da loja na manutenção de um ambiente de retalho organizado e na prestação de um serviço ao cliente de elevada qualidade. Esta experiência reforçou as minhas competências de comunicação, resolução de problemas e relacionamento com clientes, num ambiente de retalho dinâmico.',
      },
    },
  },
  cv: {
    title: 'Quer o panorama completo?',
    subtitle:
      'Descarregue o meu CV para uma visão completa da minha experiência e qualificações.',
    button: 'Descarregar CV (PDF)',
  },
  skills: {
    title: 'Competências & Idiomas',
    subtitle: 'Competências-chave e capacidades de comunicação',
    topTitle: 'Principais Competências',
    otherTitle: 'Outras Competências',
    langTitle: 'Idiomas',
    top: {
      productStrategy: 'Estratégia de Produto & Roadmapping',
      agileScrum: 'Agile / Scrum',
      uxResearch: 'Pesquisa de UX & Descoberta de Utilizadores',
      wireframingPrototyping: 'Wireframing & Prototipagem',
      frontendDevelopment: 'Desenvolvimento Front-end',
      stakeholderCommunication: 'Comunicação com Stakeholders',
      aiTools: 'Ferramentas de IA & Prompt Engineering',
    },
    other: {
      dataAnalysis: 'Análise de Dados',
      informationSystems: 'Sistemas de Informação',
      crossFunctionalLeadership: 'Liderança Cross-funcional',
      featurePrioritisation: 'Priorização de Funcionalidades',
      marketResearch: 'Pesquisa de Mercado',
      productDocumentation: 'Documentação de Produto',
      okrsKpis: 'OKRs & KPIs',
      sprintPlanning: 'Planeamento de Sprints',
      competitiveAnalysis: 'Análise Competitiva',
    },
    languages: {
      portuguese: { name: 'Português', level: 'Nativo' },
      english: { name: 'Inglês', level: 'Fluente' },
    },
  },
  projects: {
    title: 'Projetos',
    subtitle:
      'Uma seleção de projetos e produtos nos quais estive envolvido em diferentes funções e que ajudei a desenvolver e lançar',
    platformsLabel: 'Disponível em',
    visitSite: 'Visitar site',
    readMore: 'Ler mais',
    readLess: 'Ler menos',
    readCaseStudy: 'Ler o caso de estudo do Movize',
    viewCaseStudy: 'Ler o caso de estudo',
    ecosystemTitle: 'O ecossistema Movize',
    riderApps: 'Apps para passageiros',
    ecosystemWebsite: 'Website do ecossistema',
    operatorPlatform: 'Plataforma de operadores',
    modules: 'Módulos',
    selectedWork: 'Trabalho selecionado',
    selectedWorkSubtitle:
      'Produtos e projetos que desenhei, lancei e construí - de uma plataforma nacional de transportes a jogos e ferramentas de IA feitos de raiz.',
    movizeKicker: 'Ecossistema de transportes',
    gameKicker: 'Jogo',
    skillsKicker: 'Ferramentas de IA',
    skillsTitle: 'Skills de Claude Code',
    skillsIntro:
      'Três skills personalizadas que construí para otimizar o meu dia-a-dia como PM - e para aprender a fazer engenharia com IA, não apenas a usá-la. Captura de ideias, um processo ágil completo e documentação para stakeholders, tudo em Markdown simples dentro do Claude Code.',
    imageSoon: 'Imagens brevemente',
    builtWith: 'Construído com',
    playLive: 'Jogar agora',
    viewSource: 'Código',
    platforms: {
      android: 'Android',
      ios: 'iOS',
      desktop: 'Desktop',
      tablet: 'Tablet',
      phone: 'Telemóvel',
    },
    items: {
      'astro-hop': {
        title: 'Astro Hop',
        tagline:
          'Plataformas 2D ao estilo retro do Mario, jogável em computador e telemóvel a partir do mesmo URL.',
        description:
          'Um jogo de plataformas 2D feito de raiz, com física arcade e verdadeira sensação de jogo - aceleração, altura de salto variável - uma máquina de estados de power-ups (pequeno → grande → fogo), inimigos que se eliminam ao saltar em cima, tijolos destrutíveis, áreas secretas e um ciclo de jogo completo: ecrã inicial, vidas, cronómetro, pausa, fim de jogo e recorde persistente. Todos os efeitos sonoros e a música são sintetizados ao vivo com a Web Audio API (zero ficheiros de áudio), os níveis são grelhas de texto orientadas a dados, e é responsivo com controlos multitoque para telemóvel, com deploy automático via CI.',
      },
      'mobile-app': {
        title: 'Movize Mobile App',
        role: 'Gestor de Produto/Product Owner/Engenheiro de Software',
        description:
          'O Movize é uma aplicação móvel concebida para centralizar toda a informação de transportes públicos. O objetivo era desenvolver uma aplicação capaz de ajudar os utilizadores de transportes públicos a aceder a toda a informação que precisam para se deslocarem por todo o país, permitindo a ligação entre vários modos de transporte público e operadores. Fui responsável pelo desenvolvimento e evolução do Movize, gerindo o backlog do produto e garantindo o alinhamento entre objetivos de negócio, necessidades dos utilizadores e implementação técnica. A minha função envolveu definir requisitos de produto, priorizar funcionalidades e traduzir objetivos estratégicos em histórias de utilizador claras para a equipa de desenvolvimento. Trabalhei em estreita colaboração com designers, programadores e stakeholders para garantir que o produto entregasse valor, mantendo sempre um forte foco na experiência do utilizador e na qualidade do produto. Através da gestão do backlog, planeamento de sprints e ciclos contínuos de feedback, ajudei a orientar o roadmap do produto e assegurei que a equipa entregasse funcionalidades significativas e impactantes para o Movize.',
      },
      'web-app': {
        title: 'Movize Web App',
        role: 'Gestor de Produto/Product Owner/Engenheiro de Software',
        description:
          'O Movize Web é a versão para browser do Movize, levando a experiência principal de transportes públicos a desktop, tablet e browsers móveis. O objetivo foi alargar o alcance do Movize aos utilizadores que preferem o web - oferecendo acesso rápido a rotas, paragens e planeamento de viagens entre operadores e modos - mantendo intencionalmente um conjunto de funcionalidades mais focado do que a aplicação nativa. Liderei a estratégia e execução do produto: definindo o âmbito da experiência web, decidindo que funcionalidades expor e quais reservar para a aplicação móvel, e garantindo que a interface responsiva funcionasse bem em diferentes tamanhos de ecrã. Em estreita colaboração com designers e programadores, moldei o roadmap para partilhar o suficiente do valor do Movize para atrair utilizadores sem competir com a profundidade da experiência nativa.',
      },
      nibble: {
        title: 'Nibble',
        tagline:
          'O clássico jogo da cobra, redesenhado - novos modos de jogo, desbloqueáveis e um leaderboard, instalável como PWA.',
        description:
          'Um remake moderno do clássico jogo da cobra da era Nokia, reconstruído para ir além de uma simples cópia: ao lado do modo Clássico há um modo Níveis com objetivos progressivos e obstáculos, mais modificadores de desafio combináveis - velocidade a dobrar, paredes atravessáveis ou letais, labirintos de obstáculos. Uma economia de moedas desbloqueia temas e skins da cobra, e um leaderboard local-first (com pontuações globais opcionais via Supabase) ensinou-me a lógica dos sistemas de ranking. Por baixo, é um engine de jogo determinístico e totalmente testado, desacoplado do renderer em Canvas - construído com o Claude Code usando oito subagentes especializados - e instala-se como uma PWA que funciona totalmente offline.',
      },
      'movize-website': {
        title: 'Movize Website',
        role: 'Gestor de Produto/Product Owner/Engenheiro de Software',
        description:
          'O website do Movize é a porta de entrada pública do ecossistema - um site simples e focado que apresenta todos os produtos e módulos a clientes e potenciais clientes: o que cada um faz, para quem é e como funcionam em conjunto. Guia os visitantes pelas apps de passageiros, pelo Movize Connect e pelos seus módulos, tornando fácil para operadores, municípios e promotores de eventos perceberem o que o Movize pode fazer por eles e entrarem em contacto. Defini a estrutura e o conteúdo, transformando a história do ecossistema em secções claras que fazem de uma plataforma multi-produto complexa um pitch simples.',
      },
      'idea-ledger': {
        title: 'Idea Ledger',
        tagline: 'Backlog de ideias em Markdown para o Claude Code',
        description:
          'Uma skill de gestão de produto leve e sem base de dados, construída sobre Markdown simples. As ideias são capturadas a meio do trabalho com um único comando /idea, recebem IDs estáveis e acumulam histórico de versões à medida que são entregues - com deteção de duplicados, bloqueio por dependências, versionamento semântico real para releases e um comando de auto-auditoria. Dois ficheiros, sem ferramentas externas, sem lock-in.',
      },
      'agile-ledger': {
        title: 'Agile Ledger',
        tagline: 'Ideias, sprints, bugs & releases em Markdown simples',
        description:
          'O sucessor do Idea Ledger: um sistema completo de gestão de produto para o Claude Code, feito para otimizar a forma como um PM gere projetos e equipas. Oito ficheiros Markdown e mais de 31 slash commands cobrem todo o ciclo de vida - capturar ideias e bugs, triar em épicos e user stories, planear e executar sprints, e fechar releases - com IDs de user stories que ligam branches, commits e PRs, mais um orquestrador opcional de workspace multi-repositório.',
      },
      cartographer: {
        title: 'Cartographer',
        tagline: 'Documentação para stakeholders gerada a partir dos repositórios',
        description:
          'Uma skill de Claude Code que fecha a lacuna de comunicação entre a engenharia e os stakeholders. Analisa repositórios, propõe um mapa de produtos e gera documentação adaptada à audiência - em Markdown e PDF polido - a explicar o que cada produto faz e porque importa, não como foi construído. Inclui uma fase de avaliação read-only, verificação de documentação desatualizada e audiências separadas de marketing e gestão.',
      },
      'web-platform': {
        title: 'Movize Connect',
        role: 'Gestor de Produto/Product Owner/Engenheiro de Software',
        description:
          'O Movize Connect é uma plataforma web desenvolvida para gerir a informação disponível na aplicação móvel Movize. A plataforma foi concebida para utilizadores responsáveis pela gestão de informações de transportes públicos, garantindo que os passageiros se mantêm sempre atualizados. Além disso, era também utilizada pelos administradores do Movize para gerir toda a plataforma e a aplicação móvel. Esta plataforma foi construída utilizando módulos para garantir escalabilidade e fácil adaptabilidade a cada perfil de utilizador. Fui responsável pelo desenvolvimento e evolução do Movize, gerindo o backlog do produto e garantindo o alinhamento entre objetivos de negócio, necessidades dos utilizadores e implementação técnica. A minha função envolveu definir requisitos de produto, priorizar funcionalidades e traduzir objetivos estratégicos em histórias de utilizador claras para a equipa de desenvolvimento. Trabalhei em estreita colaboração com designers, programadores e stakeholders para garantir que o produto entregasse valor, mantendo sempre um forte foco na experiência do utilizador e na qualidade do produto. Através da gestão do backlog, planeamento de sprints e ciclos contínuos de feedback, ajudei a orientar o roadmap do produto e assegurei que a equipa entregasse funcionalidades significativas e impactantes para o Movize.',
      },
      'events-module': {
        title: 'Movize Connect - Módulo de Eventos',
        role: 'Gestor de Produto/Product Owner/Engenheiro de Software',
        description:
          'O Módulo de Eventos é um módulo desenvolvido dentro da plataforma Movize Connect para gerir informação sobre eventos publicados na aplicação móvel. Este módulo é destinado a organizadores de eventos ou administradores que podem criar eventos.',
      },
      'gtfs-management-module': {
        title: 'Movize Connect - Módulo de Gestão GTFS',
        role: 'Gestor de Produto/Product Owner/Engenheiro de Software',
        description:
          'O Módulo de Gestão GTFS é um módulo desenvolvido na plataforma Movize Connect para gerir informação de transportes públicos publicada na aplicação móvel. Este módulo foi concebido para operadores, fornecendo-lhes uma ferramenta fácil de usar para gerir toda a informação de mobilidade urbana. Era também possível criar GTFS de raiz utilizando este módulo, permitindo assim adicionar novos operadores ou digitalizar os existentes.',
      },
      'furniture-sensors-module': {
        title: 'Movize Connect - Módulo de Mobiliário Urbano e Sensores',
        role: 'Gestor de Produto/Product Owner/Engenheiro de Software',
        description:
          'O Módulo de Mobiliário Urbano e Sensores é um módulo desenvolvido na plataforma Movize Connect para gerir informação sobre mobiliário urbano e sensores instalados. Este módulo foi concebido para vários tipos de clientes, tendo em conta as suas funções e as organizações para as quais trabalham. Para além de permitir aos utilizadores gerir determinada informação, este módulo oferece também um conjunto de funcionalidades relacionadas com os dados recolhidos via sensores instalados no mobiliário urbano. Isto proporciona aos utilizadores uma plataforma fácil de usar e intuitiva para analisar os dados recolhidos pelos vários sensores.',
      },
    },
  },
  courses: {
    title: 'Cursos & Certificações',
    subtitle: 'Aprendizagem contínua para me manter atualizado e relevante',
    viewCertificate: 'Ver Certificado',
    professionalCertificatesTitle: 'Certificados Profissionais',
    professionalCertificatesSubtitle: 'Programas multi-curso concluídos do início ao fim',
    individualCoursesTitle: 'Cursos Individuais',
    individualCoursesSubtitle: 'Cursos avulsos em produto, design e engenharia',
    summary: '{certs} certificados profissionais · {courses} cursos',
    coursesLabel: 'cursos',
    byProgramTitle: 'Cursos por programa',
    byProgramSubtitle: 'Os cursos por trás dos certificados, mais aprendizagem avulsa.',
    tracks: {
      'ibm-ai-pm': 'IBM AI Product Manager',
      'ibm-po': 'IBM Product Owner',
      'microsoft-ux': 'Microsoft UX Design',
      'meta-fe': 'Meta Front-End Developer',
      'standalone': 'Cursos avulsos',
    },
    items: {
      'pc-IBMAIProductManager': {
        title: 'Professional Certificate: IBM AI Product Manager',
        provider: 'Coursera - IBM',
        skills: [
          'Product Management: An Introduction',
          'Product Management: Foundations & Stakeholder Collaboration',
          'Product Management: Initial Product Strategy and Plan',
          'Product Management: Developing and Delivering a New Product',
          'Introduction to Artificial Intelligence (AI)',
          'Generative AI: Introduction and Applications',
          'Product Management: Building AI-Powered Products',
          'Generative AI: Prompt Engineering Basics',
          'Generative AI: Foundation Models and Platforms',
          'Generative AI: Supercharge Your Product Management Career',
        ],
      },
      'pc-pm-1': {
        title: 'Product Management: An Introduction',
        provider: 'Coursera - IBM',
        skills: [
          'Gestão de Projetos',
          'Estratégia de Produto',
          'Gestão de Portfólio',
          'Gestão de Produto',
          'Pesquisa de Mercado',
          'Propostas de Valor',
          'Desenvolvimento de Produto',
          'Gestão de Stakeholders',
          'Visão de Negócio',
          'Colaboração Cross-Funcional',
          'Gestão do Ciclo de Vida do Produto',
        ],
      },
      'pc-pm-2': {
        title: 'Product Management: Foundations & Stakeholder Collaboration',
        provider: 'Coursera - SkillUp',
        skills: [
          'Inovação',
          'Desenvolvimento de Negócio',
          'Análise de Mercado',
          'Análise Competitiva',
          'Desenvolvimento de Novos Produtos',
          'Formação de Equipas',
          'Gestão do Ciclo de Vida do Produto',
          'Liderança',
          'Gestão de Produto',
          'Comunicação Estratégica',
          'Estratégia de Produto',
          'Planeamento de Produto',
        ],
      },
      'pc-pm-3': {
        title: 'Product Management: Initial Product Strategy and Plan',
        provider: 'Coursera - SkillUp',
        skills: [
          'Análise Financeira',
          'Estratégias de Marketing',
          'Roadmaps de Produto',
          'Gestão de Risco',
          'Análise Competitiva',
          'Planeamento de Produto',
          'Planeamento de Projetos',
          'Gestão de Produto',
          'Desenvolvimento de Novos Produtos',
          'Análise de Mercado',
          'Gestão do Ciclo de Vida do Produto',
          'Planeamento de Negócio',
        ],
      },
      'pc-pm-4': {
        title: 'Product Management: Developing and Delivering a New Produt',
        provider: 'Coursera - SkillUp',
        skills: [
          'Testes de Aceitação do Utilizador (UAT)',
          'Desenvolvimento de Produto',
          'Desenvolvimento de Novos Produtos',
          'Planeamento de Produto',
          'Roadmaps de Produto',
          'Análise de Mercado',
          'Pesquisa de Mercado',
          'Testes de Usabilidade',
          'Testes de Produto',
          'Gestão de Produto',
          'Gestão de Stakeholders',
          'Ciclo de Vida da Gestão de Projetos',
        ],
      },
      'pc-pm-5': {
        title: 'Introduction to Artificial Intelligence (AI)',
        provider: 'Coursera - IBM',
        skills: [
          'IA Responsável',
          'Mitigação de Risco',
          'Robótica',
          'Processamento de Linguagem Natural',
          'Lógica de Negócio',
          'IA Generativa',
        ],
      },
      'pc-pm-6': {
        title: 'Generative AI: Introduction and Applications',
        provider: 'Coursera - IBM',
        skills: [
          'Personalização com IA',
          'IA Generativa',
          'ChatGPT',
          'Inteligência Artificial e Machine Learning (IA/ML)',
          'Dados em Tempo Real',
          'Machine Learning',
        ],
      },
      'pc-pm-7': {
        title: 'Product Management: Building AI-Powered Products',
        provider: 'Coursera - IBM',
        skills: [
          'Gestão de Produto com IA',
          'Estratégia de Produto com IA',
          'IA Generativa',
          'Desenvolvimento de Produto',
          'Machine Learning',
          'Roadmaps de Produto',
          'Estratégia de Produto',
          'Colaboração Cross-Funcional',
          'Gestão de Stakeholders',
          'Inovação',
          'Gestão de Risco',
          'Inteligência Artificial',
        ],
      },
      'pc-pm-8': {
        title: 'Generative AI: Prompt Engineering Basics',
        provider: 'Coursera - IBM',
        skills: [
          'Engenharia de Prompts',
          'IA Generativa',
          'Modelos de Linguagem de Grande Escala (LLM)',
          'ChatGPT',
          'Personalização com IA',
          'Processamento de Linguagem Natural',
          'Fluxos de Trabalho com IA',
          'Inteligência Artificial',
          'Geração de Texto',
          'Ferramentas de IA',
        ],
      },
      'pc-pm-9': {
        title: 'Generative AI: Foundation Models and Platforms',
        provider: 'Coursera - IBM',
        skills: [
          'IA Generativa',
          'Foundation Models',
          'Modelos de Linguagem de Grande Escala (LLM)',
          'Plataformas de IA',
          'Machine Learning',
          'Inteligência Artificial',
          'Computação em Nuvem',
          'Treino de Modelos',
          'Ferramentas de IA',
          'Ciência de Dados',
        ],
      },
      'pc-pm-10': {
        title: 'Generative AI: Supercharge Your Product Management Career',
        provider: 'Coursera - IBM',
        skills: [
          'Gestão de Produto com IA',
          'IA Generativa',
          'Estratégia de Produto',
          'Roadmaps de Produto',
          'Fluxos de Trabalho com IA',
          'Desenvolvimento de Carreira',
          'Produtividade',
          'Inteligência Artificial',
          'Gestão de Produto',
          'Inovação',
        ],
      },
      'pc-ibm-product-owner': {
        title: 'Professional Certificate: IBM Product Owner',
        provider: 'Coursera - IBM',
        skills: [
          'The Product Owner Profession: Unleashing the Power of SCRUM',
          'Introduction to Agile Development and SCRUM',
          'Information Technology (IT) Fundamentals for Everyone',
          'Product Owner: Communication & Stakeholder Management',
          'Product Owner: Essential Skilld and Tools for Innovation',
          'Practice Exam for Scrum.org PSPO I Certification',
        ],
      },
      'pc-po-1': {
        title: 'The Product Owner Profession: Unleashing the Power of SCRUM',
        provider: 'Coursera - SkillUp',
        skills: [
          'Desenvolvimento de Produto',
          'Metodologia Agile',
          'Facilitação de Reuniões',
          'Gestão de Projetos',
          'Planeamento de Sprints',
          'Envolvimento de Stakeholders',
          'Roadmaps de Produto',
          'Priorização',
          'Desenvolvimento de Equipas',
          'Gestão Ágil de Projetos',
          'Desenvolvimento Ágil de Produto',
          'Estratégia de Produto',
        ],
      },
      'pc-po-2': {
        title: 'Introduction to Agile Development and SCRUM',
        provider: 'Coursera - SkillUp',
        skills: [
          'Metodologia Agile',
          'Planeamento de Sprints',
          'Backlogs',
          'User Story',
          'Gestão Ágil de Projetos',
          'Retrospetivas de Sprint',
          'Gestão de Equipas',
          'Medição de Desempenho',
          'Metodologias Lean',
          'Desenvolvimento Ágil de Software',
          'Requisitos de Produto',
          'Gestão de Fluxos de Trabalho',
        ],
      },
      'pc-po-3': {
        title: 'Information Technology (IT) Fundamentals for Everyone',
        provider: 'Coursera - IBM',
        skills: [
          'Resolução de Problemas de Rede',
          'Software de Base de Dados',
          'Hardware de Computador',
          'Tecnologias de Informação',
          'Resolução de Problemas de Hardware',
          'Computação em Nuvem',
          'Sistemas Operativos',
          'Redes de Computadores',
          'Redes Privadas Virtuais (VPN)',
          'Programação de Computadores',
          'Instalação de Software',
          'Suporte e Serviços Técnicos',
        ],
      },
      'pc-po-4': {
        title: 'Product Owner: Communication & Stakeholder Management',
        provider: 'Coursera - SkillUp',
        skills: [
          'Gestão de Conflitos',
          'Comunicação',
          'Comunicação com Stakeholders',
          'Gestão de Stakeholders',
          'Requisitos de Produto',
          'Formação de Equipas',
          'Metodologia Agile',
          'Negociação',
          'Priorização',
          'Colaboração Cross-Funcional',
          'User Story',
          'Equipas Virtuais',
        ],
      },
      'pc-po-5': {
        title: 'Product Owner: Essential Skilld and Tools for Innovation',
        provider: 'Coursera - SkillUp',
        skills: [
          'Ciclo de Vida do Produto',
          'Pesquisa de Mercado',
          'Gestão de Produto',
          'Gestão de Releases',
          'Gestão do Ciclo de Vida do Produto',
          'Backlogs',
          'Scaled Agile Framework',
          'Estratégia de Produto',
          'Priorização',
          'Estratégia de Produto com IA',
          'Metodologias Lean',
          'Requisitos de Produto',
        ],
      },
      'pc-po-6': {
        title: 'Practice Exam for Scrum.org PSPO I Certification',
        provider: 'Coursera - SkillUp',
        skills: [
          'Backlogs',
          'Planeamento de Sprints',
          'Gestão de Produto',
          'Facilitação de Reuniões',
          'Gestão Ágil de Projetos',
          'Metodologia Agile',
          'Desenvolvimento Ágil de Produto',
          'Retrospetivas de Sprint',
        ],
      },
      'pc-microsoft-ux-design': {
        title: 'Professional Certificate: Microsoft UX Design',
        provider: 'Coursera - Microsoft',
        skills: [
          'Fundamentals of UI/UX Design',
          'Design for User Experience',
          'User Interface Design and Prototyping',
          'UX Design in Practice: Acessibility and Collaboration',
        ],
      },
      'pc-microsoft-ux-design-1': {
        title: 'Fundamentals of UI/UX Design',
        provider: 'Coursera - Microsoft',
        skills: [
          'Wireframing',
          'Design de Interface e Experiência do Utilizador (UI/UX)',
          'Design de Experiência do Utilizador',
          'Pesquisa de Utilizadores',
          'Prototipagem',
          'Experiência do Utilizador',
          'Arquitetura de Informação',
          'Design Thinking',
          'Design Centrado no Ser Humano',
        ],
      },
      'pc-microsoft-ux-design-2': {
        title: 'Design for User Experience',
        provider: 'Coursera - Microsoft',
        skills: [
          'Pesquisa de Utilizadores',
          'Arquitetura de Informação',
          'Persona (Experiência do Utilizador)',
          'Design de Experiência do Utilizador',
          'Criatividade',
          'Pesquisa de Design',
          'Inovação',
          'Design Thinking',
          'Storyboarding',
          'Design Centrado no Utilizador',
        ],
      },
      'pc-microsoft-ux-design-3': {
        title: 'User Interface Design and Prototyping',
        provider: 'Coursera - Microsoft',
        skills: [
          'Prototipagem',
          'Design de Experiência do Utilizador',
          'Design de Interação',
          'Design Thinking',
          'Guias de Estilo',
          'Mockups',
          'Wireframing',
          'Figma (Software de Design)',
          'Pesquisa de Utilizadores',
          'Design de Interface (UI)',
          'Pesquisa de UI/UX',
          'Testes de Usabilidade',
        ],
      },
      'pc-microsoft-ux-design-4': {
        title: 'UX Design in Practice: Acessibility and Collaboration',
        provider: 'Coursera - Microsoft',
        skills: [
          'Fluxos de Trabalho com IA',
          'Diretrizes de Acessibilidade de Conteúdo Web',
          'Design Thinking',
          'Design Centrado no Utilizador',
          'Inteligência Artificial',
          'Design',
          'Design de Experiência do Utilizador',
          'Figma (Software de Design)',
          'Testes de Usabilidade',
          'Prototipagem',
          'Design Gráfico e Visual',
        ],
      },
      'pc-meta-fe-1': {
        title: 'Introduction to Front-End Development',
        provider: 'Coursera - Meta',
        skills: [
          'Redes em Geral',
          'Bootstrap (Framework Front-End)',
          'React.js',
          'Ferramentas de Desenvolvimento Web',
          'Web Design e Desenvolvimento',
          'Design Web Responsivo',
          'Frameworks JavaScript',
          'Interface do Utilizador (UI)',
          'Desenvolvimento Web Front-End',
          'HTML e CSS',
          'Aplicações Web',
        ],
      },
      'pc-meta-fe-2': {
        title: 'Programming with JavaScript',
        provider: 'Coursera - Meta',
        skills: [
          'Design Funcional',
          'Aplicações Web',
          'Desenvolvimento Web Front-End',
          'Estruturas de Dados',
          'JSON',
          'Javascript',
          'Programação Orientada a Eventos',
          'Programação de Computadores',
          'Node.JS',
          'Jest (Framework de Testes JavaScript)',
          'Programação Orientada a Objetos (POO)',
          'Depuração',
        ],
      },
      'pc-meta-fe-3': {
        title: 'Version Control',
        provider: 'Coursera - Meta',
        skills: [
          'Software Colaborativo',
          'Desenvolvimento de Software',
          'Interface de Linha de Comandos',
          'Controlo de Versões',
          'Ferramentas de Desenvolvimento de Software',
          'Gestão de Ficheiros',
          'Comandos Linux',
          'Desenvolvimento Web',
          'Linux',
          'Git (Sistema de Controlo de Versões)',
          'Comandos Unix',
          'Versionamento de Software',
        ],
      },
      'pc-meta-fe-4': {
        title: 'HTML and CSS in depth',
        provider: 'Coursera - Meta',
        skills: [
          'Validação de Dados',
          'Interface do Utilizador (UI)',
          'Javascript',
          'Compatibilidade entre Navegadores',
          'Animações',
          'Hypertext Markup Language (HTML)',
          'Bootstrap (Framework Front-End)',
          'Cascading Style Sheets (CSS)',
          'Testes de Desenvolvimento',
          'HTML e CSS',
          'Design Web Responsivo',
          'Diretrizes de Acessibilidade de Conteúdo Web',
        ],
      },
      'pc-meta-fe-5': {
        title: 'React Basics',
        provider: 'Coursera - Meta',
        skills: [
          'Aplicações Web',
          'Gestão de Dados',
          'Desenvolvimento Mobile',
          'Desenvolvimento de Aplicações',
          'Programação Orientada a Eventos',
          'Desenvolvimento Web Front-End',
          'Hypertext Markup Language (HTML)',
          'React.js',
          'Javascript',
          'Cascading Style Sheets (CSS)',
          'Componentes de UI',
        ],
      },
      'johnsHopkins-1': {
        title: 'HTML, CSS, and Javascript for Web Developers',
        provider: 'Coursera - Johns Hopkins University',
        skills: [
          'Ambiente de Desenvolvimento',
          'Ferramentas de Desenvolvimento Web',
          'Cascading Style Sheets (CSS)',
          'Aplicações Web',
          'Web Design',
          'HTML e CSS',
          'Desenvolvimento Web Front-End',
          'Javascript',
          'Design Web Responsivo',
          'Ajax',
          'Diretrizes de Acessibilidade de Conteúdo Web',
        ],
      },
      'intro-jira': {
        title: 'Introduction to Jira',
        provider: 'Coursera - Atlassian',
        skills: [
          'Software de Gestão de Projetos',
          'Controlo de Acesso Baseado em Funções (RBAC)',
          'Software Colaborativo',
          'Priorização',
          'Rastreamento de Problemas',
          'Gestão de Fluxos de Trabalho',
        ],
      },
      'maas-adoption-use': {
        title: 'MaaS_ Adoption and Use',
        provider: 'Coursera - Eindhoven University of Technology',
        skills: [
          'Sistemas Sustentáveis',
          'Desenvolvimento Sustentável',
          'Estudos de Viabilidade',
          'Análise de Clientes',
          'Operações de Transporte',
          'Recolha de Dados',
          'Estudos de Caso',
          'Inquéritos',
          'Design de Serviços',
          'Comportamento do Consumidor',
        ],
      },
    },
  },
  personal: {
    title: 'Para Além do Trabalho',
    intro:
      'Há mais na vida do que roadmaps e sprint planning. Aqui fica um vislumbre das coisas que me inspiram, me dão energia e me definem fora do trabalho.',
    explore: 'Explorar',
    backToPersonal: 'Voltar a Pessoal',
    sections: {
      travel: {
        title: 'Viagens',
        description:
          'Explorar novos lugares, culturas e gastronomias pelo mundo.',
      },
      sports: {
        title: 'Desporto',
        description: 'Manter-me ativo através de futebol e treino no ginásio.',
      },
      photography: {
        title: 'Fotografia',
        description: 'Capturar momentos e perspetivas através da lente.',
      },
      gamming: {
        title: 'Gaming',
        description: 'Jogar videojogos durante horas a fio.',
      },
      reading: {
        title: 'Leitura',
        description:
          'Desde livros de gestão de produto a ficção científica - a leitura amplia perspetivas e alimenta a criatividade.',
      },
      lego: {
        title: 'Lego',
        description:
          'Construir sets de Lego peça a peça - uma forma criativa e relaxante de descontrair.',
      },
      puzzle: {
        title: 'Puzzles',
        description:
          'Montar puzzles que desafiam a paciência e a atenção ao detalhe.',
      },
    },
  },
  travel: {
    title: 'Viagens',
    subtitle: 'Lugares que tive a sorte de explorar',
    visitedCities: 'Cidades Visitadas',
    cities: {
      meillerie: {
        city: 'Meillerie',
        country: 'França',
        description:
          'Uma pacata aldeia nas margens do Lago Genebra, aninhada entre os Alpes e a água com vistas deslumbrantes das montanhas.',
      },
      aachen: {
        city: 'Aachen',
        country: 'Alemanha',
        description:
          'Uma cidade encantadora na encruzilhada de três países, conhecida pela sua magnífica catedral e rica história carolíngia.',
      },
      cologne: {
        city: 'Colónia',
        country: 'Alemanha',
        description:
          'Dominada pela sua icónica catedral gótica, Colónia combina história com uma vibrante cena cultural ao longo do Reno.',
      },
      'marina-dor': {
        city: "Marina d'Or",
        country: 'Espanha',
        description:
          'Um destino de resort solarengo na costa mediterrânica espanhola, perfeito para relaxar e desfrutar de dias quentes de praia.',
      },
      rome: {
        city: 'Roma',
        country: 'Itália',
        description:
          'A Cidade Eterna - do Coliseu à Fontana di Trevi, cada rua é um passeio por milhares de anos de história.',
      },
      venice: {
        city: 'Veneza',
        country: 'Itália',
        description:
          'Explorei os canais sinuosos, visitei a Basílica de São Marcos e perdi-me da forma mais bonita possível.',
      },
      milan: {
        city: 'Milão',
        country: 'Itália',
        description:
          'A capital da moda e do design de Itália - o Duomo, a Galleria, e uma cidade que equilibra perfeitamente tradição e inovação.',
      },
      como: {
        city: 'Como',
        country: 'Itália',
        description:
          'Aninhada na ponta sul do Lago Como, uma pitoresca cidade lacustre rodeada por deslumbrante cenário alpino.',
      },
      varenna: {
        city: 'Varenna',
        country: 'Itália',
        description:
          'Uma joia escondida na margem oriental do Lago Como - casas coloridas, jardins tranquilos e vistas de cortar a respiração.',
      },
      pisa: {
        city: 'Pisa',
        country: 'Itália',
        description:
          'Para além da famosa Torre Inclinada, uma bela cidade toscana com passeios encantadores à beira-rio e arquitetura histórica.',
      },
      luxembourg: {
        city: 'Luxemburgo',
        country: 'Luxemburgo',
        description:
          'Uma capital pequena mas impressionante - desfiladeiros dramáticos, fortificações antigas e uma mistura única de cultura francesa e alemã.',
      },
      maastricht: {
        city: 'Maastricht',
        country: 'Países Baixos',
        description:
          'Uma das cidades mais antigas dos Países Baixos - ruas de calçada, cafés acolhedores e um ambiente distintamente sul-europeu.',
      },
      vatican: {
        city: 'Cidade do Vaticano',
        country: 'Cidade do Vaticano',
        description:
          'O coração do mundo católico - a impressionante Basílica de São Pedro, a Capela Sistina e séculos de arte e fé.',
      },
      eindhoven: {
        city: 'Eindhoven',
        country: 'Países Baixos',
        description:
          'Um polo de tecnologia e design - conhecida pelo seu espírito inovador, arquitetura moderna e energia criativa.',
      },
      antwerp: {
        city: 'Antuérpia',
        country: 'Bélgica',
        description:
          'Uma cidade de diamantes, moda e arte barroca - com uma estação central deslumbrante e uma vibrante cena cultural.',
      },
      brussels: {
        city: 'Bruxelas',
        country: 'Bélgica',
        description:
          'O coração da Europa - da Grand Place ao peculiar Manneken Pis, uma cidade rica em história, chocolate e carácter.',
      },
      lisbon: {
        city: 'Lisboa',
        country: 'Portugal',
        description:
          'A capital do meu país nunca desilude - os elétricos, os pastéis de nata, as vistas de Alfama.',
      },
      porto: {
        city: 'Porto',
        country: 'Portugal',
        description:
          'Uma cidade de vistas deslumbrantes sobre o rio, históricas caves de vinho do Porto e fachadas coloridas de azulejos ao longo do Douro.',
      },
      'monte-gordo': {
        city: 'Monte Gordo',
        country: 'Portugal',
        description:
          'Uma tranquila vila de praia no Algarve com areia dourada, águas quentes e pores do sol espetaculares sobre a costa.',
      },
      portimao: {
        city: 'Portimão',
        country: 'Portugal',
        description:
          'Uma vibrante cidade algarvia conhecida pelas suas falésias dramáticas, a bela Praia da Rocha e deliciosas sardinhas grelhadas.',
      },
      'viana-do-castelo': {
        city: 'Viana do Castelo',
        country: 'Portugal',
        description:
          'Uma encantadora cidade do norte de Portugal onde o rio Lima encontra o Atlântico - rica em tradições, com vistas deslumbrantes de Santa Luzia.',
      },
      bern: {
        city: 'Berna',
        country: 'Suíça',
        description:
          'A capital suíça com o seu centro histórico medieval bem preservado, a icónica torre do relógio Zytglogge e vistas deslumbrantes dos Alpes Berneses.',
      },
    },
  },
  sports: {
    title: 'Desporto',
    subtitle: 'Manter-me ativo, definir metas, superar limites',
    achievementsTitle: 'Conquistas & Marcos',
    items: {
      football: {
        name: 'Futebol',
        description:
          'O futebol faz parte da minha vida desde criança. O trabalho em equipa, a estratégia e o espírito competitivo em campo mantêm-me motivado dentro e fora do terreno de jogo.',
      },
      gym: {
        name: 'Ginásio',
        description:
          'O treino consistente no ginásio ajuda-me a manter disciplina e foco. Desde musculação a treinos funcionais, é o meu reset diário.',
      },
    },
    categories: {
      juniors: 'Juniores',
      seniors: 'Seniores',
    },
    achievements: {
      districtChampion: {
        title: 'Campeão Distrital da 1ª Divisão',
      },
      proNationalChampion: {
        title: 'Campeão Pro Nacional da AF Braga',
      },
      nationalPromotion: {
        title: 'Promoção ao Campeonato Nacional',
      },
      superCup: {
        title: 'Vencedor da Supertaça da AF Braga',
      },
      honorDivisionPromotion: {
        title: 'Promoção à Divisão de Honra da AF Braga',
      },
      firstDivisionChampion: {
        title: 'Campeão da 1ª Divisão da AF Braga',
      },
    },
  },
  photography: {
    title: 'Fotografia',
    subtitle: 'Momentos que vale a pena recordar, enquadrados pela minha lente',
    categories: {
      street: 'Rua',
      landscape: 'Paisagem',
      architecture: 'Arquitetura',
    },
    photos: {
      1: 'Cena de rua na hora dourada',
      2: 'Paisagem montanhosa ao nascer do sol',
      3: 'Detalhe arquitetónico de um edifício moderno',
      4: 'Caminho em floresta de outono',
      5: 'Pôr do sol costeiro com nuvens dramáticas',
      6: 'Café urbano com luz matinal',
      7: 'Fachada de igreja histórica',
      8: 'Reflexos noturnos da cidade na água',
      9: 'Panorama de vale verde',
    },
  },
  gamming: {
    title: 'Gaming',
    subtitle: 'Jogar videojogos durante horas a fio',
  },
  reading: {
    title: 'Leitura',
    subtitle:
      'Livros que moldaram o meu pensamento e alargaram a minha perspetiva',
  },
  lego: {
    title: 'Lego',
    subtitle: 'Construções que deram vida a ideias, tijolo a tijolo',
  },
  puzzle: {
    title: 'Puzzles',
    subtitle: 'Peça a peça, a paciência compensa sempre',
  },
  hobbies: {
    title: 'Outros Hobbies',
    subtitle: 'As pequenas coisas que tornam a vida mais interessante',
    items: {
      reading: {
        title: 'Leitura',
        description:
          'Desde livros de gestão de produto a ficção científica - a leitura amplia perspetivas e alimenta a criatividade. Atualmente a explorar economia comportamental e design thinking.',
      },
      cooking: {
        title: 'Cozinha',
        description:
          'Experimentar receitas tradicionais portuguesas e cozinhas internacionais. Cozinhar é a minha forma de descontrair e juntar pessoas.',
      },
      gaming: {
        title: 'Gaming',
        description:
          'Jogos de estratégia e simulação que desafiam a resolução de problemas. Desde construtores de cidades a aventuras narrativas.',
      },
    },
  },
  contact: {
    title: 'Contacte-me',
    subtitle: 'Não hesite em entrar em contacto - adoraria saber de si',
    button: 'Contactar',
    status: 'Disponível',
  },
  footer: {
    rights: 'Todos os direitos reservados.',
  },
};
