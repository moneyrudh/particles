// src/resumeData.js

const resumeData = {
    name: "Anirudh Ananthasubramaniam",
    contact: {
      phone: "+1 551 375 6556",
      email: "anirudhananth99@gmail.com",
      portfolio: "https://anirudhananth.com/"
    },
    summary: "Master's candidate in Computer Science at New York University with 2+ years of full-stack development expertise. Demonstrated track record of optimizing system performance and developing scalable solutions using MEAN stack, JavaScript, and Golang. Consistently delivered 60%+ improvements in application performance and 90%+ reduction in latency through revamped architectural solutions. Seeking full-time software engineering opportunities from July 2025.",
    projects: [
      {
        name: "Jobbin",
        description: "Chrome Extension that tracks job applications on multiple Job Boards with a user-friendly dashboard",
        tech: "React, Node.js, JavaScript, Tailwind, PostgreSQL, Express.js, OpenAI API, Anthropic API",
        link: "https://chromewebstore.google.com/detail/jobbin/lbfabagnifhinlikbjkddkjindmabcfp"
      },
      {
        name: "W Lang",
        description: "A programming language that is transpiled to C with lexer coded using Flex",
        tech: "C, Flex",
        link: "https://github.com/moneyrudh/w-lang"
      }
    ],
    workExperience: [
      {
        title: "Software Engineer Intern",
        company: "Juniper Networks, Inc.",
        location: "Sunnyvale, California",
        date: "June 2024 -- August 2024",
        description: [
          "Developed optimized ArangoDB query to obtain all shortest network paths...",
          "Architectured a robust RESTful API using Go that leverages this query...",
          "Engineered a wrapper API to isolate anomalous application nodes..."
        ]
      },
      {
        title: "Software Engineer II (Full-Stack)",
        company: "Stealth Startup",
        location: "Bangalore, India",
        date: "August 2021 -- June 2023",
        description: [
          "Spearheaded comprehensive UI and API suites, achieving a 68% improvement...",
          "Led the creation of a candidate recruitment portal using Angular, Node.js...",
          "Revamped frontend JavaScript logic, achieving 22% faster page load times...",
          "Migrated server to utilize Connection Pooling, resulting in a 94% reduction...",
          "Utilized GCP, Docker, and Kubernetes for containerization, reducing infrastructure...",
          "Integrated DevOps pipelines with Jenkins CI/CD, resulting in 35% faster time-to-market..."
        ]
      }
    ],
    education: [
      {
        school: "New York University",
        location: "Brooklyn, New York",
        degree: "Master's, Computer Science",
        date: "Expected May 2025",
        details: [
          "Cumulative GPA: 3.85/4.0",
          "Relevant Coursework: Algorithms, Operating Systems, Big Data, Database..."
        ]
      },
      {
        school: "Visvesvaraya Technological University",
        location: "Bangalore, India",
        degree: "Bachelor of Engineering, Computer Science",
        date: "August 2017 -- August 2021",
        details: [
          "Relevant Coursework: Web Development, Software Engineering, and Advanced..."
        ]
      }
    ],
    skills: [
      "Angular", "React", "Next.js", "Express.js", "Node.js", "MongoDB", "ArangoDB", "Jenkins", "GCP",
      "JavaScript", "TypeScript", "Go/Golang", "Java", "C", "C++", "C#", "Python", "SQL",
      "HTML5", "CSS", "jQuery", "Tailwind",
      "PostgreSQL", "MySQL", "Redis",
      "Leadership", "Communication", "Problem-solving", "Time Management", "Critical thinking"
    ]
  };
  
  export default resumeData;