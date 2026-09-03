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
    overview: "Add a short overview of what CoCo is and who it's for.",
    problem: "Add the problem this wireframe was solving.",
    solution: "Add how the wireframe solved it.",
    tech: ["Figma"],
    cover: "",
    images: [],
    links: { figma: "", live: "", github: "" },
  },
  {
    id: "wireframe-comfu",
    name: "Wireframe — ComFu",
    category: "Academic",
    type: "figma",
    overview: "Add a short overview of what ComFu is and who it's for.",
    problem: "Add the problem this wireframe was solving.",
    solution: "Add how the wireframe solved it.",
    tech: ["Figma"],
    cover: "",
    images: [],
    links: { figma: "", live: "", github: "" },
  },
  {
    id: "riddle-of-shadows",
    name: "The Riddle of Shadows",
    category: "Academic",
    type: "software",
    overview: "A Java game application built in Apache NetBeans IDE.",
    problem: "Add the assignment brief / goal of the game project.",
    solution: "Add how you approached building the game — mechanics, structure, etc.",
    tech: ["Java", "NetBeans"],
    images: [],
    links: { live: "", github: "" },
  },
  {
    id: "gym-management-system",
    name: "Gym Management System",
    category: "Academic",
    type: "software",
    overview: "Add a short overview of the system and who it's for.",
    problem: "Add the problem the gym staff/owners were facing.",
    solution: "Add how your system solved it — key features.",
    tech: [],
    images: [],
    links: { live: "", github: "" },
  },
  {
    id: "wireframe-gym-system",
    name: "Wireframe — Gym System",
    category: "Academic",
    type: "figma",
    overview: "Wireframe companion for the Gym Management System.",
    problem: "",
    solution: "",
    tech: ["Figma"],
    cover: "",
    images: [],
    links: { figma: "", live: "", github: "" },
  },
  {
    id: "multimedia-arts",
    name: "Multimedia Arts — Logo, Ad, Character & Background Editing",
    category: "Academic",
    type: "multimedia",
    overview:
      "A set of multimedia pieces: logo design, an advertisement, character editing and background image work.",
    tech: ["Adobe Photoshop", "Canva"],
    images: [],
    links: {},
  },
  {
    id: "wireframe-techtots",
    name: "Wireframe — TechTots",
    category: "Academic",
    type: "figma",
    overview: "Add a short overview of what TechTots is and who it's for.",
    problem: "",
    solution: "",
    tech: ["Figma"],
    cover: "",
    images: [],
    links: { figma: "", live: "", github: "" },
  },
  {
    id: "wireframe-enan-repair-shop",
    name: "Wireframe — Enan Repair Shop",
    category: "Academic",
    type: "figma",
    overview: "Wireframe for the Enan Repair Shop website (see the live client project below).",
    problem: "",
    solution: "",
    tech: ["Figma"],
    cover: "",
    images: [],
    links: { figma: "", live: "", github: "" },
  },
  {
    id: "enan-repair-shop-website",
    name: "Enan Repair Shop Website",
    category: "Academic",
    type: "software",
    overview: "A real-client website built for Enan Repair Shop.",
    problem: "Add the client's problem — what they needed online.",
    solution: "Add the solution you delivered and key features.",
    tech: [],
    images: [],
    links: { live: "", github: "" },
  },
  {
    id: "my-portfolio-v1",
    name: "My Portfolio Website (previous version)",
    category: "Academic",
    type: "software",
    overview: "An earlier version of your personal portfolio website.",
    problem: "",
    solution: "",
    tech: [],
    images: [],
    links: { live: "", github: "" },
  },
  {
    id: "basket-champs-design",
    name: "Basket Champs Design",
    category: "Academic",
    type: "multimedia",
    overview: "Add what Basket Champs is and what the design work covered.",
    tech: [],
    images: [],
    links: {},
  },
  {
    id: "multimedia-3d-blender",
    name: "3D Multimedia Arts — Hot Air Balloon, Chair & Stall (Blender)",
    category: "Academic",
    type: "multimedia",
    overview: "A set of 3D models modeled and rendered in Blender.",
    tech: ["Blender"],
    images: [],
    links: {},
  },
  {
    id: "travel-blog-website",
    name: "Travel Blog Website",
    category: "Academic",
    type: "software",
    overview: "Add a short overview of the travel blog site.",
    problem: "",
    solution: "",
    tech: [],
    images: [],
    links: { live: "", github: "" },
  },
  {
    id: "printing-shop-system-figma",
    name: "Printing Shop System — Figma",
    category: "Academic",
    type: "figma",
    overview: "Add a short overview of the Printing Shop System.",
    problem: "",
    solution: "",
    tech: ["Figma"],
    cover: "",
    images: [],
    links: { figma: "", live: "", github: "" },
  },
  {
    id: "sharpee-application",
    name: "Sharpee Application",
    category: "Academic",
    type: "software",
    overview: "Add a short overview of the Sharpee Application.",
    problem: "",
    solution: "",
    tech: [],
    images: [],
    links: { live: "", github: "" },
  },
  {
    id: "student-progress-recommender",
    name: "Student Progress and Recommender Management System",
    category: "Academic",
    type: "software",
    overview: "Add a short overview — what it tracks and recommends, and for whom.",
    problem: "Add the problem this thesis/capstone-level system solves.",
    solution: "Add the solution — key modules and how recommendations are generated.",
    tech: [],
    images: [],
    links: { live: "", github: "" },
  },
  {
    id: "scatter-plots-python",
    name: "Scatter Plots with Python",
    category: "Academic",
    type: "software",
    overview: "A data visualization exercise plotting data using Python.",
    problem: "",
    solution: "",
    tech: ["Python", "Pandas"],
    images: [],
    links: { live: "", github: "" },
  },
  {
    id: "django-ecommerce",
    name: "Django E-Commerce",
    category: "Academic",
    type: "software",
    overview: "An e-commerce web application built with Django.",
    problem: "",
    solution: "",
    tech: ["Python", "Django"],
    images: [],
    links: { live: "", github: "" },
  },

  // ---------------- Client-Based ----------------
  {
    id: "victoria-hearstrong-scholarship",
    name: "Victoria Hearstrong Scholarship Management System",
    category: "Client-Based",
    type: "software",
    overview: "Add a short overview of the scholarship system and the client.",
    problem: "",
    solution: "",
    tech: [],
    images: [],
    links: { live: "", github: "" },
  },
  {
    id: "visitor-log-system",
    name: "Visitor Log System",
    category: "Client-Based",
    type: "software",
    overview: "Add a short overview of the visitor log system and the client.",
    problem: "",
    solution: "",
    tech: [],
    images: [],
    links: { live: "", github: "" },
  },
  {
    id: "enan-repair-shop-client",
    name: "Enan Repair Shop",
    category: "Client-Based",
    type: "software",
    overview: "Real-client engagement — see full project details under Academic Projects.",
    problem: "",
    solution: "",
    tech: [],
    images: [],
    links: { live: "", github: "" },
  },

  // ---------------- Personal ----------------
  {
    id: "expense-tracker-pro",
    name: "Expense Tracker Pro",
    category: "Personal",
    type: "software",
    overview: "A personal finance tracking application.",
    problem: "Add the problem you built this to solve for yourself/users.",
    solution: "Add the key features — categories, charts, budgets, etc.",
    tech: [],
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
    tech: ["React", "Vite", "Tailwind CSS"],
    images: [],
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
    images: [],
    links: {},
  },
  {
    id: "pc-assembly-disassembly",
    name: "PC Assembly & Disassembly",
    category: "Hardware",
    type: "hardware",
    overview: "Assembled and disassembled desktop PCs for maintenance and troubleshooting.",
    tech: [],
    images: [],
    links: {},
  },
  {
    id: "ram-cleaning",
    name: "RAM Cleaning & Maintenance",
    category: "Hardware",
    type: "hardware",
    overview: "Cleaned RAM modules and contacts to resolve boot and performance issues.",
    tech: [],
    images: [],
    links: {},
  },
  {
    id: "ram-swap-repair",
    name: "RAM Swapping for Repair",
    category: "Hardware",
    type: "hardware",
    overview: "Diagnosed faulty units and restored working computers by swapping in spare RAM.",
    tech: [],
    images: [],
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
