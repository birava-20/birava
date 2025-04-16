"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiMacos,
  SiLinux,
  SiC,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiGooglecloud,
  SiVmware,
  SiGithub,
  SiGit,
  SiJira,
} from "react-icons/si";
import {
  FaHeadset,
  FaNetworkWired,
  FaCloud,
  FaUsers,
  FaWindows,
  FaJava,
  FaTerminal,
  FaMicrosoft,
  FaShare,
  FaCloudDownloadAlt,
  FaServer,
  FaShieldAlt,
  FaCode,
  FaTools,
} from "react-icons/fa";

const skillCategories = [
  {
    title: "IT Support & Operations",
    icon: FaHeadset,
    color: "text-indigo-600",
    skills: [
      { name: "Troubleshooting", icon: FaTools },
      { name: "Remote Desktop Tools", icon: FaShare },
      { name: "ServiceNow", icon: FaMicrosoft },
      { name: "Freshdesk", icon: FaHeadset },
      { name: "System Imaging", icon: FaServer },
      { name: "Patch Management", icon: FaShieldAlt },
    ],
  },
  {
    title: "Operating Systems",
    icon: FaWindows,
    color: "text-blue-600",
    skills: [
      { name: "Windows", icon: FaWindows },
      { name: "macOS", icon: SiMacos },
      { name: "Linux", icon: SiLinux },
      { name: "Unix", icon: FaTerminal },
    ],
  },
  {
    title: "Networking & Security",
    icon: FaNetworkWired,
    color: "text-green-600",
    skills: [
      { name: "VPN", icon: FaShieldAlt },
      { name: "DNS", icon: FaServer },
      { name: "TCP/IP", icon: FaNetworkWired },
      { name: "DHCP", icon: FaServer },
      { name: "VLANs", icon: FaNetworkWired },
      { name: "Firewalls", icon: FaShieldAlt },
      { name: "Active Directory", icon: FaUsers },
      { name: "Group Policies", icon: FaShieldAlt },
    ],
  },
  {
    title: "Scripting & Programming",
    icon: FaCode,
    color: "text-yellow-600",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "C", icon: SiC },
      { name: "SQL", icon: SiMysql },
      { name: "Bash", icon: FaTerminal },
      { name: "PowerShell", icon: FaTerminal },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
    ],
  },
  {
    title: "Cloud & Virtualization",
    icon: FaCloud,
    color: "text-cyan-600",
    skills: [
      { name: "Azure", icon: FaMicrosoft },
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "VMware", icon: SiVmware },
      { name: "SharePoint", icon: FaShare },
      { name: "OneDrive", icon: FaCloudDownloadAlt },
    ],
  },
  {
    title: "Productivity & Collaboration",
    icon: FaUsers,
    color: "text-purple-600",
    skills: [
      { name: "Office 365", icon: FaMicrosoft },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Jira", icon: SiJira },
      { name: "Agile", icon: FaUsers },
      { name: "ITIL", icon: FaTools },
    ],
  },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Technical Skills
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Areas of Expertise
            </p>
          </motion.div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => {
              const CategoryIcon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col rounded-2xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 hover:shadow-lg transition-shadow duration-300"
                >
                  <div
                    className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl ${category.color} bg-opacity-10`}
                  >
                    <CategoryIcon
                      className={`h-10 w-10 ${category.color}`}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-semibold leading-8 text-gray-900 mb-6">
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center gap-3 text-sm leading-6 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                          {SkillIcon && (
                            <SkillIcon
                              className={`h-5 w-5 ${category.color}`}
                            />
                          )}
                          <span>{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
