/* ============================================================
   PORTFOLIO DATA
   This is the only file you should need to edit. Everything on
   the site is generated from what's in here.

   ADD IMAGES: drop files into  public/images/projects/  then
   reference them below as "/images/projects/yourfile.jpg"
   (leading slash, no "public" in the path).

   ADD YOUR RESUME: save it as
   public/resume/Danica-Rose-Salve-Resume.pdf
   ============================================================ */

export const PROFILE = {
  name: "Danica Rose Salve",
  roles: ["Ready to Learn", "Ready to Adapt", "Ready to make an impact"],
  tagline:
    "A recent Bachelor of Science in Information Technology graduate driven by curiosity, continuous learning, and problem-solving." + 
    "I bring a versatile technical foundation, hands-on project experience, and a commitment to creating solutions that make work more efficient and effective.",
  bio:
    "Adaptable, detail-oriented, and committed to continuous learning and delivering meaningful results.",
  location: "Valenzuela City, Philippines",
  email: "salvedanica5@gmail.com",
  phone: "0921-714-2178",
  socials: {
    facebook: "https://www.facebook.com/danica.rosesalve10/",
    instagram: "https://www.instagram.com/danica_salve/",
    linkedin: "https://www.linkedin.com/in/danica-rose-salve-4b177135b/",
    github: "https://github.com/dncslv",
  },
  resumeFile: "/resume/Danica-Rose-Salve-Resume.pdf",
  // Paste your Formspree endpoint here, e.g. "https://formspree.io/f/mzebgjyw"
  // Get one free at formspree.io — see the Contact section setup notes.
  formEndpoint: "https://formspree.io/f/mzebgjyw",
};

/* ------------------------------------------------------------
   ABOUT — interests, organizations, education, skills
   These power the extra rows in the About section. Edit freely;
   the "Add ..." placeholders are just examples of the shape.
------------------------------------------------------------ */
export const ABOUT = {
  interests: [
    "Motorcycle Rides",
    "Travel & Adventure",
    "Beach & Ocean",
    "Movies",
    "Food",
    "Gaming",
    "Volleyball",
    "Softball",
    "Badminton"

  ],
  organizations: [
    {
      name: "Victoria Heartstrong Organization",
      role: "Member",
      duration: "2023 – 2026",
    },
    {
      name: "Valenzuela Information Technology Society",
      role: "Member",
      duration: "2022 – 2026",
    },
  ],
  education: [
    {
      school: "Pamantasan ng Lungsod ng Valenzuela",
      detail: "Bachelor of Science in Information Technology",
      date: "2022 – 2026",
    },
    {
      school: "St. Bernadette College of Valenzuela",
      detail: "Senior High School (STEM Strand) — With High Honors",
      date: "2020 – 2022",
    },
    {
      school: "Gen. T. De Leon National High School",
      detail: "Junior High School",
      date: "2016 – 2020",
    },
    {
      school: "Santiago A. De Guzman Elementary School",
      detail: "Elementary",
      date: "2010 – 2016",
    },
  ],
  skills: [
    "Attention to detail",
    "Time Management",
    "Willingness to Learn",
    "Organized",
    "Adaptability",
    "Problem-solving",
    "Team Collaboration",
    "Initiative"
  ],
};

