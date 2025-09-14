import React from "react";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ExternalLink, Github } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const ProjectShowCase = () => {
  const sectionRef = useRef("");

  useEffect(() => {
    const projectCards = sectionRef.current?.querySelectorAll(".project-card");
    projectCards?.forEach((card, index) => {
      const isEven = index % 2 == 0;

      gsap.fromTo(
        card.querySelectorAll(".project-image"),
        { x: isEven ? -100 : 100, opacity: 0 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 15%",
            toggleActions: " play none none reverse",
          },
        }
      );

      gsap.fromTo(
        card.querySelectorAll(".project-content"),
        { x: isEven ? 100 : -100, opacity: 0 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 15%",
            toggleActions: " play none none reverse",
          },
        }
      );
    });
  }, []);

  const project = [
    {
      title: "Charted Accountent",
      descreption: "Website-A Charted Accountent",
      image: "/CA Image.jfif",
      technology: ["React.js", "CSS", "Boostrap", "Springboot"],

      highlights: [
        "Repo Management",
        "Commit History",
        "Branching",
        "Collaborator Access",
      ],
      github: "https://github.com/nehal76/ca-frontend-vite",
      live: "https://shuaib-ca.netlify.app/",
    },
    {
      title: "Charted Accountent",
      descreption: "Website-A Charted Accountent",
      image: "/Screenshot 2025-08-14 141919.png",
      technology: ["React.js, Boostrap, Springboot"],
      highlights: [
        "Repo Management",
        "Commit History",
        "Branching",
        "Collaborator Access",
      ],
      github: "https://github.com/nehal76/ca-frontend-vite",
      live: "https://shuaib-ca.netlify.app/",
    },
  ];
  return (
    <>
      <section
        id="projects"
        ref={sectionRef}
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6 ">
              Featured Projects
            </h2>
            <p className="text-center text-gray-800 text-xl  mx-auto">
              {" "}
              Real-world applications showcasing full-stack development and
              problem-solving skills
            </p>
          </div>
          <div className=" space-y-32">
            {project.map((project, index) => (
              <div
                key={index}
                className="project-card grid lg:grid-cols-2 gap-12 items-center"
              >
                {index % 2 === 0 ? (
                  <>
                    {/* Image & Links */}
                    <div className="project-image relative group">
                      {/* ...image and links code... */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 sm:h-72 md:h-80 lg:h-[22rem] object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex gap-4">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors duration-200"
                          >
                            <Github className="w-6 h-6 text-gray-900" />
                          </a>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors duration-200"
                          >
                            <ExternalLink className="w-6 h-6 text-gray-900" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Details */}

                    <div className="project-content ">
                      {/* ...details code... */}
                      <h3 className=" font-outfit font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4">
                        {project.title}
                      </h3>
                      <p className="font-inter text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                        {project.descreption}
                      </p>
                      {/* Project Highlights */}
                      <div className="mb-6">
                        <h4 className="font-inter font-semibold text-gray-900 mb-3">
                          Key Features:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center">
                              <div className="w-2 h-2 bg-blue-800 rounded-full  me-3"></div>
                              <span className="font-inter text-gray-700 text-sm">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technology.map((tech, idx) => (
                          <span
                            key={idx}
                            className=" items-center bg-gray-300 text-gray-700 px-3 py-2 rounded-full text-sm font-inter"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {/* Buttons */}
                      <div className="flex flex-wrap gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gray-600 text-white px-6 py-3 rounded-full font-inter font-medium hover:bg-gray-800  transition-colors duration-200"
                        >
                          <Github className="w-4 h-4" />
                          GitHub
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-blue-400 text-white px-6 py-3 rounded-full font-inter font-medium hover:bg-blue-600 transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Details */}
                    <div>
                      {/* ...details code... */}

                      {project.descreption}
                      {project.highlights}
                      {project.technology}
                    </div>

                    {/* Image & Links */}

                    <div>
                      {/* ...image and links code... */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 sm:h-72 md:h-80 lg:h-[22rem] object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex gap-4">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors duration-200"
                          >
                            <Github className="w-6 h-6 text-gray-900" />
                          </a>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors duration-200"
                          >
                            <ExternalLink className="w-6 h-6 text-gray-900" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default ProjectShowCase;
