// All site content lives here, so copy edits never need to touch a component.

export const site = {
  title: 'Juste — Front-End Developer Portfolio',
  description:
    'Front-end developer blending clean UI, thoughtful UX, and a little bit of chaos. I build fast, modern, component-driven websites with Nuxt, Vue, and Tailwind. Explore projects, experience, and how to work with me.',
  url: 'https://justeastra.com',
  ogImage: '/images/og.png',
}

export const nav = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT', to: '/about' },
  { label: 'PROJECTS', to: '/projects' },
  { label: 'EXPERIENCE', to: '/experience' },
  { label: 'EDUCATION', to: '/education' },
  { label: 'CONTACT', to: '/contact' },
]

export const hero = {
  eyebrow: 'ENGINEERING CLARITY INTO COMPLEXITY',
  first: 'JUSTE',
  last: 'ASTRA',
  image: '/images/hero.webp',
  intro: 'I’m Juste, a front-end developer crafting clean, accessible websites and component-driven interfaces.',
}

export const aboutHome = {
  lead: 'I work at the intersection of code and design, crafting interfaces that are simple, accessible and intentionally built.',
  body: 'I’ve spent the past few years working as a front-end developer in a creative agency, building websites and component systems for financial and B2B clients. My work often involves Vue, Nuxt, Tailwind and headless CMS integrations, transforming complex content into clean, scalable and accessible digital experiences.',
  cards: [
    { title: 'Vue & Nuxt', text: 'Component-driven front-end development.' },
    { title: 'Tailwind CSS', text: 'Clean, scalable styling systems.' },
    { title: 'Headless CMS', text: 'Directus, Strapi, OctoberCMS & GraphQL workflows.' },
    { title: 'Interaction & Motion', text: 'Thoughtful micro-animations using GSAP, Anime.js and CSS transitions.' },
  ],
}

export const aboutPage = {
  image: '/images/about.webp',
  lead: 'I’m Juste, a front-end developer focused on building clean, component-driven interfaces using Vue, Nuxt and Tailwind. I enjoy turning designs into fast, accessible and maintainable user experiences.',
  body: [
    'I’ve spent the last few years working in a creative agency environment, developing modern websites for financial, investment, and corporate clients. My work focuses on building reusable components, integrating CMS-driven content, and structuring front-end architecture that scales across brands and projects.',
    'Before moving into tech, I worked in retail and management roles that strengthened my communication, organisation, and problem-solving skills, qualities that now support my work as a developer. I’m always learning and enjoy working in teams where clean code, good design, and collaboration matter.',
  ],
  skills: [
    { title: 'Vue.js', text: 'Front-end framework' },
    { title: 'Nuxt', text: 'SSR & App Structure' },
    { title: 'Tailwind CSS', text: 'Styling' },
    { title: 'Headless CMS', text: 'Directus, OctoberCMS, Strapi' },
    { title: 'GraphQL', text: 'Structured API querying' },
    { title: 'Git & GitHub', text: 'Version control' },
  ],
}

// Order matches the live site: column-major on desktop (left column first).
export const experience = [
  {
    title: 'Front-End Developer',
    place: 'Core Marketing Partners, London',
    dates: '2022 - 2025',
    text: 'Built modern websites for financial, investment and corporate clients using Vue 2/3, Nuxt, Tailwind and headless CMS platforms (Directus, OctoberCMS, GraphQL). Developed reusable components, dynamic layouts, CMS-driven pages, animations and UI behaviour across multiple projects. Worked closely with designers to interpret Figma files and implement consistent, maintainable front-end architecture as part of a small development team.',
  },
  {
    title: 'Front-End Developer (Training & Freelance Projects)',
    place: 'UK & Spain',
    dates: '2021 - 2022',
    text: 'Completed a 12-week software development bootcamp, building hands-on projects and learning modern web fundamentals. Gained experience with HTML, CSS, JavaScript, Git, Vue and responsive layout techniques. Worked on personal and small freelance projects to deepen framework knowledge and build real-world front-end skills.',
  },
  {
    title: 'Visual Merchandiser / Retail Leadership Roles',
    place: 'Bershka & Zara Flagship Stores, London',
    dates: '2011 - 2021',
    text: 'Worked in fast-paced retail environments, responsible for visual displays, customer flow layouts and coordinating store presentation. Developed strong communication, teamwork and organisational skills while managing daily operations, training staff and interpreting performance data to support business decisions.',
  },
  {
    title: 'Public Sector & Management Roles',
    place: 'Ministry of Agriculture, Lithuania & Other Positions',
    dates: '2007 - 2011',
    text: 'Held roles in administration and international relations, contributing to policy coordination and communication. These roles strengthened attention to detail, cross-team collaboration, and structured problem-solving, soft skills that now support my work as a front-end developer.',
  },
]

