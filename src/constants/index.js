export const myProjects = [
  {
    id: 1,
    title: "Medical University Website",
    description:
      "An official website designed for a medical university to provide essential information, news, courses, and online services for students, applicants, and faculty.",
    subDescription: [
      "Developed the frontend using Next.js 14 for server-side rendering and optimal performance.",
      "Integrated Material Tailwind for consistent UI components and responsive design.",
      "Applied TypeScript, ESLint, and strict linting configurations to ensure code quality and maintainability.",
    ],
    href: "https://www.urgfiltma.uz/en",
    logo: "/assets/projects/tta-logo.webp",
    image: "/assets/projects/tta-1.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/logos/next.js.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "Zustand",
        path: "/assets/logos/zustand.svg",
      },
    ],
    visibility: 'public'
  },
  {
    id: 2,
    title: "Mega-Stroy Admin Dashboard",
    description:
      "A modern and responsive admin dashboard designed for the Mega-Stroy store to manage products, categories, inventory, and sales data in a streamlined interface.",
    subDescription: [
      "Built with Vite and React to ensure fast performance and a smooth developer experience.",
      "Added pagination, filtering, and dropdowns using React Select and React Paginate.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/mega-dashboard.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Redux",
        path: "/assets/logos/redux.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
    visibility: 'private'
  },
  {
    id: 3,
    title: "University Mock Test Platform",
    description:
        "A web application that allows prospective university students to take subject-based mock exams, review their results, and prepare effectively for entrance tests.",
    subDescription: [
      "Built using Vite and React for high performance and fast development.",
      "Implemented Redux Toolkit for state management and seamless data flow between components.",
    ],
    href: "https://imtihon-edu.uz/",
    logo: "",
    image: "/assets/projects/edu.png",
    tags: [
      {
        id: 1,
        name: "Vite",
        path: "/assets/logos/vite.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "Redux",
        path: "/assets/logos/redux.svg",
      },
    ],
    visibility: 'public'
  },
  {
    id: 4,
    title: "Electricity Service Request Platform (admin)",
    description:
        "An internal web platform used by employees to manage citizen applications for electricity services, such as new connections, meter replacements, and other energy-related requests.",
    subDescription: [
      "Developed the frontend with Angular to create structured and dynamic form flows for various service types.",
      "Used PrimeNG and Bootstrap to build rich UI components, including data tables, calendars, and modals.",
      "Leveraged RxJS to manage reactive forms, state, and asynchronous data streams cleanly.",
    ],
    href: "https://hetk.xdevs.uz/",
    logo: "",
    image: "/assets/projects/hetk.png",
    tags: [
      {
        id: 1,
        name: "Angular",
        path: "/assets/logos/angular.svg",
      },
      {
        id: 2,
        name: "RXJS",
        path: "/assets/logos/rxjs.svg",
      },
      {
        id: 3,
        name: "Bootstrap",
        path: "/assets/logos/bootstrap.svg",
      },
    ],
    visibility: 'private'
  },

];

export const sideProjects = [
  {
    id: 1,
    title: "Real-Time Chat Application",
    description:
        "A full-stack real-time chat platform built with Angular, Node.js, and Socket.IO, enabling users to exchange messages instantly with persistent server-side communication.",
    subDescription: [
      "Built the frontend using Angular for a reactive and responsive user interface.",
      "Developed the backend API with Node.js and Express, handling routing and user sessions.",
      "Integrated Socket.IO on both client and server sides to enable real-time messaging.",
    ],
    href: "https://inchat-client.onrender.com/",
    logo: "",
    image: "/assets/projects/in-chat.png",
    tags: [
      {
        id: 1,
        name: "Angular",
        path: "/assets/logos/angular.svg",
      },
      {
        id: 4,
        name: "NodeJS",
        path: "/assets/logos/node-js.svg",
      },
      {
        id: 5,
        name: "Socket.IO",
        path: "/assets/logos/socket-io.svg",
      },
    ],
    visibility: 'hobby'
  }
]

export const mySocials = [
  {
    name: "Telegram",
    href: "https://t.me/meyliboyy",
    icon: "/assets/socials/telegram.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/meyliboyev-m/",
    icon: "/assets/socials/linkedIn.svg",
  },
  // {
  //   name: "Instagram",
  //   href: "https://www.instagram.com/",
  //   icon: "/assets/socials/instagram.svg",
  // },
];

export const experiences = [
  {
    title: "Software Developer",
    job: "Frontend Developer at Next Level Group",
    date: "2023–2024",
    contents: [
      "Worked on diverse frontend projects after a year of self-study, gaining real-world experience with a focus on usability, performance, and scalability.",
      "Built modern web interfaces using Core JavaScript, React, Next.js, and popular CSS preprocessors and UI libraries such as Material UI, Chakra UI, and Bootstrap.",
      "Developed and maintained production-ready applications using Next.js (deployed via Vercel), ensuring high performance and SEO optimization.",
      "Delivered frontend solutions for various domains, including distribution companies, restaurant menu systems with integrated delivery, and warehouse inventory/payment management tools.",
      "Implemented government-compliant web applications for national universities, ensuring they met official cybersecurity and usability standards.",
      "Contributed to a startup project building a testing platform for university applicants to evaluate and improve their knowledge through mock exams.",
    ],
  },
  {
    title: "Software Developer",
    job: "Frontend Developer at Uzinfocom",
    date: "March 2024 – Present",
    contents: [
      "Developing large-scale, state-level web applications using Angular, TypeScript, and related frameworks including RxJS.",
      "Contributed to the frontend development of a nationwide electricity billing platform, including user and employee mobile cabinets.",
      "Participated in projects supporting electronic document management for utilities (e.g., digitizing electricity usage acts).",
      "Integrated payment systems (similar to CLICK and PayMe) and collaborated on secure transaction workflows.",
      "Worked on backend logic using Node.js when building and integrating critical parts of the payment system and API layers.",
      "Currently building a citizen-facing web application that enables new electricity connections, reconnections, capacity upgrades, and more.",
      "Collaborated with cross-functional teams to ensure accessibility, performance, and compliance with national IT standards.",
    ],
  }
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
