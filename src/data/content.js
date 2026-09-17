export const profile = {
  name: 'Jude Ottilie',
  title: 'UI/UX Designer + Software Developer',
  subtitle: 'React · JavaScript · C# · .NET + with a graphic design background',
  location: 'Nashville, TN',
  email: 'jude.ottilie@gmail.com',
  github: 'https://github.com/judeottilie-tech',
  linkedin: 'https://www.linkedin.com/in/judeottilie-tech/',
  resumeHref: '/JudeAndersen_UIUXDResume_2026.pdf',
  blurb:
   //"I build full-stack web apps with React, JavaScript, and C#/.NET. Before I wrote a line of code I was a graphic designer, so I think about layout, hierarchy, and the person on the other side of the screen before I think about state."
   "",
}

export const about = {
  heading: "designing and coding",
  paragraphs: [
    "hi! my name is jude.",
    "i'm a junior UI/UX designer and full-stack developer building with React, JavaScript, + C#/.NET.",
    " my background as a graphic designer and illustrator is why i design accessible, intentional interfaces instead of just making things that work.",
    //"my favorite project so far is portfol.io, a full-stack react app that lets artists accept commission requests straight from their portfolio page, no guest account required. i designed the ux, built the api, and shipped it end to end.",
    "i'm looking for a junior or entry-level ui/ux, front-end, or full-stack role in nashville or remote! say hi :)",

    // "I spent years as a graphic designer — pre-press production, signage, UI/UX work for web and email — before switching into software development at Nashville Software School. That background didn't get left behind, it's the lens I build through: typography, hierarchy, accessibility, and how something feels to use, not just whether it works.",
    //"Now I'm shipping full-stack projects with React, JavaScript, C#, .NET, Python, and Django, working in Agile teams with Git/GitHub, and building RESTful APIs with real CRUD functionality. I'm looking for a junior or entry-level front-end / full-stack role where I can keep shipping and bring a design eye to every feature.",
  ],
};

export const experience = [
  {
    role: 'Software Developer Apprentice',
    org: 'Nashville Software School',
    period: 'Feb 2026 – Present',
    location: 'Nashville, TN',
    points: [
      'Built and deployed multiple full-stack apps using React, JavaScript, C#, .NET, Python, and Django through intensive project-based training',
      'Collaborated in Agile teams using Git/GitHub for version control, code review, and project management with GitHub Projects and issue tracking',
      'Developed accessible, responsive UIs applying design background to create cohesive user experiences with React, HTML5, CSS3, SASS, and Bootstrap',
      'Implemented server-side, test-driven development with Python, Django, and SQL; built RESTful APIs with full CRUD functionality',
      'Automated build tasks with Grunt including linting (JSHint), module bundling (Browserify), and SASS compilation',
    ],
  },
  {
    role: 'Peer Support Mentor',
    org: 'The Arc TN',
    period: 'Oct 2025 – Present',
    location: 'Remote | Nashville, TN',
    points: [
      'Manage and track individualized goal progress across multiple mentees with intellectual or developmental disabilities, applying structured data organization, prioritization, and progress reviews',
      'Facilitate weekly meetings to develop initiatives and support life goals, applying cultural competency and advocacy principles',
    ],
  },
  {
    role: 'General employment during schooling',
    org: 'Serving, Retail & Creative Industries',
    period: 'Jan 2018 – Dec 2024',
    location: 'Nashville, TN & Bradenton, FL',
    points: [
      'Simultaneously held two part-time roles across serving, retail, and creative industries to self-fund education through community college and a bachelor’s degree',
      'Built strong work ethic, time management, and self-motivation managing competing priorities under pressure',
    ],
  },
  {
    role: 'Contract Graphic Designer',
    org: 'Image360',
    period: 'Apr 2021 – Aug 2021',
    location: 'Hendersonville, TN',
    points: [
      'Designed and coordinated pre-press production for advertising wraps, healthcare signage, product packaging, and medical office signage using Adobe Creative Suite and Autodesk Civil 3D',
      'Created UX/UI-oriented design work for websites, apps, and emails under high-pressure deadlines',
    ],
  },
  {
    role: 'Animatronic Intern',
    org: 'Animax Designs, Inc.',
    period: 'Jan 2020 – Apr 2020',
    location: 'Hybrid | Nashville, TN',
    points: [
      'Built cross-platform file conversion pipelines between Maya, Illustrator, and CorelDRAW for laser-cut fabrication assets from licensed IP projects, maintaining fidelity through UV mapping and manual vector tracing',
      'Collaborated cross-functionally with engineering, design, and management teams to coordinate asset delivery timelines and translate technical requirements between departments',
    ],
  },
]