export const stats = [
  { value: '20+', label: 'Websites Delivered' },
  { value: '3+ Years', label: 'Vue/Nuxt Experience' },
  { value: '250+', label: 'Components Built' },
]

export const education = [
  {
    title: 'Digital Skills Bootcamp: Software Development',
    place: 'Just IT Training Ltd, London, UK',
    dates: '2021 - 2022',
    text: 'Completed a twelve-week intensive bootcamp covering the fundamentals of web and software development, including HTML, CSS, JavaScript, Git, and front-end programming principles. Built hands-on projects and gained practical experience applying modern development tools and workflows.',
    mdOrder: 1,
  },
  {
    title: 'BA in Management & Business Administration',
    place: 'ISM University of Management and Economics, Vilnius, LT',
    dates: '2003 - 2007',
    text: 'Completed a four-year degree covering management, economics, marketing, statistics, and business operations. This strengthened analytical thinking, research skills, and structured problem-solving, all transferable strengths in software development.',
    // On desktop the live site shows this one bottom-left.
    mdOrder: 3,
  },
  {
    title: 'Buying, Merchandising & Management (Postgraduate)',
    place: 'Fashion Retail Academy, London, UK',
    dates: '2013',
    text: 'Intensive postgraduate programme focused on buying, merchandising, retail strategy and commercial decision-making. Developed strong analytical, organisational and communication skills that support collaborative work in cross-functional teams.',
    mdOrder: 2,
  },
  {
    title: 'Continuous Learning: Front-End Development',
    place: 'Self-Directed Study',
    dates: '2019 - Present',
    text: 'Ongoing development of front-end skills through online courses and personal projects, focusing on Vue.js, Nuxt, Tailwind CSS, component-driven architecture and modern JavaScript practices.',
    mdOrder: 4,
  },
]

export const marquee = ['VUE.JS', 'NUXT', 'TAILWIND CSS', 'GRAPHQL']

export const contact = {
  intro: 'Have a role that fits my experience, or just want to chat about front-end development? Reach out, I’d love to hear from you.',
}

