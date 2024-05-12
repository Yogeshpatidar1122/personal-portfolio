"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "ChatApp Next",
    description: "Developed ChatApp, a real-time messaging application using Next.js, MongoDB, Prisma, NextAuth.js, React Spinner,Date-fns and other modern technologies.Key features include real-time messaging, media sharing, group chats, and flexible authentication options	Implemented responsive design for seamless user experience across devices,	Contributed to project documentation and actively involved in bug fixes and feature implementations.Demonstrated ability to work collaboratively in a team environment and contribute effectively to project development.",
    image: '/images/projects/chatapp.png',
    tag: ["All"],
    gitUrl: "https://github.com/Yogeshpatidar1122/nextjs_chatApp",
    previewUrl: "https://chatapp-ecru-tau.vercel.app/",
  },
  {
    id: 2,
    title: "Next Portfolio Website",
    description: ",Hello and thank you for visiting my personal portfolio. Here, you'll find a curated collection showcasing my skills, experiences, and passion in various domains. As a versatile individual with a commitment to excellence, I've crafted this portfolio to offer you insight into my journey, projects, and contributions.",
    image: '/images/projects/portfolio.png',
    tag: ["All"],
    gitUrl: "https://github.com/Yogeshpatidar1122/personal-portfolio",
    previewUrl: "https://personal-portfolio-alpha-dun.vercel.app/",
  } ,
  {
    id: 3,
    title: "AmazonPro||E-commerce Application",
    description: "AmazonPro is an Ecommerce website clone to purchase the things online.Crafted user-friendly interfaces with a keen emphasis on intuitive navigation, delivering a seamless shopping experience that delights customers., Created secure stripe payment gateway, ensuring transaction safety and reliability for user during checkout process Optimized backend systems, utilizing technologies such as, React, MongoDB, Stripe, Tailwind Css, Mongoose, JWT for authentication and Tailwind to enhance platform performance ",
    image: "/images/projects/amazonpro.png",
    tag: ["All"],
    gitUrl: "https://github.com/Yogeshpatidar1122/Next_AmazonPro",
    previewUrl: "https://next-amazon-pro.vercel.app/",
  },
  {
    id: 4,
    title: "RENT N DRIVE ",
    description: "RENT N DRIVE is an website provide facility for rent a car for one day or a week on easily and cheaply.",
    image: "/images/projects/rentndrive.png",
    tag: ["All"],
    gitUrl: "https://github.com/Yogeshpatidar1122/RENT_N_DRIVE_nextapp",
    previewUrl: "https://rent-n-drive-nextapp.vercel.app/",
  },
  {
    id: 5,
    title: "Netflix Clone",
    description: "Netflix clone is based on netflix original app where you can create sign up your account and stream movies and show freely.Developed a Netflix clone using Next.js, Tailwind CSS, and Shade UI, with authentication via NextAuth.js and database management with Prisma and MongoDB.Ensured responsive design, efficient media streaming, and robust testing. Deployed with optimizations and comprehensive documentation, collaborating via Git for efficient development",
    image: "/images/projects/netflix.png",
    tag: ["All"],
    gitUrl: "/https://github.com/Yogeshpatidar1122/next-netflix-clone",
    previewUrl: "/https://next-netflix-clone-teal.vercel.app/auth",
  },
  {
    id: 6,
    title: "React Global News",
    description: "React global news is an web application where you read different types of news of different genre.●	Developed a React-based desktop application for personalized news delivery.Enabled reading thousands of daily news articles with a user-friendly interface.	Technologies: React for frontend, REST API (NEWS API) for fetching news, and additional React libraries ",
    image: "/images/projects/globalnews.png",
    tag: ["All"],
    gitUrl: "https://github.com/Yogeshpatidar1122/React_GlobalNews",
    previewUrl: "https://yogeshpatidar1122.github.io/React_GlobalNews/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
     
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