export const projects = [
  {
    name: "portfol.io",
    //status: '',
    description: [
      "Front end Capstone project: React app that lets artists accept commission requests straight from their portfolio page with no guest account required.",
      " The hardest part was designing for two very separate users on the same page. The artist managing listings behind a login, and a guest submitting a commission with no account. I built the guest-facing form to feel like part of the artist's portfolio, not a contact form, while keeping the dashboard side fully separate with its own CRUD logic for managing commissions and status.",
    ],
    tags: ["React", "JavaScript", "Vite", "Tailwind CSS", "REST API"],
    github: "https://github.com/judeottilie-tech/portfol.io",
    live: "https://portfoleyeoh.vercel.app",
    image: "/portfolio-io-demo.gif",
    accent: "coral",
  },
  {
    name: "CardCaptor",
    description: [
      "Full-stack capstone project: an online editor for trading card collectors to design binder layouts before ever touching the cards. Drag cards into slots, name and save layouts, come back and keep editing. Right now, filling a slot opens a card picker popup pulling from a set of cards I've preloaded, kept simple while I get the core layout, save, and edit flow solid. Full card database and adding Michi Method (more creative capabilities, basically) are my next steps. Also planning to add borders for the cards of common hex codes for all popular card sleeve brands! ",
    ],
    tags: [
      "React",
      "JavaScript",
      "C#",
      ".NET",
      "Tailwind CSS",
      "EF Core",
      "RESTful APIs",
      "Git/GitHub",
      "AWS",
    ],
    github: "https://github.com/judeottilie-tech/CardCaptor",
    live: "https://cardcaptor.vercel.app/",
    image: "/card-captor-demo.gif",
    accent: "teal",
  },
  {
    name: "Tabloid",
    //status: 'GitHub',
    description: [
      "A full-stack content management system where users create accounts and publish articles for public consumption. Built with a 3-person team using C#/ASP.NET Core API on one side, React client on the other.",
      " I implemented the majority of the front end- wiring up fetch calls, connecting every view to the API, and making sure the UI felt cohesive across the whole app. On the backend side, I got hands-on with EF Core and LINQ to help query and shape the data the front end needed.",
    ],
    tags: [
      "React",
      "JavaScript",
      "CSS",
      "HTML",
      "C#",
      ".NET",
      "EF Core",
      "RESTful APIs",
      "Git/GitHub",
    ],
    github:
      "https://github.com/NSS-Day-Cohort-C80/Original-Tabloid-client-ltyrcl",
    githubSecondary:
      "https://github.com/NSS-Day-Cohort-C80/Original-Tabloid-api-ltyrcl",
    live: null,
    image: "/tabloid-demo.gif",
    accent: "purple",
  },
  {
    name: "Exomine",
    //status: 'GitHub',
    description: [
      "A solar-system mining marketplace where colony governors browse mining facilities, add minerals to a cart, and check out. Updates both colony and facility inventory in real time. Built with a 3-person team.",
      " The tricky part was state: a governor's cart, the facility's mineral stock, and the colony's inventory all had to stay in sync as purchases happened. I built the dropdown and radio components that drove that flow and made sure the UI reflected real inventory the moment a purchase went through.",
    ],
    tags: [
      "React",
      "JavaScript",
      "CSS",
      "HTML",
      "C#",
      ".NET",
      "EF Core",
      "RESTful APIs",
      "Git/GitHub",
    ],
    github: "https://github.com/NSS-Day-Cohort-C80/Exomine-client-emqknd",
    githubSecondary: "https://github.com/EricMartinez007/exomine-api",
    live: null,
    image: "/exomine-demo.gif",
    accent: "purple",
  },
];

