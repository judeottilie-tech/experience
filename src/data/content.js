export const profile = {
  name: 'Jude Andersen',
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
      'Built and deployed full-stack apps using React, JavaScript, C#, .NET, Python, and Django through intensive project-based training',
      'Collaborated in Agile teams using Git/GitHub for version control, code review, and issue tracking',
      'Developed accessible, responsive UIs with React, HTML5, CSS3, SASS, and Bootstrap',
      'Implemented test-driven server-side development with Python, Django, and SQL; built RESTful APIs with full CRUD',
    ],
  },
  {
    role: 'Peer Support Mentor',
    org: 'The Arc TN',
    period: 'Oct 2025 – Present',
    location: 'Remote | Nashville, TN',
    points: [
      'Track individualized goal progress across multiple mentees with intellectual or developmental disabilities',
      'Facilitate weekly meetings to develop initiatives and support life goals',
    ],
  },
  {
    role: 'Contract Graphic Designer',
    org: 'Image360',
    period: 'Apr 2021 – Aug 2021',
    location: 'Hendersonville, TN',
    points: [
      'Designed and coordinated pre-press production for advertising wraps, signage, and packaging using Adobe Creative Suite and Autodesk Civil 3D',
      'Created UX/UI-oriented design work for websites, apps, and emails under high-pressure deadlines',
    ],
  },
  {
    role: 'Animatronic Intern',
    org: 'Animax Designs, Inc.',
    period: 'Jan 2020 – Apr 2020',
    location: 'Hybrid | Nashville, TN',
    points: [
      'Built cross-platform file conversion pipelines between Maya, Illustrator, and CorelDRAW for laser-cut fabrication assets',
      'Coordinated asset delivery timelines across engineering, design, and management teams',
    ],
  },
]

export const projects = [
  {
    name: 'portfol.io',
    status: 'shipping soon',
    description:
      'Front end Capstone project: React app that lets artists accept commission requests straight from their portfolio page with no guest account required.',
    tags: ['React', 'JavaScript', 'Vite', 'Tailwind CSS', 'REST API'],
    github: 'https://github.com/judeottilie-tech/portfol.io',
    live: 'https://portfoleyeoh.vercel.com',
    accent: 'coral',
  },
  {
    name: 'Card Captor',
    status: 'in progress',
    description:
      "Full-stack capstone project: an online editor for trading card collectors to design binder layouts before ever touching the cards. Drag cards into slots, name and save layouts, come back and keep editing.",
    tags: ['React', 'Auth', 'CRUD', 'REST API'],
    github: 'https://github.com/judeottilie-tech',
    live: null,
    accent: 'teal',
  },
  {
    name: 'Tabloid',
    //status: 'GitHub',
    description:
      'A full-stack content management system where users create accounts and publish articles for public consumption. Built with a 3-person team using C#/ASP.NET Core API on one side, React client on the other.',
    tags: ['React', 'Vite', 'C#', 'ASP.NET Core', 'PostgreSQL', 'EF Core'],
    github: 'https://github.com/NSS-Day-Cohort-C80/Original-Tabloid-client-ltyrcl',
    githubSecondary: 'https://github.com/NSS-Day-Cohort-C80/Original-Tabloid-api-ltyrcl',
    live: null,
    accent: 'purple',
  },
  {
    name: 'Exomine',
    //status: 'GitHub',
    description:
      'A solar-system mining marketplace where colony governors browse mining facilities, add minerals to a cart, and check out. Updates both colony and facility inventory in real time. Built with a 3-person team.',
    tags: ['JavaScript', 'CSS', 'HTML', 'Fetch API'],
    github: 'https://github.com/NSS-Day-Cohort-C80/Exomine-client-emqknd',
    live: null,
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
  growing: ["Python", "Django", "SQL"],
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
