// All portfolio content lives here. Everything is taken from the resume.
// Leave `github` (and any project `github` / `demo`) empty until you have a real URL:
// empty values hide the related buttons instead of showing broken links.

export const profile = {
  name: "Mrudula V",
  title: "Software Developer",
  location: "Chennai, Tamil Nadu, India",
  email: "mrudulavmithula@gmail.com",
  phone: "+91 8105379165",
  phoneHref: "+918105379165",
  linkedin: "https://www.linkedin.com/in/mrudulavmithula",
  github: "https://github.com/mrudulav19",
  resume: "/Mrudula_V_Resume.pdf",
  valueProp:
    "I build backend applications, REST APIs, and cloud-ready architectures with Python and C#, backed by PostgreSQL, Docker, and careful database work.",
  summary:
    "Software Developer with 2+ years of experience building backend applications, REST APIs, and cloud-ready architectures using Python and C#. Proficient in PostgreSQL, Docker, and database management in cloud environments.",
  summaryExtra:
    "My experience spans enterprise application and IAM support at Accenture, database administration and testing at Bharat Electronics Limited, and backend projects built with Django, Flask, and FastAPI. I am also pursuing an MBA in Business Analytics.",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

export const facts = [
  { label: "Experience", value: "2+ years" },
  { label: "SLA compliance", value: "98% across user lifecycle requests" },
  { label: "Access requests", value: "20+ per week at Accenture" },
  { label: "Certified", value: "Microsoft Azure Fundamentals (AZ-900)" },
];

export const skills = {
  Languages: ["Python", "C#", "JavaScript", "SQL"],
  Frameworks: ["Django", "Flask", "FastAPI", "ASP.NET Core", "React"],
  Databases: ["PostgreSQL", "SQL Server"],
  Tools: ["Docker", "Git", "Postman", "ServiceNow"],
  Concepts: [
    "REST APIs", "OOP", "ORM", "Database Design", "API Testing",
    "Unit Testing", "Agile/Scrum", "SDLC", "Manual Testing",
  ],
};

export const experience = [
  {
    role: "Product App Developer Associate",
    company: "Accenture",
    period: "Oct 2024 to Sep 2026",
    bullets: [
      "Supported enterprise application and IAM workflows, including user access provisioning, modification, and de-provisioning for 20+ weekly requests.",
      "Performed SQL-based data validation, troubleshooting, and integrity checks, improving access-review accuracy by 20%.",
      "Onboarded an application to a pre-production environment by executing and validating 5 API calls using Postman.",
      "Maintained 98% SLA compliance across user lifecycle requests and prepared audit-ready Critical Access Review (CAR) documentation.",
      "Authored 5 SOPs and knowledge-base articles adopted across the team.",
    ],
  },
  {
    role: "Database Administrator & Manual Tester",
    company: "Bharat Electronics Limited",
    period: "Dec 2023 to Oct 2024",
    bullets: [
      "Executed targeted SQL queries to remove 100 redundant user records and supported end-users with website profile creation.",
      "Validated website profile data synchronization against backend databases across 30+ user journeys to ensure data integrity.",
      "Executed 20+ periodic database refreshes to support ongoing maintenance and ensure seamless application operations.",
      "Identified and verified 10 database record discrepancies by cross-checking user profile information between the website and SQL database.",
      "Executed routine SQL queries for database maintenance across ~500 user records and ensured accurate data management in application records.",
    ],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "Varcons Technologies",
    period: "Oct 2022 to Nov 2022",
    bullets: [
      "Built a full-stack Grocery Store web application using HTML, CSS, JavaScript, Node.js, and Express, covering product catalog, user accounts, and order management.",
      "Integrated frontend and backend components using 5 REST APIs to streamline user interactions and application functionality.",
    ],
  },
];

// `year` is optional: the resume gives no project years, so none are shown.
// Add `year`, `github`, and `demo` per project when you have real values.
export const projects = [
  {
    name: "TaskFlow",
    status: "In development",
    year: "",
    tech: ["Python", "Django", "PostgreSQL", "Unit Testing"],
    description:
      "Django-based task management application with structured views, templates, and backend workflows, built to streamline project tracking and task organization.",
    highlights: [
      "CRUD operations, task status management, priority levels, and deadline tracking.",
      "Safeguards against destructive GET requests, with 21 view tests passing.",
      "27 automated tests covering forms, views, CRUD operations, user permissions, and input validation.",
    ],
    github: "",
    demo: "",
  },
  {
    name: "LogLens",
    year: "",
    tech: ["Python", "Flask", "PostgreSQL", "SQLAlchemy", "Unit Testing"],
    description:
      "Log analysis backend with REST APIs to upload log files, parse entries, list uploaded files, retrieve parsed entries, and delete files.",
    highlights: [
      "Log file metadata and parsed entries stored in PostgreSQL through SQLAlchemy, with input validation and error handling.",
      "Verified with 15+ automated tests and API requests.",
    ],
    github: "",
    demo: "",
  },
  {
    name: "ShopStack",
    year: "",
    tech: ["Python", "FastAPI", "PostgreSQL", "Docker", "React", "Unit Testing"],
    description:
      "Decoupled product catalog and cart application built as separate FastAPI microservices with containerized PostgreSQL storage.",
    highlights: [
      "5 REST endpoints for product retrieval, cart operations, and stock reduction.",
      "Cart Service integrated with the Product Service over REST; services containerized with Docker Compose.",
      "Pytest suite validating API endpoints and database CRUD operations, with a 100% pass rate across 4 test cases.",
    ],
    github: "",
    demo: "",
  },
  {
    name: "Hotel Management Database",
    year: "",
    tech: ["SQL", "SQL Server"],
    description:
      "Relational database system managing rooms, room types, customers, and bookings.",
    highlights: [
      "Complex SQL queries using multiple JOINs, aggregations, DATEDIFF, CASE statements, and NULL handling to extract booking metrics and insights.",
    ],
    github: "",
    demo: "",
  },
];

export const education = [
  {
    degree: "MBA, Business Analytics",
    school: "Jain's College",
    period: "Oct 2024 to Oct 2026",
    gpa: "7.8/10",
  },
  {
    degree: "B.E., Information Science & Engineering",
    school: "NMIT College",
    period: "Aug 2019 to Aug 2023",
    gpa: "7.43/10",
  },
];

export const publication = {
  title: "Heart Disease Detection using ANNs",
  venue: "Grenze Scientific Society",
  year: "2023",
};

export const certifications = [
  {
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "Oct 2026",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/VishwanathanMrudula-2328/7A8F8CF1ADF020DA?sharingId=CF09D7B0EB0038F3",
  },
  { name: "Foundation C#", issuer: "Microsoft & freeCodeCamp", date: "Oct 2025" },
  { name: "Stream Training", issuer: "Accenture", date: "Oct 2024" },
  { name: "Introduction to HTML5 & Python", issuer: "Coursera", date: "2020" },
];