/* ------------------------------------------------------------
   TECH STACK
   icon: a react-icons "Simple Icons" (Si...) component name —
   already wired up in TechStack.jsx. Leave null for tools that
   don't have a logo icon; those get a clean text badge instead.
------------------------------------------------------------ */
export const TECH_STACK = [
  {
    group: "Editors & Environments",
    items: [
      { name: "Visual Studio Code", icon: null },
      { name: "XAMPP", icon: "SiXampp" },
      { name: "NetBeans", icon: "SiApachenetbeanside" },
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Postman", icon: "SiPostman" },
      { name: "Google Apps Script", icon: "SiGoogleappsscript" },
    ],
  },
  {
    group: "Languages",
    items: [
      { name: "HTML5", icon: "SiHtml5" },
      { name: "CSS3", icon: null },
      { name: "JavaScript (ES6+)", icon: "SiJavascript" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "PHP", icon: "SiPhp" },
      { name: "Python", icon: "SiPython" },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "React", icon: "SiReact" },
      { name: "React Router DOM", icon: "SiReactrouter" },
      { name: "Bootstrap", icon: "SiBootstrap" },
      { name: "Bootstrap 5", icon: "SiBootstrap" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "Ionic", icon: "SiIonic" },
      { name: "Vite", icon: "SiVite" },
    ],
  },
  {
    group: "Backend & APIs",
    items: [
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Express.js", icon: "SiExpress" },
      { name: "REST APIs", icon: null },
      { name: "Axios", icon: "SiAxios" },
      { name: "npm", icon: "SiNpm" },
      { name: "Django", icon: "SiDjango" },
    ],
  },
  {
    group: "Databases",
    items: [
      { name: "MySQL", icon: "SiMysql" },
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "Firebase", icon: "SiFirebase" },
      { name: "phpMyAdmin", icon: "SiPhpmyadmin" },
    ],
  },
  {
    group: "Data & Analytics",
    items: [
      { name: "Pandas", icon: "SiPandas" },
      { name: "Power BI", icon: null },
      { name: "Tableau", icon: null },
      { name: "Chart.js", icon: "SiChartdotjs" },
    ],
  },
  {
    group: "Design & Creative",
    items: [
      { name: "Figma", icon: "SiFigma" },
      { name: "Canva", icon: null },
      { name: "Adobe Photoshop", icon: null },
      { name: "Blender (3D)", icon: "SiBlender" },
      { name: "Draw.io", icon: "SiDiagramsdotnet" },
    ],
  },
  {
    group: "PM & Version Control",
    items: [
      { name: "Jira", icon: "SiJira" },
      { name: "Trello", icon: "SiTrello" },
      { name: "Git", icon: "SiGit" },
      { name: "GitHub", icon: "SiGithub" },
      { name: "ESLint", icon: "SiEslint" },
      { name: "Prettier", icon: "SiPrettier" },
    ],
  },
  {
    group: "Productivity",
    items: [
      { name: "Google Workspace", icon: null },
      { name: "Google Sites", icon: null },
      { name: "Microsoft Office", icon: null },
    ],
  },
];

