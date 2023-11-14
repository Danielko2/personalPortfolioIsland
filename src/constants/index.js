import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
   
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "c#",
        type: "Database",
    },
   /*  {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    }, */
   /*  {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    }, */
   /*  {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    }, */
   /*  {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    }, */
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
   /*  {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    }, */
   /*  {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    }, */
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
   /*  {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    } */
];

export const experiences = [
   /*  {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },*/
    {
        title: "Mixing Operative",
        company_name: "Lazenby | Weekend Role Concurrent with Studies",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "June 2020 - Present",
        points: [
            "Adaptability & Time Management: Successfully managed a part-time role as a Mixing Operative while maintaining a full-time academic schedule.",
            "Technical Proficiency: Gained hands-on experience with industrial mixing processes and machinery, showcasing my capacity to quickly learn and apply technical skills in a practical setting.",
            "Collaborative Teamwork: Worked as part of a team to meet production targets, contributing to efficient operations and quality output, even under the pressure of time constraints.",
            "Problem-Solving: Employed a detail-oriented approach to identify and troubleshoot operational challenges, ensuring the continuity of the production process during weekend shifts.",
        ],
    },
    {
        title: "Team Leader & Coordinator",
        company_name: "Lazenby",
        icon: meta,
        iconBg: "#383E56",
        date: "October 2019 - June 2020",
        points: [
          "Leadership & Team Management: Led a team of 5 people, ensuring efficient workflow, meeting production targets, and maintaining team morale. Regularly trained new team members, ensuring quick assimilation and productivity.",
          "Problem Solving: Actively identified bottlenecks in the production process and collaborated with cross-functional teams to implement solutions.",
          "Communication: Served as the primary point of contact between the production floor and senior management. Regularly presented production updates, challenges, and solutions to stakeholders.",
          "Technical Aptitude: Quickly learned and mastered various factory equipment and software tools used for inventory management, production scheduling, and quality control.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];