export const projects = [
  {
    slug: 'titan-square-mile',
    title: 'Titan Square Mile',
    industry: 'Investment / Financial Services',
    client: 'Titan Square Mile',
    service: 'Website Design & Build',
    date: '2025',
    thumb: '/images/projects/titan-square-mile.webp',
    images: [
      { src: '/images/projects/titan-square-mile.webp', alt: 'pages overview' },
      { src: '/images/projects/titan-square-mile-2.png', alt: 'pulse news grid' },
    ],
    text: 'Titan Square Mile engaged the agency to deliver a modular, scalable website built on the foundations of the earlier Titan project. After Titan acquired Square Mile, I helped adapt, rebuild and extend the front-end so both sites shared the same structure and brand system. My work focused entirely on development, building reusable Vue/Nuxt components, implementing dynamic page layouts, integrating Directus & GraphQL content models, and handling fund-level data, documents and content blocks. I also ensured the components behaved consistently across pages and supported future updates without redesigning the core architecture.',
  },
  {
    slug: 'titan-wealth',
    title: 'Titan Wealth',
    industry: 'Investment / Financial Services',
    client: 'Titan Wealth',
    service: 'Website Design & Build (Front-End Development)',
    date: '2025',
    thumb: '/images/projects/titan-wealth.webp',
    images: [
      { src: '/images/projects/titan-wealth.webp', alt: 'pages overview' },
      { src: '/images/projects/titan-wealth-2.png', alt: 'Titan Wealth page sections' },
    ],
    text: 'Titan Wealth partnered with the agency to build a complex, scalable website that serves both as a global corporate site and as a platform for four different user types, each with tailored content. I was part of the development team responsible for the front-end build using Vue 3, Nuxt 3, and Tailwind. I developed the core component system, including navigation, layouts, blocks, and dynamic sections, and integrated it with CMS-driven content and user-type-specific logic. The architecture was built to be translation-ready and flexible enough to support future expansion, and it later became the foundation for the Titan Square Mile site following the acquisition.',
  },
  {
    slug: 'guinness-ventures',
    title: 'Guinness Ventures',
    industry: 'Investment / Financial Services',
    client: 'Guinness Ventures',
    service: 'Website Design & Build',
    date: '2024',
    thumb: '/images/projects/guinness-ventures.png',
    images: [
      { src: '/images/projects/guinness-ventures.png', alt: 'pages overview' },
      { src: '/images/projects/guinness-ventures-2.png', alt: 'mobile view' },
    ],
    text: 'Guinness Ventures required a refreshed website to support their evolved brand and better communicate their investment proposition. Working as the front-end developer on the project, I rebuilt the site using Vue 3, Nuxt 3 and Tailwind, implementing the updated visual identity across a new modular page structure. I developed reusable components and flexible CMS-powered layouts for content, investment information and case studies, and integrated the project’s illustrations and visual assets into the interface. My focus was on delivering a clean, consistent build that allowed the client to easily manage and expand the site through the headless CMS.',
  },
  {
    slug: 'arctic-graphite',
    title: 'Arctic Graphite',
    industry: 'Mining / Natural Resources',
    client: 'Arctic Graphite',
    service: 'Website Design & Build',
    date: '2023',
    thumb: '/images/projects/arctic-graphite.webp',
    images: [
      { src: '/images/projects/arctic-graphite.webp', alt: 'pages overview' },
      { src: '/images/projects/arctic-graphite-2.webp', alt: 'Arctic Graphite page sections' },
    ],
    text: 'Arctic Graphite required a new brand and website to communicate the technical details of their graphite project in a clear, credible way. As the front-end developer, I implemented the site using Vue 3, Nuxt 3 and Tailwind, building a clean component system and structured page layouts powered by a headless CMS. My work focused on translating the new visual identity into a consistent, responsive interface, integrating project data, diagrams and content into flexible CMS-driven blocks that the client can update as the project evolves.',
  },
  {
    slug: 'thincats',
    title: 'ThinCats',
    industry: 'Finance / SME Lending',
    client: 'ThinCats',
    service: 'Front-End Development',
    date: '2022-2025',
    thumb: '/images/projects/thincats.webp',
    images: [
      { src: '/images/projects/thincats.webp', alt: 'pages overview' },
      { src: '/images/projects/thincats-2.webp', alt: 'mobile overview' },
    ],
    text: 'ThinCats needed a complete redesign and rebuild of their website to better communicate their lending proposition and support ongoing campaign activity. I worked on the front-end development across multiple phases of the project, initially implementing the site in Vue 2 with OctoberCMS and later migrating it to Vue 3 with a refreshed component system. My work included rebuilding layouts, developing reusable content blocks, integrating updated brand elements, and structuring CMS-driven pages so the client could easily manage new content as part of their long-term retainer with the agency.',
  },
  {
    slug: 'ptarmigan-media',
    title: 'Ptarmigan Media',
    industry: 'Media / Financial Services',
    client: 'Ptarmigan Media',
    service: 'Website Design & Build',
    date: '2022',
    thumb: '/images/projects/ptarmigan-media.png',
    images: [
      { src: '/images/projects/ptarmigan-media.png', alt: 'pages overview' },
      { src: '/images/projects/ptarmigan-media-2.png', alt: 'mobile overview' },
    ],
    text: 'Ptarmigan Media needed a refreshed website that better represented their global media expertise and gave them a more modern, confident digital presence. As the front-end developer on the project, I implemented the new site in Vue 3, Nuxt 3 and Tailwind, building reusable components and CMS-driven layouts for their services, insights and global locations. I translated the new design system into a consistent, responsive interface and helped ensure the content structure was flexible, allowing the team to publish and update pages easily through the headless CMS.',
  },
]

// The home page shows the first four projects, like the live site.
export const featuredProjects = projects.slice(0, 4)

export const relatedFor = (slug) => projects.filter((p) => p.slug !== slug).slice(0, 2)