export const caseStudies = [
  {
    slug: 'cardcaptor',
    title: 'CardCaptor',
    sector: 'product',
    oneLiner: 'a binder-page layout planner for trading card collectors, built around the michi method of themed card curation.',
    thumbnail: '/screen/editbinder_computer.webp',
    accent: 'teal',
    cardBg: 'var(--color-cream)',
    liveUrl: 'https://cardcaptor.vercel.app/',
    role: 'UI/UX Designer & Full-Stack Developer',
    duration: 'ongoing — started as an NSS capstone, still in active development',
    tools: ['Figma', 'React', 'Tailwind CSS', 'C#', '.NET', 'EF Core'],
    problem:
      "i'm a trading card collector, and when i went looking for something to help plan binder layouts before touching the actual cards, i couldn't find anything built for it, especially for michi method organization. so i decided to build it myself.",
    research: {
      summary:
        "since there wasn't an existing product to benchmark against, my research came from being the target user myself. i also wanted this to be usable by kids, so i looked into what makes an interface approachable and accessible for children specifically, not just adults.",
      findings: [
        'no existing product plans michi method layouts before you touch the actual cards',
        'designing for kids means simpler, more forgiving interactions than a typical adult-focused app',
      ],
    },
    wireframeImages: [
      { src: '/card-captor-wireframe.png', caption: 'wireframe sketch of the binder page layout, showing the card grid and drag targets' },
    ],
    mockupImages: [],
    decisions: [
      "built drag-and-drop on pointer events instead of native html5 drag-and-drop, since native drag never fires on touch devices, and this needed to work for kids on tablets too",
      "changes stage locally and only save when you hit save, instead of auto-saving. i tried auto-save first and it didn't feel right, i wanted users to feel in control of when something's actually committed",
      'kept the card picker simple at first with a small preloaded set, so the core layout, save, and edit flow could get solid before pulling in the full live card catalog',
    ],
    outcome:
      "the mvp is live: auth, binder pages, card slots pulling from a live card catalog with search and filtering, drag-and-drop layout editing, and a starter-pet feature. i'm currently working on configurable grid layouts, public profiles, and image uploading for michi method cards.",
    currentStateImages: [
      { src: '/screen/dashboard_computer.webp', caption: 'binder pages dashboard' },
      { src: '/screen/createbinder_computer.webp', caption: 'creating a new binder page' },
      { src: '/screen/editbinder_computer.webp', caption: 'the binder page editor' },
      { src: '/screen/pickcard_computer.webp', caption: 'the card picker, pulling from the live catalog' },
    ],
    currentStateImagesMobile: [
      { src: '/screen/dashboard_phone.webp', caption: 'binder pages dashboard, mobile' },
      { src: '/screen/createbinder_phone.webp', caption: 'creating a new binder page, mobile' },
      { src: '/screen/editbinder_phone.webp', caption: 'the binder page editor, mobile' },
      { src: '/screen/pickcard_phone.webp', caption: 'the card picker, mobile' },
    ],
  },
  {
    slug: 'portfolio-io',
    title: 'portfol.io',
    sector: 'commissions',
    oneLiner: 'a portfolio page for artists that also takes commission proposals directly from guests, no account needed.',
    thumbnail: '/screen/portfolio-io_profile.png',
    accent: 'coral',
    cardBg: 'var(--color-cream)',
    liveUrl: 'https://portfoleyeoh.vercel.app/',
    role: 'UI/UX Designer & Full-Stack Developer',
    duration: 'started as an NSS front-end capstone, live and growing since',
    tools: ['Figma', 'React', 'JavaScript', 'Tailwind CSS', 'REST API'],
    problem:
      "i've used a lot of art commission sites, and they all have the same tradeoff. commission marketplaces throw every artist into the same pool, so you need the flashiest listing in the search results just to get seen. portfolio sites let you show your work beautifully, but there's no way to actually take commissions through them. i wanted something in between: a portfolio-style page an artist could put on a business card, with a simple url like portfol.io/artist, where a guest could send a commission proposal without needing an account. the artist's page still reads like a personal portfolio, but they get the power to manage and accept commissions in the same place.",
    research: {
      summary:
        "my research came from being an artist who's actually used these sites to look for work. i compared how commission marketplaces handle discovery against how portfolio builders handle presentation, since neither model covers both halves of what an artist actually needs.",
      findings: [
        "marketplaces optimize for the platform's search results, not for a specific artist being findable on their own terms",
        'portfolio builders have no built-in way to receive or manage a commission request at all',
      ],
    },
    wireframeImages: [
      { src: '/portfolio-io-wireframe.png', caption: 'route-by-route wireframe covering the guest profile, commission detail, auth, and the full artist dashboard' },
    ],
    mockupImages: [],
    decisions: [
      "the hardest part was designing for two very different users on the same page: the artist, who's behind a login managing commission types and proposals, and the guest, who shows up with no account and just wants to ask about a piece. i built the guest-facing proposal form to feel like part of the artist's portfolio instead of a generic contact form, while keeping the dashboard side on its own separate crud logic",
      'each commission type has a limited number of slots, shown as open or taken right on the card, so a guest can see availability before they ever send a proposal',
      'incoming proposals go through accept/decline first, then move into an accepted list with their own status dropdown (accepted, contacted, denied), so i can track where i actually am with a client past just yes or no',
    ],
    outcome:
      "portfol.io is live. an artist creates an account, sets up their commission types with images and pricing, and shares their own portfol.io/username link. guests can browse, filter, and submit a proposal with no account, and the artist manages everything else, accepting or declining proposals and tracking status, from their own dashboard.",
    currentStateImages: [
      { src: '/screen/portfolio-io_profile.png', caption: "the artist's public profile — bio, socials, and a searchable grid of commission types" },
      { src: '/screen/portfolio-io_commission-request.png', caption: 'a single commission type, with the guest proposal form below it' },
      { src: '/screen/portfolio-io_dashboard.png', caption: 'the dashboard — commission types plus incoming and accepted proposals' },
      { src: '/screen/portfolio-io_proposals.png', caption: 'incoming and accepted proposals, each with its own accept/decline or status control' },
      { src: '/screen/portfolio-io_add-commission.png', caption: 'adding a new commission type — price, slots, description, and tags' },
      { src: '/screen/portfolio-io_edit-commission.png', caption: 'editing an existing commission type' },
      { src: '/screen/portfolio-io_edit-profile.png', caption: 'editing the artist profile — bio, avatar, and social links' },
    ],
    currentStateImagesMobile: [],
  },
]

