"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    title: "Customer Service Associate",
    company: "Yogurty's Bubble Tea",
    location: "Vaughan, ON",
    period: "Mar 2023 – Present",
    description:
      "Developed strong people skills through fast-paced service, team coordination, and problem-solving in a high-volume environment.",
  },
  {
    title: "Peer Mentor",
    company: "Humber College",
    location: "Etobicoke, ON",
    period: "Aug 2024 – Dec 2024",
    description:
      "Supported new students with academic and social transitions, organized workshops, and acted as a liaison between students and campus services.",
  },
  {
    title: "Computer Operator",
    company: "SoftTech Computers",
    location: "Khambhat, IN",
    period: "Oct 2021 – Nov 2022",
    description:
      "Managed software updates, data entry, and system troubleshooting for daily operations. Worked closely with users and vendors to resolve issues and ensure uptime.",
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Experience
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Professional Journey
            </p>
          </motion.div>
        </div>

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-600"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 relative"
            >
              <div
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                  }`}
                >
                  <h3 className="text-xl font-bold text-gray-900">
                    {exp.title}
                  </h3>
                  <p className="text-indigo-600 font-medium">{exp.company}</p>
                  <p className="text-gray-600 text-sm">
                    {exp.location} | {exp.period}
                  </p>
                  <p className="mt-2 text-gray-600">{exp.description}</p>
                </div>

                {/* Timeline dot */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-6 h-6 rounded-full bg-indigo-600 border-4 border-white shadow-md z-10"></div>
                </div>

                {/* Empty space for alignment */}
                <div className="w-5/12"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
