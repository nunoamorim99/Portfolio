export default {
  nav: {
    home: "Home",
    projects: "Projects",
    courses: "Courses",
    personal: "Personal",
  },
  lang: {
    en: "English",
    pt: "Português",
  },
  hero: {
    role: "Product Manager",
    shortBio:
      "I build products that matter - combining technical expertise with user empathy to deliver meaningful digital experiences.",
    viewProjects: "View Projects",
    downloadCv: "Download CV",
    bgWord: "PRODUCT",
  },
  stats: {
    products: "Products & modules shipped",
    aiProjects: "AI side projects shipped",
    roles: "Roles in 2 years",
    certificates: "Professional certificates",
    courses: "Courses completed",
  },
  caseStudy: {
    back: "Back to projects",
    visit: "Visit movize.pt",
    movize: {
      label: "Case Study",
      title: "Movize",
      tagline:
        "Centralizing Portugal's urban transport - and giving operators the tools to go digital.",
      role: "Product Manager · Product Owner",
      period: "2024 – Present",
      overview:
        "Movize began as a consumer app to put every Portuguese transit operator in one place. It became something bigger - a full ecosystem that lets operators digitize and manage their own networks. I led product from the first wireframe through a strategic pivot to a multi-module platform.",
      problem: {
        kicker: "01 — The problem",
        title: "No single home for Portugal's transit",
        body: "Portugal had no native app that brought every urban-transport operator together. Riders juggled scattered sources - or went without - just to plan a trip across operators and modes.",
      },
      v1: {
        kicker: "02 — Starting with the rider",
        title: "One app for every operator",
        body: "We launched Movize as a mobile app to centralize urban-transport data, so riders could see routes, stops, and schedules from every operator in one place. The plan was simple: partner with operators and integrate their GTFS feeds.",
      },
      pivot: {
        kicker: "03 — The pivot",
        title: "The problem wasn't the app - it was that operators had no way to go digital.",
        body: "Integrating operators surfaced a deeper problem. Most Portuguese operators, especially smaller ones, had no digital tooling at all - and couldn't afford to hire big firms to digitize their data and reach riders. The real opportunity wasn't a better app. It was giving operators a way to go digital themselves. So Movize grew from an app into an ecosystem.",
      },
      ecosystem: {
        kicker: "04 — From an app to an ecosystem",
        title: "Movize Connect",
        body: "Movize Connect is the back-office platform behind the app. It lets operators, event organizers, and infrastructure owners manage their own data - and feed it straight to riders. We built it module by module.",
        inDev: "In development",
      },
      modules: {
        gtfs: {
          name: "GTFS Management",
          body: "Operators create and digitize their transport data - building GTFS feeds from scratch, so even un-digitized networks can come online.",
        },
        networkMap: {
          name: "Network Map",
          body: "Design and maintain the network map riders see in the app.",
        },
        news: {
          name: "News",
          body: "Operators publish service updates and news directly to Movize riders.",
        },
        events: {
          name: "Events",
          body: "Event organizers publish events alongside the dedicated routes and buses serving them - turning one-off transport into discoverable information.",
        },
        sensors: {
          name: "Street Furniture & Sensors",
          body: "Infrastructure owners locate and manage physical assets - shelters, stops, installed sensors - and view the data those sensors collect.",
        },
        drivers: {
          name: "Drivers",
          body: "Fleet and driver management for operators, with a companion driver app.",
        },
      },
      decisionsTitle: "05 — Key decisions",
      decisions: {
        feedback: {
          title: "Built feedback into the product",
          body: "Connected riders, operators, and admins directly, so real pain points surface fast and get answered - not lost in a backlog.",
        },
        ecosystem: {
          title: "Bet on the ecosystem, not just the app",
          body: "Empowering underserved small operators to digitize was the unlock for both rider coverage and a sustainable business model.",
        },
        events: {
          title: "Shipped Events as a growth bet",
          body: "Events already run dedicated transport but had nowhere to announce it. The module drives real-world usage and keeps the app full of timely content.",
        },
        portal: {
          title: "Prioritized the operator portal",
          body: "Concentrated effort on Movize Connect - the back office is where the ecosystem's value, and its path to revenue, actually lives.",
        },
      },
      validation: {
        kicker: "06 — Validation",
        quote: "Exactly what Portugal needs.",
        body: "Movize is live and in active development, with strong qualitative validation from riders and operators as new modules roll out.",
      },
      ctaTitle: "See it live",
      ctaBody: "Movize is in active development and available now.",
    },
    astroHop: {
      label: "Case Study",
      title: "Astro Hop",
      tagline:
        "A from-scratch 2D platformer - built to explore the Fable 5 model and ship something real with AI.",
      badgeContext: "Solo build",
      badgeAi: "Built with Fable 5",
      overview:
        "Astro Hop is a retro, Mario-style 2D platformer - playable on desktop and mobile from the same URL. I built it from scratch as a hands-on way to explore the Fable 5 model: pairing with AI to design the systems, write the game logic, and ship a complete, polished experience - and to deepen my own engineering knowledge along the way.",
      approach: {
        kicker: "01 — Approach",
        title: "Built with AI, to learn by building",
        body: "Instead of just reading about a new model, I shipped with it. Astro Hop was a deliberate exploration of Fable 5 - using it as a development partner to architect the game, work through the arcade-physics math, and debug real edge cases. The goal was twofold: produce something genuinely playable and polished, and build durable, first-hand understanding of how to build effectively with AI.",
      },
      highlightsKicker: "02 — Under the hood",
      highlightsTitle: "What's inside",
      features: {
        physics: {
          title: "Arcade physics & game feel",
          body: "Acceleration, friction, and variable jump height that responds to how long you hold the button - tuned for feel, not realism.",
        },
        powerups: {
          title: "Power-up state machine",
          body: "A clean state machine drives the classic small → big → fire progression and its transitions.",
        },
        world: {
          title: "A living world",
          body: "Stompable enemies, breakable bricks, and secret areas tucked away for players to discover.",
        },
        loop: {
          title: "Full game-flow loop",
          body: "Title screen, lives, a countdown timer, pause, game over, and a high score that persists between sessions.",
        },
      },
      audio: {
        kicker: "Sound",
        statement:
          "Every sound effect and music track is synthesized live with the Web Audio API - zero audio files.",
      },
      platform: {
        kicker: "03 — Runs anywhere",
        title: "One URL, desktop and mobile",
        body: "Levels are data-driven plain-text grids, so authoring new ones is trivial. The game is fully responsive with multi-touch on-screen controls for mobile, and every push auto-deploys to GitHub Pages via GitHub Actions.",
      },
      techTitle: "Built with",
      ctaTitle: "Play it",
      ctaBody: "Astro Hop runs in your browser - desktop or phone, same link.",
    },
    nibble: {
      label: "Case Study",
      title: "Nibble",
      tagline:
        "The classic snake game, redesigned - a second deep-dive into Fable 5, with new game modes, an economy, and a leaderboard.",
      badgeContext: "Solo build",
      badgeAi: "Built with Fable 5",
      overview:
        "Nibble is a modern, installable remake of the Nokia-era snake game. After Astro Hop, I wanted a second, more ambitious round with the Fable 5 model - this time not just recreating a classic but redesigning it: a new level-based game mode, composable challenge modifiers, a cosmetic economy, and the thing I most wanted to learn - how a leaderboard actually works, from local scores to a global backend.",
      approach: {
        kicker: "01 — Approach",
        title: "Round two with Fable 5 - this time with an architecture",
        body: "Where Astro Hop was about shipping a complete game with AI, Nibble was about engineering discipline. The game was built with Claude Code using eight specialized subagents, each owning one architectural layer - engine, renderer, themes, levels, persistence - with one invariant: the engine depends on nothing above it. The result is a pure, deterministic core, fully unit-tested with Vitest, with rendering, theming, and storage layered cleanly on top.",
      },
      highlightsKicker: "02 — Under the hood",
      highlightsTitle: "What's inside",
      features: {
        modes: {
          title: "Two ways to play",
          body: "Classic mode chases the endless high score; Level mode adds progressive apple targets, obstacles, and new mechanics level by level.",
        },
        challenges: {
          title: "Composable challenge modifiers",
          body: "Double speed, wraparound versus lethal walls, obstacle mazes - difficulty flags players can mix freely instead of fixed presets.",
        },
        economy: {
          title: "Coins, themes & skins",
          body: "Runs earn coins that unlock visual themes and snake skins - from monochrome pixel to neon futuristic.",
        },
        leaderboard: {
          title: "Local-first leaderboard",
          body: "Scores persist in IndexedDB and sync to an optional global leaderboard on Supabase - built precisely to learn the logic of ranking systems.",
        },
      },
      architecture: {
        kicker: "Architecture",
        statement:
          "A deterministic game engine that depends on nothing above it - pure logic, fully unit-tested, with rendering and storage as replaceable layers.",
      },
      platform: {
        kicker: "03 — Install it anywhere",
        title: "A PWA that works fully offline",
        body: "Nibble installs to the home screen on desktop, Android, and iOS, and once installed it runs entirely offline. Every push to main runs the tests, builds, and auto-deploys to GitHub Pages.",
      },
      techTitle: "Built with",
      ctaTitle: "Play it",
      ctaBody: "Nibble runs in your browser - install it and it keeps working offline.",
    },
    skills: {
      label: "Case Study",
      title: "Claude Code Skills",
      tagline:
        "Three custom skills that turn Claude Code into my product-management toolkit - built to optimize my day-to-day work as a PM.",
      badgeContext: "Personal project",
      badgeAi: "Built with Claude Code",
      overview:
        "As a Product Manager I spend my days capturing ideas, running sprints, and keeping stakeholders informed. I built three Claude Code skills - Idea Ledger, Agile Ledger, and Cartographer - to bring that work into the same place where the code lives. Beyond the productivity gain, the goal was to learn: designing skills end-to-end took me deep into how Claude works, how agent workflows are designed, and how AI can genuinely change a PM's toolkit.",
      why: {
        kicker: "01 — Why build my own tools",
        title: "PM work lives in too many tabs",
        body: "Product management is scattered across tools - a board here, docs there, the actual code somewhere else. Each skill attacks one piece of that fragmentation: capturing and versioning ideas, running a full agile process, and generating stakeholder documentation - all as plain Markdown that lives next to the code, with no external tools and no lock-in.",
      },
      items: {
        "idea-ledger": {
          name: "Idea Ledger",
          tagline: "Never lose an idea - or its history",
          body: "A lightweight, database-free product-management skill built entirely on two Markdown files. Ideas are captured with a single command without breaking flow, triaged into a backlog, and versioned as they ship - under one rule: nothing is ever deleted. It was the proof of concept that plain Markdown can carry a real product workflow.",
          highlights: {
            capture: "Instant /idea capture, safe to use mid-task, with duplicate detection at triage.",
            versioning: "Per-idea version history plus real semantic versioning for releases.",
            audit: "Dependency gating and a /ledger-check command that audits the ledger's own consistency.",
          },
        },
        "agile-ledger": {
          name: "Agile Ledger",
          tagline: "The whole PM workflow in plain Markdown",
          body: "The full-scale successor to Idea Ledger: eight managed Markdown files and more than 30 slash commands covering the entire product lifecycle - ideas, epics, user stories, bugs, sprint planning and execution, and releases. Discarded items keep their reason, work reconstructed from git is always flagged for human confirmation, and everything stays readable in any editor.",
          highlights: {
            lifecycle: "The complete flow, from /idea and /bug through /triage, /plan-sprint, /start-us, /review, and /release.",
            traceability: "User-story IDs act as join keys across branches, commits, and PRs.",
            workspace: "An optional orchestrator that discovers, syncs, and proposes changes across multiple repos.",
          },
        },
        cartographer: {
          name: "Cartographer",
          tagline: "Documentation stakeholders actually read",
          body: "A skill that scans an organization's repositories and generates audience-aware stakeholder documentation - what each product does and why it matters, not how it's built. An /assess pass proposes a product map for confirmation; /generate produces the docs in Markdown and polished PDF; /doc-status flags stale docs and uncovered repos.",
          highlights: {
            assess: "Read-only discovery that classifies repos, maps products, and reports maturity before writing a word.",
            output: "An ecosystem overview plus per-product docs, in Markdown and print-ready PDF with bundled typography.",
            audiences: "Separate marketing and management outputs, with configurable scope and language.",
          },
        },
      },
      learned: {
        kicker: "05 — What it taught me",
        statement:
          "Building my own tools turned AI from something I read about into something I engineer with - and these skills now run my day-to-day PM work.",
      },
      ctaTitle: "Explore the skills",
      ctaBody:
        "All three are open source under MIT - install them in Claude Code and make them yours.",
    },
  },
  about: {
    title: "About Me",
    bio: "Engineer turned Product Manager - working at the intersection of strategy, design, and code. I enjoy the kind of challenges where I get to frame the problem, sketch the first wireframe, and shape ideas into products that teams can build and users actually want to use. I follow the evolution of AI closely and, as my expertise in the area deepens, so does my interest in building products where AI genuinely amplifies or creates value.",
  },
  interests: {
    title: "Professional Interests",
    subtitle: "What drives my work every day",
    items: {
      productInnovation: {
        title: "Product Innovation & Discovery",
        description:
          "Passionate about identifying unmet user needs and transforming them into impactful product opportunities - from early research and ideation through to detailed feature definition and market validation.",
      },
      uxAndDesign: {
        title: "UX & Interface Design",
        description:
          "Bridging the gap between product thinking and design execution - from wireframes to high-fidelity mockups - with a front-end engineering background that enables deep collaboration with design and development teams.",
      },
      agileDelivery: {
        title: "Agile Delivery & Team Alignment",
        description:
          "Committed to keeping teams focused and informed through structured Agile practices, clear documentation, and strong cross-functional communication - ensuring every sprint moves the product forward with purpose.",
      },
      aiAndEmergingTech: {
        title: "AI & Emerging Technologies",
        description:
          "Actively exploring how AI tools and emerging technologies can enhance product workflows and unlock new user value - combining hands-on experimentation with a critical mindset to separate real impact from hype.",
      },
    },
  },
  education: {
    title: "Education",
    items: {
      msc: {
        degree: "MSc in Engineering and Management of Information Systems",
        institution: "Universidade do Minho",
        description:
          "Focused on information systems design, project management, and the intersection of technology and business strategy.",
      },
    },
  },
  experience: {
    title: "Professional Experience",
    subtitle: "My career journey and professional growth",
    companies: {
      "foco-criativo": {
        name: "Foco Criativo",
        location: "Póvoa de Lanhoso, Braga, Portugal · Hybrid",
      },
      "cmpl-lifeguard": {
        name: "Câmara Municipal da Póvoa de Lanhoso",
        location: "Póvoa de Lanhoso, Braga, Portugal · On-site",
      },
      "diver-lifeguard": {
        name: "Diver Lanhoso",
        location: "Póvoa de Lanhoso, Braga, Portugal · On-site",
      },
      zara: {
        name: "Zara",
        location: "Braga, Portugal · On-site",
      },
    },
    positions: {
      "product-manager": {
        title: "Product Manager",
        type: "Full-time",
        description:
          "Currently, I work as Product Manager for Movize, where I lead the product strategy and oversee its continuous development and growth. My responsibilities include defining the product vision, identifying opportunities for improvement, and aligning cross-functional teams around strategic goals. I collaborate with stakeholders, designers, and engineering teams to shape the product roadmap, prioritize initiatives, and ensure the product evolves according to market needs and user insights. My focus is on delivering high-value features, improving user experience, and leveraging data and research to guide product decisions and maximize the impact of Movize.",
      },
      "product-owner": {
        title: "Product Owner",
        type: "Full-time",
        description:
          "As Product Owner, I became responsible for the development and evolution of Movize, managing the product backlog and ensuring alignment between business goals, user needs, and technical implementation. My role involved defining product requirements, prioritizing features, and translating strategic objectives into clear user stories for the development team. I worked closely with designers, developers, and stakeholders to ensure the product delivered value while maintaining a strong focus on user experience and product quality. Through backlog management, sprint planning, and continuous feedback cycles, I helped guide the product roadmap and ensured the team delivered meaningful and impactful features for Movize.",
      },
      "software-engineer": {
        title: "Software Engineer",
        type: "Full-time",
        description:
          "During this period, I worked primarily as a Front-End Software Engineer, focusing on the development of user-facing features and improving the overall user experience of the company’s digital products. My responsibilities included implementing responsive interfaces, developing reusable components, and collaborating closely with design and product teams to translate wireframes and prototypes into functional applications. I worked mainly with modern front-end technologies such as JavaScript, React Native, HTML5, and CSS, ensuring performance, usability, and maintainability. Additionally, I participated in Agile development processes, contributing to sprint planning, code reviews, and continuous improvements to the product's interface and interaction design.",
      },
      intern: {
        title: "Intern",
        type: "Internship",
        description:
          'The main objective of this internship was to develop my dissertation for my Master\'s degree in Information Systems Engineering and Management. My dissertation, entitled "Design and optimization of logistics and production processes", consisted of a survey of the logistics and production processes of the company Foco Criativo and an analysis of them. The aim was to develop an optimization proposal to help the company become more efficient.',
      },
      "lifeguard-cmpl": {
        title: "Lifeguard",
        type: "Seasonal",
        description:
          "I worked as a Lifeguard at Praia Fluvial de Verim and the Municipal Swimming Pools of Póvoa de Lanhoso, ensuring the safety and well-being of visitors in aquatic environments. My responsibilities included monitoring swimming areas, enforcing safety regulations, and responding quickly to emergencies when necessary. In addition to surveillance and rescue readiness, I provided assistance and guidance to visitors, helping maintain a safe, organized, and welcoming environment. This role required strong responsibility, attention, communication, and teamwork, especially during peak summer periods with a high number of visitors.",
      },
      "lifeguard-diver": {
        title: "Lifeguard",
        type: "Seasonal",
        description:
          "At Diver Lanhoso, I worked as a lifeguard responsible for supervising aquatic activities and guaranteeing the safety of participants in recreational environments. My role involved continuous monitoring of the water areas, preventing risky situations, and intervening when necessary to ensure safe conditions for all visitors. Working in a dynamic outdoor environment required quick decision-making, situational awareness, and clear communication with both visitors and team members to maintain a secure and enjoyable experience.",
      },
      cashier: {
        title: "Cashier Assistant",
        type: "Contract",
        description:
          "I worked as a Cashier at Zara, where I was responsible for managing customer transactions and providing a positive in-store experience. My role involved handling payments, assisting customers during the checkout process, and ensuring accuracy and efficiency in all transactions. In addition to cashier duties, I supported the store team in maintaining an organized retail environment and delivering high-quality customer service. This experience strengthened my communication, problem-solving, and customer relationship skills, while working in a fast-paced retail environment.",
      },
    },
  },
  cv: {
    title: "Want the full picture?",
    subtitle:
      "Download my CV for a complete overview of my experience and qualifications.",
    button: "Download CV (PDF)",
  },
  skills: {
    title: "Skills & Languages",
    subtitle: "Core competencies and communication abilities",
    topTitle: "Top Skills",
    otherTitle: "Other Skills",
    langTitle: "Languages",
    top: {
      productStrategy: "Product Strategy & Roadmapping",
      agileScrum: "Agile / Scrum",
      uxResearch: "UX Research & User Discovery",
      wireframingPrototyping: "Wireframing & Prototyping",
      frontendDevelopment: "Front-end Development",
      stakeholderCommunication: "Stakeholder Communication",
      aiTools: "AI Tools & Prompt Engineering",
    },
    other: {
      dataAnalysis: "Data Analysis",
      informationSystems: "Information Systems",
      crossFunctionalLeadership: "Cross-functional Leadership",
      featurePrioritisation: "Feature Prioritisation",
      marketResearch: "Market Research",
      productDocumentation: "Product Documentation",
      okrsKpis: "OKRs & KPIs",
      sprintPlanning: "Sprint Planning",
      competitiveAnalysis: "Competitive Analysis",
    },
    languages: {
      portuguese: { name: "Portuguese", level: "Native" },
      english: { name: "English", level: "Fluent" },
    },
  },
  projects: {
    title: "Projects",
    subtitle:
      "A selection of projects and products I’ve been involved with in various roles and that I helped develop and launch",
    platformsLabel: "Available on",
    visitSite: "Visit site",
    readMore: "Read more",
    readLess: "Read less",
    readCaseStudy: "Read the Movize case study",
    viewCaseStudy: "Read the case study",
    ecosystemTitle: "The Movize ecosystem",
    riderApps: "Rider apps",
    ecosystemWebsite: "Ecosystem website",
    operatorPlatform: "Operator platform",
    modules: "Modules",
    selectedWork: "Selected work",
    selectedWorkSubtitle:
      "Products and projects I've designed, shipped, and built - from a national transport platform to games and AI tooling made from scratch.",
    movizeKicker: "Transport ecosystem",
    gameKicker: "Game",
    skillsKicker: "AI tooling",
    skillsTitle: "Claude Code skills",
    skillsIntro:
      "Three custom skills I built to optimize my day-to-day work as a PM - and to learn how to engineer with AI, not just use it. Idea capture, a full agile process, and stakeholder documentation, all in plain Markdown inside Claude Code.",
    imageSoon: "Screenshots coming soon",
    builtWith: "Built with",
    playLive: "Play it live",
    viewSource: "Source",
    platforms: {
      android: "Android",
      ios: "iOS",
      desktop: "Desktop",
      tablet: "Tablet",
      phone: "Phone",
    },
    items: {
      "astro-hop": {
        title: "Astro Hop",
        tagline:
          "Retro Mario-style 2D platformer, playable on desktop and mobile from the same URL.",
        description:
          "A from-scratch 2D platformer with arcade physics and real game feel - acceleration, variable jump height - a power-up state machine (small → big → fire), stompable enemies, breakable bricks, secret areas, and a full game-flow loop: title screen, lives, timer, pause, game over, and a persistent high score. Every sound effect and music track is synthesized live with the Web Audio API (zero audio files), levels are data-driven plain-text grids, and it ships responsive with multi-touch mobile controls, auto-deployed via CI.",
      },
      "mobile-app": {
        title: "Movize Mobile App",
        role: "Product Manager/Product Owner/Software Engineer",
        description:
          "Movize is a mobile app designed to centralize all public transportation information. The goal was to develop an app capable of helping public transportation users access all the information they need to travel throughout the country, while enabling connections between various public transportation modes and operators. I was responsible for the development and evolution of Movize, managing the product backlog and ensuring alignment between business objectives, user needs, and technical implementation. My role involved defining product requirements, prioritizing features, and translating strategic goals into clear user stories for the development team. I worked closely with designers, developers, and stakeholders to ensure the product delivered value, always maintaining a strong focus on user experience and product quality. Through backlog management, sprint planning, and continuous feedback cycles, I helped guide the product roadmap and ensured the team delivered meaningful and impactful features for Movize.",
      },
      "web-app": {
        title: "Movize Web App",
        role: "Product Manager/Product Owner/Software Engineer",
        description:
          "Movize Web is the browser-based companion to the Movize mobile app, bringing the core public transportation experience to desktop, tablet, and mobile browsers. The goal was to extend Movize's reach to users who prefer the web - offering quick access to routes, stops, and trip planning across operators and modes - while intentionally keeping a more focused feature set than the native app. I led the product strategy and execution: defining the scope of the web experience, deciding which features to expose and which to reserve for the mobile app, and ensuring the responsive interface worked well across screen sizes. Working closely with designers and developers, I shaped the roadmap to share enough of Movize's value to attract users without competing with the depth of the native experience.",
      },
      nibble: {
        title: "Nibble",
        tagline:
          "The classic snake game, redesigned - new game modes, unlockables, and a leaderboard, installable as a PWA.",
        description:
          "A modern remake of the Nokia-era snake game, rebuilt to go further than a straight port: alongside Classic mode there's a Level mode with progressive targets and obstacles, plus composable challenge modifiers - double speed, wraparound or lethal walls, obstacle mazes. A coin economy unlocks themes and snake skins, and a local-first leaderboard (with optional global scores via Supabase) taught me the logic behind ranking systems. Under the hood it's a deterministic, fully unit-tested game engine decoupled from the Canvas renderer - built with Claude Code using eight specialized subagents - and it installs as a PWA that works fully offline.",
      },
      "movize-website": {
        title: "Movize Website",
        role: "Product Manager/Product Owner/Software Engineer",
        description:
          "The Movize website is the public front door of the ecosystem - a simple, focused site that presents every product and module to customers and prospects: what each one does, who it's for, and how they work together. It walks visitors through the rider apps, Movize Connect, and its modules, making it easy for operators, municipalities, and event organizers to understand what Movize can do for them and get in touch. I defined the structure and the content, shaping the story of the ecosystem into clear sections that turn a complex multi-product platform into a simple pitch.",
      },
      "idea-ledger": {
        title: "Idea Ledger",
        tagline: "Markdown-only idea backlog for Claude Code",
        description:
          "A lightweight, database-free product-management skill built on plain Markdown. Ideas are captured mid-work with a single /idea command, get stable IDs, and accumulate per-idea version history as they ship - with duplicate detection, dependency gating, real semantic versioning for releases, and a self-audit command. Two files, no external tools, no lock-in.",
      },
      "agile-ledger": {
        title: "Agile Ledger",
        tagline: "Ideas, sprints, bugs & releases in plain Markdown",
        description:
          "The successor to Idea Ledger: a complete product-management system for Claude Code, built to streamline how a PM runs projects and teams. Eight Markdown files and 31+ slash commands cover the whole lifecycle - capturing ideas and bugs, triaging into epics and user stories, planning and running sprints, and cutting releases - with user-story IDs that link across branches, commits, and PRs, plus an optional multi-repo workspace orchestrator.",
      },
      cartographer: {
        title: "Cartographer",
        tagline: "Stakeholder docs generated from your repos",
        description:
          "A Claude Code skill that closes the communication gap between engineering and stakeholders. It scans repositories, proposes a product map, and generates audience-aware documentation - in Markdown and polished PDF - explaining what each product does and why it matters, not how it's built. Includes a read-only assessment pass, staleness checks, and separate marketing and management audiences.",
      },
      "web-platform": {
        title: "Movize Connect",
        role: "Product Manager/Product Owner/Software Engineer",
        description:
          "Movize Connect is a web platform developed to manage the information available on the Movize mobile app. The platform was designed for users responsible for managing public transportation information, ensuring passengers are always kept up to date. In addition, it was also used by Movize administrators to manage the entire platform and mobile app. This platform was built using modules to ensure scalability and easy adaptability to each user profile. I was responsible for the development and evolution of Movize, managing the product backlog and ensuring alignment between business objectives, user needs, and technical implementation. My role involved defining product requirements, prioritizing features, and translating strategic goals into clear user stories for the development team. I worked closely with designers, developers, and stakeholders to ensure the product delivered value, always maintaining a strong focus on user experience and product quality. Through backlog management, sprint planning, and continuous feedback cycles, I helped guide the product roadmap and ensured the team delivered meaningful and impactful features for Movize.",
      },
      "events-module": {
        title: "Movize Connect - Events Module",
        role: "Product Manager/Product Owner/Software Engineer",
        description:
          "The Events Module is a module developed within the Movize Connect platform to manage information about events published in the mobile app. This module is designed for event organizers or administrators who can create events.",
      },
      "gtfs-management-module": {
        title: "Movize Connect - Gtfs Management Module",
        role: "Product Manager/Product Owner/Software Engineer",
        description:
          "The Events Module is a module developed on the Movize Connect platform to manage public transportation information published in the mobile app. This module was designed for operators, providing them with an easy-to-use tool to manage all urban mobility information. It was also possible to create GTFS from scratch using this module, thereby allowing new operators to be added or existing ones to be digitized. ",
      },
      "furniture-sensors-module": {
        title: "Movize Connect - Street Furniture and Sensors Module",
        role: "Product Manager/Product Owner/Software Engineer",
        description:
          "The Events Module is a module developed on the Movize Connect platform to manage information about street furniture and installed sensors. This module was designed for various types of customers, taking into account their roles and the organizations they work for. In addition to allowing users to manage certain information, this module also offers a set of features related to the data collected via sensors installed on street furniture. This provides users with an easy-to-use and intuitive platform for analyzing the data collected by the various sensors. ",
      },
    },
  },
  courses: {
    title: "Courses & Certifications",
    subtitle: "Continuous learning to stay sharp and relevant",
    viewCertificate: "View Certificate",
    professionalCertificatesTitle: "Professional Certificates",
    professionalCertificatesSubtitle: "Multi-course programs completed end-to-end",
    individualCoursesTitle: "Individual Courses",
    individualCoursesSubtitle: "Standalone courses across product, design, and engineering",
    summary: "{certs} professional certificates · {courses} courses",
    coursesLabel: "courses",
    byProgramTitle: "Courses by program",
    byProgramSubtitle: "The courses behind the certificates, plus standalone learning.",
    tracks: {
      "ibm-ai-pm": "IBM AI Product Manager",
      "ibm-po": "IBM Product Owner",
      "microsoft-ux": "Microsoft UX Design",
      "meta-fe": "Meta Front-End Developer",
      "standalone": "Standalone courses",
    },
    items: {
      "pc-IBMAIProductManager": {
        title: "Professional Certificate: IBM AI Product Manager",
        provider: "Coursera - IBM",
        skills: [
          "Product Management: An Introduction",
          "Product Management: Foundations & Stakeholder Collaboration",
          "Product Management: Initial Product Strategy and Plan",
          "Product Management: Developing and Delivering a New Product",
          "Introduction to Artificial Intelligence (AI)",
          "Generative AI: Introduction and Applications",
          "Product Management: Building AI-Powered Products",
          "Generative AI: Prompt Engineering Basics",
          "Generative AI: Foundation Models and Platforms",
          "Generative AI: Supercharge Your Product Management Career",
        ],
      },
      "pc-pm-1": {
        title: "Product Management: An Introduction",
        provider: "Coursera - IBM",
        skills: [
          "Project Management",
          "Product Strategy",
          "Portfolio Management",
          "Product Management",
          "Market Research",
          "Value Propositions",
          "Product Development",
          "Stakeholder Management",
          "Business Acumen",
          "Cross-Functional Collaboration",
          "Product Lifecycle Management",
        ],
      },
      "pc-pm-2": {
        title: "Product Management: Foundations & Stakeholder Collaboration",
        provider: "Coursera - SkillUp",
        skills: [
          "Innovation",
          "Business Development",
          "Market Analysis",
          "Competitive Analysis",
          "New Product Development",
          "Team Building",
          "Product Lifecycle Management",
          "Leadership",
          "Product Management",
          "Strategic Communication",
          "Product Strategy",
          "Product Planning",
        ],
      },
      "pc-pm-3": {
        title: "Product Management: Initial Product Strategy and Plan",
        provider: "Coursera - SkillUp",
        skills: [
          "Financial Analysis",
          "Marketing Strategies",
          "Product Roadmaps",
          "Risk Management",
          "Competitive Analysis",
          "Product Planning",
          "Project Planning",
          "Product Management",
          "New Product Development",
          "Market Analysis",
          "Product Lifecycle Management",
          "Business Planning",
        ],
      },
      "pc-pm-4": {
        title: "Product Management: Developing and Delivering a New Produt",
        provider: "Coursera - SkillUp",
        skills: [
          "User Acceptance Testing (UAT)",
          "Product Development",
          "New Product Development",
          "Product Planning",
          "Product Roadmaps",
          "Market Analysis",
          "Market Research",
          "Usability Testing",
          "Product Testing",
          "Product Management",
          "Stakeholder Management",
          "Project Management Life Cycle",
        ],
      },
      "pc-pm-5": {
        title: "Introduction to Artificial Intelligence (AI)",
        provider: "Coursera - IBM",
        skills: [
          "Responsible AI",
          "Risk Mitigation",
          "Robotics",
          "Natural Language Processing",
          "Business Logic",
          "Generative AI",
        ],
      },
      "pc-pm-6": {
        title: "Generative AI: Introduction and Applications",
        provider: "Coursera - IBM",
        skills: [
          "AI Personalization",
          "Generative AI",
          "ChatGPT",
          "Artificial Intelligence and Machine Learning (AI/ML)",
          "Real Time Data",
          "Machine Learning",
        ],
      },
      "pc-pm-7": {
        title: "Product Management: Building AI-Powered Products",
        provider: "Coursera - IBM",
        skills: [
          "AI Product Management",
          "AI Product Strategy",
          "Generative AI",
          "Product Development",
          "Machine Learning",
          "Product Roadmaps",
          "Product Strategy",
          "Cross-Functional Collaboration",
          "Stakeholder Management",
          "Innovation",
          "Risk Management",
          "Artificial Intelligence",
        ],
      },
      "pc-pm-8": {
        title: "Generative AI: Prompt Engineering Basics",
        provider: "Coursera - IBM",
        skills: [
          "Prompt Engineering",
          "Generative AI",
          "Large Language Models (LLM)",
          "ChatGPT",
          "AI Personalization",
          "Natural Language Processing",
          "AI Workflows",
          "Artificial Intelligence",
          "Text Generation",
          "AI Tools",
        ],
      },
      "pc-pm-9": {
        title: "Generative AI: Foundation Models and Platforms",
        provider: "Coursera - IBM",
        skills: [
          "Generative AI",
          "Foundation Models",
          "Large Language Models (LLM)",
          "AI Platforms",
          "Machine Learning",
          "Artificial Intelligence",
          "Cloud Computing",
          "Model Training",
          "AI Tools",
          "Data Science",
        ],
      },
      "pc-pm-10": {
        title: "Generative AI: Supercharge Your Product Management Career",
        provider: "Coursera - IBM",
        skills: [
          "AI Product Management",
          "Generative AI",
          "Product Strategy",
          "Product Roadmaps",
          "AI Workflows",
          "Career Development",
          "Productivity",
          "Artificial Intelligence",
          "Product Management",
          "Innovation",
        ],
      },
      "pc-ibm-product-owner": {
        title: "Professional Certificate: IBM Product Owner",
        provider: "Coursera - IBM",
        skills: [
          "The Product Owner Profession: Unleashing the Power of SCRUM",
          "Introduction to Agile Development and SCRUM",
          "Information Technology (IT) Fundamentals for Everyone",
          "Product Owner: Communication & Stakeholder Management",
          "Product Owner: Essential Skilld and Tools for Innovation",
          "Practice Exam for Scrum.org PSPO I Certification",
        ],
      },
      "pc-po-1": {
        title: "The Product Owner Profession: Unleashing the Power of SCRUM",
        provider: "Coursera - SkillUp",
        skills: [
          "Product Development",
          "Agile Methodology",
          "Meeting Facilitation",
          "Project Management",
          "Sprint Planning",
          "Stakeholder Engagement",
          "Product Roadmaps",
          "Prioritization",
          "Workforce Development",
          "Agile Project Management",
          "Agile Product Development",
          "Product Strategy",
        ],
      },
      "pc-po-2": {
        title: "Introduction to Agile Development and SCRUM",
        provider: "Coursera - SkillUp",
        skills: [
          "Agile Methodology",
          "Sprint Planning",
          "Backlogs",
          "User Story",
          "Agile Project Management",
          "Sprint Retrospectives",
          "Team Management",
          "Performance Measurement",
          "Lean Methodologies",
          "Agile Software Development",
          "Product Requirements",
          "Workflow Management",
        ],
      },
      "pc-po-3": {
        title: "Information Technology (IT) Fundamentals for Everyone",
        provider: "Coursera - IBM",
        skills: [
          "Network Troubleshooting",
          "Database Software",
          "Computer Hardware",
          "Information Technology",
          "Hardware Troubleshooting",
          "Cloud Computing",
          "Operating Systems",
          "Computer Networking",
          "Virtual Private Networks (VPN)",
          "Computer Programming",
          "Software Installation",
          "Technical Support and Services",
        ],
      },
      "pc-po-4": {
        title: "Product Owner: Communication & Stakeholder Management",
        provider: "Coursera - SkillUp",
        skills: [
          "Conflict Management",
          "Communication",
          "Stakeholder Communications",
          "Stakeholder Management",
          "Product Requirements",
          "Team Building",
          "Agile Methodology",
          "Negotiation",
          "Prioritization",
          "Cross-Functional Collaboration",
          "User Story",
          "Virtual Teams",
        ],
      },
      "pc-po-5": {
        title: "Product Owner: Essential Skilld and Tools for Innovation",
        provider: "Coursera - SkillUp",
        skills: [
          "Product Lifecycle",
          "Market Research",
          "Product Management",
          "Release Management",
          "Product Lifecycle Management",
          "Backlogs",
          "Scaled Agile Framework",
          "Product Strategy",
          "Prioritization",
          "AI Product Strategy",
          "Lean Methodologies",
          "Product Requirements",
        ],
      },
      "pc-po-6": {
        title: "Practice Exam for Scrum.org PSPO I Certification",
        provider: "Coursera - SkillUp",
        skills: [
          "Backlogs",
          "Sprint Planning",
          "Product Management",
          "Meeting Facilitation",
          "Agile Project Management",
          "Agile Methodology",
          "Agile Product Development",
          "Sprint Retrospectives",
        ],
      },
      "pc-microsoft-ux-design": {
        title: "Professional Certificate: Microsoft UX Design",
        provider: "Coursera - Microsoft",
        skills: [
          "Fundamentals of UI/UX Design",
          "Design for User Experience",
          "User Interface Design and Prototyping",
          "UX Design in Practice: Acessibility and Collaboration",
        ],
      },
      "pc-microsoft-ux-design-1": {
        title: "Fundamentals of UI/UX Design",
        provider: "Coursera - Microsoft",
        skills: [
          "Wireframing",
          "User Interface and User Experience (UI/UX) Design",
          "User Experience Design",
          "User Research",
          "Prototyping",
          "User Experience",
          "Information Architecture",
          "Design Thinking",
          "Human Centered Design",
        ],
      },
      "pc-microsoft-ux-design-2": {
        title: "Design for User Experience",
        provider: "Coursera - Microsoft",
        skills: [
          "User Research",
          "Information Architecture",
          "Persona (User Experience)",
          "User Experience Design",
          "Creativity",
          "Design Research",
          "Innovation",
          "Design Thinking",
          "Storyboarding",
          "User Centered Design",
        ],
      },
      "pc-microsoft-ux-design-3": {
        title: "User Interface Design and Prototyping",
        provider: "Coursera - Microsoft",
        skills: [
          "Prototyping",
          "User Experience Design",
          "Interaction Design",
          "Design Thinking",
          "Style Guides",
          "Mockups",
          "Wireframing",
          "Figma (Design Software)",
          "User Research",
          "User Interface (UI) Design",
          "UI/UX Research",
          "Usability Testing",
        ],
      },
      "pc-microsoft-ux-design-4": {
        title: "UX Design in Practice: Acessibility and Collaboration",
        provider: "Coursera - Microsoft",
        skills: [
          "AI Workflows",
          "Web Content Accessibility Guidelines",
          "Design Thinking",
          "User Centered Design",
          "Artificial Intelligence",
          "Design",
          "User Experience Design",
          "Figma (Design Software)",
          "Usability Testing",
          "Prototyping",
          "Graphic and Visual Design",
        ],
      },
      "pc-meta-fe-1": {
        title: "Introduction to Front-End Development",
        provider: "Coursera - Meta",
        skills: [
          "General Networking",
          "Bootstrap (Front-End Framework)",
          "React.js",
          "Web Development Tools",
          "Web Design and Development",
          "Responsive Web Design",
          "JavaScript Frameworks",
          "User Interface (UI)",
          "Front-End Web Development",
          "HTML and CSS",
          "Web Applications",
        ],
      },
      "pc-meta-fe-2": {
        title: "Programming with JavaScript",
        provider: "Coursera - Meta",
        skills: [
          "Functional Design",
          "Web Applications",
          "Front-End Web Development",
          "Data Structures",
          "JSON",
          "Javascript",
          "Event-Driven Programming",
          "Computer Programming",
          "Node.JS",
          "Jest (JavaScript Testing Framework)",
          "Object Oriented Programming (OOP)",
          "Debugging",
        ],
      },
      "pc-meta-fe-3": {
        title: "Version Control",
        provider: "Coursera - Meta",
        skills: [
          "Collaborative Software",
          "Software Development",
          "Command-Line Interface",
          "Version Control",
          "Software Development Tools",
          "File Management",
          "Linux Commands",
          "Web Development",
          "Linux",
          "Git (Version Control System)",
          "Unix Commands",
          "Software Versioning",
        ],
      },
      "pc-meta-fe-4": {
        title: "HTML and CSS in depth",
        provider: "Coursera - Meta",
        skills: [
          "Data Validation",
          "User Interface (UI)",
          "Javascript",
          "Browser Compatibility",
          "Animations",
          "Hypertext Markup Language (HTML)",
          "Bootstrap (Front-End Framework)",
          "Cascading Style Sheets (CSS)",
          "Development Testing",
          "HTML and CSS",
          "Responsive Web Design",
          "Web Content Accessibility Guidelines",
        ],
      },
      "pc-meta-fe-5": {
        title: "React Basics",
        provider: "Coursera - Meta",
        skills: [
          "Web Applications",
          "Data Management",
          "Mobile Development",
          "Application Development",
          "Event-Driven Programming",
          "Front-End Web Development",
          "Hypertext Markup Language (HTML)",
          "React.js",
          "Javascript",
          "Cascading Style Sheets (CSS)",
          "UI Components",
        ],
      },
      "johnsHopkins-1": {
        title: "HTML, CSS, and Javascript for Web Developers",
        provider: "Coursera - Johns Hopkins University",
        skills: [
          "Development Environment",
          "Web Development Tools",
          "Cascading Style Sheets (CSS)",
          "Web Applications",
          "Web Design",
          "HTML and CSS",
          "Front-End Web Development",
          "Javascript",
          "Responsive Web Design",
          "Ajax",
          "Web Content Accessibility Guidelines",
        ],
      },
      "intro-jira": {
        title: "Introduction to Jira",
        provider: "Coursera - Atlassian",
        skills: [
          "Project Management Software",
          "Role-Based Access Control (RBAC)",
          "Collaborative Software",
          "Prioritization",
          "Issue Tracking",
          "Workflow Management",
        ],
      },
      "maas-adoption-use": {
        title: "MaaS_ Adoption and Use",
        provider: "Coursera - Eindhoven University of Technology",
        skills: [
          "Sustainable Systems",
          "Sustainable Development",
          "Feasibility Studies",
          "Customer Analysis",
          "Transportation Operations",
          "Data Collection",
          "Case Studies",
          "Surveys",
          "Service Design",
          "Consumer Behaviour",
        ],
      },
    },
  },
  personal: {
    title: "Beyond Work",
    intro:
      "There's more to life than product roadmaps and sprint planning. Here's a glimpse into the things that inspire me, keep me energized, and make me who I am outside of work.",
    explore: "Explore",
    backToPersonal: "Back to Personal",
    sections: {
      travel: {
        title: "Travel",
        description:
          "Exploring new places, cultures, and cuisines around the world.",
      },
      sports: {
        title: "Sports",
        description: "Staying active through football and gym training.",
      },
      photography: {
        title: "Photography",
        description: "Capturing moments and perspectives through the lens.",
      },
      gamming: {
        title: "Gaming",
        description: "Playing video games for hours on end.",
      },
      reading: {
        title: "Reading",
        description:
          "From product management books to science fiction - reading broadens perspective and fuels creativity.",
      },
      lego: {
        title: "Lego",
        description:
          "Building intricate Lego sets piece by piece - a creative and relaxing way to unwind.",
      },
      puzzle: {
        title: "Puzzles",
        description:
          "Assembling puzzles that challenge patience and attention to detail.",
      },
    },
  },
  travel: {
    title: "Travel",
    subtitle: "Places I've been lucky enough to explore",
    visitedCities: "Visited Cities",
    cities: {
      meillerie: {
        city: "Meillerie",
        country: "France",
        description:
          "A peaceful village on the shores of Lake Geneva, nestled between the Alps and the water with stunning mountain views.",
      },
      aachen: {
        city: "Aachen",
        country: "Germany",
        description:
          "A charming city at the crossroads of three countries, known for its magnificent cathedral and rich Carolingian history.",
      },
      cologne: {
        city: "Cologne",
        country: "Germany",
        description:
          "Dominated by its iconic Gothic cathedral, Cologne blends history with a vibrant cultural scene along the Rhine.",
      },
      "marina-dor": {
        city: "Marina d'Or",
        country: "Spain",
        description:
          "A sunny resort destination on the Spanish Mediterranean coast, perfect for relaxation and warm beach days.",
      },
      rome: {
        city: "Rome",
        country: "Italy",
        description:
          "The Eternal City - from the Colosseum to the Trevi Fountain, every street is a walk through thousands of years of history.",
      },
      venice: {
        city: "Venice",
        country: "Italy",
        description:
          "Explored the winding canals, visited St. Mark's Basilica, and got lost in the most beautiful way possible.",
      },
      milan: {
        city: "Milan",
        country: "Italy",
        description:
          "Italy's fashion and design capital - the Duomo, the Galleria, and a city that perfectly balances tradition and innovation.",
      },
      como: {
        city: "Como",
        country: "Italy",
        description:
          "Nestled at the southern tip of Lake Como, a picturesque lakeside town surrounded by stunning Alpine scenery.",
      },
      varenna: {
        city: "Varenna",
        country: "Italy",
        description:
          "A hidden gem on the eastern shore of Lake Como - colorful houses, peaceful gardens, and breathtaking lake views.",
      },
      pisa: {
        city: "Pisa",
        country: "Italy",
        description:
          "Beyond the famous Leaning Tower, a beautiful Tuscan city with charming riverside walks and historic architecture.",
      },
      luxembourg: {
        city: "Luxembourg",
        country: "Luxembourg",
        description:
          "A small but impressive capital - dramatic gorges, ancient fortifications, and a unique blend of French and German culture.",
      },
      maastricht: {
        city: "Maastricht",
        country: "Netherlands",
        description:
          "One of the oldest cities in the Netherlands - cobblestone streets, cozy cafés, and a distinctly southern European feel.",
      },
      vatican: {
        city: "Vatican City",
        country: "Vatican City",
        description:
          "The heart of the Catholic world - the awe-inspiring St. Peter's Basilica, the Sistine Chapel, and centuries of art and faith.",
      },
      eindhoven: {
        city: "Eindhoven",
        country: "Netherlands",
        description:
          "A hub of technology and design - known for its innovative spirit, modern architecture, and creative energy.",
      },
      antwerp: {
        city: "Antwerp",
        country: "Belgium",
        description:
          "A city of diamonds, fashion, and Baroque art - with a stunning central station and a vibrant cultural scene.",
      },
      brussels: {
        city: "Brussels",
        country: "Belgium",
        description:
          "The heart of Europe - from the Grand Place to the quirky Manneken Pis, a city rich in history, chocolate, and character.",
      },
      lisbon: {
        city: "Lisbon",
        country: "Portugal",
        description:
          "My home country's capital never disappoints - the trams, the pastel de nata, the views from Alfama.",
      },
      porto: {
        city: "Porto",
        country: "Portugal",
        description:
          "A city of stunning river views, historic port wine cellars, and colorful tiled facades along the Douro.",
      },
      "monte-gordo": {
        city: "Monte Gordo",
        country: "Portugal",
        description:
          "A laid-back Algarve beach town with golden sand, warm waters, and spectacular sunsets over the coast.",
      },
      portimao: {
        city: "Portimão",
        country: "Portugal",
        description:
          "A vibrant Algarve city known for its dramatic cliffs, beautiful Praia da Rocha, and delicious grilled sardines.",
      },
      "viana-do-castelo": {
        city: "Viana do Castelo",
        country: "Portugal",
        description:
          "A charming northern Portuguese city where the Lima river meets the Atlantic - rich in traditions, stunning views from Santa Luzia.",
      },
      bern: {
        city: "Bern",
        country: "Switzerland",
        description:
          "The Swiss capital with its well-preserved medieval old town, the iconic Zytglogge clock tower, and stunning views of the Bernese Alps.",
      },
    },
  },
  sports: {
    title: "Sports",
    subtitle: "Staying active, setting goals, pushing limits",
    achievementsTitle: "Achievements & Milestones",
    items: {
      football: {
        name: "Football",
        description:
          "Football has been part of my life since childhood. The teamwork, strategy, and competitive spirit on the pitch keep me motivated both on and off the field.",
      },
      gym: {
        name: "Gym",
        description:
          "Consistent gym training helps me stay disciplined and focused. From strength training to functional workouts, it's my daily reset.",
      },
    },
    categories: {
      juniors: "Juniors",
      seniors: "Seniors",
    },
    achievements: {
      districtChampion: {
        title: "District 1st Division Champion",
      },
      proNationalChampion: {
        title: "AF Braga Pro National Champion",
      },
      nationalPromotion: {
        title: "Promotion to the National Championship",
      },
      superCup: {
        title: "AF Braga Super Cup Winner",
      },
      honorDivisionPromotion: {
        title: "Promotion to the AF Braga Honor Division",
      },
      firstDivisionChampion: {
        title: "AF Braga 1st Division Champion",
      },
    },
  },
  photography: {
    title: "Photography",
    subtitle: "Moments worth remembering, framed through my lens",
    categories: {
      street: "Street",
      landscape: "Landscape",
      architecture: "Architecture",
    },
    photos: {
      1: "Street scene at golden hour",
      2: "Mountain landscape at sunrise",
      3: "Architectural detail of a modern building",
      4: "Autumn forest path",
      5: "Coastal sunset with dramatic clouds",
      6: "Urban cafe with morning light",
      7: "Historic church facade",
      8: "Night city reflections on water",
      9: "Green valley panorama",
    },
  },
  gamming: {
    title: "Gaming",
    subtitle: "Playing video games for hours on end",
  },
  reading: {
    title: "Reading",
    subtitle: "Books that shaped my thinking and broadened my perspective",
  },
  lego: {
    title: "Lego",
    subtitle: "Builds that brought ideas to life, one brick at a time",
  },
  puzzle: {
    title: "Puzzles",
    subtitle: "Piece by piece, patience always pays off",
  },
  hobbies: {
    title: "Other Hobbies",
    subtitle: "The little things that make life more interesting",
    items: {
      reading: {
        title: "Reading",
        description:
          "From product management books to science fiction - reading broadens perspective and fuels creativity. Currently exploring behavioral economics and design thinking.",
      },
      cooking: {
        title: "Cooking",
        description:
          "Experimenting with Portuguese traditional recipes and international cuisines. Cooking is my way of unwinding and bringing people together.",
      },
      gaming: {
        title: "Gaming",
        description:
          "Strategy and simulation games that challenge problem-solving skills. From city builders to narrative-driven adventures.",
      },
    },
  },
  contact: {
    title: "Contact Me",
    subtitle: "Feel free to reach out - I'd love to hear from you",
    button: "Contact",
    status: "Available",
  },
  footer: {
    rights: "All rights reserved.",
  },
};
