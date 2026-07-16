export const profile = {
  name: 'Jude Ottilie',
  title: 'Full-Stack Developer',
  subtitle: 'React · JavaScript · C# · .NET + with a graphic design background',
  location: 'Nashville, TN',
  email: 'jude.ottilie@gmail.com',
  github: 'https://github.com/judeottilie-tech',
  linkedin: 'https://www.linkedin.com/in/judeottilie-tech/',
  resumeHref: '/Jude-Andersen-Resume.pdf',
  blurb:
   //"I build full-stack web apps with React, JavaScript, and C#/.NET. Before I wrote a line of code I was a graphic designer, so I think about layout, hierarchy, and the person on the other side of the screen before I think about state."
   "",
}

export const about = {
  heading: "designing and coding",
  paragraphs: [
    "hi! my name is jude.", 
    "i'm a junior full-stack developer with a passion for UI/UX + design. i spent years as a graphic designer and illustrator before shifting to software development. my goal is to create accessible applications where i'm able to utilize my problem solving skills and designer experience and make beautiful (yet functional) builds.", 
    
    
    // "I spent years as a graphic designer — pre-press production, signage, UI/UX work for web and email — before switching into software development at Nashville Software School. That background didn't get left behind, it's the lens I build through: typography, hierarchy, accessibility, and how something feels to use, not just whether it works.",
    //"Now I'm shipping full-stack projects with React, JavaScript, C#, .NET, Python, and Django, working in Agile teams with Git/GitHub, and building RESTful APIs with real CRUD functionality. I'm looking for a junior or entry-level front-end / full-stack role where I can keep shipping and bring a design eye to every feature.",
  ],
}

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
]

export const projects = [
  {
    name: 'portfol.io',
    //status: '',
    description:
      'Front end Capstone project: React app that lets artists accept commission requests straight from their portfolio page with no guest account required.',
    tags: ['React', 'JavaScript', 'Vite', 'Tailwind CSS', 'REST API'],
    github: 'https://github.com/judeottilie-tech/portfol.io',
    live: 'https://portfoleyeoh.vercel.app',
    image: '/portfolio-io-demo.gif',
    accent: 'coral',
  },
  {
    name: 'Card Captor',
    status: 'in progress',
    description:
      "Full-stack capstone project: an online editor for trading card collectors to design binder layouts before ever touching the cards. Drag cards into slots, name and save layouts, come back and keep editing.",
    tags: ['React', 'Auth', 'CRUD', 'REST API'],
    github: 'https://github.com/judeottilie-tech',
    githubLabel: 'coming soon',
    live: null,
    image: '/card-captor-wireframe.png',
    accent: 'teal',
  },
  {
    name: 'Tabloid',
    //status: 'GitHub',
    description:
      'A full-stack content management system where users create accounts and publish articles for public consumption. Built with a 3-person team using C#/ASP.NET Core API on one side, React client on the other.',
    tags: ['React', 'JavaScript', 'CSS', 'HTML', 'C#', '.NET', 'EF Core', 'RESTful APIs', 'Git/GitHub'],
    github: 'https://github.com/NSS-Day-Cohort-C80/Original-Tabloid-client-ltyrcl',
    githubSecondary: 'https://github.com/NSS-Day-Cohort-C80/Original-Tabloid-api-ltyrcl',
    live: null,
    image: '/tabloid-demo.gif',
    accent: 'purple',
  },
  {
    name: 'Exomine',
    //status: 'GitHub',
    description:
      'A solar-system mining marketplace where colony governors browse mining facilities, add minerals to a cart, and check out. Updates both colony and facility inventory in real time. Built with a 3-person team.',
    tags: ['React', 'JavaScript', 'CSS', 'HTML', 'C#', '.NET', 'EF Core', 'RESTful APIs', 'Git/GitHub'],
    github: 'https://github.com/NSS-Day-Cohort-C80/Exomine-client-emqknd',
    githubSecondary: 'https://github.com/EricMartinez007/exomine-api',
    live: null,
    image: '/exomine-demo.gif',
    accent: 'purple',
  },
]

// design area
export const designWork = [
  {
    title: 'Middle Tennessee Gaming',
    role: 'Client sticker & mascot design',
    image: '/design-mtg-sticker.png',
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
  ],
  growing: ["Python", "Django", "Typescript", "SQL", "Linux", ],
  design: [
    "UI/UX Design",
    "Accessible Design",
    "Responsive Design",
    "Typography",
  ],
  strengths: [
    "Problem-solving",
    "Communication",
    "Collaboration",
    "Time Management",
    "Agile Teamwork",
  ],
};

export const education = [
  { program: 'Full-Stack Software Development Bootcamp', school: 'Nashville Software School', year: '2026' },
  { program: 'Bachelor of Commercial Illustration', school: 'Nōssi College of Art and Design', year: '2021' },
  { program: 'Associate of Arts', school: 'State College of Florida', year: '2018' },
]
