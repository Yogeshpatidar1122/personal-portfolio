"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next Portfolio Website",
    description: ",Hello and thank you for visiting my personal portfolio. Here, you'll find a curated collection showcasing my skills, experiences, and passion in various domains. As a versatile individual with a commitment to excellence, I've crafted this portfolio to offer you insight into my journey, projects, and contributions.",
    image: '/images/projects/portfolio.png',
    tag: ["All"],
    gitUrl: "https://github.com/Yogeshpatidar1122/personal-portfolio",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "AmazonPro||E-commerce Application",
    description: "AmazonPro is an Ecommerce website clone to purchase the things online. ",
    image: "/images/projects/amazonpro.png",
    tag: ["All"],
    gitUrl: "https://github.com/Yogeshpatidar1122/Next_AmazonPro",
    previewUrl: "https://next-amazon-pro.vercel.app/",
  },
  {
    id: 3,
    title: "RENT N DRIVE ",
    description: "RENT N DRIVE is an website provide facility for rent a car for one day or a week on easily and cheaply.",
    image: "/images/projects/rentndrive.png",
    tag: ["All"],
    gitUrl: "https://github.com/Yogeshpatidar1122/RENT_N_DRIVE_nextapp",
    previewUrl: "https://rent-n-drive-nextapp.vercel.app/",
  },
  {
    id: 4,
    title: "Netflix Clone",
    description: "Netflix clone is based on netflix original app where you can create sign up your account and stream movies and show freely.",
    image: "/images/projects/netflix.png",
    tag: ["All"],
    gitUrl: "/https://github.com/Yogeshpatidar1122/next-netflix-clone",
    previewUrl: "/https://next-netflix-clone-teal.vercel.app/auth",
  },
  {
    id: 5,
    title: "React Global News",
    description: "React global news is an web application where you read different types of news of different genre.",
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