export const howIWork = [
  {
    title: "UI/UX Design",
    body: "i sketch out user flows and wireframes before i touch any styling. i want every decision to have a reason behind it and make sense.",
  },
  {
    title: "Accessible Design",
    body: "accessibility is not an afterthought but something i plan from the get go. my first drafts plan for keyboard navigation, readability, contrast, and i follow all WCAG standards to make my work operable for everyone.",
  },
  {
    title: "Responsive Design",
    body: "i plan and design for compatibility on all computer monitors and mobile dimensions, making sure my applications are fluid on whatever a user chooses to view it on.",
  },
  {
    title: "Typography & Visual Hierarchy",
    body: "hierarchy, weight, and spacing help me to plan the flow of the application and how i want to guide the user's eye to the next part of the interface.",
  },
  {
    title: "Software Development",
    body: "i build the things that i design myself, using my software development skills to bring my ideas to full fruition.",
  },
]

export const skills = {
  core: [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Adobe Creative Suite",
    "C#",
    ".NET",
    "Git/GitHub",
    "Node.js",
    "RESTful APIs",
    "SASS",
    "Bootstrap",
    "Vite",
    "SQL",
    "Typescript",
    "Figma",
    "AWS",
    "Docker",
  ],
  growing: [
    "Azure",
    "Flutter",
    "Python",
    "Django",
    "Linux",
    "React Native",
    "Godot",
    "Elixir",
  ],
  design: [
    "UI/UX Design",
    "Accessible Design",
    "Responsive Design",
    "Typography",
    "Visual Hierarchy",
  ],
  strengths: [
    "Problem-solving",
    "Communication",
    "Collaboration",
    "Curiosity",
    "Time Management",
    "Agile Teamwork",
    "Inclusivity",
    "Accessibility",
    "CRUD Applications",
    "Fast Learner",
   // "Adaptable"
  ],
};

export const education = [
  { program: 'Full-Stack Software Development Bootcamp', school: 'Nashville Software School', year: '2026' },
  { program: 'Bachelor of Commercial Illustration', school: 'Nōssi College of Art and Design', year: '2021' },
  { program: 'Associate of Arts', school: 'State College of Florida', year: '2018' },
]
