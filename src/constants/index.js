import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Full Stack Developer",
    company: "SkillHive Innovations",
    description: `Worked as a Full Stack Developer building and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated applications with MongoDB databases. Collaborated with stakeholders and team members to gather requirements, plan features, and deliver high-quality software solutions on schedule.`,
    technologies: ["JavaScript", "React.js", "Next.js", "MongoDB"],
  },
  {
    year: "2024 - 2025",
    role: "Frontend Developer",
    company: "TechSnapie Solutions",
    description: `Developed responsive and user-friendly web interfaces using HTML, CSS, and JavaScript. Collaborated with designers to implement UI/UX designs and ensured cross-browser compatibility. Optimized website performance and improved user experience through code reviews and testing.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    year: "2024 - 2025",
    role: "WordPress Developer",
    company: "TechSnapie Solutions",
    description: `Customized and developed WordPress themes and plugins to meet client requirements. Managed website content, performed regular updates, and ensured website security. Worked closely with clients to understand their needs and deliver tailored solutions.`,
    technologies: ["WordPress", "PHP", "JavaScript"],
  },
];

export const PROJECTS = [
  {
    title: "🛒 E-Commerce Platform",
    image: project1,
    description:
      "Developed a responsive eCommerce application featuring product listing, shopping cart functionality, user authentication, and order management. Integrated frontend components with backend APIs and optimized the user experience across devices.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Material UI", "REST APIs"],
    liveLink: "https://srisaimillets.com/", // Replace with your Sri Sai Millets live link when available
    githubLink: null, // Replace with your frontend repository link
  },
  {
    title: "📦 Inventory Management System",
    image: project2,
    description:
      "Built a full-stack inventory management solution for managing stock, purchase orders, invoices, and inventory tracking. Implemented advanced filtering, search, pagination, and integrated backend APIs for efficient inventory operations.",
    technologies: ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "Docker"],
    liveLink: "https://sentinel.excellenteng.in/login/", // Add live link when available
    githubLink: null,
  },
  {
    title: "📝 ThinkBoard – MERN Notes App",
    image: project3,
    description:
      "Developed a full-stack note management application with CRUD operations, responsive UI, and REST API integration. Implemented note creation, editing, deletion, and backend data persistence using MongoDB.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redis"],
    liveLink: "https://thinkboard-gules.vercel.app/", // Replace with your Vercel link
    githubLink: null,
  },
  {
    title: "👨‍💻 Portfolio Website",
    image: project4,
    description:
      "Designed and developed a personal portfolio website to showcase projects, technical skills, certifications, and professional experience with a responsive modern UI.",
    technologies: ["React.js", "Vite", "JavaScript", "HTML", "CSS"],
    liveLink: "https://prasannas-portfolio.vercel.app/", // Replace with your portfolio live link
    githubLink: null,
  },
];

export const CONTACT = {
  address: "Mahakavi bharathiyarnagar, N pudhur, Karaikudi - 630001",
  phoneNo: "+91 8825561687",
  email: "prasannasriram333@gmail.com",
};

export const EDUCATION = [
  {
    degree: "B.E. – Computer Science and Engineering",
    institution: "SNS College of Technology, Coimbatore, India",
    duration: "Sep 2023 – Sep 2027",
    grade: "CGPA: 8.01",
    description: "Focusing on core Computer Science topics, Data Structures & Algorithms, and modern web application development with React and Next.js.",
  },
  {
    degree: "Higher Secondary (HSC)",
    institution: "Sri Kalaivani Vidyalaya Matriculation Higher Secondary School, Coimbatore, India",
    duration: "Apr 2022 – Apr 2023",
    grade: "Percentage: 85%",
    description: "Completed higher secondary education specializing in Science and Mathematics.",
  },
];