/* ------------------------------------------------------------
   PROJECTS
   category: "Academic" | "Client-Based" | "Personal" | "Hardware"
   type: "software" | "figma" | "multimedia" | "hardware"
   images: array of paths -> becomes a carousel in the modal.
   links: { live, github, figma } — leave blank strings if none.
------------------------------------------------------------ */
export const PROJECTS = [
  // ---------------- Academic ----------------
  {
    id: "wireframe-coco",
    name: "Wireframe — CoCo",
    category: "Academic",
    type: "figma",
    overview: "CoCo (Computer Coach) is an educational game that teaches kids basic computer parts and their functions.",
    problem: "Kids may find learning computer basics difficult and less engaging.",
    solution: "CoCo uses interactive and fun activities to make learning computer basics easier and more enjoyable.",
    tech: ["Figma"],
    cover: "/images/projects/CoCoWireFrame.png",
    images: ["/images/projects/CoCoWireFrame.png"],
    links: { figma: "", live: "", github: "" },
  },
  {
    id: "wireframe-techtots",
    name: "TechTots",
    category: "Academic",
    type: "figma",
    overview: "TechTots is an educational mobile app that helps toddlers learn basic technology concepts through fun and interactive activities.",
    problem: "Toddlers may have limited exposure to technology and need simple, engaging ways to learn basic concepts.",
    solution: "TechTots uses colorful visuals and interactive activities to introduce technology concepts in a toddler-friendly way.",
    tech: ["Angular", "Ionic", "Firebase", "Figma"],
    cover: "/images/projects/techtots.png",
    images: ["/images/projects/techtots.png"],
    links: { figma: "", live: "", github: "" },
  },
  {
    id: "riddle-of-shadows",
    name: "Riddle of Shadow",
    category: "Academic",
    type: "software",
    overview: "Riddle of Shadow is a detective game where players solve cases by finding clues and uncovering mysteries.",
    problem: "Players need an engaging way to practice observation, investigation, and problem-solving skills.",
    solution: "The game provides challenging cases and clues that players investigate to solve each mystery.",
    tech: ["Java", "NetBeans", "Figma"],
    images: ["/images/projects/riddleofshadows.png"],
    links: { live: "", github: "" },
  },
  {
    id: "gym-management-system",
    name: "Gym Management System",
    category: "Academic",
    type: "software",
    overview: "A C# gym management system that manages members, subscriptions, and gym administration.",
    problem: "Managing member records and subscriptions manually can be time-consuming and difficult to organize.",
    solution: "The system provides admin and member features to efficiently manage memberships, subscriptions, and gym records.",
    tech: ["C#", "MySQL Server", "Visual Studio Code"],
    images: ["/images/projects/gms.png"],
    links: { live: "", github: "" },
  },
  {
    id: "my-portfolio-v1",
    name: "First Portfolio Project",
    category: "Academic",
    type: "software",
    overview: "A personal portfolio website showcasing my skills, projects, experience, and achievements as an IT student.",
    problem: "I needed a professional platform to present my skills and projects in one accessible place.",
    solution: "Developed a responsive portfolio website that organizes my information and projects in a clean and user-friendly layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    images: ["/images/projects/1stwebsite.png"],
    links: { live: "", github: "" },
  },
  {
    id: "travel-blog-website",
    name: "Travel Blog Website",
    category: "Academic",
    type: "software",
    overview: "A travel blog website that shares travel destinations, experiences, tips, and recommendations for travelers.",
    problem: "Travelers need an easy way to discover destinations and find useful information when planning trips.",
    solution: "Created a user-friendly website that organizes travel guides, destination information, and recommendations in an engaging layout.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "phpmyadmin", "XAMPP", "VS Code"],
    images: ["/images/projects/tbw.png"],
    links: { live: "", github: "" },
  },
  {
    id: "printing-shop-system-figma",
    name: "Printing Shop System — Figma",
    category: "Academic",
    type: "figma",
    overview: "A Figma UI/UX design for a printing shop management system that helps manage customers, printing services, orders, and transactions.",
    problem: "Manual management of printing orders and customer requests can be time-consuming and difficult to organize.",
    solution: "Designed an intuitive interface that organizes printing services, customer information, orders, and transactions in one system.",
    tech: ["Figma"],
    cover: "",
    images: ["/images/projects/print.png"],
    links: { figma: "", live: "", github: "" },
  },
  {
    id: "sharpee-application",
    name: "LifeAppDate Application",
    category: "Academic",
    type: "software",
    overview: "Life Appdate is an interactive educational game developed in Unity that provides an engaging gameplay experience for students.",
    problem: "Students may find traditional learning activities less engaging and interactive.",
    solution: "Developed a game-based application that uses interactive gameplay to create a more engaging learning experience.",
    tech: ["Unity", "Figma"],
    images: ["/images/projects/lifeapp.png"],
    links: { live: "", github: "" },
  },
  {
    id: "student-progress-recommender",
    name: "Student Progress and Recommender Management System",
    category: "Academic",
    type: "software",
    overview: "A web-based system that monitors student academic performance and provides data-driven recommendations.",
    problem: "Monitoring student performance and identifying areas for improvement can be difficult to manage manually.",
    solution: "Developed a system that tracks student scores, provides analytics, and generates recommendations based on academic performance.",
    tech: ["PHP, HTML, CSS, MySQL, JavaScript, TypeScript, Bootstrap, Chart.js"],
    images: [],
    links: { live: "", github: "" },
  },
  {
    id: "django-ecommerce",
    name: "Django E-Commerce",
    category: "Academic",
    type: "software",
    overview: "Arcane Archives is an online bookstore where users can browse, purchase, and manage books through a digital shopping platform.",
    problem: "Customers need a convenient way to discover and purchase books without having to visit a physical bookstore.",
    solution: "Developed an e-commerce platform that allows users to browse available books, add items to their cart, and purchase books online.",
    tech: ["Python", "Django"],
    images: ["/images/projects/arcane.png"],
    links: { live: "", github: "" },
  },
  {
    id: "multimedia-arts",
    name: "Multimedia Arts — Publication Materials, Promotional Materials, Advertisements",
    category: "Academic",
    type: "multimedia",
    overview:
      "A collection of creative designs including advertisements, promotional materials, and publication materials for various projects and activities.",
    tech: ["Adobe Photoshop", "Canva"],
    images: ["/images/projects/multimediaarts.png"],
    links: {},
  },
  {
    id: "multimedia-3d-blender",
    name: "3D Multimedia Arts — Hot Air Balloon, Chair & Stall (Blender)",
    category: "Academic",
    type: "multimedia",
    overview: "A 3D modeling project featuring a chair and stall created using digital modeling and visualization techniques.",
    tech: ["Blender"],
    images: [],
    links: {},
  },

  // ---------------- Client-Based ----------------
  {
    id: "victoria-hearstrong-scholarship",
    name: "Victoria Hearstrong Scholarship Management System",
    category: "Client-Based",
    type: "software",
    overview: "A web-based scholarship management system that organizes scholar records, applications, and document information.",
    problem: "Managing scholarship records and applicant information manually can be difficult to organize and track.",
    solution: "Developed a centralized system for managing scholar information, applications, and related records.",
    tech: ["HTML", "CSS", "JavaScript", "Vercel", "Supabase", "Git/Github"],
    images: ["/images/projects/vho.png"],
    links: { live: "", github: "" },
  },
  {
    id: "visitor-log-system",
    name: "Visitor Log System",
    category: "Client-Based",
    type: "software",
    overview: "A digital visitor log system developed for the School Division Office to automate their manual paper-based visitor registration process.",
    problem: "The manual paper-based process made visitor records difficult to organize and resulted in lost or missing records.",
    solution: "Developed a digital logging system that records and organizes visitor information, reducing paperwork and making records easier to manage and retrieve.",
    tech: ["Google App Script", "Typescript", "HTML", "CSS"],
    images: ["/images/projects/attendance.png"],
    links: { live: "", github: "" },
  },
  {
    id: "enan-repair-shop-website",
    name: "Enan Repair Shop Website",
    category: "Academic",
    type: "software",
    overview: "Enan Repair Shop is a real-client website for a gadget repair shop that provides customers with information about repair services, products, and shop location.",
    problem: "Customers need to visit or contact the shop to ask about available services, products, and location details.",
    solution: "The website provides accessible information about the shop's services, products, and location, allowing customers to get the details they need without visiting the shop.",
    tech: ["HTML", "CSS", "JavaScript", "VS Code", "Figma"],
    images: ["/images/projects/enanshop.png"],
    links: { live: "", github: "" },
  },

  // ---------------- Personal ----------------
  {
    id: "expense-tracker-pro",
    name: "Expense Tracker Pro",
    category: "Personal",
    type: "software",
    overview: "A full-stack expense tracking application that helps users record, monitor, and analyze their expenses.",
    problem: "Tracking personal expenses manually can make it difficult to monitor spending and manage finances.",
    solution: "Developed an application with expense management, categorization, and visual analytics features.",
    tech: ["React", "TypeScript", "Bootstrap 5", "Vite", "Node.js", "Express.js", "PostgreSQL", "Chart.js"],
    images: [],
    links: { live: "", github: "" },
  },
  {
    id: "my-portfolio-current",
    name: "Personal Portfolio",
    category: "Personal",
    type: "software",
    overview: "This portfolio site — built with React, Vite and Tailwind CSS.",
    problem: "Needed one place to show data, QA and web/UI-UX work to employers.",
    solution: "A single-page site with filterable projects, a certificate library and a live contact form.",
    tech: ["HTML", "JavaScript", "Node.js","React", "Vite", "Tailwind CSS", "Netlify", "Git/Github"],
    images: ["/images/projects/port.png"],
    links: { live: "", github: "" },
  },

  // ---------------- Hardware & Technical Support ----------------
  {
    id: "pc-formatting-bootable",
    name: "PC Formatting via Bootable Drive",
    category: "Hardware",
    type: "hardware",
    overview:
      "Formatted and reinstalled operating systems on desktop PCs using a bootable USB drive.",
    tech: [],
    images: ["/images/projects/boot.png"],
    links: {},
  },
  {
    id: "pc-assembly-disassembly",
    name: "PC Assembly & Disassembly",
    category: "Hardware",
    type: "hardware",
    overview: "A hands-on hardware activity involving the proper assembly and disassembly of desktop computer components.",
    tech: [],
    images: ["/images/projects/disassemble.jpg"],
    links: {},
  },
  {
    id: "ram-cleaning",
    name: "RAM Cleaning & Maintenance",
    category: "Hardware",
    type: "hardware",
    overview: "A hands-on PC maintenance activity focused on cleaning and maintaining RAM modules and their slots.",
    tech: [],
    images: ["/images/projects/ramclean.png"],
    links: {},
  },
  {
    id: "ram-swap-repair",
    name: "RAM Swapping for Repair",
    category: "Hardware",
    type: "hardware",
    overview: "A hands-on troubleshooting activity involving RAM swapping to diagnose and resolve computer memory issues.",
    tech: [],
    images: ["/images/projects/ramswap.png"],
    links: {},
  },
];

