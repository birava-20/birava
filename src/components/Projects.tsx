"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Smart Home Garden System",
    description:
      "Automated plant care using Raspberry Pi, Python, and environmental sensors (temperature, humidity, soil moisture). Built a mobile companion app with Android Studio.",
    technologies: ["IoT", "Raspberry Pi", "Python", "APIs", "Android Studio"],
    github: null, // Set to null to indicate restricted access
    restricted: true,
  },
  {
    title: "Virtual Fitness Assistant",
    description:
      "Used Python, OpenCV, and MediaPipe to create a virtual assistant that tracks rep count and form accuracy for exercises like squats and curls.",
    technologies: ["Computer Vision", "Python", "AI Tools", "Fitness Tech"],
    github: "https://github.com/birava-20/virtual-fitness-assistant",
    restricted: false,
  },
  {
    title: "Greenhouse Controller",
    description:
      "Wrote advanced C programs to monitor and control greenhouse conditions using Raspberry Pi. Employed tools like Vim and WinSCP for development and secure file transfers.",
    technologies: ["C Programming", "Raspberry Pi", "Embedded Systems"],
    github: "https://github.com/birava-20/raspberry-pi-weather-station",
    restricted: false,
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showMessage, setShowMessage] = useState<string | null>(null);

  const handleProjectClick = (project: typeof projects[0]) => {
    if (project.restricted) {
      setShowMessage(project.title);
      setTimeout(() => setShowMessage(null), 5000);
    }
  };

  return (
    <div id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Projects
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Work
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Here are some of my recent projects that showcase my technical
              skills and problem-solving abilities. Each project demonstrates my
              passion for creating innovative solutions using various
              technologies.
            </p>
          </motion.div>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-start"
            >
              <div className="relative rounded-3xl bg-white p-8 ring-1 ring-gray-200 w-full h-full flex flex-col justify-between hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ease-in-out">
                <AnimatePresence>
                  {showMessage === project.title && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="absolute top-4 left-4 right-4 z-10 rounded-lg bg-gray-900 p-4 text-white text-sm shadow-lg"
                    >
                      This project&apos;s code is not available to share as it is being completed as an academic final year project.
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold leading-8 text-gray-900">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-gray-600">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  {project.github ? (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700 transition-colors"
                    >
                      <FaGithub className="h-4 w-4" />
                      View Code
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleProjectClick(project)}
                      className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700 transition-colors"
                    >
                      <FaGithub className="h-4 w-4" />
                      View Code
                    </button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