/* ------------------------------------------------------------
   CERTIFICATES
   image: drop files into  public/images/certs/  then reference
   them below as "/images/certs/yourfile.jpg" (leading slash,
   no "public" in the path).
   date: "Month Year" only, e.g. "August 2024"
   link: optional — your Google Drive share link, if you want a
   "View certificate" link on the card.
   No certificates were provided yet — placeholders below show
   the shape. Delete them once you add your real ones.
------------------------------------------------------------ */
export const CERTIFICATES = [
  {
    title: "Azure SQL Database Architecture Course",
    image: "/images/certs/10.jpg",
    date: "September 2026",
    description: "Covered the fundamentals of Azure SQL Database architecture, including database components, deployment concepts, security, and cloud-based database management.",
    link: "",
  },
  {
    title: "Introduction to Power Query in Excel – Basics Course",
    image: "/images/certs/1.jpg",
    date: "September 2026",
    description: "Covered the basics of Power Query for importing, transforming, cleaning, and preparing data in Excel for analysis and reporting.",
    link: "",
  },
  {
    title: "Introduction to Software Testing",
    image: "/images/certs/2.jpg",
    date: "September 2026",
    description: "Covered fundamental software testing concepts, testing processes, test cases, defect identification, and quality assurance practices.",
    link: "",
  },
  {
    title: "Azure Fundamentals",
    image: "/images/certs/12.jpg",
    date: "September 2026",
    description: "Demonstrates foundational knowledge of cloud concepts, Azure services, security, and cloud management.",
    link: "",
  },
  {
    title: "Microsoft Cybersecurity Course: Security, Compliance, and Identity Fundamentals",
    image: "/images/certs/3.jpg",
    date: "May 2026",
    description: "Covered foundational concepts in cybersecurity, including security principles, identity management, compliance, and Microsoft security solutions.",
    link: "",
  },
  {
    title: "Microsoft Artificial Intelligence Course: Azure AI Fundamentals",
    image: "/images/certs/4.jpg",
    date: "May 2026",
    description: "Covered fundamental AI concepts and Azure AI services, including machine learning, computer vision, natural language processing, and responsible AI.",
    link: "",
  },
  {
    title: "Maintaining Computer Systems and Networks",
    image: "/images/certs/5.jpg",
    date: "May 2026",
    description: "Covered basic techniques for maintaining computer systems and networks, including troubleshooting, preventive maintenance, and system performance monitoring.",
    link: "",
  },
  {
    title: "Introduction to Computer System Servicing",
    image: "/images/certs/6.jpg",
    date: "May 2026",
    description: "Covered fundamental computer servicing concepts, including hardware components, troubleshooting, maintenance, and basic system repair.",
    link: "",
  },
  {
    title: "Installing and Configuring Computer Systems",
    image: "/images/certs/7.jpg",
    date: "May 2026",
    description: "Covered the installation and configuration of computer hardware, operating systems, drivers, and essential system settings.",
    link: "",
  },
  {
    title: "Developing Designs for User Interface",
    image: "/images/certs/8.jpg",
    date: "May 2026",
    description: "Covered fundamental UI design principles, including layout, visual hierarchy, usability, and creating user-friendly digital interfaces.",
    link: "",
  },
  {
    title: "Developing Designs for User Experience",
    image: "/images/certs/9.jpg",
    date: "May 2026",
    description: "Covered UX design fundamentals, including user needs, user flows, usability, information architecture, and designing intuitive user experiences.",
    link: "",
  },
  {
    title: "Computer Basics",
    image: "/images/certs/11.jpg",
    date: "June 2025",
    description: "Covered fundamental computer concepts, including computer hardware and software, operating systems, file management, and basic digital skills.",
    link: "",
  },
];

/* ------------------------------------------------------------
   INTERNSHIP EXPERIENCE
------------------------------------------------------------ */
export const INTERNSHIP = {
  role: "IT Support",
  company: "School Division Office of Valenzuela — DepEd",
  address: "Pio Valenzuela St., Marulas, Valenzuela City",
  industry: "Department of Education",
  specialization: [
    "Curriculum Implementation Division (CID)",
    "School Governance and Operations Division (SGOD)",
  ],
  duration: "3 months",
  startDate: "July 2025",
  endDate: "October 2025",
  responsibilities: [
    {
      group: "Library and Records Management",
      items: [
        "Organized books and resources, including stamping, labeling, and sorting materials",
        "Maintained inventories and ensured accurate recordkeeping",
        "Assisted visitors and borrowers for efficient library operations",
      ],
    },
    {
      group: "Records and Data Handling",
      items: [
        "Encoded, updated, and validated institutional data",
        "Managed datasets such as procurement records and inter-school reports",
        "Ensured proper documentation practices for reliability and consistency",
      ],
    },
    {
      group: "System and Database Support",
      items: [
        "Assisted in creating scripts for faster data processing",
        "Supported digital platforms like the Online Public Access Catalog (OPAC)",
        "Helped maintain accuracy and smooth operation of institutional systems",
      ],
    },
    {
      group: "Technical Support",
      items: [
        "Set up and maintained desktops, printers, and other equipment",
        "Troubleshoot technical issues and provided basic IT support",
        "Developed practical problem-solving skills in real-world technical scenarios",
      ],
    },
    {
      group: "Creative Support and Content Development",
      items: [
        "Designed posters, certificates, teasers, and other visual content",
        "Edited photos and videos for official purposes",
        "Developed instructional and promotional materials to enhance engagement",
      ],
    },
    {
      group: "Administrative Support",
      items: [
        "Prepared reports, printed and sorted documents, and organized files",
        "Assisted in procurement and documentation processes",
        "Supported general office operations to improve departmental efficiency",
      ],
    },
    {
      group: "Project-Based Work",
      items: [
        "Participated in collaborative projects requiring planning, execution, and problem-solving",
        "Developed automated systems, QR code tools, and database management solutions",
        "Proposed improvements to current processes and applied classroom knowledge to practical challenges",
      ],
    },
  ],
};
